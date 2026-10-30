import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export const ThreeHeroCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Scene
    const scene = new THREE.Scene()

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    )
    camera.position.z = 6

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x0a0f1c, 2.0)
    scene.add(ambientLight)

    const saffronLight = new THREE.PointLight(0xffb347, 3, 16)
    saffronLight.position.set(4, 3, 4)
    scene.add(saffronLight)

    const aquaLight = new THREE.PointLight(0x4fd1c5, 2.5, 14)
    aquaLight.position.set(-4, -2, 3)
    scene.add(aquaLight)

    const coralLight = new THREE.DirectionalLight(0xff6b5e, 1.8)
    coralLight.position.set(0, -4, 2)
    scene.add(coralLight)

    const group = new THREE.Group()
    scene.add(group)

    // 1. Sleek Torus Knot wireframe in saffron/gold
    const knotGeometry = new THREE.TorusKnotGeometry(1.2, 0.28, 120, 24, 2, 3)
    const knotMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x1a2436,
      emissive: 0x0d1b2a,
      roughness: 0.2,
      metalness: 0.9,
      wireframe: false,
      clearcoat: 0.8,
    })
    const torusKnot = new THREE.Mesh(knotGeometry, knotMaterial)
    torusKnot.position.set(2.8, 0.2, -1)
    torusKnot.scale.set(0.75, 0.75, 0.75)
    group.add(torusKnot)

    // Wireframe accent around knot
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0xffb347,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    })
    const wireKnot = new THREE.Mesh(knotGeometry, wireMaterial)
    wireKnot.position.copy(torusKnot.position)
    wireKnot.scale.set(0.77, 0.77, 0.77)
    group.add(wireKnot)

    // 2. Geometric Icosahedron with aqua wireframe
    const icoGeometry = new THREE.IcosahedronGeometry(0.7, 1)
    const icoMaterial = new THREE.MeshBasicMaterial({
      color: 0x4fd1c5,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    })
    const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial)
    icosahedron.position.set(-3.2, 1.4, 0.2)
    group.add(icosahedron)

    // 3. Particles field
    const particleCount = 200
    const particleGeometry = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 18
      particlePositions[i + 1] = (Math.random() - 0.5) * 14
      particlePositions[i + 2] = (Math.random() - 0.5) * 12
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xfff4e0,
      size: 0.035,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    })
    const particles = new THREE.Points(particleGeometry, particleMaterial)
    group.add(particles)

    // Mouse coordinates tracking with damping
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2
      targetY = (e.clientY / window.innerHeight - 0.5) * 2
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    const handleResize = () => {
      if (!container) return
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    let animId: number
    const clock = new THREE.Clock()

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      mouseX += (targetX - mouseX) * 0.04
      mouseY += (targetY - mouseY) * 0.04

      torusKnot.rotation.x = t * 0.18 + mouseY * 0.4
      torusKnot.rotation.y = t * 0.22 + mouseX * 0.4
      torusKnot.position.y = 0.2 + Math.sin(t * 0.7) * 0.12

      wireKnot.rotation.copy(torusKnot.rotation)
      wireKnot.position.copy(torusKnot.position)

      icosahedron.rotation.x = -t * 0.25
      icosahedron.rotation.y = t * 0.25
      icosahedron.position.y = 1.4 + Math.cos(t * 0.9) * 0.12

      group.rotation.y = mouseX * 0.15
      group.rotation.x = -mouseY * 0.12

      particles.rotation.y = t * 0.015

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
      knotGeometry.dispose()
      knotMaterial.dispose()
      wireMaterial.dispose()
      icoGeometry.dispose()
      icoMaterial.dispose()
      particleGeometry.dispose()
      particleMaterial.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-75"
      aria-hidden="true"
    />
  )
}

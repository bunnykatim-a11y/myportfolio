import type {
  Project,
  SkillGroup,
  SkillItem,
  EducationItem,
  Certificate,
  CertificationItem,
  AchievementItem,
} from '../types'

export const personalInfo = {
  name: 'BUNNY',
  firstName: 'BUNNY',
  lastName: 'DEVELOPER',
  role: 'Software Engineer & AI Enthusiast',
  eyebrow: "HELLO, I'M",
  email: 'bunny.kati.m@gmail.com',
  github: 'https://github.com/bunnykatim-a11y',
  linkedin: 'https://www.linkedin.com/in/bunny-kati-6933162a3/',
  tagline: {
    before: 'I build systems that',
    phrases: [
      'watch, decide and hold up under load',
      'turn generative AI into production apps',
      'orchestrate autonomous multi-agent graphs',
      'index large-scale data with sub-millisecond latency'
    ],
    after: 'with precision and craft',
    focus: 'Software engineer building computer vision pipelines, high-throughput MERN systems, and resilient multi-agent GenAI architectures.'
  },
  bio: `I'm a full-stack engineer and AI developer who loves turning difficult systems engineering challenges into fast, tactile, and reliable digital products. From building in-memory inverted search engines and Pinecone-backed RAG pipelines to fine-tuning multimodal vision systems and LangGraph agent architectures, I focus on what holds up under load.`,
  dayToDay: [
    'Architecting production full-stack systems with React, TypeScript, Node.js, and MongoDB',
    'Developing multimodal AI pipelines using Gemini Vision, OpenAI API, and Pinecone vector search',
    'Orchestrating agent workflows with LangChain, LangGraph, MCP, and human-in-the-loop gates',
    'Enforcing strict OAuth 2.0, JWT token rotation, and defense-in-depth API security'
  ],
  outside: [
    'Exploring WebGL & 3D graphics',
    'Open source tooling',
    'Deep learning research',
    'Chess strategy',
    'Cybersecurity capture-the-flag'
  ]
}

export const statsList: { value: number; suffix: string; decimals: number; label: string }[] = []

export const marqueeWords = [
  'React 19',
  'Node.js',
  'Express',
  'MongoDB',
  'TypeScript',
  'LangGraph',
  'Multi-Agent',
  'Gemini Vision',
  'Pinecone RAG',
  'OAuth 2.0',
  'Docker',
  'MCP',
  'LangSmith',
  'Langfuse',
  'FastAPI',
  'Tailwind CSS'
]

export const projectsData: Project[] = [
  {
    slug: 'order-management-system',
    title: 'Order Management System',
    kind: 'Enterprise Full Stack / MERN',
    date: '2026',
    summary: 'A production-grade order processing system for fulfillment lifecycle, customer invoicing, atomic inventory control, and live analytics.',
    stat: {
      value: 'Atomic',
      label: 'safe MongoDB inventory transactions'
    },
    stats: [
      { value: 'REST API', label: 'built on Express and Node.js' },
      { value: '0 Oversell', label: 'concurrency-locked stock updates' },
      { value: 'Real-time', label: 'sales, dispatch and revenue charts' }
    ],
    story: [
      'Created to manage demanding order fulfillment cycles without inventory race conditions or delayed invoice generation.',
      'Implements atomic database updates in MongoDB to guarantee stock integrity during concurrent checkout spikes.',
      'Features a rich administrative dashboard with order tracking, invoice generation, customer management, and sales reporting.'
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API', 'Material UI'],
    repo: 'https://github.com/bunny/order-management-system',
    demo: 'https://order-management-seven-indol.vercel.app/',
    accent: 'coral',
    featured: true,
    image: '/assets/proj-order-management.png'
  },
  {
    slug: 'legal-genie',
    title: 'Legal Genie',
    kind: 'Gen AI & Legal Intelligence',
    date: '2026',
    summary: 'An AI-powered legal research platform offering semantic case law search, automated case briefs, and intelligent contract analysis.',
    stat: {
      value: 'Semantic',
      label: 'case law precedent discovery'
    },
    stats: [
      { value: '100%', label: 'automated case brief synthesis' },
      { value: 'OpenAI', label: 'context-aware clause extraction' },
      { value: 'MERN', label: 'fullstack high-throughput API' }
    ],
    story: [
      'Legal research requires sifting through hundreds of pages of jurisprudence. Legal Genie empowers legal practitioners to search case law semantically rather than relying strictly on exact keyword matches.',
      'The system coordinates with large language models to generate structured, citation-linked case briefs, extract key liability clauses, and identify conflicting stipulations in contracts.',
      'Constructed on a clean MERN architecture (MongoDB, Express, React, Node.js) with strict zod schema validations, token authorization, and rate limiting to protect API throughput.',
      'Features a live client interface with instantaneous search indexing and automated brief downloads.'
    ],
    tech: ['Gen AI', 'OpenAI API', 'React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    repo: 'https://github.com/bunny/legal-genie',
    demo: 'https://legal-genie-six.vercel.app/',
    accent: 'saffron',
    featured: true,
    image: '/assets/proj-legal-genie.png'
  },
  {
    slug: 'agrotech',
    title: 'Agrotech AI',
    kind: 'Multimodal AI & AgriTech RAG',
    date: '2026',
    summary: 'Agricultural intelligence featuring multimodal Gemini Vision crop disease diagnosis, Pinecone vector RAG retrieval, and subsidy matching.',
    stat: {
      value: 'Gemini Vision',
      label: 'multimodal crop pathogen detection'
    },
    stats: [
      { value: 'Pinecone', label: 'vector database indexing agronomic manuals' },
      { value: 'RAG', label: 'retrieval pipeline preventing hallucinated cures' },
      { value: 'Instant', label: 'camera photo diagnosis and treatment plans' }
    ],
    story: [
      'Crop diseases can decimate seasonal harvests if not caught within hours. Agrotech AI gives cultivators immediate expert diagnosis by simply taking a field photograph with a smartphone camera.',
      'A multimodal Gemini Vision pipeline inspects foliage images for blight, rust, leaf spots, and nutrient deficiencies.',
      'A Pinecone vector database RAG pipeline retrieves verified scientific agronomy documentation, grounding all recommendations in peer-reviewed agricultural science.',
      'Includes localized market price trends and demographic matching for qualifying government agricultural schemes.'
    ],
    tech: ['Gen AI', 'Gemini Vision AI', 'Pinecone RAG', 'React', 'TypeScript', 'Node.js', 'Vector Search', 'Tailwind CSS'],
    repo: 'https://github.com/bunny/agrotech',
    demo: 'https://agrotech-git-main-bunnykati-2302s-projects.vercel.app/',
    accent: 'aqua',
    featured: true,
    image: '/assets/proj-agrotech.png'
  },
  {
    slug: 'shopmate',
    title: 'ShopMate',
    kind: 'AI E-Commerce & Shopping Assistant',
    date: '2026',
    summary: 'An intelligent full-stack e-commerce platform featuring semantic vector product discovery, conversational AI shopping assistant, multimodal product generation, and secure Google SSO.',
    stat: {
      value: 'Semantic AI',
      label: 'conversational shopping & search'
    },
    stats: [
      { value: 'AI Chatbot', label: 'context-aware product recommendations' },
      { value: 'Full Stack', label: 'React, Express REST API & MongoDB' },
      { value: 'OAuth 2.0', label: 'Google SSO & token rotation on Render' }
    ],
    story: [
      'ShopMate is a modern full-stack e-commerce web platform engineered to elevate digital retail through natural language search and embedded conversational intelligence.',
      'Integrates semantic search endpoints that map user intent directly to product catalog vectors rather than relying solely on rigid keyword matching.',
      'Features an interactive AI shopping assistant chatbot that helps shoppers discover products, compare features, and receive personalized recommendations in real time.',
      'Provides full shopping cart management, authenticated admin workflows with multimodal AI product description generation from uploaded photos, and secure Google OAuth 2.0 authentication with JWT token rotation.'
    ],
    tech: ['Gen AI', 'AI Chatbot', 'Semantic Search', 'React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Google OAuth'],
    repo: 'https://github.com/bunny/shopmate',
    demo: 'https://shopmate-ruby.vercel.app/',
    accent: 'saffron',
    featured: true,
    image: '/assets/proj-shopmate.png'
  }
]

export const skillGroupsData: SkillGroup[] = [
  {
    id: 'mern',
    name: 'MERN Stack',
    subtitle: 'Full-stack JavaScript/TypeScript engineering with resilient modular architectures.',
    color: 'saffron',
    glyph: '✦',
    skills: [
      {
        id: 'react',
        name: 'React 19',
        category: 'mern',
        categoryName: 'MERN Stack',
        proficiency: 'Production Expert',
        proficiencyPercent: 96,
        summary: 'Component state machines, concurrent rendering, custom hooks, context isolation, and micro-interaction UX.',
        highlightBadge: 'Virtual DOM & Hooks',
        color: 'saffron',
        glyph: '✦',
        tags: ['Hooks', 'Context API', 'Concurrent Mode', 'Vite', 'State Machines']
      },
      {
        id: 'typescript',
        name: 'TypeScript',
        category: 'mern',
        categoryName: 'MERN Stack',
        proficiency: 'Production Expert',
        proficiencyPercent: 94,
        summary: 'Strict end-to-end type safety, generic constraints, mapped types, utility types, and runtime zod validation.',
        highlightBadge: 'Strict Type Systems',
        color: 'saffron',
        glyph: '✦',
        tags: ['Generics', 'Utility Types', 'Zod Schemas', 'Fullstack Contracts']
      },
      {
        id: 'javascript',
        name: 'JavaScript (ESNext)',
        category: 'mern',
        categoryName: 'MERN Stack',
        proficiency: 'Production Expert',
        proficiencyPercent: 96,
        summary: 'Deep event loop mechanics, async pipelines, generators, Web Audio API, Canvas, and ES2026 modern syntax.',
        highlightBadge: 'Async Pipelines & DOM',
        color: 'saffron',
        glyph: '✦',
        tags: ['Event Loop', 'Async/Await', 'Streams', 'Web APIs', 'Closures']
      },
      {
        id: 'nodejs',
        name: 'Node.js',
        category: 'mern',
        categoryName: 'MERN Stack',
        proficiency: 'Production Expert',
        proficiencyPercent: 92,
        summary: 'Non-blocking I/O runtime, event emitters, stream processing, worker threads, and scalable microservice services.',
        highlightBadge: 'Event-Driven Runtime',
        color: 'saffron',
        glyph: '✦',
        tags: ['Event Loop', 'Worker Threads', 'Streams', 'File I/O', 'Clustering']
      },
      {
        id: 'express',
        name: 'Express.js',
        category: 'mern',
        categoryName: 'MERN Stack',
        proficiency: 'Production Expert',
        proficiencyPercent: 94,
        summary: 'Middleware orchestrations, error barriers, global rate limiters, CORS policies, and clean controller routing.',
        highlightBadge: 'Middleware Pipelines',
        color: 'saffron',
        glyph: '✦',
        tags: ['Middleware Chains', 'Error Boundaries', 'Rate Limiting', 'Routing']
      },
      {
        id: 'mongodb',
        name: 'MongoDB & Mongoose',
        category: 'mern',
        categoryName: 'MERN Stack',
        proficiency: 'Production Expert',
        proficiencyPercent: 92,
        summary: 'Complex aggregation pipelines, compound indices, atomic transactions, schema validation, and replica sets.',
        highlightBadge: 'Aggregations & ACID',
        color: 'saffron',
        glyph: '✦',
        tags: ['Aggregation Pipeline', 'Compound Indexing', 'Transactions', 'Schemas']
      },
      {
        id: 'rest-apis',
        name: 'REST APIs',
        category: 'mern',
        categoryName: 'MERN Stack',
        proficiency: 'Production Expert',
        proficiencyPercent: 95,
        summary: 'Resource-oriented idempotent endpoints, HTTP status semantics, payload sanitization, pagination, and OpenAPI specs.',
        highlightBadge: 'API Architecture',
        color: 'saffron',
        glyph: '✦',
        tags: ['Idempotency', 'Status Codes', 'Pagination', 'HATEOAS', 'OpenAPI']
      }
    ]
  },
  {
    id: 'auth',
    name: 'Authentication & Security',
    subtitle: 'Defense-in-depth security architectures protecting identities, sessions, and data payloads.',
    color: 'coral',
    glyph: '◆',
    skills: [
      {
        id: 'oauth2',
        name: 'OAuth 2.0 & SSO',
        category: 'auth',
        categoryName: 'Auth & Security',
        proficiency: 'Advanced Architecture',
        proficiencyPercent: 92,
        summary: 'Authorization code grants with PKCE, OpenID Connect (OIDC), third-party federated social logins (Google, GitHub).',
        highlightBadge: 'PKCE & OIDC Flows',
        color: 'coral',
        glyph: '◆',
        tags: ['Auth Code Flow', 'PKCE', 'Google SSO', 'GitHub SSO', 'OIDC']
      },
      {
        id: 'jwt',
        name: 'JWT (JSON Web Tokens)',
        category: 'auth',
        categoryName: 'Auth & Security',
        proficiency: 'Production Expert',
        proficiencyPercent: 95,
        summary: 'Asymmetric signing (RS256/ES256), stateless token verification, payload hardening, and replay attack prevention.',
        highlightBadge: 'Asymmetric Signatures',
        color: 'coral',
        glyph: '◆',
        tags: ['RS256', 'Claim Validation', 'Payload Encryption', 'Stateless Auth']
      },
      {
        id: 'token-rotation',
        name: 'Access & Refresh Tokens',
        category: 'auth',
        categoryName: 'Auth & Security',
        proficiency: 'Advanced Architecture',
        proficiencyPercent: 93,
        summary: 'Sliding session expiration, silent token refreshes via httpOnly secure SameSite cookies, and token family revocation.',
        highlightBadge: 'Silent Rotation & Revocation',
        color: 'coral',
        glyph: '◆',
        tags: ['Silent Refresh', 'httpOnly Cookies', 'Revocation Lists', 'Family Detection']
      },
      {
        id: 'sessions',
        name: 'Session Management',
        category: 'auth',
        categoryName: 'Auth & Security',
        proficiency: 'Production Expert',
        proficiencyPercent: 90,
        summary: 'Distributed session stores using Redis and MongoDB, session fixation mitigation, and idle timeout invalidation.',
        highlightBadge: 'Distributed Redis Stores',
        color: 'coral',
        glyph: '◆',
        tags: ['Redis Store', 'Session Fixation', 'Inactivity Purge', 'Cookie Encryption']
      },
      {
        id: 'rbac',
        name: 'RBAC (Role-Based Access)',
        category: 'auth',
        categoryName: 'Auth & Security',
        proficiency: 'Production Expert',
        proficiencyPercent: 94,
        summary: 'Hierarchical role matrices, granular permission bits, dynamic resource policies, and multi-tenant scoping.',
        highlightBadge: 'Hierarchical Permissions',
        color: 'coral',
        glyph: '◆',
        tags: ['Role Matrices', 'Permission Bits', 'Multi-Tenancy', 'Dynamic Gates']
      },
      {
        id: 'authorization',
        name: 'Authorization Guards',
        category: 'auth',
        categoryName: 'Auth & Security',
        proficiency: 'Production Expert',
        proficiencyPercent: 93,
        summary: 'Context-aware middleware enforcement, resource ownership verification, and scoped operation guards.',
        highlightBadge: 'Resource Ownership Gates',
        color: 'coral',
        glyph: '◆',
        tags: ['Route Guards', 'Attribute Access Control', 'Ownership Checks', 'Middleware']
      },
      {
        id: 'api-security',
        name: 'API Security & Hardening',
        category: 'auth',
        categoryName: 'Auth & Security',
        proficiency: 'Production Expert',
        proficiencyPercent: 92,
        summary: 'Helmet security headers, strict CSP policies, CSRF double-submit cookies, SQL/NoSQL injection defenses, and rate limiting.',
        highlightBadge: 'Helmet, CSP & Defense',
        color: 'coral',
        glyph: '◆',
        tags: ['Helmet', 'CSP', 'CSRF Protection', 'Injection Sanitization', 'Rate Limits']
      }
    ]
  },
  {
    id: 'genai',
    name: 'Generative AI',
    subtitle: 'Foundation model integration, prompt engineering, and deterministic function execution.',
    color: 'saffron',
    glyph: '✿',
    skills: [
      {
        id: 'gemini-api',
        name: 'Gemini Models & Vision',
        category: 'genai',
        categoryName: 'Generative AI',
        proficiency: 'Specialist',
        proficiencyPercent: 95,
        summary: 'Multimodal input parsing (images, PDFs, audio), long context reasoning (1M+ tokens), and structured system prompts.',
        highlightBadge: 'Multimodal Vision AI',
        color: 'saffron',
        glyph: '✿',
        tags: ['Gemini 1.5 Pro', 'Multimodal Vision', 'Context Caching', 'Few-Shot']
      },
      {
        id: 'openai-api',
        name: 'OpenAI APIs',
        category: 'genai',
        categoryName: 'Generative AI',
        proficiency: 'Production Expert',
        proficiencyPercent: 94,
        summary: 'GPT-4o/o3-mini integration, streaming responses (SSE), temperature tuning, reasoning effort calibration, and token budgeting.',
        highlightBadge: 'GPT-4o & Streaming SSE',
        color: 'saffron',
        glyph: '✿',
        tags: ['GPT-4o', 'Server-Sent Events', 'System Personas', 'Token Optimization']
      },
      {
        id: 'prompt-eng',
        name: 'Prompt Engineering',
        category: 'genai',
        categoryName: 'Generative AI',
        proficiency: 'Production Expert',
        proficiencyPercent: 96,
        summary: 'Few-shot exemplar structuring, Chain-of-Thought (CoT), decomposition prompting, and meta-prompt optimization.',
        highlightBadge: 'Chain-of-Thought (CoT)',
        color: 'saffron',
        glyph: '✿',
        tags: ['Few-Shot', 'Chain-of-Thought', 'Decomposition', 'Persona Steering']
      },
      {
        id: 'embeddings',
        name: 'Embeddings & Vectors',
        category: 'genai',
        categoryName: 'Generative AI',
        proficiency: 'Production Expert',
        proficiencyPercent: 93,
        summary: 'Dense vector representations (text-embedding-3, Gemini embeddings), cosine similarity, and dimensionality reduction.',
        highlightBadge: 'Dense Vector Spaces',
        color: 'saffron',
        glyph: '✿',
        tags: ['Cosine Similarity', 'Dense Vectors', 'Dimension Reduction', 'Normalization']
      },
      {
        id: 'function-calling',
        name: 'Function Calling',
        category: 'genai',
        categoryName: 'Generative AI',
        proficiency: 'Advanced Architecture',
        proficiencyPercent: 95,
        summary: 'Declarative JSON schema definitions for tools, deterministic multi-tool invocation, and recursive function resolution loops.',
        highlightBadge: 'Tool Calling Loops',
        color: 'saffron',
        glyph: '✿',
        tags: ['Tool Declarations', 'JSON Schemas', 'Execution Loops', 'Recursive Dispatch']
      },
      {
        id: 'structured-outputs',
        name: 'Structured Outputs',
        category: 'genai',
        categoryName: 'Generative AI',
        proficiency: 'Production Expert',
        proficiencyPercent: 96,
        summary: 'Strict schema adherence guaranteed by Zod and Pydantic grammars, JSON mode, and robust fallback error correction parsers.',
        highlightBadge: 'Zod & Schema Enforcement',
        color: 'saffron',
        glyph: '✿',
        tags: ['Zod Validation', 'Pydantic Grammars', 'JSON Mode', 'AST Fallbacks']
      }
    ]
  },
  {
    id: 'advanced-genai',
    name: 'Advanced GenAI & Agents',
    subtitle: 'RAG pipelines, stateful graph architectures, multi-agent swarms, and human-in-the-loop safety.',
    color: 'aqua',
    glyph: '▲',
    skills: [
      {
        id: 'rag',
        name: 'RAG (Retrieval-Augmented Gen)',
        category: 'advanced-genai',
        categoryName: 'Advanced GenAI',
        proficiency: 'Specialist',
        proficiencyPercent: 95,
        summary: 'Advanced chunking strategies (semantic, recursive, hierarchical), contextual retrieval, query rewriting, and reranking.',
        highlightBadge: 'Hybrid & Multi-Stage RAG',
        color: 'aqua',
        glyph: '▲',
        tags: ['Semantic Chunking', 'Hybrid Search', 'Query Rewriting', 'Reranking']
      },
      {
        id: 'vector-dbs',
        name: 'Vector Databases',
        category: 'advanced-genai',
        categoryName: 'Advanced GenAI',
        proficiency: 'Production Expert',
        proficiencyPercent: 94,
        summary: 'Pinecone, ChromaDB, and Milvus index architectures, HNSW indexing, metadata filtering, and high-concurrency queries.',
        highlightBadge: 'Pinecone & ChromaDB HNSW',
        color: 'aqua',
        glyph: '▲',
        tags: ['Pinecone', 'ChromaDB', 'HNSW Graph', 'Metadata Filtering', 'Namespaces']
      },
      {
        id: 'langchain',
        name: 'LangChain',
        category: 'advanced-genai',
        categoryName: 'Advanced GenAI',
        proficiency: 'Production Expert',
        proficiencyPercent: 93,
        summary: 'Document loaders, semantic splitters, LCEL runnable expressions, tool bindings, and structured output chains.',
        highlightBadge: 'LCEL Runnable Pipelines',
        color: 'aqua',
        glyph: '▲',
        tags: ['LCEL', 'Document Loaders', 'Text Splitters', 'Output Parsers']
      },
      {
        id: 'langgraph',
        name: 'LangGraph',
        category: 'advanced-genai',
        categoryName: 'Advanced GenAI',
        proficiency: 'Specialist',
        proficiencyPercent: 94,
        summary: 'Stateful, multi-actor cyclic graphs, conditional edge branching, state checkpoints, and persistent time-travel debugging.',
        highlightBadge: 'Stateful Cyclic Graphs',
        color: 'aqua',
        glyph: '▲',
        tags: ['StateGraph', 'Conditional Edges', 'Checkpointers', 'Time-Travel']
      },
      {
        id: 'ai-agents',
        name: 'Autonomous AI Agents',
        category: 'advanced-genai',
        categoryName: 'Advanced GenAI',
        proficiency: 'Specialist',
        proficiencyPercent: 93,
        summary: 'ReAct reasoning loops, Plan-and-Solve architectures, dynamic tool selection, and autonomous self-correction iterations.',
        highlightBadge: 'ReAct & Goal Planning',
        color: 'aqua',
        glyph: '▲',
        tags: ['ReAct Loops', 'Plan-and-Solve', 'Self-Correction', 'Tool Selection']
      },
      {
        id: 'multi-agent',
        name: 'Multi-Agent Orchestration',
        category: 'advanced-genai',
        categoryName: 'Advanced GenAI',
        proficiency: 'Advanced Architecture',
        proficiencyPercent: 91,
        summary: 'Supervisor-worker patterns, hierarchical agent networks, consensus voting, and decentralized message bus swarms.',
        highlightBadge: 'Supervisor-Worker Hierarchies',
        color: 'aqua',
        glyph: '▲',
        tags: ['Supervisor Patterns', 'Consensus Voting', 'Agent Swarms', 'Delegation']
      },
      {
        id: 'mcp',
        name: 'MCP (Model Context Protocol)',
        category: 'advanced-genai',
        categoryName: 'Advanced GenAI',
        proficiency: 'Specialist',
        proficiencyPercent: 92,
        summary: 'Standardized client/server specifications connecting LLMs to external data sources, local dev tools, and secure APIs.',
        highlightBadge: 'Anthropic Protocol Spec',
        color: 'aqua',
        glyph: '▲',
        tags: ['MCP Clients', 'MCP Servers', 'JSON-RPC', 'Context Integration']
      },
      {
        id: 'a2a',
        name: 'A2A (Agent-to-Agent)',
        category: 'advanced-genai',
        categoryName: 'Advanced GenAI',
        proficiency: 'Advanced Architecture',
        proficiencyPercent: 90,
        summary: 'Inter-agent communication protocols, task handoffs, structured message passing, and collaborative problem negotiation.',
        highlightBadge: 'Inter-Agent Message Bus',
        color: 'aqua',
        glyph: '▲',
        tags: ['Agent Negotiation', 'Handoff Protocols', 'Message Schemas', 'Shared Memory']
      },
      {
        id: 'agent-memory',
        name: 'Agent Memory Architectures',
        category: 'advanced-genai',
        categoryName: 'Advanced GenAI',
        proficiency: 'Advanced Architecture',
        proficiencyPercent: 93,
        summary: 'Multi-tiered memory: ephemeral sliding window, episodic conversation buffers, and long-term semantic knowledge stores.',
        highlightBadge: 'Episodic & Semantic Memory',
        color: 'aqua',
        glyph: '▲',
        tags: ['Sliding Windows', 'Episodic Buffers', 'Semantic Recall', 'Fact Extraction']
      },
      {
        id: 'hitl',
        name: 'Human-in-the-Loop (HITL)',
        category: 'advanced-genai',
        categoryName: 'Advanced GenAI',
        proficiency: 'Production Expert',
        proficiencyPercent: 94,
        summary: 'Approval gates for high-risk tool operations, interrupt points in graph execution, and interactive user reviews.',
        highlightBadge: 'Safety Approval Gates',
        color: 'aqua',
        glyph: '▲',
        tags: ['Interrupt Gates', 'Action Approvals', 'State Modification', 'Safety Checks']
      }
    ]
  },
  {
    id: 'ai-eng',
    name: 'AI Engineering & Reliability',
    subtitle: 'Rigor, evaluation metrics, guardrails, and production observability for non-deterministic systems.',
    color: 'coral',
    glyph: '◆',
    skills: [
      {
        id: 'rag-eval',
        name: 'RAG Evaluation (Ragas)',
        category: 'ai-eng',
        categoryName: 'AI Engineering',
        proficiency: 'Specialist',
        proficiencyPercent: 92,
        summary: 'Automated evaluation pipelines measuring faithfulness, answer relevancy, context recall, and hallucination rates.',
        highlightBadge: 'Faithfulness & Recall Scoring',
        color: 'coral',
        glyph: '◆',
        tags: ['Ragas', 'Faithfulness', 'Context Precision', 'Hallucination Checks']
      },
      {
        id: 'langsmith',
        name: 'LangSmith Observability',
        category: 'ai-eng',
        categoryName: 'AI Engineering',
        proficiency: 'Production Expert',
        proficiencyPercent: 94,
        summary: 'End-to-end execution tracing, latency visualization per step, token usage analytics, prompt versioning, and test suites.',
        highlightBadge: 'Deep Execution Tracing',
        color: 'coral',
        glyph: '◆',
        tags: ['Trace Spans', 'Latency Profiling', 'Prompt Versioning', 'Regression Tests']
      },
      {
        id: 'langfuse',
        name: 'Langfuse LLM Telemetry',
        category: 'ai-eng',
        categoryName: 'AI Engineering',
        proficiency: 'Production Expert',
        proficiencyPercent: 91,
        summary: 'Open-source LLM metrics, token cost attribution per feature, user score tracking, and automated generation logging.',
        highlightBadge: 'Open-Source Observability',
        color: 'coral',
        glyph: '◆',
        tags: ['Cost Attribution', 'Generation Logs', 'User Feedback Loops', 'Telemetry']
      },
      {
        id: 'guardrails',
        name: 'Guardrails & Moderation',
        category: 'ai-eng',
        categoryName: 'AI Engineering',
        proficiency: 'Advanced Architecture',
        proficiencyPercent: 93,
        summary: 'Input/output validation layers, toxicity filtering, PII masking, topic enforcement, and hallucination inhibitors.',
        highlightBadge: 'PII Masking & Safety Boundaries',
        color: 'coral',
        glyph: '◆',
        tags: ['PII Masking', 'Toxicity Filters', 'Topic Boundaries', 'Guardrails AI']
      },
      {
        id: 'prompt-injection',
        name: 'Prompt-Injection Defense',
        category: 'ai-eng',
        categoryName: 'AI Engineering',
        proficiency: 'Advanced Architecture',
        proficiencyPercent: 94,
        summary: 'Mitigation against direct/indirect jailbreaks, delimiter isolation, canary tokens, and dual-LLM evaluator patterns.',
        highlightBadge: 'Indirect Injection Mitigation',
        color: 'coral',
        glyph: '◆',
        tags: ['Delimiter Isolation', 'Canary Tokens', 'Jailbreak Filters', 'Dual-LLM Checks']
      }
    ]
  },
  {
    id: 'devops',
    name: 'DevOps & Testing Tools',
    subtitle: 'Containerization, continuous integration, cloud deployments, and automated testing suites.',
    color: 'cream',
    glyph: '☁',
    skills: [
      {
        id: 'git',
        name: 'Git Version Control',
        category: 'devops',
        categoryName: 'DevOps & Tools',
        proficiency: 'Production Expert',
        proficiencyPercent: 96,
        summary: 'Interactive rebasing, bisect debugging, atomic commit hygiene, submodule management, and clean tree histories.',
        highlightBadge: 'Advanced Git & Rebasing',
        color: 'cream',
        glyph: '☁',
        tags: ['Interactive Rebase', 'Bisect Debugging', 'Merge Strategies', 'Submodules']
      },
      {
        id: 'github',
        name: 'GitHub Workflows',
        category: 'devops',
        categoryName: 'DevOps & Tools',
        proficiency: 'Production Expert',
        proficiencyPercent: 95,
        summary: 'Branch protection policies, PR review workflows, release tags, secret management, and project kanban tracking.',
        highlightBadge: 'PR Reviews & Security',
        color: 'cream',
        glyph: '☁',
        tags: ['Branch Protection', 'Code Reviews', 'Secret Vaults', 'Release Tags']
      },
      {
        id: 'docker',
        name: 'Docker & Containers',
        category: 'devops',
        categoryName: 'DevOps & Tools',
        proficiency: 'Production Expert',
        proficiencyPercent: 93,
        summary: 'Multi-stage Docker builds, Alpine minimal images, docker-compose multi-service environments, and volume mounts.',
        highlightBadge: 'Multi-Stage Image Builds',
        color: 'cream',
        glyph: '☁',
        tags: ['Multi-Stage', 'Docker Compose', 'Network Isolation', 'Alpine Images']
      },
      {
        id: 'cicd',
        name: 'CI/CD Automation',
        category: 'devops',
        categoryName: 'DevOps & Tools',
        proficiency: 'Production Expert',
        proficiencyPercent: 92,
        summary: 'GitHub Actions pipelines, automated test runs, linting checks, Docker image pushes, and continuous deployment.',
        highlightBadge: 'GitHub Actions Pipelines',
        color: 'cream',
        glyph: '☁',
        tags: ['GitHub Actions', 'Test Gates', 'Automated Deploys', 'Lint Runners']
      },
      {
        id: 'vercel',
        name: 'Vercel Edge Platform',
        category: 'devops',
        categoryName: 'DevOps & Tools',
        proficiency: 'Production Expert',
        proficiencyPercent: 96,
        summary: 'Edge middleware, serverless function routing, instant preview deployments, and global CDN edge caching.',
        highlightBadge: 'Edge Functions & CDN',
        color: 'cream',
        glyph: '☁',
        tags: ['Edge Routing', 'Serverless Functions', 'Preview Deployments', 'CDN']
      },
      {
        id: 'render',
        name: 'Render Cloud',
        category: 'devops',
        categoryName: 'DevOps & Tools',
        proficiency: 'Production Expert',
        proficiencyPercent: 91,
        summary: 'Managed web service deployment, background worker provisioning, environment variable secrets, and persistent disks.',
        highlightBadge: 'Managed Web Services',
        color: 'cream',
        glyph: '☁',
        tags: ['Web Services', 'Background Workers', 'Zero-Downtime', 'SSL Automation']
      },
      {
        id: 'postman',
        name: 'Postman API Suite',
        category: 'devops',
        categoryName: 'DevOps & Tools',
        proficiency: 'Production Expert',
        proficiencyPercent: 94,
        summary: 'Environment variable orchestration, automated test script assertion chains, collection runners, and mock servers.',
        highlightBadge: 'Test Collections & Mocks',
        color: 'cream',
        glyph: '☁',
        tags: ['Collection Runners', 'Test Scripts', 'Mock Servers', 'Environment Vars']
      },
      {
        id: 'jest',
        name: 'Jest & Supertest',
        category: 'devops',
        categoryName: 'DevOps & Tools',
        proficiency: 'Production Expert',
        proficiencyPercent: 93,
        summary: 'Unit test suites, snapshot testing, asynchronous integration tests with Supertest against live Express apps.',
        highlightBadge: 'Integration & Mock Testing',
        color: 'cream',
        glyph: '☁',
        tags: ['Unit Testing', 'Supertest', 'Mock Providers', 'Coverage Reports']
      }
    ]
  }
]

// Flatten all skills for quick lookups & 3D tag sphere
export const allSkillsList: SkillItem[] = skillGroupsData.flatMap((group) => group.skills)

export const educationList: EducationItem[] = [
  {
    id: 'schooling',
    stage: 'Schooling',
    institution: 'Z.P. High School',
    location: 'Kagupadu',
    level: 'School Education',
  },
  {
    id: 'intermediate',
    stage: 'Intermediate',
    institution: 'Sri Chaitanya Junior College',
    location: 'Tadepalligudem',
    level: 'Intermediate Education',
  },
  {
    id: 'btech',
    stage: 'B.Tech',
    institution: 'Sasi Institute of Technology and Engineering',
    location: 'Tadepalligudem',
    level: 'Bachelor of Technology (B.Tech)',
    status: 'Currently pursuing 4th year',
  },
]

export const certificatesList: Certificate[] = [
  {
    id: 'purplelane-genai',
    title: 'Mastering GenAI: Building AI-Powered Applications',
    organization: 'PurpleLane',
    type: 'Certificate of Participation',
    date: '03-01-2026',
    image: '/assets/cert-genai-purplelane.jpg',
    accentColor: '#ffb347',
  },
  {
    id: 'purplelane-mern',
    title: 'MERN Stack Workshop',
    organization: 'PurpleLane',
    type: 'Certificate of Completion',
    date: '18-10-2025',
    image: '/assets/cert-mern-purplelane.jpg',
    accentColor: '#ff6b5e',
  },
  {
    id: 'ieeextreme-19',
    title: 'IEEEXtreme 19.0 Programming Competition',
    organization: 'IEEE',
    type: 'Certificate of Participation',
    date: '25 October 2025',
    team: 'Procom',
    image: '/assets/cert-ieeextreme.png',
    pdf: '/assets/cert-ieeextreme.pdf',
    accentColor: '#4fd1c5',
  },
  {
    id: 'ieee-membership-2025',
    title: 'Certificate of IEEE Membership',
    organization: 'IEEE',
    type: 'Certificate of Membership',
    date: 'Through Dec 2025',
    image: '/assets/cert-ieee-membership.png',
    pdf: '/assets/cert-ieee-membership.pdf',
    accentColor: '#38bdf8',
  },
  {
    id: 'ieee-procomm-2025',
    title: 'Certificate of Membership - IEEE ProComm',
    organization: 'IEEE Professional Communication Society',
    type: 'Certificate of Membership',
    date: '2025',
    image: '/assets/cert-ieee-procomm.png',
    pdf: '/assets/cert-ieee-procomm.pdf',
    accentColor: '#a78bfa',
  },
]

export const certificationsList: CertificationItem[] = []

export const achievementsList: AchievementItem[] = []

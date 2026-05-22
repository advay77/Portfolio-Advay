import { FaRobot, FaDatabase, FaServer, FaVolumeUp, FaLongArrowAltRight } from "react-icons/fa";
import "./styles/AiSpecialization.css";

const AiSpecialization = () => {
  return (
    <div className="ai-spec-section section-container" id="ai-specialization">
      <h2>
        AI Specialization <span>&</span>
        <br /> Agentic Workflows
      </h2>
      <p className="ai-subtitle">
        Architecting robust production pipelines connecting cognitive LLM reasoning with real-time memory and secure datastores.
      </p>

      <div className="ai-pipeline-container">
        {/* Module 1: Interface */}
        <div className="ai-node-card node-interface">
          <div className="node-glow-bg"></div>
          <div className="node-icon-wrapper">
            <FaVolumeUp />
          </div>
          <h3>Voice & Client Interfaces</h3>
          <p>
            Implementing ultra-low latency real-time voice streaming and responsive speech interfaces.
          </p>
          <div className="node-tools">
            <span>VAPI</span>
            <span>WebSpeech API</span>
            <span>Next.js</span>
            <span>Howler.js</span>
          </div>
        </div>

        <div className="pipeline-connector">
          <FaLongArrowAltRight className="arrow-pulse" />
        </div>

        {/* Module 2: LLM Engine */}
        <div className="ai-node-card node-engine">
          <div className="node-glow-bg"></div>
          <div className="node-icon-wrapper">
            <FaRobot />
          </div>
          <h3>Orchestration & Reasoning</h3>
          <p>
            Configuring autonomous agents utilizing tool calling, semantic routing, and prompt guardrails.
          </p>
          <div className="node-tools">
            <span>Gemini API</span>
            <span>HuggingFace</span>
            <span>Zod Validation</span>
            <span>LLM Agents</span>
          </div>
        </div>

        <div className="pipeline-connector">
          <FaLongArrowAltRight className="arrow-pulse" />
        </div>

        {/* Module 3: Vector Memory */}
        <div className="ai-node-card node-memory">
          <div className="node-glow-bg"></div>
          <div className="node-icon-wrapper">
            <FaDatabase />
          </div>
          <h3>Knowledge & RAG</h3>
          <p>
            Integrating high-dimensional vector search indices to inject context and long-term memory.
          </p>
          <div className="node-tools">
            <span>Pinecone DB</span>
            <span>Semantic Embeddings</span>
            <span>Hybrid Search</span>
          </div>
        </div>

        <div className="pipeline-connector">
          <FaLongArrowAltRight className="arrow-pulse" />
        </div>

        {/* Module 4: Secure Storage */}
        <div className="ai-node-card node-storage">
          <div className="node-glow-bg"></div>
          <div className="node-icon-wrapper">
            <FaServer />
          </div>
          <h3>Secure Data & Sync</h3>
          <p>
            Securing backend transaction endpoints, authorization, and real-time database sync.
          </p>
          <div className="node-tools">
            <span>Supabase</span>
            <span>Express.js</span>
            <span>WebSockets</span>
            <span>PostgreSQL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiSpecialization;

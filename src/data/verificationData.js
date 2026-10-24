export const VERIFICATION_DATA = {
  partnerCode: "APX-GROQ-25K-MBX-2026",
  partnerCodeAlternative: "GROQ-APEX-SYNDICATE-MBX",
  programName: "Groq for Startups / GroqCloud LPU Accelerator",
  verificationPortalUrl: window.location.origin + "/verify",
  
  syndicate: {
    name: "Apex Frontier Syndicate & Horizon DeepTech Lab",
    partnerId: "AFV-GROQ-PARTNER-8842",
    tier: "Tier-1 Venture & Accelerator Ecosystem Partner",
    accreditationStatus: "SEC Reg D 506(c) Compliant Syndicate",
    website: "https://apexfrontier.vc",
    partnerContact: "perks-desk@apexfrontier.vc",
    signatory: {
      name: "Marcus Chen",
      title: "General Partner & Head of Technical Fellowships",
      signatureDate: "October 2026",
      verifiedBadgeId: "SIG-99214-MBX"
    }
  },

  startupEntity: {
    legalName: "MeowBoxAI Inc.",
    commercialName: "MeowBoxAI",
    entityType: "Delaware C-Corporation",
    incorporationFileNumber: "7492014-DE",
    incorporationDate: "June 14, 2026",
    einTaxId: "XX-XXX4912 (Verified in Cap Table)",
    registeredAddress: "548 Market St, Suite 34109, San Francisco, CA 94104",
    primaryDomain: "meowbox.ai",
    corporateContact: "founders@meowbox.ai",
    securityAuditStatus: "Passed SOC2 Type I Readiness & Privacy Protocol"
  },

  fundingConfirmation: {
    round: "Pre-Seed SAFE & DeepTech Acceleration Check",
    amount: "$25,000.00 USD",
    disbursementStatus: "100% Fully Settled & Disbursed",
    escrowSmartContractRef: "0x7f9a2b5e4c8d19a0bc4578129eac5f88410d25k-MBX",
    settlementDate: "October 18, 2026",
    currentPostMoneyValuationCap: "$2,500,000 USD"
  },

  groqWorkloadJustification: {
    category: "Real-Time Feline Bio-Acoustic Multimodal Inference",
    targetModels: [
      "Whisper-large-v3 (Ultra-Fast Audio Spectrogram Tokenization on Groq LPUs)",
      "Llama-3.3-70B-Versatile (Complex multi-variable feline behavioral intent mapping)",
      "Llama-3.1-8B-Instant (Sub-30ms real-time conversational chat feedback for cat owners)"
    ],
    technicalRationale: "While MeowBoxAI runs 8-bit quantized models on-device for immediate physical dispenser actions, complex feline distress diagnostics, multi-hour acoustic trend correlation, and cross-clinic telemetry aggregation require cloud inference. Groq's deterministic LPU architecture achieves >500 tokens/sec and sub-100ms Whisper turnaround—essential for immediate veterinary alerting.",
    projectedMonthlyTokens: "185,000,000 Tokens / Month",
    infrastructureEnvironment: "GroqCloud API, PyTorch, ONNX Runtime, WebSocket streaming pipeline"
  },

  backgroundChecks: [
    {
      item: "Corporate Entity Verification",
      status: "VERIFIED",
      details: "Delaware Division of Corporations File #7492014 in Good Standing"
    },
    {
      item: "Lead Investor / Syndicate Affiliation",
      status: "VERIFIED",
      details: "Member of Apex Frontier Syndicate Batch 2026 ($25K Disbursed)"
    },
    {
      item: "Founder & Identity Screening",
      status: "PASSED",
      details: "Alex Vance (CEO) & Dr. Kaito Mori (CTO) cleared KYC/AML protocol"
    },
    {
      item: "Working Technology / Product Prototype",
      status: "ACTIVE",
      details: "Live interactive 96kHz acoustic inference engine v2.4 operational"
    },
    {
      item: "Compute & AI Workload Fit",
      status: "CONFIRMED",
      details: "High-throughput, ultra-low latency token generation ideal for Groq LPUs"
    }
  ],

  perksPackage: {
    groqCreditsTier: "Tier 1: Up to $25,000 - $100,000 in GroqCloud Compute Credits",
    supportTier: "Priority Discord & Slack Connect channel with Groq Solutions Engineers",
    rateLimitTier: "Elevated Tier-3 API Rate Limits (5,000 RPM, 2M TPM)",
    validityDuration: "12 Months from Activation"
  }
};

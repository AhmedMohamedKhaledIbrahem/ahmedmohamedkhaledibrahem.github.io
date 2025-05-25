// src/components/layout/genkit-client-provider.tsx
"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenkitClientProvider = GenkitClientProvider;
var client_1 = require("@genkit-ai/next/client");
function GenkitClientProvider(_a) {
    var children = _a.children;
    return <client_1.GenkitProvider>{children}</client_1.GenkitProvider>;
}

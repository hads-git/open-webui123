export const normalizeWebuiName = (name?: string | null): string | undefined => {
        if (typeof name !== 'string') {
                return name ?? undefined;
        }

        const original = name.trim();
        if (!original) {
                return undefined;
        }

        const suffixPatterns = [
                /\s*\(Open\s+WebUI\)\s*$/i,
                /\s*-\s*Open\s+WebUI\s*$/i,
                /\s*\|\s*Open\s+WebUI\s*$/i
        ];

        let normalized = original;
        for (const pattern of suffixPatterns) {
                normalized = normalized.replace(pattern, '').trim();
        }

        return normalized.length > 0 ? normalized : original;
};

interface CreateAutotaskRequest {
    name: string;
    encodedZippedCode: string;
    relayerId?: string;
    trigger: {
        type: 'schedule' | 'webhook';
        frequencyMinutes?: number;
        cron?: string;
    };
    paused: boolean;
}
interface UpdateAutotaskRequest {
    autotaskId: string;
    name: string;
    encodedZippedCode?: string;
    relayerId?: string;
    trigger: {
        type: 'schedule' | 'webhook';
        frequencyMinutes?: number;
        cron?: string;
    };
    paused: boolean;
}
declare type SourceFiles = {
    'index.js': string;
    [name: string]: string;
};
declare type data = {
    [key: string]: any;
};
export { CreateAutotaskRequest, UpdateAutotaskRequest, SourceFiles, data };
//# sourceMappingURL=types.d.ts.map
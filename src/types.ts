import type {
    Collection,
    Message,
    TextChannel,
} from 'eris';


export type ReturnTypes = 'buffer' | 'string' | 'attachment';


export type GenerateFromMessagesOpts = {
    returnType?: ReturnTypes;
    fileName?: string;
    minify?: boolean;
    saveImages?: boolean;
    useCDN?: boolean;
};

export type GenerateSource = Collection<Message> | Message[];

export type CreateTranscriptOptions = GenerateFromMessagesOpts & {
    limit?: number;
};

export type internalGenerateOptions = {
    returnBuffer?: boolean;
    returnType?: ReturnTypes;
    fileName?: string;
    minify?: boolean;
    saveImages?: boolean;
    useCDN?: boolean;
};

export type ValidTextChannels = TextChannel;

/* some util types */
export type Class<T> = new (...args: any[]) => T;
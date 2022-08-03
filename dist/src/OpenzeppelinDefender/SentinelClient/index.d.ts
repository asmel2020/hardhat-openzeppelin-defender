import { CreateSentinelRequest } from 'defender-sentinel-client';
import { credentialClient } from '../models/type';
import { NotificationRequest, CreateNotificationRequest, UpdateNotificationRequest } from './models/types';
export default class SentinelClients {
    private client;
    constructor(credentialClient: credentialClient);
    list(): Promise<import("defender-sentinel-client/lib/models/response").ListSentinelResponse>;
    createNotificationChannel(CreateNotificationRequest: CreateNotificationRequest): Promise<import("defender-sentinel-client").NotificationResponse>;
    listNotificationChannels(): Promise<import("defender-sentinel-client").NotificationResponse[]>;
    getNotificationChannel(NotificationRequest: NotificationRequest): Promise<import("defender-sentinel-client").NotificationResponse>;
    updateNotificationChannel(UpdateNotificationRequest: UpdateNotificationRequest): Promise<import("defender-sentinel-client").NotificationResponse>;
    deleteNotificationChannel(NotificationRequest: NotificationRequest): Promise<string>;
    create(CreateSentinelRequest: CreateSentinelRequest): Promise<import("defender-sentinel-client").CreateSentinelResponse>;
    get(sentinelId: string): Promise<import("defender-sentinel-client").CreateSentinelResponse>;
    update(sentinelId: string, UpdateSubscriberRequest: any): Promise<import("defender-sentinel-client").CreateSentinelResponse>;
    delete(sentinelId: string): Promise<import("defender-sentinel-client").DeletedSentinelResponse>;
    pause(sentinelId: string): Promise<CreateSentinelRequest>;
    unpause(sentinelId: string): Promise<CreateSentinelRequest>;
}
//# sourceMappingURL=index.d.ts.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defender_sentinel_client_1 = require("defender-sentinel-client");
class SentinelClients {
    constructor(credentialClient) {
        this.client = new defender_sentinel_client_1.SentinelClient(credentialClient);
    }
    list() {
        return this.client.list();
    }
    createNotificationChannel(CreateNotificationRequest) {
        return this.client.createNotificationChannel(CreateNotificationRequest);
    }
    listNotificationChannels() {
        return this.client.listNotificationChannels();
    }
    getNotificationChannel(NotificationRequest) {
        return this.client.getNotificationChannel(NotificationRequest);
    }
    updateNotificationChannel(UpdateNotificationRequest) {
        return this.client.updateNotificationChannel(UpdateNotificationRequest);
    }
    deleteNotificationChannel(NotificationRequest) {
        return this.client.deleteNotificationChannel(NotificationRequest);
    }
    create(CreateSentinelRequest) {
        return this.client.create(CreateSentinelRequest);
    }
    get(sentinelId) {
        return this.client.get(sentinelId);
    }
    update(sentinelId, UpdateSubscriberRequest) {
        return this.client.update(sentinelId, UpdateSubscriberRequest);
    }
    delete(sentinelId) {
        return this.client.delete(sentinelId);
    }
    pause(sentinelId) {
        return this.client.pause(sentinelId);
    }
    unpause(sentinelId) {
        return this.client.unpause(sentinelId);
    }
}
exports.default = SentinelClients;
//# sourceMappingURL=index.js.map
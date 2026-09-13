/**
 * One small, named function per resource. Components import
 * from here — never from client.js or /data directly — so the
 * data source is always swappable in one place (config.js).
 */
import { getResource, postResource } from "./client.js";

export const getAnnouncements = () => getResource("announcements");
export const getEvents = () => getResource("events");
export const getOfficials = () => getResource("officials");
export const getDepartments = () => getResource("departments");
export const getServices = () => getResource("services");
export const getTransparencyDocs = () => getResource("transparency");
export const getQuickAccess = () => getResource("quick-access");
export const getDiscoverItems = () => getResource("discover");

export const submitContactMessage = (payload) => postResource("contact", payload);

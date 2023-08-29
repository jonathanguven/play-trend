import { SvelteComponent } from "svelte";
import { type PortalProps } from '../../internal/components/Portal/Portal.svelte';
export type SelectPortalProps = PortalProps;
declare const __propDef: {
    props: {
        target?: string | HTMLElement | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
type PortalProps_ = typeof __propDef.props;
export { PortalProps_ as PortalProps };
export type PortalEvents = typeof __propDef.events;
export type PortalSlots = typeof __propDef.slots;
export default class Portal extends SvelteComponent<PortalProps, PortalEvents, PortalSlots> {
}

import { SvelteComponent } from "svelte";
type PortalProps = ComponentProps<InstanceType<typeof Portal>>;
export type HoverCardPortalProps = Omit<PortalProps, 'target'> & {
    container?: PortalProps['target'];
};
import { Portal } from '../../internal/components';
import type { ComponentProps } from 'svelte';
declare const __propDef: {
    props: {
        container?: PortalProps['target'];
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

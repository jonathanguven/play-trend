import { SvelteComponent } from "svelte";
import { Portal } from '../../internal/components';
import type { ComponentProps } from 'svelte';
type PortalProps = ComponentProps<InstanceType<typeof Portal>>;
export type DialogPortalProps = {
    container?: PortalProps['target'];
};
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

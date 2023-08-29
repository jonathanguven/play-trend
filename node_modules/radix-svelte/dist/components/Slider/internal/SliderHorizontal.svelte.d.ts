import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        min: number;
        max: number;
        dir: 'ltr' | 'rtl';
        inverted: boolean;
    };
    events: {
        homeKeyDown: CustomEvent<any>;
        endKeyDown: CustomEvent<any>;
        slideStart: CustomEvent<{
            value: number;
        }>;
        slideMove: CustomEvent<{
            value: number;
        }>;
        slideEnd: CustomEvent<null>;
        stepKeyDown: CustomEvent<{
            event: KeyboardEvent;
            direction: number;
        }>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SliderHorizontalProps = typeof __propDef.props;
export type SliderHorizontalEvents = typeof __propDef.events;
export type SliderHorizontalSlots = typeof __propDef.slots;
export default class SliderHorizontal extends SvelteComponent<SliderHorizontalProps, SliderHorizontalEvents, SliderHorizontalSlots> {
}
export {};

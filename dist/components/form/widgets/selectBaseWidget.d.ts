import { Widget } from './widget';
import { UiSelectBase } from '../../schema';
export declare abstract class SelectBaseWidget extends Widget {
    protected get ui(): UiSelectBase;
}

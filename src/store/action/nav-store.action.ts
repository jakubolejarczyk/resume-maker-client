export class SwitchMenuIsOpen {
    static readonly type = "[NavStoreState] Switch Menu Is Open";
}

export class SetMenuIsOpen {
    static readonly type = "[NavStoreState] Set Menu Is Open";

    constructor(public menuIsOpen: boolean) {}
}
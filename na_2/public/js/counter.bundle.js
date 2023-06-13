import { createApp } from "vue";

import CounterComponent from "./Counter.vue";

class Counter {
    constructor({ wrapper, page }) {
        this.$wrapper = wrapper;
        this.page = page;
        this.init()
    }

    init() {
        let app = createApp(CounterComponent);
        SetVueGlobals(app);
        app.mount(this.$wrapper.get(0));
    }
}

frappe.provide("na_2.ui");
na_2.ui.Counter = Counter;
export default Counter;
frappe.pages['np_2'].on_page_load = function (wrapper) {
	frappe.ui.make_app_page({
		parent: wrapper,
		single_column: true
	})

	// frappe.breadcrumbs.add("Vue Page test")

	// hot reload in development
	if (frappe.boot.developer_mode) {
		frappe.hot_update = frappe.hot_update || [];
		frappe.hot_update.push(() => load_vue_ui(wrapper));
	}
}


frappe.pages['np_2'].on_page_show = function (wrapper) {
	load_vue_ui(wrapper)
}


function load_vue_ui(wrapper) {
	let $parent = $(wrapper).find(".layout-main-section");
	$parent.empty()

	frappe.require("counter.bundle.js").then(() => {
		new na_2.ui.Counter({
			wrapper: $parent,
			page: wrapper.page
		})
	})
}
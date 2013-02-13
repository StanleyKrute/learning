enyo.kind({
    name: "OnyxSample",
    components: [
        { kind: "onyx.Toolbar", components: [
            { content: "Toolbar" },
            { kind: "onyx.Button", content: "Toolbar Button" }
        ]},
        { content: "Radio Group" },
        { kind: "onyx.RadioGroup", onActivate: "activated", components: [
            { content: "One", active: true },
            { content: "Two" },
            { content: "Three" }
        ]},
        { content: "Groupbox" },
        { kind: "onyx.Groupbox", components: [
            { kind: "onyx.GroupboxHeader", content: "Groupbox Header" },
            { content: "Groupbox item" }
        ]},
        { content: "ProgressBar" },
        { kind: "onyx.ProgressBar", progress: -1 }
    ],
    activated: function(inSender, inEvent) {
        // React to radio button activation change
		foo = this.$.progressBar.progress ;
		this.$.progressBar.animateProgressTo(foo + 1) ;
    }
});


/// <reference path="fourslash.ts" />

// @jsx: preserve

// @Filename: /a.tsx
////enum E {}
////enum F {}
////function f(e: E, f: F) {}
////f(/*arg0*/, /*arg1*/);
////
////function tag(arr: TemplateStringsArray, x: E) {}
////tag`${/*tag*/}`;
////
////declare function MainButton(props: { e: E }): any;
////<MainButton e={/*jsx*/} />
////<MainButton e=/*jsx2*/ />

recommended("arg0");
recommended("arg1", "F");
recommended("tag");
recommended("jsx");
recommended("jsx2");

function recommended(markerName: string, enumName = "E") {
    goTo.marker(markerName);
    verify.completionListContains(enumName, `enum ${enumName}`, "", "enum", undefined, undefined , { isRecommended: true });
}

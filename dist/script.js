define('dartpad_main', ['dart_sdk', 'flutter_web'], (function load__dartpad_main(dart_sdk, flutter_web) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = flutter_web.src__widgets__framework;
  const colors = flutter_web.src__material__colors;
  const app = flutter_web.src__material__app;
  const scaffold = flutter_web.src__material__scaffold;
  const app_bar = flutter_web.src__material__app_bar;
  const text = flutter_web.src__widgets__text;
  const basic = flutter_web.src__widgets__basic;
  const implicit_animations = flutter_web.src__widgets__implicit_animations;
  const box_decoration = flutter_web.src__painting__box_decoration;
  const border_radius = flutter_web.src__painting__border_radius;
  const curves = flutter_web.src__animation__curves;
  const floating_action_button = flutter_web.src__material__floating_action_button;
  const icon = flutter_web.src__widgets__icon;
  const icons = flutter_web.src__material__icons;
  const binding = flutter_web.src__widgets__binding;
  var bootstrap = Object.create(dart.library);
  var main = Object.create(dart.library);
  var $toDouble = dartx.toDouble;
  var VoidToNullN = () => (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  var L0 = "file:///tmp/dartpadMPDBZN/main.dart";
  bootstrap.main = function main$() {
    return async.async(dart.void, function* main$() {
      yield ui.webOnlyInitializePlatform();
      main.main();
    });
  };
  main.AnimatePage = class AnimatePage extends framework.StatefulWidget {
    createState() {
      return new main._AnimatePageState.new();
    }
  };
  (main.AnimatePage.new = function() {
    main.AnimatePage.__proto__.new.call(this);
    ;
  }).prototype = main.AnimatePage.prototype;
  dart.addTypeTests(main.AnimatePage);
  dart.addTypeCaches(main.AnimatePage);
  dart.setMethodSignature(main.AnimatePage, () => ({
    __proto__: dart.getMethods(main.AnimatePage.__proto__),
    createState: dart.fnType(dart.legacy(main._AnimatePageState), [])
  }));
  dart.setLibraryUri(main.AnimatePage, L0);
  var _width = dart.privateName(main, "_width");
  var _height = dart.privateName(main, "_height");
  var _color = dart.privateName(main, "_color");
  main._AnimatePageState = class _AnimatePageState extends framework.State$(dart.legacy(main.AnimatePage)) {
    build(context) {
      return new app.MaterialApp.new({debugShowCheckedModeBanner: false, home: new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Lets Do Animation")}), body: new basic.Center.new({child: new implicit_animations.AnimatedContainer.new({height: this[_height], width: this[_width], decoration: new box_decoration.BoxDecoration.new({color: this[_color], borderRadius: new border_radius.BorderRadius.circular(10.0)}), duration: new core.Duration.new({seconds: 1}), curve: curves.Curves.bounceIn})}), floatingActionButton: new floating_action_button.FloatingActionButton.new({onPressed: dart.fn(() => {
              this.setState(dart.fn(() => {
                let random = math.Random.new();
                this[_width] = random.nextInt(300)[$toDouble]();
                this[_height] = random.nextInt(300)[$toDouble]();
                this[_color] = new ui.Color.fromRGBO(random.nextInt(256), random.nextInt(256), random.nextInt(256), 1.0);
              }, VoidToNullN()));
            }, VoidToNullN()), child: new icon.Icon.new(icons.Icons.play_arrow)})})});
    }
  };
  (main._AnimatePageState.new = function() {
    this[_width] = 50.0;
    this[_height] = 50.0;
    this[_color] = colors.Colors.purple;
    main._AnimatePageState.__proto__.new.call(this);
    ;
  }).prototype = main._AnimatePageState.prototype;
  dart.addTypeTests(main._AnimatePageState);
  dart.addTypeCaches(main._AnimatePageState);
  dart.setMethodSignature(main._AnimatePageState, () => ({
    __proto__: dart.getMethods(main._AnimatePageState.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(main._AnimatePageState, L0);
  dart.setFieldSignature(main._AnimatePageState, () => ({
    __proto__: dart.getFields(main._AnimatePageState.__proto__),
    [_width]: dart.fieldType(dart.legacy(core.double)),
    [_height]: dart.fieldType(dart.legacy(core.double)),
    [_color]: dart.fieldType(dart.legacy(ui.Color))
  }));
  main.main = function main$0() {
    binding.runApp(new main.AnimatePage.new());
  };
  dart.trackLibraries("dartpad_main", {
    "file:///tmp/dartpadMPDBZN/bootstrap.dart": bootstrap,
    "file:///tmp/dartpadMPDBZN/main.dart": main
  }, {
  }, null);
  // Exports:
  return {
    tmp__dartpadMPDBZN__bootstrap: bootstrap,
    tmp__dartpadMPDBZN__main: main
  };
}));

//# sourceMappingURL=main.dart.js.map
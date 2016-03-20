var FizzyText = function() {
  this.message = 'dat.gui';
  this.maxWidth = 800;
  this.displayOutline = false;
  this.color = [0, 128, 255, 0.3]; // RGB with alpha
  this.borderRadius = 2;
  this.baseFontSize = 16;
  this.paddingSectionHorizontal = 1;
  this.uiBorderColor = 0.5;
  this.uiFontSize = 16;
  this.marginSection = 1;
  this.shadowStrength = 0;
  // Define render logic ...
};

window.onload = function() {

  var text = new FizzyText();


  var gui = new dat.GUI();
  gui.add(text, 'message');


  gui.remember(text);
  gui.add(text, 'maxWidth', 0, 1200).onChange(function(value) {
    document.querySelector("body").style.setProperty("--DimensionMaxWidth", value + "px");
});

  gui.addColor(text, 'color').onChange(function(value) {
    document.querySelector("body").style.setProperty("--ColorBackground", value);
});

  gui.add(text, 'borderRadius', 0, 8).onChange(function(value) {
    document.querySelector("body").style.setProperty("--UIBorderRadius", value + "px");
});

  gui.add(text, 'baseFontSize', 12, 24).onChange(function(value) {
    document.querySelector("html").style.setProperty("--BaseFontSize", value + "px");
});
  gui.add(text, 'paddingSectionHorizontal', 0, 10).step(0.5).onChange(function(value) {
      document.querySelector("body").style.setProperty("--PaddingSectionHorizontal", value + "rem");
  });

  gui.add(text, 'uiBorderColor', 0, 1).onChange(function(value) {
      document.querySelector("body").style.setProperty("--UIBorderColor", "rgba(0, 0, 0, " + value + ")");
  });


  gui.add(text, 'uiFontSize', 12, 22).onChange(function(value) {
      document.querySelector("body").style.setProperty("--UIFontSize", value + "px");
  });

  gui.add(text, 'marginSection', 0, 10).step(0.5).onChange(function(value) {
      document.querySelector("body").style.setProperty("--MarginSection", value + "rem");
  });

  gui.add(text, 'shadowStrength', 0, 100).step(1).onChange(function(value) {
      document.querySelector("body").style.setProperty("--ShadowStrength", value + "px");
  });

};


$("h1, h2, h3, h4, h5, h6, p").attr("contenteditable", "true");
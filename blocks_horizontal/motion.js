'use strict';

goog.provide('Blockly.Blocks.motion');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');


Blockly.Blocks['motion_movesteps'] = {
  init: function() {
    this.jsonInit({
      "id": "motion_movesteps",
      "message0": "%1 %2",
      "args0": [
        {
            "type": "field_image",
            "src": Blockly.mainWorkspace.options.pathToMedia + "icons/arrow_button.svg",
            "width": 40,
            "height": 40,
            "alt": "*",
            "flip_rtl": true
          },
          {
            "type": "input_value",
            "name": "STEPS",
            "check": "Number"
          }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.motion,
      "colour": Blockly.Colours.motion.primary,
      "colourSecondary": Blockly.Colours.motion.secondary,
      "colourTertiary": Blockly.Colours.motion.tertiary
    });
  }
};

Blockly.Blocks['motion_movestep'] = {
  init: function() {
    this.jsonInit({
      "id": "motion_movestep",
      "message0": "%1",
      "args0": [
        {
            "type": "field_image",
            "src": Blockly.mainWorkspace.options.pathToMedia + "icons/arrow_button.svg",
            "width": 40,
            "height": 40,
            "alt": "*",
            "flip_rtl": true
          }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.motion,
      "colour": Blockly.Colours.motion.primary,
      "colourSecondary": Blockly.Colours.motion.secondary,
      "colourTertiary": Blockly.Colours.motion.tertiary
    });
  }
};

Blockly.Blocks['motion_turnleft'] = {
    init: function() {
      this.jsonInit({
        "id": "motion_turnleft",
        "message0": "%1",
        "args0": [
            {
                "type": "field_image",
                "src": Blockly.mainWorkspace.options.pathToMedia + "rotate-left.svg",
                "width": 40,
                "height": 40,
                "alt": "*",
                "flip_rtl": true
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "category": Blockly.Categories.motion,
        "colour": Blockly.Colours.motion.primary,
        "colourSecondary": Blockly.Colours.motion.secondary,
        "colourTertiary": Blockly.Colours.motion.tertiary
      });
    }
  };

  Blockly.Blocks['motion_turnright'] = {
    init: function() {
      this.jsonInit({
        "id": "motion_turnright",
        "message0": "%1",
        "args0": [
            {
                "type": "field_image",
                "src": Blockly.mainWorkspace.options.pathToMedia + "rotate-right.svg",
                "width": 40,
                "height": 40,
                "alt": "*",
                "flip_rtl": true
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "category": Blockly.Categories.motion,
        "colour": Blockly.Colours.motion.primary,
        "colourSecondary": Blockly.Colours.motion.secondary,
        "colourTertiary": Blockly.Colours.motion.tertiary
      });
    }
  };

  Blockly.Blocks['dropdown_motion_if_path'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldIconMenu(
              [
                {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/path_ahead.svg',
                  value: 'ahead', width: 40, height: 40, alt: 'ahead'},
                {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/path_behind.svg',
                  value: 'behind', width: 40, height: 40, alt: 'behind'},
                {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/path_left.svg',
                  value: 'left', width: 40, height: 40, alt: 'left'},
                  {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/path_right.svg',
                  value: 'right', width: 40, height: 40, alt: 'right'}
              ]), 'CHOICE');
      this.setOutput(true);
      this.setColour(Blockly.Colours.motion.primary,
          Blockly.Colours.motion.secondary,
          Blockly.Colours.motion.tertiary
      );
    }
  };
  
  
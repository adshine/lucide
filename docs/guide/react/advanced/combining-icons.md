<script setup>
import { Sandpack } from 'sandpack-vue3'
import sandpackTheme from '../../../.vitepress/theme/sandpackTheme.json'
import combineIconsExample from './examples/combining-icons/files.ts'
import combineCustomExample from './examples/combining-icons-custom/files.ts'
import combineNotificationExample from './examples/combining-icons-notification/files.ts'
</script>

# Combining icons

You can combine multiple icons into a single icon by using SVG in SVG.
This is useful for if you want to be creative and make your own custom icons by combining existing icons.

<Sandpack
  template="react"
  :theme="sandpackTheme"
  :files="combineIconsExample"
  :customSetup='{
    dependencies: {
      "lucide-react": "latest"
    }
  }'
  :options="{
    editorHeight: 400,
    editorWidthPercentage: 60,
  }"
/>

This is valid SVG and all SVG properties are supported on the icons.
The `x` and `y` coordinates can be adjusted to position the icons as you like.

## Caveats

When combining icons, you need to make sure that the icon you is in the `viewBox` of the outer icon (24x24).

## With custom SVG elements

You can also use SVG elements to create your own icons.

## Example with notification badge



<Sandpack
  template="react"
  :theme="sandpackTheme"
  :files="combineNotificationExample"
  :customSetup='{
    dependencies: {
      "lucide-react": "latest"
    }
  }'
  :options="{
    editorHeight: 480,
    editorWidthPercentage: 60,
  }"
/>

## Example with text element

You can also use the `text` SVG element to add text to your icon.

<Sandpack
  template="react"
  :theme="sandpackTheme"
  :files="combineCustomExample"
  :customSetup='{
    dependencies: {
      "lucide-react": "latest"
    }
  }'
  :options="{
    editorHeight: 480,
    editorWidthPercentage: 60,
  }"
/>




# Example of handling dynamic labels in Lightning
That is very simple example of how I managed to handle getting custom labels dynamically in Lightning. It is obvious and well documented for single label (https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/labels_dynamic.htm), but it doesn't work so well for multiple labels displayed using _aura:iteration_ tag. Component is then unable to detect when actual label value is loaded from server and it doesn't rerender what results in displaying empty strings.

I've achieved expected behavior by creating additional _aura:attribute_ used to listen for every single label to be loaded from server and then causing widget to rerender.

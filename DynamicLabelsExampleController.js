({
	handleInit : function(component) {
		let inputLabels = component.get("v.labelsString").split(",");
        let actualLabels = [];
        
        inputLabels.forEach(function(label) {
           actualLabels.push($A.getReference("$Label.c." + label)); 
        });
        
        component.set("v.labelsArray", actualLabels);
        component.set("v.labelsListener", actualLabels[0]);
	},
    
    handleLabelsListenerChange : function(component) {
        let currentLabels = component.get("v.labelsArray");
        
        currentLabels.forEach(function(label) {
            // adding label's reference to an actual attribute seems
            // to be the only way to check if it has already loaded
            component.set("v.tempLabel", label);
            
            // when label isn't loaded yet, attribute will return an empty string
            if(component.get("v.tempLabel") === "") {
                
                // some label wasn't loaded yet, listen for this one to change
                component.set("v.labelsListener", label);
                return;
            }
        });
            
        // once all labels are loaded reload attribute in order to rerender widget
        component.set("v.labelsArray", null);
        component.set("v.labelsArray", currentLabels);
    }
})
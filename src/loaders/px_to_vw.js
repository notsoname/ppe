var loaderUtils = require("loader-utils");

module.exports = function(content, map) {
    const { minWidth, maxWidth = false } = loaderUtils.getOptions(this);

    let midResolutionCssContent = content;
    //convert px to vw
    midResolutionCssContent = midResolutionCssContent.replace(/(-?(\d|\.)+)px/g,'vw($1)');

    //remove non vw properties
    midResolutionCssContent = midResolutionCssContent.replace(/^((?!vw|\{|\}|\$|.\w,|\@media|>).)*$/g,'');

    //clear 1px size properties
    midResolutionCssContent = midResolutionCssContent.replace(/^.+vw\(1\).+$/g,'');

    //clear empty selectors with brackets
    midResolutionCssContent = midResolutionCssContent.replace(/([>*a-z-.#&:_0-9>, ()\n\[\]=])+\s?\{\s+}/g, '');
    midResolutionCssContent = midResolutionCssContent.replace(/([>*a-z-.#&:_0-9>, ()\n\[\]=])+\s?\{\s+}/g, '');
    midResolutionCssContent = midResolutionCssContent.replace(/([>*a-z-.#&:_0-9>, ()\n\[\]=])+\s?\{\s+}/g, '');
    midResolutionCssContent = midResolutionCssContent.replace(/([>*a-z-.#&:_0-9>, ()\n\[\]=])+\s?\{\s+}/g, '');

    //clear linebreaks
    midResolutionCssContent = midResolutionCssContent.replace(/\s+\n/g,'\n');

    if(maxWidth){
        midResolutionCssContent = `@media (min-width: ${minWidth}) and (max-width: ${maxWidth}){\n${midResolutionCssContent}\n}`;
    }else{
        midResolutionCssContent = `@media (min-width: ${minWidth}){\n${midResolutionCssContent}\n}`;
    }

    return content + '\n' + midResolutionCssContent;
};
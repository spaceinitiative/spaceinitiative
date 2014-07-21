/**
 * Constructor for LoadingAnimation
 */
function LoadingAnimation()
{
}

// ***************
// * static vars *
// ***************

LoadingAnimation.activeLoaders = [];

// ******************
// * static methods *
// ******************

LoadingAnimation.start = function(selector)
{
  var spinner = document.createElement('span');
  $(spinner).attr('class', 'ajaxLoader');
  $(selector).append(spinner);
  this.activeLoaders[selector] = spinner;
};

LoadingAnimation.stop = function(selector)
{
  var spinner = this.activeLoaders[selector];
  $(spinner).remove();
  delete this.activeLoaders[selector];
};

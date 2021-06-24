function handleMonthOptionChangeForRelatedDisplay(evt) {

  const elementDisplay = document.querySelector('#month');
  const elementSelect = evt.currentTarget;

  if (elementDisplay && elementSelect) {

    const elementSelect = evt.currentTarget;
    const selectedIndex = elementSelect.selectedIndex;

    elementDisplay.textContent = elementSelect[selectedIndex].value
  }
}

function initMonthOptionChange() {
  const elementSelect = document.querySelector('#month-options');
  elementSelect.addEventListener('change', handleMonthOptionChangeForRelatedDisplay);
}

// window.onload = function () {
//   handleMonthOptionChangeForRelatedDisplay({
//     currentTarget: document.querySelector('#month-options')
//   });
//   initMonthOptionChange();
// }

handleMonthOptionChangeForRelatedDisplay({
  currentTarget: document.querySelector('#month-options')
});
initMonthOptionChange();
function displayBoundBillingFrequency(evt) {

  const elementSelect = evt.currentTarget;
  if (elementSelect) {

    const selectedOption = elementSelect[elementSelect.selectedIndex];

    // `this` equals the bound billing-frequency display-element.
    this.textContent = (selectedOption.dataset.billingFrequency || '');
  }
}

function mainInit() {

  const planOptions = document.querySelector('#plan-options');
  const frequencyDisplay = document.querySelector('#plan-billing-frequency');

  if (planOptions && frequencyDisplay) {

    const displayBillingFrequency = displayBoundBillingFrequency.bind(frequencyDisplay);

    // synchronize display data initially.
    displayBillingFrequency({
      currentTarget: planOptions,
    });

    // initialize event listening/handling
    planOptions.addEventListener('change', displayBillingFrequency);
  }
}

mainInit();
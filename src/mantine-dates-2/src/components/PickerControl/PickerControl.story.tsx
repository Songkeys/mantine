import React from 'react';
import { PickerControl } from './PickerControl';

export default { title: 'PickerControl' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <PickerControl>March</PickerControl>
      <PickerControl disabled>March</PickerControl>
      <PickerControl selected>March</PickerControl>
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <PickerControl unstyled>March</PickerControl>
    </div>
  );
}

export function Range() {
  return (
    <div style={{ padding: 40, display: 'flex' }}>
      <PickerControl firstInRange inRange selected>
        March
      </PickerControl>
      <PickerControl inRange>April</PickerControl>
      <PickerControl inRange>May</PickerControl>
      <PickerControl lastInRange inRange selected>
        June
      </PickerControl>
    </div>
  );
}
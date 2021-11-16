import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { extractLocations } from '../api';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {});
import axios, { AxiosResponse } from 'axios';
import { Storage } from 'react-jhipster';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { AppThunk } from 'app/config/store';

export const initialState = {
  distance: 0,
  isometric: false,
  atcType: '',
  firstGroupOS: 0,
  secondGroupOS: 0,
  thirdGroupOS: 0,
  fourGroupOS: 0,
  firstGroupOSSkat: 0,
  secondGroupOSSkat: 0,
  thirdGroupOSSkat: 0,
  fourGroupOSSkat: 0,
  firstGroupOSDistance: 0,
  secondGroupOSDistance: 0,
  thirdGroupOSDistance: 0,
  fourGroupOSDistance: 0,
  firstGroupOSWeight: 0,
  secondGroupOSWeight: 0,
  thirdGroupOSWeight: 0,
  fourGroupOSWeight: 0,
  height: 0,
  width: 0,
  length: 0,
  ledge: 0,
};

export const CalculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setDistance(state, action) {
      return {
        ...state,
        distance: action.payload,
      };
    },
    setIsometric(state, action) {
      return {
        ...state,
        isometric: action.payload,
      };
    },
    setAtcType(state, action) {
      return {
        ...state,
        atcType: action.payload,
      };
    },
    setFirstGroupOS(state, action) {
      return {
        ...state,
        firstGroupOS: action.payload,
      };
    },
    setSecondGroupOS(state, action) {
      return {
        ...state,
        secondGroupOS: action.payload,
      };
    },
    setThirdGroupOS(state, action) {
      return {
        ...state,
        thirdGroupOS: action.payload,
      };
    },
    setFourGroupOS(state, action) {
      return {
        ...state,
        fourGroupOS: action.payload,
      };
    },
    setFirstGroupOSSkat(state, action) {
      return {
        ...state,
        firstGroupOSSkat: action.payload,
      };
    },
    setSecondGroupOSSkat(state, action) {
      return {
        ...state,
        secondGroupOSSkat: action.payload,
      };
    },
    setThirdGroupOSSkat(state, action) {
      return {
        ...state,
        thirdGroupOSSkat: action.payload,
      };
    },
    setFourGroupOSSkat(state, action) {
      return {
        ...state,
        fourGroupOSSkat: action.payload,
      };
    },
    setFirstGroupOSWeight(state, action) {
      return {
        ...state,
        firstGroupWeightat: action.payload,
      };
    },
    setSecondGroupOSWeight(state, action) {
      return {
        ...state,
        secondGroupOSWeight: action.payload,
      };
    },
    setThirdGroupOSWeight(state, action) {
      return {
        ...state,
        thirdGroupOSWeight: action.payload,
      };
    },
    setFourGroupOSWeight(state, action) {
      return {
        ...state,
        fourGroupOSWeight: action.payload,
      };
    },
    setHeight(state, action) {
      return {
        ...state,
        height: action.payload,
      };
    },
    setWidth(state, action) {
      return {
        ...state,
        width: action.payload,
      };
    },
    setLength(state, action) {
      return {
        ...state,
        length: action.payload,
      };
    },
    setLedge(state, action) {
      return {
        ...state,
        ledge: action.payload,
      };
    },
    setFirstGroupOSDistance(state, action) {
      return {
        ...state,
        firstGroupOSDistance: action.payload,
      };
    },
    setSecondGroupOSDistance(state, action) {
      return {
        ...state,
        secondGroupOSDistance: action.payload,
      };
    },
    setThirdGroupOSDistance(state, action) {
      return {
        ...state,
        thirdGroupOSDistance: action.payload,
      };
    },
    setFourGroupOSDistance(state, action) {
      return {
        ...state,
        fourGroupOSDistance: action.payload,
      };
    },
  },
});

export const {
  setDistance,
  setIsometric,
  setAtcType,
  setFirstGroupOS,
  setSecondGroupOS,
  setThirdGroupOS,
  setFourGroupOS,
  setFirstGroupOSSkat,
  setSecondGroupOSSkat,
  setThirdGroupOSSkat,
  setFourGroupOSSkat,
  setFirstGroupOSWeight,
  setSecondGroupOSWeight,
  setThirdGroupOSWeight,
  setFourGroupOSWeight,
  setHeight,
  setWidth,
  setLength,
  setLedge,
  setFirstGroupOSDistance,
  setSecondGroupOSDistance,
  setThirdGroupOSDistance,
  setFourGroupOSDistance,
} = CalculatorSlice.actions;

// Reducer
export default CalculatorSlice.reducer;

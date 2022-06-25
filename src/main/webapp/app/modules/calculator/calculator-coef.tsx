export const getCoefDimension = (type, value, isometricDimension) => {
  if (type === 'height') {
    if (value > 4 && value <= 4.5) {
      return 0.009;
    } else if (value > 4.5 && value <= 5) {
      return 0.018;
    } else if (value > 5) {
      return 0.036;
    } else {
      return 0;
    }
  } else if (type === 'width') {
    if (value > (isometricDimension ? 2.6 : 2.55) && value <= 3) {
      return 0.009;
    } else if (value > 3 && value <= 3.75) {
      return 0.019;
    } else if (value > 3.75) {
      return 0.038;
    } else {
      return 0;
    }
  } else if (type === 'length') {
    return (value - 12) * 0.004;
  }
};

export function table1OS(weight, isometric) {
  if (!isometric) {
    if (weight <= 10) {
      return 0;
    } else if (weight > 10 && weight <= 11) {
      return 0.011;
    } else if (weight > 11 && weight <= 12) {
      return 0.014;
    } else if (weight > 12 && weight <= 13) {
      return 0.19;
    } else if (weight > 13 && weight <= 14) {
      return 0.38;
    } else if (weight > 14 && weight <= 15) {
      return 0.5;
    } else if (weight > 15) {
      return 1;
    }
  } else {
    if (weight <= 8) {
      return 0;
    } else if (weight > 8 && weight <= 8.8) {
      return 0.011;
    } else if (weight > 8.8 && weight <= 9.6) {
      return 0.014;
    } else if (weight > 9.6 && weight <= 10.4) {
      return 0.19;
    } else if (weight > 10.4 && weight <= 11.2) {
      return 0.38;
    } else if (weight > 11.2 && weight <= 12) {
      return 0.5;
    } else if (weight > 12) {
      return 1;
    }
  }
}

const getIsometricAllowWeight = (allowWeight, osValue) => {
  const allowIsometricWeight =
    osValue === 2 ? [{ 12: 10 }, { 14: 12 }, { 16: 13.2 }, { 18: 14.4 }] : [{ 18: 14.4 }, { 21: 16.8 }, { 24: 19.2 }, { 27: 21.6 }];
  // tslint:disable-next-line:prefer-for-of
  for (let i = 0; i < allowIsometricWeight.length; i++) {
    if (+Object.keys(allowIsometricWeight[i])[0] === allowWeight) {
      return Object.values(allowIsometricWeight[i])[0];
    }
  }
};

const getIsometricAllowWeightTrawl = (allowWeight, osValue) => {
  const allowIsometricWeight = [{ 6: 4.8 }, { 7: 5.6 }, { 8: 6.4 }, { 9: 7.2 }];
  // tslint:disable-next-line:prefer-for-of
  for (let i = 0; i < allowIsometricWeight.length; i++) {
    if (+Object.keys(allowIsometricWeight[i])[0] * osValue === allowWeight) {
      return Object.values(allowIsometricWeight[i])[0] * osValue;
    }
  }
};

export const GetCoef = (isometric, weigth, allowWeight, osValue, atsType = '', lenivec = true, veduchiTrak = false) => {
  console.log(isometric, weigth, allowWeight, osValue, atsType, lenivec, veduchiTrak);
  if (isometric) {
    if (+allowWeight === 0) {
      return 0;
    }
    allowWeight = atsType !== 'trawl' ? getIsometricAllowWeight(allowWeight, osValue) : getIsometricAllowWeightTrawl(allowWeight, osValue);
  }
  console.log(isometric, weigth, allowWeight, osValue, atsType, lenivec, veduchiTrak);
  // tslint:disable-next-line:no-unused-expression
  lenivec && veduchiTrak && !isometric ? (allowWeight += 1) : allowWeight;
  const tarif = [
    { percent: 0, tarif: 0 },
    { percent: 10, tarif: 0.011 },
    { percent: 20, tarif: 0.014 },
    { percent: 30, tarif: 0.19 },
    { percent: 40, tarif: 0.38 },
    { percent: 50, tarif: 0.5 },
    { percent: 100, tarif: 1 },
  ];
  let intervalWeight = 0;
  for (let i = 0; i < tarif.length; i++) {
    intervalWeight = +(allowWeight + (allowWeight / 100) * tarif[i].percent).toFixed(2);
    // console.log(`допустимая - ${allowWeight}, интервал - ${intervalWeight}, интервал с -1 - ${(allowWeight-1) + ((allowWeight-1) / 100) * tarif[i].percent}, процент - ${tarif[i].percent}, тариф - ${tarif[i].tarif}, ${i}`)

    // расчет если выбран двухосные двухскатный ведущие
    if (lenivec && veduchiTrak && !isometric) {
      if (intervalWeight > 19) {
        if (weigth > 19 && i === 6) {
          return tarif[i].tarif;
        } else if (
          weigth > 19 &&
          allowWeight - 1 + ((allowWeight - 1) / 100) * tarif[i].percent > 19 &&
          weigth <= allowWeight - 1 + ((allowWeight - 1) / 100) * tarif[i].percent
        ) {
          return tarif[i].tarif;
        } else if (weigth <= 19 && intervalWeight >= 19) {
          return tarif[i].tarif;
        }
      } else {
        if (weigth <= intervalWeight) {
          return tarif[i].tarif;
        }
      }
    } else {
      // расчет обычный
      console.log(weigth, allowWeight, intervalWeight);
      if (weigth > allowWeight && weigth <= intervalWeight) {
        return tarif[i].tarif;
      } else if (weigth <= allowWeight) {
        return 0;
      } else if (i + 1 === tarif.length) {
        if (weigth > intervalWeight) {
          return 1;
        }
      }
    }
  }
};

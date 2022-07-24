import { hp, isTablet } from "../helper/global";

export default {
  16: isTablet?hp(1.8):hp(1.4),
  17: isTablet?hp(2.0):hp(1.6),
  18: isTablet?hp(2.2):hp(1.8),
  19: isTablet?hp(2.4):hp(2.0),
  20: isTablet?hp(2.6):hp(2.2),
  21: isTablet?hp(2.8):hp(2.4),
  22: isTablet?hp(3.0):hp(2.6),
  26: hp(3.6),
  30: hp(4.6)
}

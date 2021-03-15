<?php
namespace ccxt;
include_once (__DIR__.'/../../ccxt.php');
// ----------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -----------------------------------------------------------------------------

include_once (__DIR__.'/fail_on_all_errors.php');

// testDecimalToPrecisionErrorHandling
//
// $this->expectException ('ccxt\\BaseError');
// $this->expectExceptionMessageRegExp ('/Negative precision is not yet supported/');
// Exchange::decimalToPrecision ('123456.789', TRUNCATE, -2, DECIMAL_PLACES);
//
// $this->expectException ('ccxt\\BaseError');
// $this->expectExceptionMessageRegExp ('/Invalid number/');
// Exchange::decimalToPrecision ('foo');

// ----------------------------------------------------------------------------

function decimal_to_precision ($x, $roundingMode = ROUND, $numPrecisionDigits = null, $countingMode = DECIMAL_PLACES, $paddingMode = NO_PADDING) {
    return Exchange::decimal_to_precision ($x, $roundingMode, $numPrecisionDigits, $countingMode, $paddingMode);
}
function number_to_string ($x) {
    return Exchange::number_to_string ($x);
}
function toWei ($amount, $decimals) {
    return Exchange::to_wei ($amount, $decimals);
}
function fromWei ($amount, $decimals) {
    return Exchange::from_wei ($amount, $decimals);
}

// ----------------------------------------------------------------------------
// toWei / fromWei

assert (toWei (1, 18) === '1000000000000000000');
assert (toWei (1, 17) === '100000000000000000');
assert (toWei (1, 16) === '10000000000000000');
assert (toWei ('1', 18) === '1000000000000000000');
assert (toWei ('1', 17) === '100000000000000000');
assert (toWei ('1', 16) === '10000000000000000');
assert (toWei (0, 18) === '0');
assert (toWei (1, 0) === '1');
assert (toWei (1, 1) === '10');
assert (toWei (1.3, 18) === '1300000000000000000');
assert (toWei ('1.3', 18) === '1300000000000000000');
assert (toWei (1.999, 17) === '199900000000000000');
assert (toWei ('1.999', 17) === '199900000000000000');
assert (toWei ('0.1', 18) === '100000000000000000');
assert (toWei ('0.01', 18) === '10000000000000000');
assert (toWei ('0.001', 18) === '1000000000000000');
assert (toWei (0.1, 18) === '100000000000000000');
assert (toWei (0.01, 18) === '10000000000000000');
assert (toWei (0.001, 18) === '1000000000000000');
assert (toWei ('0.3323340739', 18) === '332334073900000000');
assert (toWei (0.3323340739, 18) === '332334073900000000');
assert (toWei ('0.009428', 18) === '9428000000000000');
assert (toWei (0.009428, 18) === '9428000000000000');

// $us test that we get the inverse for all these test
assert (fromWei ('1000000000000000000', 18) === 1.0);
assert (fromWei ('100000000000000000', 17) === 1.0);
assert (fromWei ('10000000000000000', 16) === 1.0);
assert (fromWei (1000000000000000000, 18) === 1.0);
assert (fromWei (100000000000000000, 17) === 1.0);
assert (fromWei (10000000000000000, 16) === 1.0);
assert (fromWei ('1300000000000000000', 18) === 1.3);
assert (fromWei (1300000000000000000, 18) === 1.3);
assert (fromWei ('199900000000000000', 17) === 1.999);
assert (fromWei (199900000000000000, 17) === 1.999);
assert (fromWei ('100000000000000000', 18) === 0.1);
assert (fromWei ('10000000000000000', 18) === 0.01);
assert (fromWei ('1000000000000000', 18) === 0.001);
assert (fromWei (100000000000000000, 18) === 0.1);
assert (fromWei (10000000000000000, 18) === 0.01);
assert (fromWei (1000000000000000, 18) === 0.001);
assert (fromWei ('332334073900000000', 18) === 0.3323340739);
assert (fromWei (332334073900000000, 18) === 0.3323340739);
assert (fromWei ('9428000000000000', 18) === 0.009428);
assert (fromWei (9428000000000000, 18) === 0.009428);

// ----------------------------------------------------------------------------
// number_to_string

assert (number_to_string (-7.8e-7) === '-0.00000078');
assert (number_to_string (7.8e-7) === '0.00000078');
assert (number_to_string (-17.805e-7) === '-0.0000017805');
assert (number_to_string (17.805e-7) === '0.0000017805');
assert (number_to_string (-7.0005e27) === '-7000500000000000000000000000');
assert (number_to_string (7.0005e27) === '7000500000000000000000000000');
assert (number_to_string (-7.9e27) === '-7900000000000000000000000000');
assert (number_to_string (7.9e27) === '7900000000000000000000000000');
assert (number_to_string (-12.345) === '-12.345');
assert (number_to_string (12.345) === '12.345');
assert (number_to_string (0) === '0');
assert (number_to_string (7.35946e21) === '7359460000000000000000');
assert (number_to_string (0.00000001) === '0.00000001');
assert (number_to_string (1e-7) === '0.0000001');
assert (number_to_string (-1e-7) === '-0.0000001');

// ----------------------------------------------------------------------------
// testDecimalToPrecisionTruncationToNDigitsAfterDot

assert (decimal_to_precision ('12.3456000', TRUNCATE, 100, DECIMAL_PLACES) === '12.3456');
assert (decimal_to_precision ('12.3456', TRUNCATE, 100, DECIMAL_PLACES) === '12.3456');
assert (decimal_to_precision ('12.3456', TRUNCATE, 4, DECIMAL_PLACES) === '12.3456');
assert (decimal_to_precision ('12.3456', TRUNCATE, 3, DECIMAL_PLACES) === '12.345');
assert (decimal_to_precision ('12.3456', TRUNCATE, 2, DECIMAL_PLACES) === '12.34');
assert (decimal_to_precision ('12.3456', TRUNCATE, 1, DECIMAL_PLACES) === '12.3');
assert (decimal_to_precision ('12.3456', TRUNCATE, 0, DECIMAL_PLACES) === '12');

assert (decimal_to_precision ('0.0000001', TRUNCATE, 8, DECIMAL_PLACES) === '0.0000001');
assert (decimal_to_precision ('0.00000001', TRUNCATE, 8, DECIMAL_PLACES) === '0.00000001');

assert (decimal_to_precision ('0.000000000', TRUNCATE, 9, DECIMAL_PLACES, PAD_WITH_ZERO) === '0.000000000');
assert (decimal_to_precision ('0.000000001', TRUNCATE, 9, DECIMAL_PLACES, PAD_WITH_ZERO) === '0.000000001');

assert (decimal_to_precision ('12.3456', TRUNCATE, -1, DECIMAL_PLACES) === '10');
assert (decimal_to_precision ('123.456', TRUNCATE, -1, DECIMAL_PLACES) === '120');
assert (decimal_to_precision ('123.456', TRUNCATE, -2, DECIMAL_PLACES) === '100');
assert (decimal_to_precision ('9.99999', TRUNCATE, -1, DECIMAL_PLACES) === '0');
assert (decimal_to_precision ('99.9999', TRUNCATE, -1, DECIMAL_PLACES) === '90');
assert (decimal_to_precision ('99.9999', TRUNCATE, -2, DECIMAL_PLACES) === '0');

assert (decimal_to_precision ('0', TRUNCATE, 0, DECIMAL_PLACES) === '0');
assert (decimal_to_precision ('-0.9', TRUNCATE, 0, DECIMAL_PLACES) === '0');

// ----------------------------------------------------------------------------
// testDecimalToPrecisionTruncationToNSignificantDigits

assert (decimal_to_precision ('0.000123456700', TRUNCATE, 100, SIGNIFICANT_DIGITS) === '0.0001234567');
assert (decimal_to_precision ('0.0001234567', TRUNCATE, 100, SIGNIFICANT_DIGITS) === '0.0001234567');
assert (decimal_to_precision ('0.0001234567', TRUNCATE, 7, SIGNIFICANT_DIGITS) === '0.0001234567');

assert (decimal_to_precision ('0.000123456', TRUNCATE, 6, SIGNIFICANT_DIGITS) === '0.000123456');
assert (decimal_to_precision ('0.000123456', TRUNCATE, 5, SIGNIFICANT_DIGITS) === '0.00012345');
assert (decimal_to_precision ('0.000123456', TRUNCATE, 2, SIGNIFICANT_DIGITS) === '0.00012');
assert (decimal_to_precision ('0.000123456', TRUNCATE, 1, SIGNIFICANT_DIGITS) === '0.0001');

assert (decimal_to_precision ('123.0000987654', TRUNCATE, 10, SIGNIFICANT_DIGITS, PAD_WITH_ZERO) === '123.0000987');
assert (decimal_to_precision ('123.0000987654', TRUNCATE, 8, SIGNIFICANT_DIGITS) === '123.00009');
assert (decimal_to_precision ('123.0000987654', TRUNCATE, 7, SIGNIFICANT_DIGITS, PAD_WITH_ZERO) === '123.0000');
assert (decimal_to_precision ('123.0000987654', TRUNCATE, 6, SIGNIFICANT_DIGITS) === '123');
assert (decimal_to_precision ('123.0000987654', TRUNCATE, 5, SIGNIFICANT_DIGITS, PAD_WITH_ZERO) === '123.00');
assert (decimal_to_precision ('123.0000987654', TRUNCATE, 4, SIGNIFICANT_DIGITS) === '123');
assert (decimal_to_precision ('123.0000987654', TRUNCATE, 4, SIGNIFICANT_DIGITS, PAD_WITH_ZERO) === '123.0');
assert (decimal_to_precision ('123.0000987654', TRUNCATE, 3, SIGNIFICANT_DIGITS, PAD_WITH_ZERO) === '123');
assert (decimal_to_precision ('123.0000987654', TRUNCATE, 2, SIGNIFICANT_DIGITS) === '120');
assert (decimal_to_precision ('123.0000987654', TRUNCATE, 1, SIGNIFICANT_DIGITS) === '100');
assert (decimal_to_precision ('123.0000987654', TRUNCATE, 1, SIGNIFICANT_DIGITS, PAD_WITH_ZERO) === '100');

assert (decimal_to_precision ('1234', TRUNCATE, 5, SIGNIFICANT_DIGITS) === '1234');
assert (decimal_to_precision ('1234', TRUNCATE, 5, SIGNIFICANT_DIGITS, PAD_WITH_ZERO) === '1234.0');
assert (decimal_to_precision ('1234', TRUNCATE, 4, SIGNIFICANT_DIGITS) === '1234');
assert (decimal_to_precision ('1234', TRUNCATE, 4, SIGNIFICANT_DIGITS, PAD_WITH_ZERO) === '1234');
assert (decimal_to_precision ('1234.69', TRUNCATE, 0, SIGNIFICANT_DIGITS) === '0');
assert (decimal_to_precision ('1234.69', TRUNCATE, 0, SIGNIFICANT_DIGITS, PAD_WITH_ZERO) === '0');

// ----------------------------------------------------------------------------
// testDecimalToPrecisionRoundingToNDigitsAfterDot

assert (decimal_to_precision ('12.3456000', ROUND, 100, DECIMAL_PLACES) === '12.3456');
assert (decimal_to_precision ('12.3456', ROUND, 100, DECIMAL_PLACES) === '12.3456');
assert (decimal_to_precision ('12.3456', ROUND, 4, DECIMAL_PLACES) === '12.3456');
assert (decimal_to_precision ('12.3456', ROUND, 3, DECIMAL_PLACES) === '12.346');
assert (decimal_to_precision ('12.3456', ROUND, 2, DECIMAL_PLACES) === '12.35');
assert (decimal_to_precision ('12.3456', ROUND, 1, DECIMAL_PLACES) === '12.3');
assert (decimal_to_precision ('12.3456', ROUND, 0, DECIMAL_PLACES) === '12');

// a problematic case in PHP
assert (decimal_to_precision ('10000', ROUND, 6, DECIMAL_PLACES) === '10000');
assert (decimal_to_precision ('0.00003186', ROUND, 8, DECIMAL_PLACES) === '0.00003186');

assert (decimal_to_precision ('12.3456', ROUND, -1, DECIMAL_PLACES) === '10');
assert (decimal_to_precision ('123.456', ROUND, -1, DECIMAL_PLACES) === '120');
assert (decimal_to_precision ('123.456', ROUND, -2, DECIMAL_PLACES) === '100');
assert (decimal_to_precision ('9.99999', ROUND, -1, DECIMAL_PLACES) === '10');
assert (decimal_to_precision ('99.9999', ROUND, -1, DECIMAL_PLACES) === '100');
assert (decimal_to_precision ('99.9999', ROUND, -2, DECIMAL_PLACES) === '100');

assert (decimal_to_precision ('9.999', ROUND, 3, DECIMAL_PLACES) === '9.999');
assert (decimal_to_precision ('9.999', ROUND, 2, DECIMAL_PLACES) === '10');
assert (decimal_to_precision ('9.999', ROUND, 2, DECIMAL_PLACES, PAD_WITH_ZERO) === '10.00');
assert (decimal_to_precision ('99.999', ROUND, 2, DECIMAL_PLACES, PAD_WITH_ZERO) === '100.00');
assert (decimal_to_precision ('-99.999', ROUND, 2, DECIMAL_PLACES, PAD_WITH_ZERO) === '-100.00');

// ----------------------------------------------------------------------------
// testDecimalToPrecisionRoundingToNSignificantDigits

assert (decimal_to_precision ('0.000123456700', ROUND, 100, SIGNIFICANT_DIGITS) === '0.0001234567');
assert (decimal_to_precision ('0.0001234567', ROUND, 100, SIGNIFICANT_DIGITS) === '0.0001234567');
assert (decimal_to_precision ('0.0001234567', ROUND, 7, SIGNIFICANT_DIGITS) === '0.0001234567');

assert (decimal_to_precision ('0.000123456', ROUND, 6, SIGNIFICANT_DIGITS) === '0.000123456');
assert (decimal_to_precision ('0.000123456', ROUND, 5, SIGNIFICANT_DIGITS) === '0.00012346');
assert (decimal_to_precision ('0.000123456', ROUND, 4, SIGNIFICANT_DIGITS) === '0.0001235');
assert (decimal_to_precision ('0.00012', ROUND, 2, SIGNIFICANT_DIGITS) === '0.00012');
assert (decimal_to_precision ('0.0001', ROUND, 1, SIGNIFICANT_DIGITS) === '0.0001');

assert (decimal_to_precision ('123.0000987654', ROUND, 7, SIGNIFICANT_DIGITS) === '123.0001');
assert (decimal_to_precision ('123.0000987654', ROUND, 6, SIGNIFICANT_DIGITS) === '123');

assert (decimal_to_precision ('0.00098765', ROUND, 2, SIGNIFICANT_DIGITS) === '0.00099');
assert (decimal_to_precision ('0.00098765', ROUND, 2, SIGNIFICANT_DIGITS, PAD_WITH_ZERO) === '0.00099');

assert (decimal_to_precision ('0.00098765', ROUND, 1, SIGNIFICANT_DIGITS) === '0.001');
assert (decimal_to_precision ('0.00098765', ROUND, 10, SIGNIFICANT_DIGITS, PAD_WITH_ZERO) === '0.0009876500000');

assert (decimal_to_precision ('0.098765', ROUND, 1, SIGNIFICANT_DIGITS, PAD_WITH_ZERO) === '0.1');

assert (decimal_to_precision ('0', ROUND, 0, SIGNIFICANT_DIGITS) === '0');
assert (decimal_to_precision ('-0.123', ROUND, 0, SIGNIFICANT_DIGITS) === '0');

assert (decimal_to_precision ('0.00000044', ROUND, 5, SIGNIFICANT_DIGITS) === '0.00000044');

// ----------------------------------------------------------------------------
// testDecimalToPrecisionRoundingToTickSize

assert (decimal_to_precision ('0.000123456700', ROUND, 0.00012, TICK_SIZE) === '0.00012');
assert (decimal_to_precision ('0.0001234567', ROUND, 0.00013, TICK_SIZE) === '0.00013');
assert (decimal_to_precision ('0.0001234567', TRUNCATE, 0.00013, TICK_SIZE) === '0');
assert (decimal_to_precision ('101.000123456700', ROUND, 100, TICK_SIZE) === '100');
assert (decimal_to_precision ('0.000123456700', ROUND, 100, TICK_SIZE) === '0');
assert (decimal_to_precision ('165', TRUNCATE, 110, TICK_SIZE) === '110');
assert (decimal_to_precision ('3210', TRUNCATE, 1110, TICK_SIZE) === '2220');
assert (decimal_to_precision ('165', ROUND, 110, TICK_SIZE) === '220');
assert (decimal_to_precision ('0.000123456789', ROUND, 0.00000012, TICK_SIZE) === '0.00012348');
assert (decimal_to_precision ('0.000123456789', TRUNCATE, 0.00000012, TICK_SIZE) === '0.00012336');
assert (decimal_to_precision ('0.000273398', ROUND, 1e-7, TICK_SIZE) === '0.0002734');

assert (decimal_to_precision ('0.01', ROUND, 0.0001, TICK_SIZE, PAD_WITH_ZERO) === '0.0100');
assert (decimal_to_precision ('0.01', TRUNCATE, 0.0001, TICK_SIZE, PAD_WITH_ZERO) === '0.0100');

assert (decimal_to_precision ('-0.000123456789', ROUND, 0.00000012, TICK_SIZE) === '-0.00012348');
assert (decimal_to_precision ('-0.000123456789', TRUNCATE, 0.00000012, TICK_SIZE) === '-0.00012336');
assert (decimal_to_precision ('-165', TRUNCATE, 110, TICK_SIZE) === '-110');
assert (decimal_to_precision ('-165', ROUND, 110, TICK_SIZE) === '-220');
assert (decimal_to_precision ('-1650', TRUNCATE, 1100, TICK_SIZE) === '-1100');
assert (decimal_to_precision ('-1650', ROUND, 1100, TICK_SIZE) === '-2200');

assert (decimal_to_precision ('0.0006', TRUNCATE, 0.0001, TICK_SIZE) === '0.0006');
assert (decimal_to_precision ('-0.0006', TRUNCATE, 0.0001, TICK_SIZE) === '-0.0006');
assert (decimal_to_precision ('0.6', TRUNCATE, 0.2, TICK_SIZE) === '0.6');
assert (decimal_to_precision ('-0.6', TRUNCATE, 0.2, TICK_SIZE) === '-0.6');
assert (decimal_to_precision ('1.2', ROUND, 0.4, TICK_SIZE) === '1.2');
assert (decimal_to_precision ('-1.2', ROUND, 0.4, TICK_SIZE) === '-1.2');
assert (decimal_to_precision ('1.2', ROUND, 0.02, TICK_SIZE) === '1.2');
assert (decimal_to_precision ('-1.2', ROUND, 0.02, TICK_SIZE) === '-1.2');
assert (decimal_to_precision ('44', ROUND, 4.4, TICK_SIZE) === '44');
assert (decimal_to_precision ('-44', ROUND, 4.4, TICK_SIZE) === '-44');
assert (decimal_to_precision ('44.00000001', ROUND, 4.4, TICK_SIZE) === '44');
assert (decimal_to_precision ('-44.00000001', ROUND, 4.4, TICK_SIZE) === '-44');

// https://github.com/ccxt/ccxt/issues/6731
assert (decimal_to_precision ('20', TRUNCATE, 0.00000001, TICK_SIZE) === '20');

// ----------------------------------------------------------------------------
// testDecimalToPrecisionNegativeNumbers

assert (decimal_to_precision ('-0.123456', TRUNCATE, 5, DECIMAL_PLACES) === '-0.12345');
assert (decimal_to_precision ('-0.123456', ROUND, 5, DECIMAL_PLACES) === '-0.12346');

// ----------------------------------------------------------------------------
// decimal_to_precision => without dot / trailing dot

assert (decimal_to_precision ('123', TRUNCATE, 0) === '123');

assert (decimal_to_precision ('123', TRUNCATE, 5, DECIMAL_PLACES) === '123');
assert (decimal_to_precision ('123', TRUNCATE, 5, DECIMAL_PLACES, PAD_WITH_ZERO) === '123.00000');

assert (decimal_to_precision ('123.', TRUNCATE, 0, DECIMAL_PLACES) === '123');
assert (decimal_to_precision ('123.', TRUNCATE, 5, DECIMAL_PLACES, PAD_WITH_ZERO) === '123.00000');

assert (decimal_to_precision ('0.', TRUNCATE, 0) === '0');
assert (decimal_to_precision ('0.', TRUNCATE, 5, DECIMAL_PLACES, PAD_WITH_ZERO) === '0.00000');

// ----------------------------------------------------------------------------
// decimal_to_precision => rounding for equidistant digits

assert (decimal_to_precision ('1.44', ROUND, 1, DECIMAL_PLACES) === '1.4');
assert (decimal_to_precision ('1.45', ROUND, 1, DECIMAL_PLACES) === '1.5');
assert (decimal_to_precision ('1.45', ROUND, 0, DECIMAL_PLACES) === '1'); // not 2

// ----------------------------------------------------------------------------
// negative precision only implemented so far in python
// pretty useless for decimal applications as anything |$x| < 5 === 0
// NO_PADDING and PAD_WITH_ZERO are ignored

assert (decimal_to_precision ('5', ROUND, -1, DECIMAL_PLACES) === '10');
assert (decimal_to_precision ('4.999', ROUND, -1, DECIMAL_PLACES) === '0');
assert (decimal_to_precision ('0.0431531423', ROUND, -1, DECIMAL_PLACES) === '0');
assert (decimal_to_precision ('-69.3', ROUND, -1, DECIMAL_PLACES) === '-70');
assert (decimal_to_precision ('5001', ROUND, -4, DECIMAL_PLACES) === '10000');
assert (decimal_to_precision ('4999.999', ROUND, -4, DECIMAL_PLACES) === '0');

assert (decimal_to_precision ('69.3', TRUNCATE, -2, DECIMAL_PLACES) === '0');
assert (decimal_to_precision ('-69.3', TRUNCATE, -2, DECIMAL_PLACES) === '0');
assert (decimal_to_precision ('69.3', TRUNCATE, -1, SIGNIFICANT_DIGITS) === '60');
assert (decimal_to_precision ('-69.3', TRUNCATE, -1, SIGNIFICANT_DIGITS) === '-60');
assert (decimal_to_precision ('69.3', TRUNCATE, -2, SIGNIFICANT_DIGITS) === '0');
assert (decimal_to_precision ('1602000000000000000000', TRUNCATE, 3, SIGNIFICANT_DIGITS) === '1600000000000000000000');

// ----------------------------------------------------------------------------
// testDecimalToPrecisionErrorHandling (todo)
//
// throws (() =>
//     decimal_to_precision ('123456.789', TRUNCATE, -2, DECIMAL_PLACES),
//         'negative precision is not yet supported')
//
// throws (() =>
//     decimal_to_precision ('foo'),
//         "invalid number (contains an illegal character 'f')")
//
// throws (() =>
//     decimal_to_precision ('0.01', TRUNCATE, -1, TICK_SIZE),
//         "TICK_SIZE cant be used with negative numPrecisionDigits")

// ----------------------------------------------------------------------------

$w = new Precise ('-1.123e-6');
$x = new Precise ('0.00000002');
$y = new Precise ('69696900000');
$z = new Precise ('12');

assert (strval($w) === '-0.000001123');
assert (strval($x) === '0.00000002');
assert (strval($y) === '69696900000');
assert (strval($z) === '12');

assert (strval($x->mul ($y)) === '1393.938');
assert (strval($y->mul ($x)) === '1393.938');
assert (strval($x->add ($y)) === '69696900000.00000002');
assert (strval($y->add ($x)) === '69696900000.00000002');
assert (strval($x->sub ($y)) === '-69696899999.99999998');
assert (strval($y->sub ($x)) === '69696899999.99999998');
assert (strval($x->div ($y, 18)) === '0.000000000000028695');
assert (strval($y->div ($x, 18)) === '34848450000');
assert (strval($x->div ($y, 17)) === '0.00000000000002869');
assert (strval($y->div ($x, 17)) === '34848450000');

assert (strval($x->mul ($w)) === '-0.00000000000002246');
assert (strval($w->mul ($x)) === '-0.00000000000002246');
assert (strval($x->add ($w)) === '-0.000001103');
assert (strval($w->add ($x)) === '-0.000001103');
assert (strval($x->sub ($w)) === '0.000001143');
assert (strval($w->sub ($x)) === '-0.000001143');
assert (strval($x->div ($w, 18)) === '-0.000000000017809439');
assert (strval($w->div ($x, 18)) === '-0.0000005615');

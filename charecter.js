import {
  drawBottomHalfCircle,
  drawBresenhamCircle,
  drawDDALine,
  drawLeftHalfCircle,
  drawRightHalfCircle,
} from "./algorithm.js";
var Y_MAX = 250;
var Y_MIN = 200;
var X_MIN = (pos) => pos * 50 + 100;
var X_MAX = (pos) => pos * 50 + 100 + 25;
var xQuadLength = (pos) => (X_MAX(pos) - X_MIN(pos)) / 4;
var yQuadLength = (Y_MAX - Y_MIN) / 4;
var X_MIDDLE = (pos) => X_MIN(pos) + xQuadLength(pos) * 2;
var Y_MIDDLE = Y_MIN + yQuadLength * 2;

function drawLeftLine(pos, startPoint = 0, endPoint = 4) {
  const x1 = X_MIN(pos);
  const y1 = Y_MIN + yQuadLength * startPoint;

  const x2 = X_MIN(pos);
  const y2 = Y_MIN + yQuadLength * endPoint;

  drawDDALine(x1, y1, x2, y2);
}

function drawRightLine(pos, startPoint = 0, endPoint = 4) {
  const x1 = X_MAX(pos);
  const y1 = Y_MIN + yQuadLength * startPoint;

  const x2 = X_MAX(pos);
  const y2 = Y_MIN + yQuadLength * endPoint;

  drawDDALine(x1, y1, x2, y2);
}

function drawTopLine(pos, startPoint = 0, endPoint = 4) {
  const x1 = X_MIN(pos) + xQuadLength(pos) * startPoint;
  const y1 = Y_MIN;

  const x2 = X_MIN(pos) + xQuadLength(pos) * endPoint;
  const y2 = Y_MIN;

  drawDDALine(x1, y1, x2, y2);
}

function drawBottomLine(pos, startPoint = 0, endPoint = 4) {
  const x1 = X_MIN(pos) + xQuadLength(pos) * startPoint;
  const y1 = Y_MAX;

  const x2 = X_MIN(pos) + xQuadLength(pos) * endPoint;
  const y2 = Y_MAX;

  drawDDALine(x1, y1, x2, y2);
}

function drawHorizontalMiddleLine(pos, startPoint = 0, endPoint = 4) {
  const x1 = X_MIN(pos) + xQuadLength(pos) * startPoint;
  const y1 = Y_MIN + 2 * yQuadLength;

  const x2 = X_MIN(pos) + xQuadLength(pos) * endPoint;
  const y2 = y1;

  drawDDALine(x1, y1, x2, y2);
}

function drawVerticleMiddleLine(pos, startPoint = 0, endPoint = 4) {
  const x1 = X_MIN(pos) + 2 * xQuadLength(pos);
  const y1 = Y_MIN + yQuadLength * startPoint;

  const x2 = x1;
  const y2 = Y_MIN + yQuadLength * endPoint;

  drawDDALine(x1, y1, x2, y2);
}

function square(pos) {
  drawBottomLine(pos);
  drawLeftLine(pos);
  drawRightLine(pos);
  drawTopLine(pos);
}

function A(pos = 2) {
  const topX = (X_MAX(pos) + X_MIN(pos)) / 2;
  drawDDALine(topX, Y_MIN, X_MIN(pos), Y_MAX);
  drawDDALine(topX, Y_MIN, X_MAX(pos), Y_MAX);
  drawDDALine(
    (topX + X_MIN(pos)) / 2,
    (Y_MIN + Y_MAX) / 2,
    (topX + X_MAX(pos)) / 2,
    (Y_MIN + Y_MAX) / 2
  );
}

function B(pos) {
  const r = (Y_MAX - Y_MIN) / 4;
  drawLeftLine(pos);
  drawTopLine(pos, 0, 3);
  drawBottomLine(pos, 0, 3);
  drawRightHalfCircle(
    X_MIN(pos) + ((X_MAX(pos) - X_MIN(pos)) / 4) * 3,
    Y_MIN + (Y_MAX - Y_MIN) / 4,
    r
  );
  drawRightHalfCircle(
    X_MIN(pos) + ((X_MAX(pos) - X_MIN(pos)) / 4) * 3,
    Y_MIN + ((Y_MAX - Y_MIN) / 4) * 3,
    r
  );
}

function C(pos) {
  drawLeftHalfCircle(
    X_MAX(pos) - (X_MAX(pos) - X_MIN(pos)) / 4,
    Y_MIN + (Y_MAX - Y_MIN) / 2,
    (Y_MAX - Y_MIN) / 2
  );
  drawTopLine(pos, 2, 4);
  drawBottomLine(pos, 2, 4);
}

function D(pos) {
  const r = 2 * yQuadLength;
  drawLeftLine(pos);
  drawRightHalfCircle(X_MIN(pos), Y_MIN + r, r);
}

function F(pos) {
  drawLeftLine(pos);
  drawTopLine(pos);
  drawHorizontalMiddleLine(pos, 0, 3);
}

function E(pos) {
  F(pos);
  drawBottomLine(pos);
}

function G(pos) {
  const r = yQuadLength * 2;
  const x = X_MAX(pos) - xQuadLength(pos);
  drawLeftHalfCircle(x, Y_MIN + r, r);
  drawRightLine(pos, 2, 4);
  drawBottomLine(pos, 3, 4);
  drawTopLine(pos, 3, 4);
  drawHorizontalMiddleLine(pos, 2, 4);
}

function H(pos) {
  drawLeftLine(pos);
  drawRightLine(pos);
  drawHorizontalMiddleLine(pos);
}

function I(pos) {
  drawTopLine(pos);
  drawVerticleMiddleLine(pos);
  drawBottomLine(pos);
}

function J(pos) {
  const x = X_MIN(pos) + 2 * xQuadLength(pos);
  const r = xQuadLength(pos) * 2;
  const y = Y_MAX - yQuadLength;
  drawTopLine(pos);
  drawRightLine(pos, 0, 3);
  drawBottomHalfCircle(x, y, r);
}

function K(pos) {
  const xm = X_MIN(pos);
  const ym = Y_MIN + 2 * yQuadLength;
  drawLeftLine(pos);
  drawDDALine(xm, ym, X_MAX(pos), Y_MIN);
  drawDDALine(xm, ym, X_MAX(pos), Y_MAX);
}

function L(pos) {
  drawLeftLine(pos);
  drawBottomLine(pos);
}

function M(pos) {
  drawLeftLine(pos);
  drawRightLine(pos);
  drawDDALine(X_MIN(pos), Y_MIN, X_MIDDLE(pos), Y_MIDDLE);
  drawDDALine(X_MAX(pos), Y_MIN, X_MIDDLE(pos), Y_MIDDLE);
}

function N(pos) {
  drawLeftLine(pos);
  drawRightLine(pos);
  drawDDALine(X_MIN(pos), Y_MIN, X_MAX(pos), Y_MAX);
}

function O(pos) {
  drawBresenhamCircle(X_MIDDLE(pos), Y_MIDDLE, yQuadLength * 2);
}

function P(pos) {
  drawLeftLine(pos);
  drawTopLine(pos, 0, 2);
  drawHorizontalMiddleLine(pos, 0, 2);
  drawRightHalfCircle(
    X_MIN(pos) + xQuadLength(pos) * 2,
    Y_MIN + yQuadLength,
    yQuadLength
  );
}

function Q(pos) {
  O(pos);
  drawDDALine(
    X_MIDDLE(pos),
    Y_MIDDLE,
    X_MAX(pos) + xQuadLength(pos),
    Y_MAX + yQuadLength
  );
}

function R(pos) {
  P(pos);
  drawDDALine(X_MIN(pos), Y_MIDDLE, X_MAX(pos), Y_MAX);
}

function S(pos) {
  drawTopLine(pos, 1, 4);
  drawBottomLine(pos, 0, 3);
  drawLeftHalfCircle(
    X_MIN(pos) + xQuadLength(pos),
    Y_MIN + yQuadLength,
    yQuadLength
  );
  drawRightHalfCircle(
    X_MIN(pos) + xQuadLength(pos) * 3,
    Y_MIN + yQuadLength * 3,
    yQuadLength
  );
  drawHorizontalMiddleLine(pos, 1, 3);
  // drawHorizontalMiddleLine(pos);
}

function T(pos) {
  drawTopLine(pos);
  drawVerticleMiddleLine(pos);
}

function U(pos) {
  drawLeftLine(pos, 0, 3);
  drawRightLine(pos, 0, 3);
  drawBottomHalfCircle(
    X_MIDDLE(pos),
    Y_MIDDLE + yQuadLength,
    xQuadLength(pos) * 2
  );
}

function V(pos) {
  drawDDALine(X_MIN(pos), Y_MIN, X_MIN(pos) + xQuadLength(pos) * 2, Y_MAX);
  drawDDALine(X_MAX(pos), Y_MIN, X_MIN(pos) + xQuadLength(pos) * 2, Y_MAX);
}

function W(pos) {
  drawDDALine(X_MIN(pos), Y_MIN, X_MIN(pos) + xQuadLength(pos), Y_MAX);
  drawDDALine(X_MIN(pos) + xQuadLength(pos), Y_MAX, X_MIDDLE(pos), Y_MIDDLE);
  drawDDALine(X_MAX(pos), Y_MIN, X_MIN(pos) + xQuadLength(pos) * 3, Y_MAX);
  drawDDALine(
    X_MIN(pos) + xQuadLength(pos) * 3,
    Y_MAX,
    X_MIDDLE(pos),
    Y_MIDDLE
  );
}

function X(pos) {
  drawDDALine(X_MIN(pos), Y_MIN, X_MAX(pos), Y_MAX);
  drawDDALine(X_MAX(pos), Y_MIN, X_MIN(pos), Y_MAX);
}

function Y(pos) {
  drawDDALine(X_MIN(pos), Y_MIN, X_MIDDLE(pos), Y_MIDDLE);
  drawDDALine(X_MAX(pos), Y_MIN, X_MIDDLE(pos), Y_MIDDLE);
  drawDDALine(X_MIDDLE(pos), Y_MIDDLE, X_MIDDLE(pos), Y_MAX);
}

function Z(pos) {
  drawTopLine(pos);
  drawBottomLine(pos);
  drawDDALine(X_MAX(pos), Y_MIN, X_MIN(pos), Y_MAX);
}

export const charecters = [
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
  U,
  V,
  W,
  X,
  Y,
  Z,
];

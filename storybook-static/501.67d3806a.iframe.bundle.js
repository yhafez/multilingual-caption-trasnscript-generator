/*! For license information please see 501.67d3806a.iframe.bundle.js.LICENSE.txt */
;(self.webpackChunknext_template = self.webpackChunknext_template || []).push([
	[501],
	{
		'./node_modules/.pnpm/axe-core@4.5.2/node_modules/axe-core/axe.js': function (
			module,
			exports,
			__webpack_require__,
		) {
			module = __webpack_require__.nmd(module)
			var __WEBPACK_AMD_DEFINE_FACTORY__,
				__WEBPACK_AMD_DEFINE_RESULT__,
				process = __webpack_require__(
					'./node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js',
				)
			!(function axeFunction(window) {
				var global = window,
					document = window.document
				function _typeof(obj) {
					return (
						(_typeof =
							'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
								? function (obj) {
										return typeof obj
								  }
								: function (obj) {
										return obj &&
											'function' == typeof Symbol &&
											obj.constructor === Symbol &&
											obj !== Symbol.prototype
											? 'symbol'
											: typeof obj
								  }),
						_typeof(obj)
					)
				}
				var axe = axe || {}
				function SupportError(error) {
					;(this.name = 'SupportError'),
						(this.cause = error.cause),
						(this.message = '`'.concat(
							error.cause,
							'` - feature unsupported in your environment.',
						)),
						error.ruleId &&
							((this.ruleId = error.ruleId),
							(this.message += ' Skipping '.concat(this.ruleId, ' rule.'))),
						(this.stack = new Error().stack)
				}
				;(axe.version = '4.5.2'),
					void 0 ===
						(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
							return axe
						}.apply(exports, [])) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__),
					'object' === _typeof(module) &&
						module.exports &&
						'function' == typeof axeFunction.toString &&
						((axe.source =
							'(' + axeFunction.toString() + ')(typeof window === "object" ? window : this);'),
						(module.exports = axe)),
					'function' == typeof window.getComputedStyle && (window.axe = axe),
					(SupportError.prototype = Object.create(Error.prototype)),
					(SupportError.prototype.constructor = SupportError)
				var _excluded = ['node'],
					_excluded2 = ['node'],
					_excluded3 = ['variant'],
					_excluded4 = ['matches'],
					_excluded5 = ['chromium'],
					_excluded6 = ['noImplicit'],
					_excluded7 = ['noPresentational'],
					_excluded8 = ['nodes'],
					_excluded9 = ['node'],
					_excluded10 = ['relatedNodes'],
					_excluded11 = ['environmentData'],
					_excluded12 = ['environmentData'],
					_excluded13 = ['node'],
					_excluded14 = ['environmentData'],
					_excluded15 = ['environmentData'],
					_excluded16 = ['environmentData']
				function _inherits(subClass, superClass) {
					if ('function' != typeof superClass && null !== superClass)
						throw new TypeError('Super expression must either be null or a function')
					;(subClass.prototype = Object.create(superClass && superClass.prototype, {
						constructor: { value: subClass, writable: !0, configurable: !0 },
					})),
						Object.defineProperty(subClass, 'prototype', { writable: !1 }),
						superClass && _setPrototypeOf(subClass, superClass)
				}
				function _setPrototypeOf(o, p) {
					return (
						(_setPrototypeOf = Object.setPrototypeOf
							? Object.setPrototypeOf.bind()
							: function _setPrototypeOf(o, p) {
									return (o.__proto__ = p), o
							  }),
						_setPrototypeOf(o, p)
					)
				}
				function _createSuper(Derived) {
					var hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
						if ('undefined' == typeof Reflect || !Reflect.construct) return !1
						if (Reflect.construct.sham) return !1
						if ('function' == typeof Proxy) return !0
						try {
							return (
								Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
							)
						} catch (e) {
							return !1
						}
					})()
					return function _createSuperInternal() {
						var result,
							Super = _getPrototypeOf(Derived)
						if (hasNativeReflectConstruct) {
							var NewTarget = _getPrototypeOf(this).constructor
							result = Reflect.construct(Super, arguments, NewTarget)
						} else result = Super.apply(this, arguments)
						return _possibleConstructorReturn(this, result)
					}
				}
				function _possibleConstructorReturn(self, call) {
					if (call && ('object' === _typeof(call) || 'function' == typeof call)) return call
					if (void 0 !== call)
						throw new TypeError('Derived constructors may only return object or undefined')
					return _assertThisInitialized(self)
				}
				function _assertThisInitialized(self) {
					if (void 0 === self)
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
					return self
				}
				function _getPrototypeOf(o) {
					return (
						(_getPrototypeOf = Object.setPrototypeOf
							? Object.getPrototypeOf.bind()
							: function _getPrototypeOf(o) {
									return o.__proto__ || Object.getPrototypeOf(o)
							  }),
						_getPrototypeOf(o)
					)
				}
				function _objectWithoutProperties(source, excluded) {
					if (null == source) return {}
					var key,
						i,
						target = (function _objectWithoutPropertiesLoose(source, excluded) {
							if (null == source) return {}
							var key,
								i,
								target = {},
								sourceKeys = Object.keys(source)
							for (i = 0; i < sourceKeys.length; i++)
								(key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key])
							return target
						})(source, excluded)
					if (Object.getOwnPropertySymbols) {
						var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
						for (i = 0; i < sourceSymbolKeys.length; i++)
							(key = sourceSymbolKeys[i]),
								excluded.indexOf(key) >= 0 ||
									(Object.prototype.propertyIsEnumerable.call(source, key) &&
										(target[key] = source[key]))
					}
					return target
				}
				function _toConsumableArray(arr) {
					return (
						(function _arrayWithoutHoles(arr) {
							if (Array.isArray(arr)) return _arrayLikeToArray(arr)
						})(arr) ||
						(function _iterableToArray(iter) {
							if (
								('undefined' != typeof Symbol && null != iter[Symbol.iterator]) ||
								null != iter['@@iterator']
							)
								return Array.from(iter)
						})(arr) ||
						_unsupportedIterableToArray(arr) ||
						(function _nonIterableSpread() {
							throw new TypeError(
								'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
							)
						})()
					)
				}
				function _extends() {
					return (
						(_extends = Object.assign
							? Object.assign.bind()
							: function (target) {
									for (var i = 1; i < arguments.length; i++) {
										var source = arguments[i]
										for (var key in source)
											Object.prototype.hasOwnProperty.call(source, key) &&
												(target[key] = source[key])
									}
									return target
							  }),
						_extends.apply(this, arguments)
					)
				}
				function _slicedToArray(arr, i) {
					return (
						(function _arrayWithHoles(arr) {
							if (Array.isArray(arr)) return arr
						})(arr) ||
						(function _iterableToArrayLimit(arr, i) {
							var _i =
								null == arr
									? null
									: ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator']
							if (null == _i) return
							var _s,
								_e,
								_arr = [],
								_n = !0,
								_d = !1
							try {
								for (
									_i = _i.call(arr);
									!(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i);
									_n = !0
								);
							} catch (err) {
								;(_d = !0), (_e = err)
							} finally {
								try {
									_n || null == _i.return || _i.return()
								} finally {
									if (_d) throw _e
								}
							}
							return _arr
						})(arr, i) ||
						_unsupportedIterableToArray(arr, i) ||
						(function _nonIterableRest() {
							throw new TypeError(
								'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
							)
						})()
					)
				}
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor))
						throw new TypeError('Cannot call a class as a function')
				}
				function _defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i]
						;(descriptor.enumerable = descriptor.enumerable || !1),
							(descriptor.configurable = !0),
							'value' in descriptor && (descriptor.writable = !0),
							Object.defineProperty(target, descriptor.key, descriptor)
					}
				}
				function _createClass(Constructor, protoProps, staticProps) {
					return (
						protoProps && _defineProperties(Constructor.prototype, protoProps),
						staticProps && _defineProperties(Constructor, staticProps),
						Object.defineProperty(Constructor, 'prototype', { writable: !1 }),
						Constructor
					)
				}
				function _createForOfIteratorHelper(o, allowArrayLike) {
					var it = ('undefined' != typeof Symbol && o[Symbol.iterator]) || o['@@iterator']
					if (!it) {
						if (
							Array.isArray(o) ||
							(it = _unsupportedIterableToArray(o)) ||
							(allowArrayLike && o && 'number' == typeof o.length)
						) {
							it && (o = it)
							var i = 0,
								F = function F() {}
							return {
								s: F,
								n: function n() {
									return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] }
								},
								e: function e(_e2) {
									throw _e2
								},
								f: F,
							}
						}
						throw new TypeError(
							'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
						)
					}
					var err,
						normalCompletion = !0,
						didErr = !1
					return {
						s: function s() {
							it = it.call(o)
						},
						n: function n() {
							var step = it.next()
							return (normalCompletion = step.done), step
						},
						e: function e(_e3) {
							;(didErr = !0), (err = _e3)
						},
						f: function f() {
							try {
								normalCompletion || null == it.return || it.return()
							} finally {
								if (didErr) throw err
							}
						},
					}
				}
				function _unsupportedIterableToArray(o, minLen) {
					if (o) {
						if ('string' == typeof o) return _arrayLikeToArray(o, minLen)
						var n = Object.prototype.toString.call(o).slice(8, -1)
						return (
							'Object' === n && o.constructor && (n = o.constructor.name),
							'Map' === n || 'Set' === n
								? Array.from(o)
								: 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
								? _arrayLikeToArray(o, minLen)
								: void 0
						)
					}
				}
				function _arrayLikeToArray(arr, len) {
					;(null == len || len > arr.length) && (len = arr.length)
					for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
					return arr2
				}
				function _typeof(obj) {
					return (
						(_typeof =
							'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
								? function (obj) {
										return typeof obj
								  }
								: function (obj) {
										return obj &&
											'function' == typeof Symbol &&
											obj.constructor === Symbol &&
											obj !== Symbol.prototype
											? 'symbol'
											: typeof obj
								  }),
						_typeof(obj)
					)
				}
				!(function () {
					var __create = Object.create,
						__defProp = Object.defineProperty,
						__getProtoOf = Object.getPrototypeOf,
						__hasOwnProp = Object.prototype.hasOwnProperty,
						__getOwnPropNames = Object.getOwnPropertyNames,
						__getOwnPropDesc = Object.getOwnPropertyDescriptor,
						__commonJS = function __commonJS(cb, mod) {
							return function () {
								return mod || cb((mod = { exports: {} }).exports, mod), mod.exports
							}
						},
						__export = function __export(target, all) {
							for (var name in all) __defProp(target, name, { get: all[name], enumerable: !0 })
						},
						__toModule = function __toModule(module) {
							return (function __exportStar(target, module, desc) {
								if ((module && 'object' === _typeof(module)) || 'function' == typeof module) {
									var _step,
										_iterator = _createForOfIteratorHelper(__getOwnPropNames(module))
									try {
										var _loop = function _loop() {
											var key = _step.value
											__hasOwnProp.call(target, key) ||
												'default' === key ||
												__defProp(target, key, {
													get: function get() {
														return module[key]
													},
													enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable,
												})
										}
										for (_iterator.s(); !(_step = _iterator.n()).done; ) _loop()
									} catch (err) {
										_iterator.e(err)
									} finally {
										_iterator.f()
									}
								}
								return target
							})(
								(function __markAsModule(target) {
									return __defProp(target, '__esModule', { value: !0 })
								})(
									__defProp(
										null != module ? __create(__getProtoOf(module)) : {},
										'default',
										module && module.__esModule && 'default' in module
											? {
													get: function get() {
														return module.default
													},
													enumerable: !0,
											  }
											: { value: module, enumerable: !0 },
									),
								),
								module,
							)
						},
						require_utils = __commonJS(function (exports) {
							'use strict'
							Object.defineProperty(exports, '__esModule', { value: !0 }),
								(exports.isIdentStart = function isIdentStart(c) {
									return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || '-' === c || '_' === c
								}),
								(exports.isIdent = function isIdent(c) {
									return (
										(c >= 'a' && c <= 'z') ||
										(c >= 'A' && c <= 'Z') ||
										(c >= '0' && c <= '9') ||
										'-' === c ||
										'_' === c
									)
								}),
								(exports.isHex = function isHex(c) {
									return (c >= 'a' && c <= 'f') || (c >= 'A' && c <= 'F') || (c >= '0' && c <= '9')
								}),
								(exports.escapeIdentifier = function escapeIdentifier(s) {
									for (var len = s.length, result = '', i = 0; i < len; ) {
										var chr = s.charAt(i)
										if (exports.identSpecialChars[chr]) result += '\\' + chr
										else if (
											'_' === chr ||
											'-' === chr ||
											(chr >= 'A' && chr <= 'Z') ||
											(chr >= 'a' && chr <= 'z') ||
											(0 !== i && chr >= '0' && chr <= '9')
										)
											result += chr
										else {
											var charCode = chr.charCodeAt(0)
											if (55296 == (63488 & charCode)) {
												var extraCharCode = s.charCodeAt(i++)
												if (55296 != (64512 & charCode) || 56320 != (64512 & extraCharCode))
													throw Error('UCS-2(decode): illegal sequence')
												charCode = ((1023 & charCode) << 10) + (1023 & extraCharCode) + 65536
											}
											result += '\\' + charCode.toString(16) + ' '
										}
										i++
									}
									return result
								}),
								(exports.escapeStr = function escapeStr(s) {
									for (var replacement, len = s.length, result = '', i = 0; i < len; ) {
										var chr = s.charAt(i)
										'"' === chr
											? (chr = '\\"')
											: '\\' === chr
											? (chr = '\\\\')
											: void 0 !== (replacement = exports.strReplacementsRev[chr]) &&
											  (chr = replacement),
											(result += chr),
											i++
									}
									return '"' + result + '"'
								}),
								(exports.identSpecialChars = {
									'!': !0,
									'"': !0,
									'#': !0,
									$: !0,
									'%': !0,
									'&': !0,
									"'": !0,
									'(': !0,
									')': !0,
									'*': !0,
									'+': !0,
									',': !0,
									'.': !0,
									'/': !0,
									';': !0,
									'<': !0,
									'=': !0,
									'>': !0,
									'?': !0,
									'@': !0,
									'[': !0,
									'\\': !0,
									']': !0,
									'^': !0,
									'`': !0,
									'{': !0,
									'|': !0,
									'}': !0,
									'~': !0,
								}),
								(exports.strReplacementsRev = {
									'\n': '\\n',
									'\r': '\\r',
									'\t': '\\t',
									'\f': '\\f',
									'\v': '\\v',
								}),
								(exports.singleQuoteEscapeChars = {
									n: '\n',
									r: '\r',
									t: '\t',
									f: '\f',
									'\\': '\\',
									"'": "'",
								}),
								(exports.doubleQuotesEscapeChars = {
									n: '\n',
									r: '\r',
									t: '\t',
									f: '\f',
									'\\': '\\',
									'"': '"',
								})
						}),
						require_parser_context = __commonJS(function (exports) {
							'use strict'
							Object.defineProperty(exports, '__esModule', { value: !0 })
							var utils_1 = require_utils()
							exports.parseCssSelector = function parseCssSelector(
								str,
								pos,
								pseudos,
								attrEqualityMods,
								ruleNestingOperators,
								substitutesEnabled,
							) {
								var l = str.length,
									chr = ''
								function getStr(quote, escapeTable) {
									var result = ''
									for (pos++, chr = str.charAt(pos); pos < l; ) {
										if (chr === quote) return pos++, result
										if ('\\' === chr) {
											pos++
											var esc = void 0
											if ((chr = str.charAt(pos)) === quote) result += quote
											else if (void 0 !== (esc = escapeTable[chr])) result += esc
											else {
												if (utils_1.isHex(chr)) {
													var hex = chr
													for (pos++, chr = str.charAt(pos); utils_1.isHex(chr); )
														(hex += chr), pos++, (chr = str.charAt(pos))
													' ' === chr && (pos++, (chr = str.charAt(pos))),
														(result += String.fromCharCode(parseInt(hex, 16)))
													continue
												}
												result += chr
											}
										} else result += chr
										pos++, (chr = str.charAt(pos))
									}
									return result
								}
								function getIdent() {
									var result = ''
									for (chr = str.charAt(pos); pos < l; ) {
										if (utils_1.isIdent(chr)) result += chr
										else {
											if ('\\' !== chr) return result
											if (++pos >= l) throw Error('Expected symbol but end of file reached.')
											if (((chr = str.charAt(pos)), utils_1.identSpecialChars[chr])) result += chr
											else {
												if (utils_1.isHex(chr)) {
													var hex = chr
													for (pos++, chr = str.charAt(pos); utils_1.isHex(chr); )
														(hex += chr), pos++, (chr = str.charAt(pos))
													' ' === chr && (pos++, (chr = str.charAt(pos))),
														(result += String.fromCharCode(parseInt(hex, 16)))
													continue
												}
												result += chr
											}
										}
										pos++, (chr = str.charAt(pos))
									}
									return result
								}
								function skipWhitespace() {
									chr = str.charAt(pos)
									for (
										var result = !1;
										' ' === chr || '\t' === chr || '\n' === chr || '\r' === chr || '\f' === chr;

									)
										(result = !0), pos++, (chr = str.charAt(pos))
									return result
								}
								function parseSelector() {
									var selector = parseSingleSelector()
									if (!selector) return null
									var res = selector
									for (chr = str.charAt(pos); ',' === chr; ) {
										if (
											(pos++,
											skipWhitespace(),
											'selectors' !== res.type &&
												(res = { type: 'selectors', selectors: [selector] }),
											!(selector = parseSingleSelector()))
										)
											throw Error('Rule expected after ",".')
										res.selectors.push(selector)
									}
									return res
								}
								function parseSingleSelector() {
									skipWhitespace()
									var selector = { type: 'ruleSet' },
										rule = parseRule()
									if (!rule) return null
									for (
										var currentRule = selector;
										rule &&
										((rule.type = 'rule'),
										(currentRule.rule = rule),
										(currentRule = rule),
										skipWhitespace(),
										(chr = str.charAt(pos)),
										!(pos >= l || ',' === chr || ')' === chr));

									)
										if (ruleNestingOperators[chr]) {
											var op = chr
											if ((pos++, skipWhitespace(), !(rule = parseRule())))
												throw Error('Rule expected after "' + op + '".')
											rule.nestingOperator = op
										} else (rule = parseRule()) && (rule.nestingOperator = null)
									return selector
								}
								function parseRule() {
									for (var rule = null; pos < l; )
										if ('*' === (chr = str.charAt(pos))) pos++, ((rule = rule || {}).tagName = '*')
										else if (utils_1.isIdentStart(chr) || '\\' === chr)
											(rule = rule || {}).tagName = getIdent()
										else if ('.' === chr)
											pos++,
												((rule = rule || {}).classNames = rule.classNames || []).push(getIdent())
										else if ('#' === chr) pos++, ((rule = rule || {}).id = getIdent())
										else if ('[' === chr) {
											pos++, skipWhitespace()
											var attr = { name: getIdent() }
											if ((skipWhitespace(), ']' === chr)) pos++
											else {
												var operator = ''
												if (
													(attrEqualityMods[chr] &&
														((operator = chr), pos++, (chr = str.charAt(pos))),
													pos >= l)
												)
													throw Error('Expected "=" but end of file reached.')
												if ('=' !== chr) throw Error('Expected "=" but "' + chr + '" found.')
												;(attr.operator = operator + '='), pos++, skipWhitespace()
												var attrValue = ''
												if (((attr.valueType = 'string'), '"' === chr))
													attrValue = getStr('"', utils_1.doubleQuotesEscapeChars)
												else if ("'" === chr)
													attrValue = getStr("'", utils_1.singleQuoteEscapeChars)
												else if (substitutesEnabled && '$' === chr)
													pos++, (attrValue = getIdent()), (attr.valueType = 'substitute')
												else {
													for (; pos < l && ']' !== chr; )
														(attrValue += chr), pos++, (chr = str.charAt(pos))
													attrValue = attrValue.trim()
												}
												if ((skipWhitespace(), pos >= l))
													throw Error('Expected "]" but end of file reached.')
												if (']' !== chr) throw Error('Expected "]" but "' + chr + '" found.')
												pos++, (attr.value = attrValue)
											}
											;((rule = rule || {}).attrs = rule.attrs || []).push(attr)
										} else {
											if (':' !== chr) break
											pos++
											var pseudoName = getIdent(),
												pseudo = { name: pseudoName }
											if ('(' === chr) {
												pos++
												var value = ''
												if ((skipWhitespace(), 'selector' === pseudos[pseudoName]))
													(pseudo.valueType = 'selector'), (value = parseSelector())
												else {
													if (((pseudo.valueType = pseudos[pseudoName] || 'string'), '"' === chr))
														value = getStr('"', utils_1.doubleQuotesEscapeChars)
													else if ("'" === chr) value = getStr("'", utils_1.singleQuoteEscapeChars)
													else if (substitutesEnabled && '$' === chr)
														pos++, (value = getIdent()), (pseudo.valueType = 'substitute')
													else {
														for (; pos < l && ')' !== chr; )
															(value += chr), pos++, (chr = str.charAt(pos))
														value = value.trim()
													}
													skipWhitespace()
												}
												if (pos >= l) throw Error('Expected ")" but end of file reached.')
												if (')' !== chr) throw Error('Expected ")" but "' + chr + '" found.')
												pos++, (pseudo.value = value)
											}
											;((rule = rule || {}).pseudos = rule.pseudos || []).push(pseudo)
										}
									return rule
								}
								return (function parse2() {
									var res = parseSelector()
									if (pos < l) throw Error('Rule expected but "' + str.charAt(pos) + '" found.')
									return res
								})()
							}
						}),
						require_render = __commonJS(function (exports) {
							'use strict'
							Object.defineProperty(exports, '__esModule', { value: !0 })
							var utils_1 = require_utils()
							exports.renderEntity = function renderEntity(entity) {
								var res = ''
								switch (entity.type) {
									case 'ruleSet':
										for (var currentEntity = entity.rule, parts = []; currentEntity; )
											currentEntity.nestingOperator && parts.push(currentEntity.nestingOperator),
												parts.push(renderEntity(currentEntity)),
												(currentEntity = currentEntity.rule)
										res = parts.join(' ')
										break
									case 'selectors':
										res = entity.selectors.map(renderEntity).join(', ')
										break
									case 'rule':
										entity.tagName &&
											(res =
												'*' === entity.tagName ? '*' : utils_1.escapeIdentifier(entity.tagName)),
											entity.id && (res += '#' + utils_1.escapeIdentifier(entity.id)),
											entity.classNames &&
												(res += entity.classNames
													.map(function (cn) {
														return '.' + utils_1.escapeIdentifier(cn)
													})
													.join('')),
											entity.attrs &&
												(res += entity.attrs
													.map(function (attr) {
														return 'operator' in attr
															? 'substitute' === attr.valueType
																? '[' +
																  utils_1.escapeIdentifier(attr.name) +
																  attr.operator +
																  '$' +
																  attr.value +
																  ']'
																: '[' +
																  utils_1.escapeIdentifier(attr.name) +
																  attr.operator +
																  utils_1.escapeStr(attr.value) +
																  ']'
															: '[' + utils_1.escapeIdentifier(attr.name) + ']'
													})
													.join('')),
											entity.pseudos &&
												(res += entity.pseudos
													.map(function (pseudo) {
														return pseudo.valueType
															? 'selector' === pseudo.valueType
																? ':' +
																  utils_1.escapeIdentifier(pseudo.name) +
																  '(' +
																  renderEntity(pseudo.value) +
																  ')'
																: 'substitute' === pseudo.valueType
																? ':' +
																  utils_1.escapeIdentifier(pseudo.name) +
																  '($' +
																  pseudo.value +
																  ')'
																: 'numeric' === pseudo.valueType
																? ':' +
																  utils_1.escapeIdentifier(pseudo.name) +
																  '(' +
																  pseudo.value +
																  ')'
																: ':' +
																  utils_1.escapeIdentifier(pseudo.name) +
																  '(' +
																  utils_1.escapeIdentifier(pseudo.value) +
																  ')'
															: ':' + utils_1.escapeIdentifier(pseudo.name)
													})
													.join(''))
										break
									default:
										throw Error('Unknown entity type: "' + entity.type + '".')
								}
								return res
							}
						}),
						require_lib = __commonJS(function (exports) {
							'use strict'
							Object.defineProperty(exports, '__esModule', { value: !0 })
							var parser_context_1 = require_parser_context(),
								render_1 = require_render(),
								CssSelectorParser3 = (function () {
									function CssSelectorParser4() {
										;(this.pseudos = {}),
											(this.attrEqualityMods = {}),
											(this.ruleNestingOperators = {}),
											(this.substitutesEnabled = !1)
									}
									return (
										(CssSelectorParser4.prototype.registerSelectorPseudos = function () {
											for (var pseudos = [], _i = 0; _i < arguments.length; _i++)
												pseudos[_i] = arguments[_i]
											for (var _a = 0, pseudos_1 = pseudos; _a < pseudos_1.length; _a++) {
												var pseudo = pseudos_1[_a]
												this.pseudos[pseudo] = 'selector'
											}
											return this
										}),
										(CssSelectorParser4.prototype.unregisterSelectorPseudos = function () {
											for (var pseudos = [], _i = 0; _i < arguments.length; _i++)
												pseudos[_i] = arguments[_i]
											for (var _a = 0, pseudos_2 = pseudos; _a < pseudos_2.length; _a++) {
												var pseudo = pseudos_2[_a]
												delete this.pseudos[pseudo]
											}
											return this
										}),
										(CssSelectorParser4.prototype.registerNumericPseudos = function () {
											for (var pseudos = [], _i = 0; _i < arguments.length; _i++)
												pseudos[_i] = arguments[_i]
											for (var _a = 0, pseudos_3 = pseudos; _a < pseudos_3.length; _a++) {
												var pseudo = pseudos_3[_a]
												this.pseudos[pseudo] = 'numeric'
											}
											return this
										}),
										(CssSelectorParser4.prototype.unregisterNumericPseudos = function () {
											for (var pseudos = [], _i = 0; _i < arguments.length; _i++)
												pseudos[_i] = arguments[_i]
											for (var _a = 0, pseudos_4 = pseudos; _a < pseudos_4.length; _a++) {
												var pseudo = pseudos_4[_a]
												delete this.pseudos[pseudo]
											}
											return this
										}),
										(CssSelectorParser4.prototype.registerNestingOperators = function () {
											for (var operators = [], _i = 0; _i < arguments.length; _i++)
												operators[_i] = arguments[_i]
											for (var _a = 0, operators_1 = operators; _a < operators_1.length; _a++) {
												var operator = operators_1[_a]
												this.ruleNestingOperators[operator] = !0
											}
											return this
										}),
										(CssSelectorParser4.prototype.unregisterNestingOperators = function () {
											for (var operators = [], _i = 0; _i < arguments.length; _i++)
												operators[_i] = arguments[_i]
											for (var _a = 0, operators_2 = operators; _a < operators_2.length; _a++) {
												var operator = operators_2[_a]
												delete this.ruleNestingOperators[operator]
											}
											return this
										}),
										(CssSelectorParser4.prototype.registerAttrEqualityMods = function () {
											for (var mods = [], _i = 0; _i < arguments.length; _i++)
												mods[_i] = arguments[_i]
											for (var _a = 0, mods_1 = mods; _a < mods_1.length; _a++) {
												var mod = mods_1[_a]
												this.attrEqualityMods[mod] = !0
											}
											return this
										}),
										(CssSelectorParser4.prototype.unregisterAttrEqualityMods = function () {
											for (var mods = [], _i = 0; _i < arguments.length; _i++)
												mods[_i] = arguments[_i]
											for (var _a = 0, mods_2 = mods; _a < mods_2.length; _a++) {
												var mod = mods_2[_a]
												delete this.attrEqualityMods[mod]
											}
											return this
										}),
										(CssSelectorParser4.prototype.enableSubstitutes = function () {
											return (this.substitutesEnabled = !0), this
										}),
										(CssSelectorParser4.prototype.disableSubstitutes = function () {
											return (this.substitutesEnabled = !1), this
										}),
										(CssSelectorParser4.prototype.parse = function (str) {
											return parser_context_1.parseCssSelector(
												str,
												0,
												this.pseudos,
												this.attrEqualityMods,
												this.ruleNestingOperators,
												this.substitutesEnabled,
											)
										}),
										(CssSelectorParser4.prototype.render = function (path) {
											return render_1.renderEntity(path).trim()
										}),
										CssSelectorParser4
									)
								})()
							exports.CssSelectorParser = CssSelectorParser3
						}),
						require_noop = __commonJS(function (exports, module) {
							'use strict'
							module.exports = function () {}
						}),
						require_is_value = __commonJS(function (exports, module) {
							'use strict'
							var _undefined = require_noop()()
							module.exports = function (val) {
								return val !== _undefined && null !== val
							}
						}),
						require_normalize_options = __commonJS(function (exports, module) {
							'use strict'
							var isValue = require_is_value(),
								forEach = Array.prototype.forEach,
								create = Object.create,
								process2 = function process2(src, obj) {
									var key
									for (key in src) obj[key] = src[key]
								}
							module.exports = function (opts1) {
								var result = create(null)
								return (
									forEach.call(arguments, function (options) {
										isValue(options) && process2(Object(options), result)
									}),
									result
								)
							}
						}),
						require_is_implemented = __commonJS(function (exports, module) {
							'use strict'
							module.exports = function () {
								var sign = Math.sign
								return 'function' == typeof sign && 1 === sign(10) && -1 === sign(-20)
							}
						}),
						require_shim = __commonJS(function (exports, module) {
							'use strict'
							module.exports = function (value) {
								return (
									(value = Number(value)), isNaN(value) || 0 === value ? value : value > 0 ? 1 : -1
								)
							}
						}),
						require_sign = __commonJS(function (exports, module) {
							'use strict'
							module.exports = require_is_implemented()() ? Math.sign : require_shim()
						}),
						require_to_integer = __commonJS(function (exports, module) {
							'use strict'
							var sign = require_sign(),
								abs = Math.abs,
								floor = Math.floor
							module.exports = function (value) {
								return isNaN(value)
									? 0
									: 0 !== (value = Number(value)) && isFinite(value)
									? sign(value) * floor(abs(value))
									: value
							}
						}),
						require_to_pos_integer = __commonJS(function (exports, module) {
							'use strict'
							var toInteger = require_to_integer(),
								max = Math.max
							module.exports = function (value) {
								return max(0, toInteger(value))
							}
						}),
						require_resolve_length = __commonJS(function (exports, module) {
							'use strict'
							var toPosInt = require_to_pos_integer()
							module.exports = function (optsLength, fnLength, isAsync) {
								var length
								return isNaN(optsLength)
									? (length = fnLength) >= 0
										? isAsync && length
											? length - 1
											: length
										: 1
									: !1 !== optsLength && toPosInt(optsLength)
							}
						}),
						require_valid_callable = __commonJS(function (exports, module) {
							'use strict'
							module.exports = function (fn) {
								if ('function' != typeof fn) throw new TypeError(fn + ' is not a function')
								return fn
							}
						}),
						require_valid_value = __commonJS(function (exports, module) {
							'use strict'
							var isValue = require_is_value()
							module.exports = function (value) {
								if (!isValue(value)) throw new TypeError('Cannot use null or undefined')
								return value
							}
						}),
						require_iterate = __commonJS(function (exports, module) {
							'use strict'
							var callable = require_valid_callable(),
								value = require_valid_value(),
								bind = Function.prototype.bind,
								call = Function.prototype.call,
								keys = Object.keys,
								objPropertyIsEnumerable = Object.prototype.propertyIsEnumerable
							module.exports = function (method, defVal) {
								return function (obj, cb) {
									var list,
										thisArg = arguments[2],
										compareFn = arguments[3]
									return (
										(obj = Object(value(obj))),
										callable(cb),
										(list = keys(obj)),
										compareFn &&
											list.sort(
												'function' == typeof compareFn ? bind.call(compareFn, obj) : void 0,
											),
										'function' != typeof method && (method = list[method]),
										call.call(method, list, function (key, index) {
											return objPropertyIsEnumerable.call(obj, key)
												? call.call(cb, thisArg, obj[key], key, obj, index)
												: defVal
										})
									)
								}
							}
						}),
						require_for_each = __commonJS(function (exports, module) {
							'use strict'
							module.exports = require_iterate()('forEach')
						}),
						require_registered_extensions = __commonJS(function () {}),
						require_is_implemented2 = __commonJS(function (exports, module) {
							'use strict'
							module.exports = function () {
								var obj,
									assign = Object.assign
								return (
									'function' == typeof assign &&
									(assign((obj = { foo: 'raz' }), { bar: 'dwa' }, { trzy: 'trzy' }),
									obj.foo + obj.bar + obj.trzy === 'razdwatrzy')
								)
							}
						}),
						require_is_implemented3 = __commonJS(function (exports, module) {
							'use strict'
							module.exports = function () {
								try {
									return Object.keys('primitive'), !0
								} catch (e) {
									return !1
								}
							}
						}),
						require_shim2 = __commonJS(function (exports, module) {
							'use strict'
							var isValue = require_is_value(),
								keys = Object.keys
							module.exports = function (object) {
								return keys(isValue(object) ? Object(object) : object)
							}
						}),
						require_keys = __commonJS(function (exports, module) {
							'use strict'
							module.exports = require_is_implemented3()() ? Object.keys : require_shim2()
						}),
						require_shim3 = __commonJS(function (exports, module) {
							'use strict'
							var keys = require_keys(),
								value = require_valid_value(),
								max = Math.max
							module.exports = function (dest, src) {
								var error,
									i,
									assign,
									length = max(arguments.length, 2)
								for (
									dest = Object(value(dest)),
										assign = function assign(key) {
											try {
												dest[key] = src[key]
											} catch (e) {
												error || (error = e)
											}
										},
										i = 1;
									i < length;
									++i
								)
									keys((src = arguments[i])).forEach(assign)
								if (void 0 !== error) throw error
								return dest
							}
						}),
						require_assign = __commonJS(function (exports, module) {
							'use strict'
							module.exports = require_is_implemented2()() ? Object.assign : require_shim3()
						}),
						require_is_object = __commonJS(function (exports, module) {
							'use strict'
							var isValue = require_is_value(),
								map = { function: !0, object: !0 }
							module.exports = function (value) {
								return (isValue(value) && map[_typeof(value)]) || !1
							}
						}),
						require_custom = __commonJS(function (exports, module) {
							'use strict'
							var assign = require_assign(),
								isObject = require_is_object(),
								isValue = require_is_value(),
								captureStackTrace = Error.captureStackTrace
							module.exports = function (message) {
								var err2 = new Error(message),
									code = arguments[1],
									ext = arguments[2]
								return (
									isValue(ext) || (isObject(code) && ((ext = code), (code = null))),
									isValue(ext) && assign(err2, ext),
									isValue(code) && (err2.code = code),
									captureStackTrace && captureStackTrace(err2, module.exports),
									err2
								)
							}
						}),
						require_mixin = __commonJS(function (exports, module) {
							'use strict'
							var value = require_valid_value(),
								defineProperty = Object.defineProperty,
								getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
								getOwnPropertyNames = Object.getOwnPropertyNames,
								getOwnPropertySymbols = Object.getOwnPropertySymbols
							module.exports = function (target, source) {
								var error,
									sourceObject = Object(value(source))
								if (
									((target = Object(value(target))),
									getOwnPropertyNames(sourceObject).forEach(function (name) {
										try {
											defineProperty(target, name, getOwnPropertyDescriptor(source, name))
										} catch (e) {
											error = e
										}
									}),
									'function' == typeof getOwnPropertySymbols &&
										getOwnPropertySymbols(sourceObject).forEach(function (symbol) {
											try {
												defineProperty(target, symbol, getOwnPropertyDescriptor(source, symbol))
											} catch (e) {
												error = e
											}
										}),
									void 0 !== error)
								)
									throw error
								return target
							}
						}),
						require_define_length = __commonJS(function (exports, module) {
							'use strict'
							var desc,
								defineProperty,
								generate,
								mixin,
								cache2,
								toPosInt = require_to_pos_integer(),
								test = function test(arg1, arg2) {
									return arg2
								}
							try {
								Object.defineProperty(test, 'length', {
									configurable: !0,
									writable: !1,
									enumerable: !1,
									value: 1,
								})
							} catch (ignore) {}
							1 === test.length
								? ((desc = { configurable: !0, writable: !1, enumerable: !1 }),
								  (defineProperty = Object.defineProperty),
								  (module.exports = function (fn, length) {
										return (
											(length = toPosInt(length)),
											fn.length === length
												? fn
												: ((desc.value = length), defineProperty(fn, 'length', desc))
										)
								  }))
								: ((mixin = require_mixin()),
								  (cache2 = []),
								  (generate = function (length) {
										var args,
											i = 0
										if (cache2[length]) return cache2[length]
										for (args = []; length--; ) args.push('a' + (++i).toString(36))
										return new Function(
											'fn',
											'return function (' +
												args.join(', ') +
												') { return fn.apply(this, arguments); };',
										)
								  }),
								  (module.exports = function (src, length) {
										var target
										if (((length = toPosInt(length)), src.length === length)) return src
										target = generate(length)(src)
										try {
											mixin(target, src)
										} catch (ignore) {}
										return target
								  }))
						}),
						require_is = __commonJS(function (exports, module) {
							'use strict'
							module.exports = function (value) {
								return null != value
							}
						}),
						require_is2 = __commonJS(function (exports, module) {
							'use strict'
							var isValue = require_is(),
								possibleTypes = { object: !0, function: !0, undefined: !0 }
							module.exports = function (value) {
								return !!isValue(value) && hasOwnProperty.call(possibleTypes, _typeof(value))
							}
						}),
						require_is3 = __commonJS(function (exports, module) {
							'use strict'
							var isObject = require_is2()
							module.exports = function (value) {
								if (!isObject(value)) return !1
								try {
									return !!value.constructor && value.constructor.prototype === value
								} catch (error) {
									return !1
								}
							}
						}),
						require_is4 = __commonJS(function (exports, module) {
							'use strict'
							var isPrototype = require_is3()
							module.exports = function (value) {
								if ('function' != typeof value) return !1
								if (!hasOwnProperty.call(value, 'length')) return !1
								try {
									if ('number' != typeof value.length) return !1
									if ('function' != typeof value.call) return !1
									if ('function' != typeof value.apply) return !1
								} catch (error) {
									return !1
								}
								return !isPrototype(value)
							}
						}),
						require_is5 = __commonJS(function (exports, module) {
							'use strict'
							var isFunction = require_is4(),
								classRe = /^\s*class[\s{/}]/,
								functionToString = Function.prototype.toString
							module.exports = function (value) {
								return !!isFunction(value) && !classRe.test(functionToString.call(value))
							}
						}),
						require_is_implemented4 = __commonJS(function (exports, module) {
							'use strict'
							var str = 'razdwatrzy'
							module.exports = function () {
								return (
									'function' == typeof str.contains &&
									!0 === str.contains('dwa') &&
									!1 === str.contains('foo')
								)
							}
						}),
						require_shim4 = __commonJS(function (exports, module) {
							'use strict'
							var indexOf = String.prototype.indexOf
							module.exports = function (searchString) {
								return indexOf.call(this, searchString, arguments[1]) > -1
							}
						}),
						require_contains = __commonJS(function (exports, module) {
							'use strict'
							module.exports = require_is_implemented4()()
								? String.prototype.contains
								: require_shim4()
						}),
						require_d = __commonJS(function (exports, module) {
							'use strict'
							var isValue = require_is(),
								isPlainFunction = require_is5(),
								assign = require_assign(),
								normalizeOpts = require_normalize_options(),
								contains3 = require_contains(),
								d = (module.exports = function (dscr, value) {
									var c, e, w, options, desc
									return (
										arguments.length < 2 || 'string' != typeof dscr
											? ((options = value), (value = dscr), (dscr = null))
											: (options = arguments[2]),
										isValue(dscr)
											? ((c = contains3.call(dscr, 'c')),
											  (e = contains3.call(dscr, 'e')),
											  (w = contains3.call(dscr, 'w')))
											: ((c = w = !0), (e = !1)),
										(desc = { value, configurable: c, enumerable: e, writable: w }),
										options ? assign(normalizeOpts(options), desc) : desc
									)
								})
							d.gs = function (dscr, get, set) {
								var c, e, options, desc
								return (
									'string' != typeof dscr
										? ((options = set), (set = get), (get = dscr), (dscr = null))
										: (options = arguments[3]),
									isValue(get)
										? isPlainFunction(get)
											? isValue(set)
												? isPlainFunction(set) || ((options = set), (set = void 0))
												: (set = void 0)
											: ((options = get), (get = set = void 0))
										: (get = void 0),
									isValue(dscr)
										? ((c = contains3.call(dscr, 'c')), (e = contains3.call(dscr, 'e')))
										: ((c = !0), (e = !1)),
									(desc = { get, set, configurable: c, enumerable: e }),
									options ? assign(normalizeOpts(options), desc) : desc
								)
							}
						}),
						require_event_emitter = __commonJS(function (exports, module) {
							'use strict'
							var on,
								once,
								off,
								emit,
								methods,
								descriptors,
								base,
								d = require_d(),
								callable = require_valid_callable(),
								apply = Function.prototype.apply,
								call = Function.prototype.call,
								create = Object.create,
								defineProperty = Object.defineProperty,
								defineProperties = Object.defineProperties,
								hasOwnProperty2 = Object.prototype.hasOwnProperty,
								descriptor = { configurable: !0, enumerable: !1, writable: !0 }
							;(once = function once(type, listener) {
								var _once, self2
								return (
									callable(listener),
									(self2 = this),
									on.call(
										this,
										type,
										(_once = function once2() {
											off.call(self2, type, _once), apply.call(listener, this, arguments)
										}),
									),
									(_once.__eeOnceListener__ = listener),
									this
								)
							}),
								(off = function off(type, listener) {
									var data2, listeners, candidate, i
									if ((callable(listener), !hasOwnProperty2.call(this, '__ee__'))) return this
									if (!(data2 = this.__ee__)[type]) return this
									if (((listeners = data2[type]), 'object' === _typeof(listeners)))
										for (i = 0; (candidate = listeners[i]); ++i)
											(candidate !== listener && candidate.__eeOnceListener__ !== listener) ||
												(2 === listeners.length
													? (data2[type] = listeners[i ? 0 : 1])
													: listeners.splice(i, 1))
									else
										(listeners !== listener && listeners.__eeOnceListener__ !== listener) ||
											delete data2[type]
									return this
								}),
								(emit = function emit(type) {
									var i, l, listener, listeners, args
									if (hasOwnProperty2.call(this, '__ee__') && (listeners = this.__ee__[type]))
										if ('object' === _typeof(listeners)) {
											for (l = arguments.length, args = new Array(l - 1), i = 1; i < l; ++i)
												args[i - 1] = arguments[i]
											for (listeners = listeners.slice(), i = 0; (listener = listeners[i]); ++i)
												apply.call(listener, this, args)
										} else
											switch (arguments.length) {
												case 1:
													call.call(listeners, this)
													break
												case 2:
													call.call(listeners, this, arguments[1])
													break
												case 3:
													call.call(listeners, this, arguments[1], arguments[2])
													break
												default:
													for (l = arguments.length, args = new Array(l - 1), i = 1; i < l; ++i)
														args[i - 1] = arguments[i]
													apply.call(listeners, this, args)
											}
								}),
								(methods = {
									on: (on = function on(type, listener) {
										var data2
										return (
											callable(listener),
											hasOwnProperty2.call(this, '__ee__')
												? (data2 = this.__ee__)
												: ((data2 = descriptor.value = create(null)),
												  defineProperty(this, '__ee__', descriptor),
												  (descriptor.value = null)),
											data2[type]
												? 'object' === _typeof(data2[type])
													? data2[type].push(listener)
													: (data2[type] = [data2[type], listener])
												: (data2[type] = listener),
											this
										)
									}),
									once,
									off,
									emit,
								}),
								(descriptors = { on: d(on), once: d(once), off: d(off), emit: d(emit) }),
								(base = defineProperties({}, descriptors)),
								(module.exports = exports =
									function exports(o) {
										return null == o ? create(base) : defineProperties(Object(o), descriptors)
									}),
								(exports.methods = methods)
						}),
						require_is_implemented5 = __commonJS(function (exports, module) {
							'use strict'
							module.exports = function () {
								var arr,
									result,
									from = Array.from
								return (
									'function' == typeof from &&
									((result = from((arr = ['raz', 'dwa']))),
									Boolean(result && result !== arr && 'dwa' === result[1]))
								)
							}
						}),
						require_is_implemented6 = __commonJS(function (exports, module) {
							'use strict'
							module.exports = function () {
								return (
									'object' ===
										('undefined' == typeof globalThis ? 'undefined' : _typeof(globalThis)) &&
									!!globalThis &&
									globalThis.Array === Array
								)
							}
						}),
						require_implementation = __commonJS(function (exports, module) {
							var naiveFallback = function naiveFallback() {
								if ('object' === ('undefined' == typeof self ? 'undefined' : _typeof(self)) && self)
									return self
								if ('object' === (void 0 === window ? 'undefined' : _typeof(window)) && window)
									return window
								throw new Error('Unable to resolve global `this`')
							}
							module.exports = (function () {
								if (this) return this
								try {
									Object.defineProperty(Object.prototype, '__global__', {
										get: function get() {
											return this
										},
										configurable: !0,
									})
								} catch (error) {
									return naiveFallback()
								}
								try {
									return __global__ || naiveFallback()
								} finally {
									delete Object.prototype.__global__
								}
							})()
						}),
						require_global_this = __commonJS(function (exports, module) {
							'use strict'
							module.exports = require_is_implemented6()() ? globalThis : require_implementation()
						}),
						require_is_implemented7 = __commonJS(function (exports, module) {
							'use strict'
							var global2 = require_global_this(),
								validTypes = { object: !0, symbol: !0 }
							module.exports = function () {
								var symbol,
									_Symbol = global2.Symbol
								if ('function' != typeof _Symbol) return !1
								symbol = _Symbol('test symbol')
								try {
									String(symbol)
								} catch (e) {
									return !1
								}
								return (
									!!validTypes[_typeof(_Symbol.iterator)] &&
									!!validTypes[_typeof(_Symbol.toPrimitive)] &&
									!!validTypes[_typeof(_Symbol.toStringTag)]
								)
							}
						}),
						require_is_symbol = __commonJS(function (exports, module) {
							'use strict'
							module.exports = function (value) {
								return (
									!!value &&
									('symbol' === _typeof(value) ||
										(!!value.constructor &&
											'Symbol' === value.constructor.name &&
											'Symbol' === value[value.constructor.toStringTag]))
								)
							}
						}),
						require_validate_symbol = __commonJS(function (exports, module) {
							'use strict'
							var isSymbol = require_is_symbol()
							module.exports = function (value) {
								if (!isSymbol(value)) throw new TypeError(value + ' is not a symbol')
								return value
							}
						}),
						require_generate_name = __commonJS(function (exports, module) {
							'use strict'
							var d = require_d(),
								create = Object.create,
								defineProperty = Object.defineProperty,
								objPrototype = Object.prototype,
								created = create(null)
							module.exports = function (desc) {
								for (var name, ie11BugWorkaround, postfix = 0; created[desc + (postfix || '')]; )
									++postfix
								return (
									(created[(desc += postfix || '')] = !0),
									defineProperty(
										objPrototype,
										(name = '@@' + desc),
										d.gs(null, function (value) {
											ie11BugWorkaround ||
												((ie11BugWorkaround = !0),
												defineProperty(this, name, d(value)),
												(ie11BugWorkaround = !1))
										}),
									),
									name
								)
							}
						}),
						require_standard_symbols = __commonJS(function (exports, module) {
							'use strict'
							var d = require_d(),
								NativeSymbol = require_global_this().Symbol
							module.exports = function (SymbolPolyfill) {
								return Object.defineProperties(SymbolPolyfill, {
									hasInstance: d(
										'',
										(NativeSymbol && NativeSymbol.hasInstance) || SymbolPolyfill('hasInstance'),
									),
									isConcatSpreadable: d(
										'',
										(NativeSymbol && NativeSymbol.isConcatSpreadable) ||
											SymbolPolyfill('isConcatSpreadable'),
									),
									iterator: d(
										'',
										(NativeSymbol && NativeSymbol.iterator) || SymbolPolyfill('iterator'),
									),
									match: d('', (NativeSymbol && NativeSymbol.match) || SymbolPolyfill('match')),
									replace: d(
										'',
										(NativeSymbol && NativeSymbol.replace) || SymbolPolyfill('replace'),
									),
									search: d('', (NativeSymbol && NativeSymbol.search) || SymbolPolyfill('search')),
									species: d(
										'',
										(NativeSymbol && NativeSymbol.species) || SymbolPolyfill('species'),
									),
									split: d('', (NativeSymbol && NativeSymbol.split) || SymbolPolyfill('split')),
									toPrimitive: d(
										'',
										(NativeSymbol && NativeSymbol.toPrimitive) || SymbolPolyfill('toPrimitive'),
									),
									toStringTag: d(
										'',
										(NativeSymbol && NativeSymbol.toStringTag) || SymbolPolyfill('toStringTag'),
									),
									unscopables: d(
										'',
										(NativeSymbol && NativeSymbol.unscopables) || SymbolPolyfill('unscopables'),
									),
								})
							}
						}),
						require_symbol_registry = __commonJS(function (exports, module) {
							'use strict'
							var d = require_d(),
								validateSymbol = require_validate_symbol(),
								registry = Object.create(null)
							module.exports = function (SymbolPolyfill) {
								return Object.defineProperties(SymbolPolyfill, {
									for: d(function (key) {
										return registry[key]
											? registry[key]
											: (registry[key] = SymbolPolyfill(String(key)))
									}),
									keyFor: d(function (symbol) {
										var key
										for (key in (validateSymbol(symbol), registry))
											if (registry[key] === symbol) return key
									}),
								})
							}
						}),
						require_polyfill = __commonJS(function (exports, module) {
							'use strict'
							var SymbolPolyfill,
								HiddenSymbol,
								isNativeSafe,
								d = require_d(),
								validateSymbol = require_validate_symbol(),
								NativeSymbol = require_global_this().Symbol,
								generateName = require_generate_name(),
								setupStandardSymbols = require_standard_symbols(),
								setupSymbolRegistry = require_symbol_registry(),
								create = Object.create,
								defineProperties = Object.defineProperties,
								defineProperty = Object.defineProperty
							if ('function' == typeof NativeSymbol)
								try {
									String(NativeSymbol()), (isNativeSafe = !0)
								} catch (ignore) {}
							else NativeSymbol = null
							;(HiddenSymbol = function _Symbol2(description) {
								if (this instanceof HiddenSymbol) throw new TypeError('Symbol is not a constructor')
								return SymbolPolyfill(description)
							}),
								(module.exports = SymbolPolyfill =
									function _Symbol3(description) {
										var symbol
										if (this instanceof _Symbol3) throw new TypeError('Symbol is not a constructor')
										return isNativeSafe
											? NativeSymbol(description)
											: ((symbol = create(HiddenSymbol.prototype)),
											  (description = void 0 === description ? '' : String(description)),
											  defineProperties(symbol, {
													__description__: d('', description),
													__name__: d('', generateName(description)),
											  }))
									}),
								setupStandardSymbols(SymbolPolyfill),
								setupSymbolRegistry(SymbolPolyfill),
								defineProperties(HiddenSymbol.prototype, {
									constructor: d(SymbolPolyfill),
									toString: d('', function () {
										return this.__name__
									}),
								}),
								defineProperties(SymbolPolyfill.prototype, {
									toString: d(function () {
										return 'Symbol (' + validateSymbol(this).__description__ + ')'
									}),
									valueOf: d(function () {
										return validateSymbol(this)
									}),
								}),
								defineProperty(
									SymbolPolyfill.prototype,
									SymbolPolyfill.toPrimitive,
									d('', function () {
										var symbol = validateSymbol(this)
										return 'symbol' === _typeof(symbol) ? symbol : symbol.toString()
									}),
								),
								defineProperty(
									SymbolPolyfill.prototype,
									SymbolPolyfill.toStringTag,
									d('c', 'Symbol'),
								),
								defineProperty(
									HiddenSymbol.prototype,
									SymbolPolyfill.toStringTag,
									d('c', SymbolPolyfill.prototype[SymbolPolyfill.toStringTag]),
								),
								defineProperty(
									HiddenSymbol.prototype,
									SymbolPolyfill.toPrimitive,
									d('c', SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive]),
								)
						}),
						require_es6_symbol = __commonJS(function (exports, module) {
							'use strict'
							module.exports = require_is_implemented7()()
								? require_global_this().Symbol
								: require_polyfill()
						}),
						require_is_arguments = __commonJS(function (exports, module) {
							'use strict'
							var objToString = Object.prototype.toString,
								id = objToString.call(
									(function () {
										return arguments
									})(),
								)
							module.exports = function (value) {
								return objToString.call(value) === id
							}
						}),
						require_is_function = __commonJS(function (exports, module) {
							'use strict'
							var objToString = Object.prototype.toString,
								isFunctionStringTag = RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/)
							module.exports = function (value) {
								return 'function' == typeof value && isFunctionStringTag(objToString.call(value))
							}
						}),
						require_is_string = __commonJS(function (exports, module) {
							'use strict'
							var objToString = Object.prototype.toString,
								id = objToString.call('')
							module.exports = function (value) {
								return (
									'string' == typeof value ||
									(value &&
										'object' === _typeof(value) &&
										(value instanceof String || objToString.call(value) === id)) ||
									!1
								)
							}
						}),
						require_shim5 = __commonJS(function (exports, module) {
							'use strict'
							var iteratorSymbol = require_es6_symbol().iterator,
								isArguments = require_is_arguments(),
								isFunction = require_is_function(),
								toPosInt = require_to_pos_integer(),
								callable = require_valid_callable(),
								validValue = require_valid_value(),
								isValue = require_is_value(),
								isString = require_is_string(),
								isArray = Array.isArray,
								call = Function.prototype.call,
								desc = { configurable: !0, enumerable: !0, writable: !0, value: null },
								defineProperty = Object.defineProperty
							module.exports = function (arrayLike) {
								var Context2,
									i,
									j,
									arr,
									length,
									code,
									iterator,
									result,
									getIterator,
									value,
									mapFn = arguments[1],
									thisArg = arguments[2]
								if (
									((arrayLike = Object(validValue(arrayLike))),
									isValue(mapFn) && callable(mapFn),
									this && this !== Array && isFunction(this))
								)
									Context2 = this
								else {
									if (!mapFn) {
										if (isArguments(arrayLike))
											return 1 !== (length = arrayLike.length)
												? Array.apply(null, arrayLike)
												: (((arr = new Array(1))[0] = arrayLike[0]), arr)
										if (isArray(arrayLike)) {
											for (arr = new Array((length = arrayLike.length)), i = 0; i < length; ++i)
												arr[i] = arrayLike[i]
											return arr
										}
									}
									arr = []
								}
								if (!isArray(arrayLike))
									if (void 0 !== (getIterator = arrayLike[iteratorSymbol])) {
										for (
											iterator = callable(getIterator).call(arrayLike),
												Context2 && (arr = new Context2()),
												result = iterator.next(),
												i = 0;
											!result.done;

										)
											(value = mapFn ? call.call(mapFn, thisArg, result.value, i) : result.value),
												Context2
													? ((desc.value = value), defineProperty(arr, i, desc))
													: (arr[i] = value),
												(result = iterator.next()),
												++i
										length = i
									} else if (isString(arrayLike)) {
										for (
											length = arrayLike.length, Context2 && (arr = new Context2()), i = 0, j = 0;
											i < length;
											++i
										)
											(value = arrayLike[i]),
												i + 1 < length &&
													(code = value.charCodeAt(0)) >= 55296 &&
													code <= 56319 &&
													(value += arrayLike[++i]),
												(value = mapFn ? call.call(mapFn, thisArg, value, j) : value),
												Context2
													? ((desc.value = value), defineProperty(arr, j, desc))
													: (arr[j] = value),
												++j
										length = j
									}
								if (void 0 === length)
									for (
										length = toPosInt(arrayLike.length),
											Context2 && (arr = new Context2(length)),
											i = 0;
										i < length;
										++i
									)
										(value = mapFn ? call.call(mapFn, thisArg, arrayLike[i], i) : arrayLike[i]),
											Context2
												? ((desc.value = value), defineProperty(arr, i, desc))
												: (arr[i] = value)
								return Context2 && ((desc.value = null), (arr.length = length)), arr
							}
						}),
						require_from = __commonJS(function (exports, module) {
							'use strict'
							module.exports = require_is_implemented5()() ? Array.from : require_shim5()
						}),
						require_to_array = __commonJS(function (exports, module) {
							'use strict'
							var from = require_from(),
								isArray = Array.isArray
							module.exports = function (arrayLike) {
								return isArray(arrayLike) ? arrayLike : from(arrayLike)
							}
						}),
						require_resolve_resolve = __commonJS(function (exports, module) {
							'use strict'
							var resolveArgs,
								toArray2 = require_to_array(),
								isValue = require_is_value(),
								callable = require_valid_callable(),
								slice = Array.prototype.slice
							;(resolveArgs = function resolveArgs(args) {
								return this.map(function (resolve, i) {
									return resolve ? resolve(args[i]) : args[i]
								}).concat(slice.call(args, this.length))
							}),
								(module.exports = function (resolvers) {
									return (
										(resolvers = toArray2(resolvers)).forEach(function (resolve) {
											isValue(resolve) && callable(resolve)
										}),
										resolveArgs.bind(resolvers)
									)
								})
						}),
						require_resolve_normalize = __commonJS(function (exports, module) {
							'use strict'
							var callable = require_valid_callable()
							module.exports = function (userNormalizer) {
								var normalizer
								return 'function' == typeof userNormalizer
									? { set: userNormalizer, get: userNormalizer }
									: ((normalizer = { get: callable(userNormalizer.get) }),
									  void 0 !== userNormalizer.set
											? ((normalizer.set = callable(userNormalizer.set)),
											  userNormalizer.delete &&
													(normalizer.delete = callable(userNormalizer.delete)),
											  userNormalizer.clear && (normalizer.clear = callable(userNormalizer.clear)),
											  normalizer)
											: ((normalizer.set = normalizer.get), normalizer))
							}
						}),
						require_configure_map = __commonJS(function (exports, module) {
							'use strict'
							var customError = require_custom(),
								defineLength = require_define_length(),
								d = require_d(),
								ee = require_event_emitter().methods,
								resolveResolve = require_resolve_resolve(),
								resolveNormalize = require_resolve_normalize(),
								apply = Function.prototype.apply,
								call = Function.prototype.call,
								create = Object.create,
								defineProperties = Object.defineProperties,
								_on = ee.on,
								emit = ee.emit
							module.exports = function (original, length, options) {
								var conf,
									memLength,
									_get,
									set,
									del,
									_clear,
									extDel,
									extGet,
									extHas,
									normalizer,
									getListeners,
									setListeners,
									deleteListeners,
									memoized,
									resolve,
									cache2 = create(null)
								return (
									(memLength =
										!1 !== length ? length : isNaN(original.length) ? 1 : original.length),
									options.normalizer &&
										((normalizer = resolveNormalize(options.normalizer)),
										(_get = normalizer.get),
										(set = normalizer.set),
										(del = normalizer.delete),
										(_clear = normalizer.clear)),
									null != options.resolvers && (resolve = resolveResolve(options.resolvers)),
									(memoized = _get
										? defineLength(function (arg) {
												var id,
													result,
													args = arguments
												if (
													(resolve && (args = resolve(args)),
													null !== (id = _get(args)) && hasOwnProperty.call(cache2, id))
												)
													return getListeners && conf.emit('get', id, args, this), cache2[id]
												if (
													((result =
														1 === args.length
															? call.call(original, this, args[0])
															: apply.call(original, this, args)),
													null === id)
												) {
													if (null !== (id = _get(args)))
														throw customError('Circular invocation', 'CIRCULAR_INVOCATION')
													id = set(args)
												} else if (hasOwnProperty.call(cache2, id)) throw customError('Circular invocation', 'CIRCULAR_INVOCATION')
												return (
													(cache2[id] = result),
													setListeners && conf.emit('set', id, null, result),
													result
												)
										  }, memLength)
										: 0 === length
										? function memoized() {
												var result
												if (hasOwnProperty.call(cache2, 'data'))
													return (
														getListeners && conf.emit('get', 'data', arguments, this), cache2.data
													)
												if (
													((result = arguments.length
														? apply.call(original, this, arguments)
														: call.call(original, this)),
													hasOwnProperty.call(cache2, 'data'))
												)
													throw customError('Circular invocation', 'CIRCULAR_INVOCATION')
												return (
													(cache2.data = result),
													setListeners && conf.emit('set', 'data', null, result),
													result
												)
										  }
										: function memoized(arg) {
												var result,
													id,
													args = arguments
												if (
													(resolve && (args = resolve(arguments)),
													(id = String(args[0])),
													hasOwnProperty.call(cache2, id))
												)
													return getListeners && conf.emit('get', id, args, this), cache2[id]
												if (
													((result =
														1 === args.length
															? call.call(original, this, args[0])
															: apply.call(original, this, args)),
													hasOwnProperty.call(cache2, id))
												)
													throw customError('Circular invocation', 'CIRCULAR_INVOCATION')
												return (
													(cache2[id] = result),
													setListeners && conf.emit('set', id, null, result),
													result
												)
										  }),
									(conf = {
										original,
										memoized,
										profileName: options.profileName,
										get: function get(args) {
											return resolve && (args = resolve(args)), _get ? _get(args) : String(args[0])
										},
										has: function has(id) {
											return hasOwnProperty.call(cache2, id)
										},
										delete: function _delete(id) {
											var result
											hasOwnProperty.call(cache2, id) &&
												(del && del(id),
												(result = cache2[id]),
												delete cache2[id],
												deleteListeners && conf.emit('delete', id, result))
										},
										clear: function clear() {
											var oldCache = cache2
											_clear && _clear(), (cache2 = create(null)), conf.emit('clear', oldCache)
										},
										on: function on(type, listener) {
											return (
												'get' === type
													? (getListeners = !0)
													: 'set' === type
													? (setListeners = !0)
													: 'delete' === type && (deleteListeners = !0),
												_on.call(this, type, listener)
											)
										},
										emit,
										updateEnv: function updateEnv() {
											original = conf.original
										},
									}),
									(extDel = _get
										? defineLength(function (arg) {
												var id,
													args = arguments
												resolve && (args = resolve(args)),
													null !== (id = _get(args)) && conf.delete(id)
										  }, memLength)
										: 0 === length
										? function extDel() {
												return conf.delete('data')
										  }
										: function extDel(arg) {
												return resolve && (arg = resolve(arguments)[0]), conf.delete(arg)
										  }),
									(extGet = defineLength(function () {
										var id,
											args = arguments
										return 0 === length
											? cache2.data
											: (resolve && (args = resolve(args)),
											  (id = _get ? _get(args) : String(args[0])),
											  cache2[id])
									})),
									(extHas = defineLength(function () {
										var id,
											args = arguments
										return 0 === length
											? conf.has('data')
											: (resolve && (args = resolve(args)),
											  null !== (id = _get ? _get(args) : String(args[0])) && conf.has(id))
									})),
									defineProperties(memoized, {
										__memoized__: d(!0),
										delete: d(extDel),
										clear: d(conf.clear),
										_get: d(extGet),
										_has: d(extHas),
									}),
									conf
								)
							}
						}),
						require_plain = __commonJS(function (exports, module) {
							'use strict'
							var callable = require_valid_callable(),
								forEach = require_for_each(),
								extensions = require_registered_extensions(),
								configure4 = require_configure_map(),
								resolveLength = require_resolve_length()
							module.exports = function self2(fn) {
								var options, length, conf
								if ((callable(fn), (options = Object(arguments[1])).async && options.promise))
									throw new Error("Options 'async' and 'promise' cannot be used together")
								return hasOwnProperty.call(fn, '__memoized__') && !options.force
									? fn
									: ((length = resolveLength(
											options.length,
											fn.length,
											options.async && extensions.async,
									  )),
									  (conf = configure4(fn, length, options)),
									  forEach(extensions, function (extFn, name) {
											options[name] && extFn(options[name], conf, options)
									  }),
									  self2.__profiler__ && self2.__profiler__(conf),
									  conf.updateEnv(),
									  conf.memoized)
							}
						}),
						require_primitive = __commonJS(function (exports, module) {
							'use strict'
							module.exports = function (args) {
								var id,
									i,
									length = args.length
								if (!length) return ''
								for (id = String(args[(i = 0)]); --length; ) id += '' + args[++i]
								return id
							}
						}),
						require_get_primitive_fixed = __commonJS(function (exports, module) {
							'use strict'
							module.exports = function (length) {
								return length
									? function (args) {
											for (
												var id = String(args[0]), i = 0, currentLength = length;
												--currentLength;

											)
												id += '' + args[++i]
											return id
									  }
									: function () {
											return ''
									  }
							}
						}),
						require_is_implemented8 = __commonJS(function (exports, module) {
							'use strict'
							module.exports = function () {
								var numberIsNaN = Number.isNaN
								return (
									'function' == typeof numberIsNaN &&
									!numberIsNaN({}) &&
									numberIsNaN(NaN) &&
									!numberIsNaN(34)
								)
							}
						}),
						require_shim6 = __commonJS(function (exports, module) {
							'use strict'
							module.exports = function (value) {
								return value != value
							}
						}),
						require_is_nan = __commonJS(function (exports, module) {
							'use strict'
							module.exports = require_is_implemented8()() ? Number.isNaN : require_shim6()
						}),
						require_e_index_of = __commonJS(function (exports, module) {
							'use strict'
							var numberIsNaN = require_is_nan(),
								toPosInt = require_to_pos_integer(),
								value = require_valid_value(),
								indexOf = Array.prototype.indexOf,
								objHasOwnProperty = Object.prototype.hasOwnProperty,
								abs = Math.abs,
								floor = Math.floor
							module.exports = function (searchElement) {
								var i, length, fromIndex, val
								if (!numberIsNaN(searchElement)) return indexOf.apply(this, arguments)
								for (
									length = toPosInt(value(this).length),
										fromIndex = arguments[1],
										i = fromIndex =
											isNaN(fromIndex)
												? 0
												: fromIndex >= 0
												? floor(fromIndex)
												: toPosInt(this.length) - floor(abs(fromIndex));
									i < length;
									++i
								)
									if (objHasOwnProperty.call(this, i) && ((val = this[i]), numberIsNaN(val)))
										return i
								return -1
							}
						}),
						require_get = __commonJS(function (exports, module) {
							'use strict'
							var indexOf = require_e_index_of(),
								create = Object.create
							module.exports = function () {
								var lastId = 0,
									map = [],
									cache2 = create(null)
								return {
									get: function get(args) {
										var i,
											index = 0,
											set = map,
											length = args.length
										if (0 === length) return set[length] || null
										if ((set = set[length])) {
											for (; index < length - 1; ) {
												if (-1 === (i = indexOf.call(set[0], args[index]))) return null
												;(set = set[1][i]), ++index
											}
											return -1 === (i = indexOf.call(set[0], args[index]))
												? null
												: set[1][i] || null
										}
										return null
									},
									set: function set(args) {
										var i,
											index = 0,
											set = map,
											length = args.length
										if (0 === length) set[length] = ++lastId
										else {
											for (
												set[length] || (set[length] = [[], []]), set = set[length];
												index < length - 1;

											)
												-1 === (i = indexOf.call(set[0], args[index])) &&
													((i = set[0].push(args[index]) - 1), set[1].push([[], []])),
													(set = set[1][i]),
													++index
											;-1 === (i = indexOf.call(set[0], args[index])) &&
												(i = set[0].push(args[index]) - 1),
												(set[1][i] = ++lastId)
										}
										return (cache2[lastId] = args), lastId
									},
									delete: function _delete(id) {
										var i,
											index = 0,
											set = map,
											args = cache2[id],
											length = args.length,
											path = []
										if (0 === length) delete set[length]
										else if ((set = set[length])) {
											for (; index < length - 1; ) {
												if (-1 === (i = indexOf.call(set[0], args[index]))) return
												path.push(set, i), (set = set[1][i]), ++index
											}
											if (-1 === (i = indexOf.call(set[0], args[index]))) return
											for (
												id = set[1][i], set[0].splice(i, 1), set[1].splice(i, 1);
												!set[0].length && path.length;

											)
												(i = path.pop()), (set = path.pop())[0].splice(i, 1), set[1].splice(i, 1)
										}
										delete cache2[id]
									},
									clear: function clear() {
										;(map = []), (cache2 = create(null))
									},
								}
							}
						}),
						require_get_1 = __commonJS(function (exports, module) {
							'use strict'
							var indexOf = require_e_index_of()
							module.exports = function () {
								var lastId = 0,
									argsMap = [],
									cache2 = []
								return {
									get: function get(args) {
										var index = indexOf.call(argsMap, args[0])
										return -1 === index ? null : cache2[index]
									},
									set: function set(args) {
										return argsMap.push(args[0]), cache2.push(++lastId), lastId
									},
									delete: function _delete(id) {
										var index = indexOf.call(cache2, id)
										;-1 !== index && (argsMap.splice(index, 1), cache2.splice(index, 1))
									},
									clear: function clear() {
										;(argsMap = []), (cache2 = [])
									},
								}
							}
						}),
						require_get_fixed = __commonJS(function (exports, module) {
							'use strict'
							var indexOf = require_e_index_of(),
								create = Object.create
							module.exports = function (length) {
								var lastId = 0,
									map = [[], []],
									cache2 = create(null)
								return {
									get: function get(args) {
										for (var i, index = 0, set = map; index < length - 1; ) {
											if (-1 === (i = indexOf.call(set[0], args[index]))) return null
											;(set = set[1][i]), ++index
										}
										return -1 === (i = indexOf.call(set[0], args[index])) ? null : set[1][i] || null
									},
									set: function set(args) {
										for (var i, index = 0, set = map; index < length - 1; )
											-1 === (i = indexOf.call(set[0], args[index])) &&
												((i = set[0].push(args[index]) - 1), set[1].push([[], []])),
												(set = set[1][i]),
												++index
										return (
											-1 === (i = indexOf.call(set[0], args[index])) &&
												(i = set[0].push(args[index]) - 1),
											(set[1][i] = ++lastId),
											(cache2[lastId] = args),
											lastId
										)
									},
									delete: function _delete(id) {
										for (
											var i, index = 0, set = map, path = [], args = cache2[id];
											index < length - 1;

										) {
											if (-1 === (i = indexOf.call(set[0], args[index]))) return
											path.push(set, i), (set = set[1][i]), ++index
										}
										if (-1 !== (i = indexOf.call(set[0], args[index]))) {
											for (
												id = set[1][i], set[0].splice(i, 1), set[1].splice(i, 1);
												!set[0].length && path.length;

											)
												(i = path.pop()), (set = path.pop())[0].splice(i, 1), set[1].splice(i, 1)
											delete cache2[id]
										}
									},
									clear: function clear() {
										;(map = [[], []]), (cache2 = create(null))
									},
								}
							}
						}),
						require_map = __commonJS(function (exports, module) {
							'use strict'
							var callable = require_valid_callable(),
								forEach = require_for_each(),
								call = Function.prototype.call
							module.exports = function (obj, cb) {
								var result = {},
									thisArg = arguments[2]
								return (
									callable(cb),
									forEach(obj, function (value, key, targetObj, index) {
										result[key] = call.call(cb, thisArg, value, key, targetObj, index)
									}),
									result
								)
							}
						}),
						require_next_tick = __commonJS(function (exports, module) {
							'use strict'
							var ensureCallable = function ensureCallable(fn) {
									if ('function' != typeof fn) throw new TypeError(fn + ' is not a function')
									return fn
								},
								byObserver = function byObserver(Observer) {
									var queue2,
										currentQueue,
										node = document.createTextNode(''),
										i = 0
									return (
										new Observer(function () {
											var callback
											if (queue2) currentQueue && (queue2 = currentQueue.concat(queue2))
											else {
												if (!currentQueue) return
												queue2 = currentQueue
											}
											if (
												((currentQueue = queue2),
												(queue2 = null),
												'function' == typeof currentQueue)
											)
												return (callback = currentQueue), (currentQueue = null), void callback()
											for (node.data = i = ++i % 2; currentQueue; )
												(callback = currentQueue.shift()),
													currentQueue.length || (currentQueue = null),
													callback()
										}).observe(node, { characterData: !0 }),
										function (fn) {
											ensureCallable(fn),
												queue2
													? 'function' == typeof queue2
														? (queue2 = [queue2, fn])
														: queue2.push(fn)
													: ((queue2 = fn), (node.data = i = ++i % 2))
										}
									)
								}
							module.exports = (function () {
								if (
									'object' === (void 0 === process ? 'undefined' : _typeof(process)) &&
									process &&
									'function' == typeof process.nextTick
								)
									return process.nextTick
								if ('function' == typeof queueMicrotask)
									return function (cb) {
										queueMicrotask(ensureCallable(cb))
									}
								if (
									'object' === (void 0 === document ? 'undefined' : _typeof(document)) &&
									document
								) {
									if ('function' == typeof MutationObserver) return byObserver(MutationObserver)
									if ('function' == typeof WebKitMutationObserver)
										return byObserver(WebKitMutationObserver)
								}
								return 'function' == typeof setImmediate
									? function (cb) {
											setImmediate(ensureCallable(cb))
									  }
									: 'function' == typeof setTimeout ||
									  'object' ===
											('undefined' == typeof setTimeout ? 'undefined' : _typeof(setTimeout))
									? function (cb) {
											setTimeout(ensureCallable(cb), 0)
									  }
									: null
							})()
						}),
						require_async = __commonJS(function () {
							'use strict'
							var aFrom = require_from(),
								objectMap = require_map(),
								mixin = require_mixin(),
								defineLength = require_define_length(),
								nextTick = require_next_tick(),
								slice = Array.prototype.slice,
								apply = Function.prototype.apply,
								create = Object.create
							require_registered_extensions().async = function (tbi, conf) {
								var currentCallback,
									currentContext,
									currentArgs,
									waiting = create(null),
									cache2 = create(null),
									base = conf.memoized,
									original = conf.original
								conf.memoized = defineLength(function (arg) {
									var args = arguments,
										last = args[args.length - 1]
									return (
										'function' == typeof last &&
											((currentCallback = last), (args = slice.call(args, 0, -1))),
										base.apply((currentContext = this), (currentArgs = args))
									)
								}, base)
								try {
									mixin(conf.memoized, base)
								} catch (ignore) {}
								conf.on('get', function (id) {
									var cb, context, args
									if (currentCallback) {
										if (waiting[id])
											return (
												'function' == typeof waiting[id]
													? (waiting[id] = [waiting[id], currentCallback])
													: waiting[id].push(currentCallback),
												void (currentCallback = null)
											)
										;(cb = currentCallback),
											(context = currentContext),
											(args = currentArgs),
											(currentCallback = currentContext = currentArgs = null),
											nextTick(function () {
												var data2
												hasOwnProperty.call(cache2, id)
													? ((data2 = cache2[id]),
													  conf.emit('getasync', id, args, context),
													  apply.call(cb, data2.context, data2.args))
													: ((currentCallback = cb),
													  (currentContext = context),
													  (currentArgs = args),
													  base.apply(context, args))
											})
									}
								}),
									(conf.original = function () {
										var args, cb, origCb, result
										return currentCallback
											? ((args = aFrom(arguments)),
											  (cb = function self2(err2) {
													var cb2,
														args2,
														id = self2.id
													if (null != id) {
														if ((delete self2.id, (cb2 = waiting[id]), delete waiting[id], cb2))
															return (
																(args2 = aFrom(arguments)),
																conf.has(id) &&
																	(err2
																		? conf.delete(id)
																		: ((cache2[id] = { context: this, args: args2 }),
																		  conf.emit(
																				'setasync',
																				id,
																				'function' == typeof cb2 ? 1 : cb2.length,
																		  ))),
																'function' == typeof cb2
																	? (result = apply.call(cb2, this, args2))
																	: cb2.forEach(function (cb3) {
																			result = apply.call(cb3, this, args2)
																	  }, this),
																result
															)
													} else nextTick(apply.bind(self2, this, arguments))
											  }),
											  (origCb = currentCallback),
											  (currentCallback = currentContext = currentArgs = null),
											  args.push(cb),
											  (result = apply.call(original, this, args)),
											  (cb.cb = origCb),
											  (currentCallback = cb),
											  result)
											: apply.call(original, this, arguments)
									}),
									conf.on('set', function (id) {
										currentCallback
											? (waiting[id]
													? 'function' == typeof waiting[id]
														? (waiting[id] = [waiting[id], currentCallback.cb])
														: waiting[id].push(currentCallback.cb)
													: (waiting[id] = currentCallback.cb),
											  delete currentCallback.cb,
											  (currentCallback.id = id),
											  (currentCallback = null))
											: conf.delete(id)
									}),
									conf.on('delete', function (id) {
										var result
										hasOwnProperty.call(waiting, id) ||
											(cache2[id] &&
												((result = cache2[id]),
												delete cache2[id],
												conf.emit('deleteasync', id, slice.call(result.args, 1))))
									}),
									conf.on('clear', function () {
										var oldCache = cache2
										;(cache2 = create(null)),
											conf.emit(
												'clearasync',
												objectMap(oldCache, function (data2) {
													return slice.call(data2.args, 1)
												}),
											)
									})
							}
						}),
						require_primitive_set = __commonJS(function (exports, module) {
							'use strict'
							var forEach = Array.prototype.forEach,
								create = Object.create
							module.exports = function (arg) {
								var set = create(null)
								return (
									forEach.call(arguments, function (name) {
										set[name] = !0
									}),
									set
								)
							}
						}),
						require_is_callable = __commonJS(function (exports, module) {
							'use strict'
							module.exports = function (obj) {
								return 'function' == typeof obj
							}
						}),
						require_validate_stringifiable = __commonJS(function (exports, module) {
							'use strict'
							var isCallable = require_is_callable()
							module.exports = function (stringifiable) {
								try {
									return stringifiable && isCallable(stringifiable.toString)
										? stringifiable.toString()
										: String(stringifiable)
								} catch (e) {
									throw new TypeError('Passed argument cannot be stringifed')
								}
							}
						}),
						require_validate_stringifiable_value = __commonJS(function (exports, module) {
							'use strict'
							var ensureValue = require_valid_value(),
								stringifiable = require_validate_stringifiable()
							module.exports = function (value) {
								return stringifiable(ensureValue(value))
							}
						}),
						require_safe_to_string = __commonJS(function (exports, module) {
							'use strict'
							var isCallable = require_is_callable()
							module.exports = function (value) {
								try {
									return value && isCallable(value.toString) ? value.toString() : String(value)
								} catch (e) {
									return '<Non-coercible to string value>'
								}
							}
						}),
						require_to_short_string_representation = __commonJS(function (exports, module) {
							'use strict'
							var safeToString = require_safe_to_string(),
								reNewLine = /[\n\r\u2028\u2029]/g
							module.exports = function (value) {
								var string = safeToString(value)
								return (
									string.length > 100 && (string = string.slice(0, 99) + '…'),
									(string = string.replace(reNewLine, function (_char) {
										return JSON.stringify(_char).slice(1, -1)
									}))
								)
							}
						}),
						require_is_promise = __commonJS(function (exports, module) {
							function isPromise(obj) {
								return (
									!!obj &&
									('object' === _typeof(obj) || 'function' == typeof obj) &&
									'function' == typeof obj.then
								)
							}
							;(module.exports = isPromise), (module.exports.default = isPromise)
						}),
						require_promise = __commonJS(function () {
							'use strict'
							var objectMap = require_map(),
								primitiveSet = require_primitive_set(),
								ensureString = require_validate_stringifiable_value(),
								toShortString = require_to_short_string_representation(),
								isPromise = require_is_promise(),
								nextTick = require_next_tick(),
								create = Object.create,
								supportedModes = primitiveSet('then', 'then:finally', 'done', 'done:finally')
							require_registered_extensions().promise = function (mode, conf) {
								var waiting = create(null),
									cache2 = create(null),
									promises = create(null)
								if (!0 === mode) mode = null
								else if (((mode = ensureString(mode)), !supportedModes[mode]))
									throw new TypeError("'" + toShortString(mode) + "' is not valid promise mode")
								conf.on('set', function (id, ignore, promise) {
									var isFailed = !1
									if (!isPromise(promise))
										return (cache2[id] = promise), void conf.emit('setasync', id, 1)
									;(waiting[id] = 1), (promises[id] = promise)
									var onSuccess = function onSuccess(result) {
											var count = waiting[id]
											if (isFailed)
												throw new Error(
													"Memoizee error: Detected unordered then|done & finally resolution, which in turn makes proper detection of success/failure impossible (when in 'done:finally' mode)\nConsider to rely on 'then' or 'done' mode instead.",
												)
											count &&
												(delete waiting[id],
												(cache2[id] = result),
												conf.emit('setasync', id, count))
										},
										onFailure = function onFailure() {
											;(isFailed = !0),
												waiting[id] && (delete waiting[id], delete promises[id], conf.delete(id))
										},
										resolvedMode = mode
									if ((resolvedMode || (resolvedMode = 'then'), 'then' === resolvedMode)) {
										var nextTickFailure = function nextTickFailure() {
											nextTick(onFailure)
										}
										'function' ==
											typeof (promise = promise.then(function (result) {
												nextTick(onSuccess.bind(this, result))
											}, nextTickFailure)).finally && promise.finally(nextTickFailure)
									} else if ('done' === resolvedMode) {
										if ('function' != typeof promise.done)
											throw new Error(
												"Memoizee error: Retrieved promise does not implement 'done' in 'done' mode",
											)
										promise.done(onSuccess, onFailure)
									} else if ('done:finally' === resolvedMode) {
										if ('function' != typeof promise.done)
											throw new Error(
												"Memoizee error: Retrieved promise does not implement 'done' in 'done:finally' mode",
											)
										if ('function' != typeof promise.finally)
											throw new Error(
												"Memoizee error: Retrieved promise does not implement 'finally' in 'done:finally' mode",
											)
										promise.done(onSuccess), promise.finally(onFailure)
									}
								}),
									conf.on('get', function (id, args, context) {
										var promise
										if (waiting[id]) ++waiting[id]
										else {
											promise = promises[id]
											var emit = function emit() {
												conf.emit('getasync', id, args, context)
											}
											isPromise(promise)
												? 'function' == typeof promise.done
													? promise.done(emit)
													: promise.then(function () {
															nextTick(emit)
													  })
												: emit()
										}
									}),
									conf.on('delete', function (id) {
										if ((delete promises[id], waiting[id])) delete waiting[id]
										else if (hasOwnProperty.call(cache2, id)) {
											var result = cache2[id]
											delete cache2[id], conf.emit('deleteasync', id, [result])
										}
									}),
									conf.on('clear', function () {
										var oldCache = cache2
										;(cache2 = create(null)),
											(waiting = create(null)),
											(promises = create(null)),
											conf.emit(
												'clearasync',
												objectMap(oldCache, function (data2) {
													return [data2]
												}),
											)
									})
							}
						}),
						require_dispose = __commonJS(function () {
							'use strict'
							var callable = require_valid_callable(),
								forEach = require_for_each(),
								extensions = require_registered_extensions(),
								apply = Function.prototype.apply
							extensions.dispose = function (dispose, conf, options) {
								var del
								if (
									(callable(dispose),
									(options.async && extensions.async) || (options.promise && extensions.promise))
								)
									return (
										conf.on(
											'deleteasync',
											(del = function del(id, resultArray) {
												apply.call(dispose, null, resultArray)
											}),
										),
										void conf.on('clearasync', function (cache2) {
											forEach(cache2, function (result, id) {
												del(id, result)
											})
										})
									)
								conf.on(
									'delete',
									(del = function del(id, result) {
										dispose(result)
									}),
								),
									conf.on('clear', function (cache2) {
										forEach(cache2, function (result, id) {
											del(id, result)
										})
									})
							}
						}),
						require_max_timeout = __commonJS(function (exports, module) {
							'use strict'
							module.exports = 2147483647
						}),
						require_valid_timeout = __commonJS(function (exports, module) {
							'use strict'
							var toPosInt = require_to_pos_integer(),
								maxTimeout = require_max_timeout()
							module.exports = function (value) {
								if ((value = toPosInt(value)) > maxTimeout)
									throw new TypeError(value + ' exceeds maximum possible timeout')
								return value
							}
						}),
						require_max_age = __commonJS(function () {
							'use strict'
							var aFrom = require_from(),
								forEach = require_for_each(),
								nextTick = require_next_tick(),
								isPromise = require_is_promise(),
								timeout = require_valid_timeout(),
								extensions = require_registered_extensions(),
								noop3 = Function.prototype,
								max = Math.max,
								min = Math.min,
								create = Object.create
							extensions.maxAge = function (maxAge, conf, options) {
								var timeouts, postfix, preFetchAge, preFetchTimeouts
								;(maxAge = timeout(maxAge)) &&
									((timeouts = create(null)),
									(postfix =
										(options.async && extensions.async) || (options.promise && extensions.promise)
											? 'async'
											: ''),
									conf.on('set' + postfix, function (id) {
										;(timeouts[id] = setTimeout(function () {
											conf.delete(id)
										}, maxAge)),
											'function' == typeof timeouts[id].unref && timeouts[id].unref(),
											preFetchTimeouts &&
												(preFetchTimeouts[id] &&
													'nextTick' !== preFetchTimeouts[id] &&
													clearTimeout(preFetchTimeouts[id]),
												(preFetchTimeouts[id] = setTimeout(function () {
													delete preFetchTimeouts[id]
												}, preFetchAge)),
												'function' == typeof preFetchTimeouts[id].unref &&
													preFetchTimeouts[id].unref())
									}),
									conf.on('delete' + postfix, function (id) {
										clearTimeout(timeouts[id]),
											delete timeouts[id],
											preFetchTimeouts &&
												('nextTick' !== preFetchTimeouts[id] && clearTimeout(preFetchTimeouts[id]),
												delete preFetchTimeouts[id])
									}),
									options.preFetch &&
										(preFetchAge =
											!0 === options.preFetch || isNaN(options.preFetch)
												? 0.333
												: max(min(Number(options.preFetch), 1), 0)) &&
										((preFetchTimeouts = {}),
										(preFetchAge = (1 - preFetchAge) * maxAge),
										conf.on('get' + postfix, function (id, args, context) {
											preFetchTimeouts[id] ||
												((preFetchTimeouts[id] = 'nextTick'),
												nextTick(function () {
													var result
													'nextTick' === preFetchTimeouts[id] &&
														(delete preFetchTimeouts[id],
														conf.delete(id),
														options.async && (args = aFrom(args)).push(noop3),
														(result = conf.memoized.apply(context, args)),
														options.promise &&
															isPromise(result) &&
															('function' == typeof result.done
																? result.done(noop3, noop3)
																: result.then(noop3, noop3)))
												}))
										})),
									conf.on('clear' + postfix, function () {
										forEach(timeouts, function (id) {
											clearTimeout(id)
										}),
											(timeouts = {}),
											preFetchTimeouts &&
												(forEach(preFetchTimeouts, function (id) {
													'nextTick' !== id && clearTimeout(id)
												}),
												(preFetchTimeouts = {}))
									}))
							}
						}),
						require_lru_queue = __commonJS(function (exports, module) {
							'use strict'
							var toPosInt = require_to_pos_integer(),
								create = Object.create,
								hasOwnProperty2 = Object.prototype.hasOwnProperty
							module.exports = function (limit) {
								var del,
									size = 0,
									base = 1,
									queue2 = create(null),
									map = create(null),
									index = 0
								return (
									(limit = toPosInt(limit)),
									{
										hit: function hit(id) {
											var oldIndex = map[id],
												nuIndex = ++index
											if (((queue2[nuIndex] = id), (map[id] = nuIndex), !oldIndex)) {
												if (++size <= limit) return
												return (id = queue2[base]), del(id), id
											}
											if ((delete queue2[oldIndex], base === oldIndex))
												for (; !hasOwnProperty2.call(queue2, ++base); );
										},
										delete: (del = function del(id) {
											var oldIndex = map[id]
											if (
												oldIndex &&
												(delete queue2[oldIndex], delete map[id], --size, base === oldIndex)
											) {
												if (!size) return (index = 0), void (base = 1)
												for (; !hasOwnProperty2.call(queue2, ++base); );
											}
										}),
										clear: function clear() {
											;(size = 0),
												(base = 1),
												(queue2 = create(null)),
												(map = create(null)),
												(index = 0)
										},
									}
								)
							}
						}),
						require_max = __commonJS(function () {
							'use strict'
							var toPosInteger = require_to_pos_integer(),
								lruQueue = require_lru_queue(),
								extensions = require_registered_extensions()
							extensions.max = function (max, conf, options) {
								var postfix, queue2, hit
								;(max = toPosInteger(max)) &&
									((queue2 = lruQueue(max)),
									(postfix =
										(options.async && extensions.async) || (options.promise && extensions.promise)
											? 'async'
											: ''),
									conf.on(
										'set' + postfix,
										(hit = function hit(id) {
											void 0 !== (id = queue2.hit(id)) && conf.delete(id)
										}),
									),
									conf.on('get' + postfix, hit),
									conf.on('delete' + postfix, queue2.delete),
									conf.on('clear' + postfix, queue2.clear))
							}
						}),
						require_ref_counter = __commonJS(function () {
							'use strict'
							var d = require_d(),
								extensions = require_registered_extensions(),
								create = Object.create,
								defineProperties = Object.defineProperties
							extensions.refCounter = function (ignore, conf, options) {
								var cache2, postfix
								;(cache2 = create(null)),
									(postfix =
										(options.async && extensions.async) || (options.promise && extensions.promise)
											? 'async'
											: ''),
									conf.on('set' + postfix, function (id, length) {
										cache2[id] = length || 1
									}),
									conf.on('get' + postfix, function (id) {
										++cache2[id]
									}),
									conf.on('delete' + postfix, function (id) {
										delete cache2[id]
									}),
									conf.on('clear' + postfix, function () {
										cache2 = {}
									}),
									defineProperties(conf.memoized, {
										deleteRef: d(function () {
											var id = conf.get(arguments)
											return null === id
												? null
												: cache2[id]
												? !--cache2[id] && (conf.delete(id), !0)
												: null
										}),
										getRefCount: d(function () {
											var id = conf.get(arguments)
											return null === id ? 0 : cache2[id] ? cache2[id] : 0
										}),
									})
							}
						}),
						require_memoizee = __commonJS(function (exports, module) {
							'use strict'
							var normalizeOpts = require_normalize_options(),
								resolveLength = require_resolve_length(),
								plain = require_plain()
							module.exports = function (fn) {
								var length,
									options = normalizeOpts(arguments[1])
								return (
									options.normalizer ||
										(0 !==
											(length = options.length =
												resolveLength(options.length, fn.length, options.async)) &&
											(options.primitive
												? !1 === length
													? (options.normalizer = require_primitive())
													: length > 1 &&
													  (options.normalizer = require_get_primitive_fixed()(length))
												: (options.normalizer =
														!1 === length
															? require_get()()
															: 1 === length
															? require_get_1()()
															: require_get_fixed()(length)))),
									options.async && require_async(),
									options.promise && require_promise(),
									options.dispose && require_dispose(),
									options.maxAge && require_max_age(),
									options.max && require_max(),
									options.refCounter && require_ref_counter(),
									plain(fn, options)
								)
							}
						}),
						require_doT = __commonJS(function (exports, module) {
							!(function () {
								'use strict'
								var doT3 = {
									name: 'doT',
									version: '1.1.1',
									templateSettings: {
										evaluate: /\{\{([\s\S]+?(\}?)+)\}\}/g,
										interpolate: /\{\{=([\s\S]+?)\}\}/g,
										encode: /\{\{!([\s\S]+?)\}\}/g,
										use: /\{\{#([\s\S]+?)\}\}/g,
										useParams:
											/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
										define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
										defineParams: /^\s*([\w$]+):([\s\S]+)/,
										conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
										iterate:
											/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
										varname: 'it',
										strip: !0,
										append: !0,
										selfcontained: !1,
										doNotSkipEncoded: !1,
									},
									template: void 0,
									compile: void 0,
									log: !0,
								}
								!(function () {
									if (
										'object' !==
										('undefined' == typeof globalThis ? 'undefined' : _typeof(globalThis))
									)
										try {
											Object.defineProperty(Object.prototype, '__magic__', {
												get: function get() {
													return this
												},
												configurable: !0,
											}),
												(__magic__.globalThis = __magic__),
												delete Object.prototype.__magic__
										} catch (e) {
											window.globalThis = (function () {
												if ('undefined' != typeof self) return self
												if (void 0 !== window) return window
												if (void 0 !== global) return global
												if (void 0 !== this) return this
												throw new Error('Unable to locate global `this`')
											})()
										}
								})(),
									(doT3.encodeHTMLSource = function (doNotSkipEncoded) {
										var encodeHTMLRules = {
												'&': '&#38;',
												'<': '&#60;',
												'>': '&#62;',
												'"': '&#34;',
												"'": '&#39;',
												'/': '&#47;',
											},
											matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g
										return function (code) {
											return code
												? code.toString().replace(matchHTML, function (m) {
														return encodeHTMLRules[m] || m
												  })
												: ''
										}
									}),
									void 0 !== module && module.exports
										? (module.exports = doT3)
										: void 0 ===
												(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
													return doT3
												}.call(exports, __webpack_require__, exports, module)) ||
										  (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
								var startend = {
										append: { start: "'+(", end: ")+'", startencode: "'+encodeHTML(" },
										split: {
											start: "';out+=(",
											end: ");out+='",
											startencode: "';out+=encodeHTML(",
										},
									},
									skip = /$^/
								function resolveDefs(c, block, def) {
									return ('string' == typeof block ? block : block.toString())
										.replace(c.define || skip, function (m, code, assign, value) {
											return (
												0 === code.indexOf('def.') && (code = code.substring(4)),
												code in def ||
													(':' === assign
														? (c.defineParams &&
																value.replace(c.defineParams, function (m2, param, v) {
																	def[code] = { arg: param, text: v }
																}),
														  code in def || (def[code] = value))
														: new Function('def', "def['" + code + "']=" + value)(def)),
												''
											)
										})
										.replace(c.use || skip, function (m, code) {
											c.useParams &&
												(code = code.replace(c.useParams, function (m2, s, d, param) {
													if (def[d] && def[d].arg && param) {
														var rw = (d + ':' + param).replace(/'|\\/g, '_')
														return (
															(def.__exp = def.__exp || {}),
															(def.__exp[rw] = def[d].text.replace(
																new RegExp('(^|[^\\w$])' + def[d].arg + '([^\\w$])', 'g'),
																'$1' + param + '$2',
															)),
															s + "def.__exp['" + rw + "']"
														)
													}
												}))
											var v = new Function('def', 'return ' + code)(def)
											return v ? resolveDefs(c, v, def) : v
										})
								}
								function unescape(code) {
									return code.replace(/\\('|\\)/g, '$1').replace(/[\r\t\n]/g, ' ')
								}
								;(doT3.template = function (tmpl, c, def) {
									var needhtmlencode,
										indv,
										cse = (c = c || doT3.templateSettings).append
											? startend.append
											: startend.split,
										sid = 0,
										str = c.use || c.define ? resolveDefs(c, tmpl, def || {}) : tmpl
									;(str = (
										"var out='" +
										(c.strip
											? str
													.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, ' ')
													.replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, '')
											: str
										)
											.replace(/'|\\/g, '\\$&')
											.replace(c.interpolate || skip, function (m, code) {
												return cse.start + unescape(code) + cse.end
											})
											.replace(c.encode || skip, function (m, code) {
												return (needhtmlencode = !0), cse.startencode + unescape(code) + cse.end
											})
											.replace(c.conditional || skip, function (m, elsecase, code) {
												return elsecase
													? code
														? "';}else if(" + unescape(code) + "){out+='"
														: "';}else{out+='"
													: code
													? "';if(" + unescape(code) + "){out+='"
													: "';}out+='"
											})
											.replace(c.iterate || skip, function (m, iterate, vname, iname) {
												return iterate
													? ((sid += 1),
													  (indv = iname || 'i' + sid),
													  (iterate = unescape(iterate)),
													  "';var arr" +
															sid +
															'=' +
															iterate +
															';if(arr' +
															sid +
															'){var ' +
															vname +
															',' +
															indv +
															'=-1,l' +
															sid +
															'=arr' +
															sid +
															'.length-1;while(' +
															indv +
															'<l' +
															sid +
															'){' +
															vname +
															'=arr' +
															sid +
															'[' +
															indv +
															"+=1];out+='")
													: "';} } out+='"
											})
											.replace(c.evaluate || skip, function (m, code) {
												return "';" + unescape(code) + "out+='"
											}) +
										"';return out;"
									)
										.replace(/\n/g, '\\n')
										.replace(/\t/g, '\\t')
										.replace(/\r/g, '\\r')
										.replace(/(\s|;|\}|^|\{)out\+='';/g, '$1')
										.replace(/\+''/g, '')),
										needhtmlencode &&
											(c.selfcontained ||
												!globalThis ||
												globalThis._encodeHTML ||
												(globalThis._encodeHTML = doT3.encodeHTMLSource(c.doNotSkipEncoded)),
											(str =
												"var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (" +
												doT3.encodeHTMLSource.toString() +
												'(' +
												(c.doNotSkipEncoded || '') +
												'));' +
												str))
									try {
										return new Function(c.varname, str)
									} catch (e) {
										throw (
											('undefined' != typeof console &&
												console.log('Could not create a template function: ' + str),
											e)
										)
									}
								}),
									(doT3.compile = function (tmpl, def) {
										return doT3.template(tmpl, null, def)
									})
							})()
						}),
						require_es6_promise = __commonJS(function (exports, module) {
							var factory
							;(factory = function () {
								'use strict'
								function isFunction(x) {
									return 'function' == typeof x
								}
								var isArray = Array.isArray
										? Array.isArray
										: function _isArray(x) {
												return '[object Array]' === Object.prototype.toString.call(x)
										  },
									len = 0,
									vertxNext = void 0,
									customSchedulerFn = void 0,
									asap = function asap2(callback, arg) {
										;(queue2[len] = callback),
											(queue2[len + 1] = arg),
											2 === (len += 2) &&
												(customSchedulerFn ? customSchedulerFn(flush) : scheduleFlush())
									},
									browserWindow = void 0 !== window ? window : void 0,
									browserGlobal = browserWindow || {},
									BrowserMutationObserver =
										browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver,
									isNode2 =
										'undefined' == typeof self &&
										void 0 !== process &&
										'[object process]' === {}.toString.call(process),
									isWorker =
										'undefined' != typeof Uint8ClampedArray &&
										'undefined' != typeof importScripts &&
										'undefined' != typeof MessageChannel
								function useSetTimeout() {
									var globalSetTimeout = setTimeout
									return function () {
										return globalSetTimeout(flush, 1)
									}
								}
								var queue2 = new Array(1e3)
								function flush() {
									for (var i = 0; i < len; i += 2)
										(0, queue2[i])(queue2[i + 1]), (queue2[i] = void 0), (queue2[i + 1] = void 0)
									len = 0
								}
								var scheduleFlush = void 0
								function then(onFulfillment, onRejection) {
									var parent = this,
										child = new this.constructor(noop3)
									void 0 === child[PROMISE_ID] && makePromise(child)
									var _state = parent._state
									if (_state) {
										var callback = arguments[_state - 1]
										asap(function () {
											return invokeCallback(_state, child, callback, parent._result)
										})
									} else subscribe2(parent, child, onFulfillment, onRejection)
									return child
								}
								function resolve$1(object) {
									if (object && 'object' === _typeof(object) && object.constructor === this)
										return object
									var promise = new this(noop3)
									return resolve(promise, object), promise
								}
								scheduleFlush = isNode2
									? (function useNextTick() {
											return function () {
												return process.nextTick(flush)
											}
									  })()
									: BrowserMutationObserver
									? (function useMutationObserver() {
											var iterations = 0,
												observer = new BrowserMutationObserver(flush),
												node = document.createTextNode('')
											return (
												observer.observe(node, { characterData: !0 }),
												function () {
													node.data = iterations = ++iterations % 2
												}
											)
									  })()
									: isWorker
									? (function useMessageChannel() {
											var channel = new MessageChannel()
											return (
												(channel.port1.onmessage = flush),
												function () {
													return channel.port2.postMessage(0)
												}
											)
									  })()
									: void 0 === browserWindow
									? (function attemptVertx() {
											try {
												var vertx = Function('return this')().require('vertx')
												return (
													(vertxNext = vertx.runOnLoop || vertx.runOnContext),
													(function useVertxTimer() {
														return void 0 !== vertxNext
															? function () {
																	vertxNext(flush)
															  }
															: useSetTimeout()
													})()
												)
											} catch (e) {
												return useSetTimeout()
											}
									  })()
									: useSetTimeout()
								var PROMISE_ID = Math.random().toString(36).substring(2)
								function noop3() {}
								function handleMaybeThenable(promise, maybeThenable, then$$1) {
									maybeThenable.constructor === promise.constructor &&
									then$$1 === then &&
									maybeThenable.constructor.resolve === resolve$1
										? (function handleOwnThenable(promise, thenable) {
												1 === thenable._state
													? fulfill(promise, thenable._result)
													: 2 === thenable._state
													? reject(promise, thenable._result)
													: subscribe2(
															thenable,
															void 0,
															function (value) {
																return resolve(promise, value)
															},
															function (reason) {
																return reject(promise, reason)
															},
													  )
										  })(promise, maybeThenable)
										: void 0 === then$$1
										? fulfill(promise, maybeThenable)
										: isFunction(then$$1)
										? (function handleForeignThenable(promise, thenable, then$$1) {
												asap(function (promise2) {
													var sealed = !1,
														error = (function tryThen(
															then$$1,
															value,
															fulfillmentHandler,
															rejectionHandler,
														) {
															try {
																then$$1.call(value, fulfillmentHandler, rejectionHandler)
															} catch (e) {
																return e
															}
														})(
															then$$1,
															thenable,
															function (value) {
																sealed ||
																	((sealed = !0),
																	thenable !== value
																		? resolve(promise2, value)
																		: fulfill(promise2, value))
															},
															function (reason) {
																sealed || ((sealed = !0), reject(promise2, reason))
															},
															promise2._label,
														)
													!sealed && error && ((sealed = !0), reject(promise2, error))
												}, promise)
										  })(promise, maybeThenable, then$$1)
										: fulfill(promise, maybeThenable)
								}
								function resolve(promise, value) {
									if (promise === value)
										reject(
											promise,
											(function selfFulfillment() {
												return new TypeError('You cannot resolve a promise with itself')
											})(),
										)
									else if (
										(function objectOrFunction(x) {
											var type = _typeof(x)
											return null !== x && ('object' === type || 'function' === type)
										})(value)
									) {
										var then$$1 = void 0
										try {
											then$$1 = value.then
										} catch (error) {
											return void reject(promise, error)
										}
										handleMaybeThenable(promise, value, then$$1)
									} else fulfill(promise, value)
								}
								function publishRejection(promise) {
									promise._onerror && promise._onerror(promise._result), publish(promise)
								}
								function fulfill(promise, value) {
									void 0 === promise._state &&
										((promise._result = value),
										(promise._state = 1),
										0 !== promise._subscribers.length && asap(publish, promise))
								}
								function reject(promise, reason) {
									void 0 === promise._state &&
										((promise._state = 2),
										(promise._result = reason),
										asap(publishRejection, promise))
								}
								function subscribe2(parent, child, onFulfillment, onRejection) {
									var _subscribers = parent._subscribers,
										length = _subscribers.length
									;(parent._onerror = null),
										(_subscribers[length] = child),
										(_subscribers[length + 1] = onFulfillment),
										(_subscribers[length + 2] = onRejection),
										0 === length && parent._state && asap(publish, parent)
								}
								function publish(promise) {
									var subscribers = promise._subscribers,
										settled = promise._state
									if (0 !== subscribers.length) {
										for (
											var child = void 0, callback = void 0, detail = promise._result, i = 0;
											i < subscribers.length;
											i += 3
										)
											(child = subscribers[i]),
												(callback = subscribers[i + settled]),
												child ? invokeCallback(settled, child, callback, detail) : callback(detail)
										promise._subscribers.length = 0
									}
								}
								function invokeCallback(settled, promise, callback, detail) {
									var hasCallback = isFunction(callback),
										value = void 0,
										error = void 0,
										succeeded = !0
									if (hasCallback) {
										try {
											value = callback(detail)
										} catch (e) {
											;(succeeded = !1), (error = e)
										}
										if (promise === value)
											return void reject(
												promise,
												(function cannotReturnOwn() {
													return new TypeError(
														'A promises callback cannot return that same promise.',
													)
												})(),
											)
									} else value = detail
									void 0 !== promise._state ||
										(hasCallback && succeeded
											? resolve(promise, value)
											: !1 === succeeded
											? reject(promise, error)
											: 1 === settled
											? fulfill(promise, value)
											: 2 === settled && reject(promise, value))
								}
								var id = 0
								function makePromise(promise) {
									;(promise[PROMISE_ID] = id++),
										(promise._state = void 0),
										(promise._result = void 0),
										(promise._subscribers = [])
								}
								var Enumerator = (function () {
										function Enumerator2(Constructor, input) {
											;(this._instanceConstructor = Constructor),
												(this.promise = new Constructor(noop3)),
												this.promise[PROMISE_ID] || makePromise(this.promise),
												isArray(input)
													? ((this.length = input.length),
													  (this._remaining = input.length),
													  (this._result = new Array(this.length)),
													  0 === this.length
															? fulfill(this.promise, this._result)
															: ((this.length = this.length || 0),
															  this._enumerate(input),
															  0 === this._remaining && fulfill(this.promise, this._result)))
													: reject(
															this.promise,
															(function validationError() {
																return new Error('Array Methods must be provided an Array')
															})(),
													  )
										}
										return (
											(Enumerator2.prototype._enumerate = function _enumerate(input) {
												for (var i = 0; void 0 === this._state && i < input.length; i++)
													this._eachEntry(input[i], i)
											}),
											(Enumerator2.prototype._eachEntry = function _eachEntry(entry, i) {
												var c = this._instanceConstructor,
													resolve$$1 = c.resolve
												if (resolve$$1 === resolve$1) {
													var _then = void 0,
														error = void 0,
														didError = !1
													try {
														_then = entry.then
													} catch (e) {
														;(didError = !0), (error = e)
													}
													if (_then === then && void 0 !== entry._state)
														this._settledAt(entry._state, i, entry._result)
													else if ('function' != typeof _then)
														this._remaining--, (this._result[i] = entry)
													else if (c === Promise$1) {
														var promise = new c(noop3)
														didError
															? reject(promise, error)
															: handleMaybeThenable(promise, entry, _then),
															this._willSettleAt(promise, i)
													} else
														this._willSettleAt(
															new c(function (resolve$$12) {
																return resolve$$12(entry)
															}),
															i,
														)
												} else this._willSettleAt(resolve$$1(entry), i)
											}),
											(Enumerator2.prototype._settledAt = function _settledAt(state, i, value) {
												var promise = this.promise
												void 0 === promise._state &&
													(this._remaining--,
													2 === state ? reject(promise, value) : (this._result[i] = value)),
													0 === this._remaining && fulfill(promise, this._result)
											}),
											(Enumerator2.prototype._willSettleAt = function _willSettleAt(promise, i) {
												var enumerator = this
												subscribe2(
													promise,
													void 0,
													function (value) {
														return enumerator._settledAt(1, i, value)
													},
													function (reason) {
														return enumerator._settledAt(2, i, reason)
													},
												)
											}),
											Enumerator2
										)
									})(),
									Promise$1 = (function () {
										function Promise2(resolver) {
											;(this[PROMISE_ID] = (function nextId() {
												return id++
											})()),
												(this._result = this._state = void 0),
												(this._subscribers = []),
												noop3 !== resolver &&
													('function' != typeof resolver &&
														(function needsResolver() {
															throw new TypeError(
																'You must pass a resolver function as the first argument to the promise constructor',
															)
														})(),
													this instanceof Promise2
														? (function initializePromise(promise, resolver) {
																try {
																	resolver(
																		function resolvePromise(value) {
																			resolve(promise, value)
																		},
																		function rejectPromise(reason) {
																			reject(promise, reason)
																		},
																	)
																} catch (e) {
																	reject(promise, e)
																}
														  })(this, resolver)
														: (function needsNew() {
																throw new TypeError(
																	"Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.",
																)
														  })())
										}
										return (
											(Promise2.prototype.catch = function _catch(onRejection) {
												return this.then(null, onRejection)
											}),
											(Promise2.prototype.finally = function _finally(callback) {
												var constructor = this.constructor
												return isFunction(callback)
													? this.then(
															function (value) {
																return constructor.resolve(callback()).then(function () {
																	return value
																})
															},
															function (reason) {
																return constructor.resolve(callback()).then(function () {
																	throw reason
																})
															},
													  )
													: this.then(callback, callback)
											}),
											Promise2
										)
									})()
								return (
									(Promise$1.prototype.then = then),
									(Promise$1.all = function all(entries) {
										return new Enumerator(this, entries).promise
									}),
									(Promise$1.race = function race(entries) {
										var Constructor = this
										return isArray(entries)
											? new Constructor(function (resolve2, reject2) {
													for (var length = entries.length, i = 0; i < length; i++)
														Constructor.resolve(entries[i]).then(resolve2, reject2)
											  })
											: new Constructor(function (_, reject2) {
													return reject2(new TypeError('You must pass an array to race.'))
											  })
									}),
									(Promise$1.resolve = resolve$1),
									(Promise$1.reject = function reject$1(reason) {
										var promise = new this(noop3)
										return reject(promise, reason), promise
									}),
									(Promise$1._setScheduler = function setScheduler(scheduleFn) {
										customSchedulerFn = scheduleFn
									}),
									(Promise$1._setAsap = function setAsap(asapFn) {
										asap = asapFn
									}),
									(Promise$1._asap = asap),
									(Promise$1.polyfill = function polyfill() {
										var local = void 0
										if (void 0 !== global) local = global
										else if ('undefined' != typeof self) local = self
										else
											try {
												local = Function('return this')()
											} catch (e) {
												throw new Error(
													'polyfill failed because global object is unavailable in this environment',
												)
											}
										var P = local.Promise
										if (P) {
											var promiseToString = null
											try {
												promiseToString = Object.prototype.toString.call(P.resolve())
											} catch (e) {}
											if ('[object Promise]' === promiseToString && !P.cast) return
										}
										local.Promise = Promise$1
									}),
									(Promise$1.Promise = Promise$1),
									Promise$1
								)
							}),
								'object' === _typeof(exports) && void 0 !== module
									? (module.exports = factory())
									: void 0 ===
											(__WEBPACK_AMD_DEFINE_RESULT__ =
												'function' == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = factory)
													? __WEBPACK_AMD_DEFINE_FACTORY__.call(
															exports,
															__webpack_require__,
															exports,
															module,
													  )
													: __WEBPACK_AMD_DEFINE_FACTORY__) ||
									  (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
						}),
						require_typedarray = __commonJS(function (exports) {
							var opts,
								ophop,
								defineProp,
								ECMAScript =
									((opts = Object.prototype.toString),
									(ophop = Object.prototype.hasOwnProperty),
									{
										Class: function Class(v) {
											return opts.call(v).replace(/^\[object *|\]$/g, '')
										},
										HasProperty: function HasProperty(o, p) {
											return p in o
										},
										HasOwnProperty: function HasOwnProperty(o, p) {
											return ophop.call(o, p)
										},
										IsCallable: function IsCallable(o) {
											return 'function' == typeof o
										},
										ToInt32: function ToInt32(v) {
											return v >> 0
										},
										ToUint32: function ToUint32(v) {
											return v >>> 0
										},
									}),
								LN2 = Math.LN2,
								abs = Math.abs,
								floor = Math.floor,
								log2 = Math.log,
								min = Math.min,
								pow = Math.pow,
								round = Math.round
							function configureProperties(obj) {
								if (getOwnPropNames && defineProp) {
									var i,
										props = getOwnPropNames(obj)
									for (i = 0; i < props.length; i += 1)
										defineProp(obj, props[i], {
											value: obj[props[i]],
											writable: !1,
											enumerable: !1,
											configurable: !1,
										})
								}
							}
							defineProp =
								Object.defineProperty &&
								(function () {
									try {
										return Object.defineProperty({}, 'x', {}), !0
									} catch (e) {
										return !1
									}
								})()
									? Object.defineProperty
									: function defineProp(o, p, desc) {
											if (!o === Object(o))
												throw new TypeError('Object.defineProperty called on non-object')
											return (
												ECMAScript.HasProperty(desc, 'get') &&
													Object.prototype.__defineGetter__ &&
													Object.prototype.__defineGetter__.call(o, p, desc.get),
												ECMAScript.HasProperty(desc, 'set') &&
													Object.prototype.__defineSetter__ &&
													Object.prototype.__defineSetter__.call(o, p, desc.set),
												ECMAScript.HasProperty(desc, 'value') && (o[p] = desc.value),
												o
											)
									  }
							var getOwnPropNames =
								Object.getOwnPropertyNames ||
								function (o) {
									if (o !== Object(o))
										throw new TypeError('Object.getOwnPropertyNames called on non-object')
									var p,
										props = []
									for (p in o) ECMAScript.HasOwnProperty(o, p) && props.push(p)
									return props
								}
							function makeArrayAccessors(obj) {
								if (defineProp) {
									if (obj.length > 1e5) throw new RangeError('Array too large for polyfill')
									var i
									for (i = 0; i < obj.length; i += 1) makeArrayAccessor(i)
								}
								function makeArrayAccessor(index) {
									defineProp(obj, index, {
										get: function get() {
											return obj._getter(index)
										},
										set: function set(v) {
											obj._setter(index, v)
										},
										enumerable: !0,
										configurable: !1,
									})
								}
							}
							function as_signed(value, bits) {
								var s = 32 - bits
								return (value << s) >> s
							}
							function as_unsigned(value, bits) {
								var s = 32 - bits
								return (value << s) >>> s
							}
							function packI8(n) {
								return [255 & n]
							}
							function unpackI8(bytes) {
								return as_signed(bytes[0], 8)
							}
							function packU8(n) {
								return [255 & n]
							}
							function unpackU8(bytes) {
								return as_unsigned(bytes[0], 8)
							}
							function packU8Clamped(n) {
								return [(n = round(Number(n))) < 0 ? 0 : n > 255 ? 255 : 255 & n]
							}
							function packI16(n) {
								return [(n >> 8) & 255, 255 & n]
							}
							function unpackI16(bytes) {
								return as_signed((bytes[0] << 8) | bytes[1], 16)
							}
							function packU16(n) {
								return [(n >> 8) & 255, 255 & n]
							}
							function unpackU16(bytes) {
								return as_unsigned((bytes[0] << 8) | bytes[1], 16)
							}
							function packI32(n) {
								return [(n >> 24) & 255, (n >> 16) & 255, (n >> 8) & 255, 255 & n]
							}
							function unpackI32(bytes) {
								return as_signed(
									(bytes[0] << 24) | (bytes[1] << 16) | (bytes[2] << 8) | bytes[3],
									32,
								)
							}
							function packU32(n) {
								return [(n >> 24) & 255, (n >> 16) & 255, (n >> 8) & 255, 255 & n]
							}
							function unpackU32(bytes) {
								return as_unsigned(
									(bytes[0] << 24) | (bytes[1] << 16) | (bytes[2] << 8) | bytes[3],
									32,
								)
							}
							function packIEEE754(v, ebits, fbits) {
								var s,
									e,
									f,
									i,
									bits,
									str,
									bytes,
									bias = (1 << (ebits - 1)) - 1
								function roundToEven(n) {
									var w = floor(n),
										f2 = n - w
									return f2 < 0.5 ? w : f2 > 0.5 || w % 2 ? w + 1 : w
								}
								for (
									v != v
										? ((e = (1 << ebits) - 1), (f = pow(2, fbits - 1)), (s = 0))
										: v === 1 / 0 || v === -1 / 0
										? ((e = (1 << ebits) - 1), (f = 0), (s = v < 0 ? 1 : 0))
										: 0 === v
										? ((e = 0), (f = 0), (s = 1 / v == -1 / 0 ? 1 : 0))
										: ((s = v < 0),
										  (v = abs(v)) >= pow(2, 1 - bias)
												? ((e = min(floor(log2(v) / LN2), 1023)),
												  (f = roundToEven((v / pow(2, e)) * pow(2, fbits))) / pow(2, fbits) >= 2 &&
														((e += 1), (f = 1)),
												  e > bias
														? ((e = (1 << ebits) - 1), (f = 0))
														: ((e += bias), (f -= pow(2, fbits))))
												: ((e = 0), (f = roundToEven(v / pow(2, 1 - bias - fbits))))),
										bits = [],
										i = fbits;
									i;
									i -= 1
								)
									bits.push(f % 2 ? 1 : 0), (f = floor(f / 2))
								for (i = ebits; i; i -= 1) bits.push(e % 2 ? 1 : 0), (e = floor(e / 2))
								for (
									bits.push(s ? 1 : 0), bits.reverse(), str = bits.join(''), bytes = [];
									str.length;

								)
									bytes.push(parseInt(str.substring(0, 8), 2)), (str = str.substring(8))
								return bytes
							}
							function unpackIEEE754(bytes, ebits, fbits) {
								var i,
									j,
									b,
									str,
									bias,
									s,
									e,
									f,
									bits = []
								for (i = bytes.length; i; i -= 1)
									for (b = bytes[i - 1], j = 8; j; j -= 1) bits.push(b % 2 ? 1 : 0), (b >>= 1)
								return (
									bits.reverse(),
									(str = bits.join('')),
									(bias = (1 << (ebits - 1)) - 1),
									(s = parseInt(str.substring(0, 1), 2) ? -1 : 1),
									(e = parseInt(str.substring(1, 1 + ebits), 2)),
									(f = parseInt(str.substring(1 + ebits), 2)),
									e === (1 << ebits) - 1
										? 0 !== f
											? NaN
											: s * (1 / 0)
										: e > 0
										? s * pow(2, e - bias) * (1 + f / pow(2, fbits))
										: 0 !== f
										? s * pow(2, -(bias - 1)) * (f / pow(2, fbits))
										: s < 0
										? -0
										: 0
								)
							}
							function unpackF64(b) {
								return unpackIEEE754(b, 11, 52)
							}
							function packF64(v) {
								return packIEEE754(v, 11, 52)
							}
							function unpackF32(b) {
								return unpackIEEE754(b, 8, 23)
							}
							function packF32(v) {
								return packIEEE754(v, 8, 23)
							}
							!(function () {
								var ArrayBuffer = function ArrayBuffer2(length) {
									if ((length = ECMAScript.ToInt32(length)) < 0)
										throw new RangeError('ArrayBuffer size is not a small enough positive integer')
									var i
									for (
										this.byteLength = length, this._bytes = [], this._bytes.length = length, i = 0;
										i < this.byteLength;
										i += 1
									)
										this._bytes[i] = 0
									configureProperties(this)
								}
								exports.ArrayBuffer = exports.ArrayBuffer || ArrayBuffer
								var ArrayBufferView = function ArrayBufferView2() {}
								function makeConstructor(bytesPerElement, pack, unpack) {
									var _ctor
									return (
										(_ctor = function ctor(buffer, byteOffset, length) {
											var array, sequence, i, s
											if (arguments.length && 'number' != typeof arguments[0])
												if (
													'object' === _typeof(arguments[0]) &&
													arguments[0].constructor === _ctor
												)
													for (
														array = arguments[0],
															this.length = array.length,
															this.byteLength = this.length * this.BYTES_PER_ELEMENT,
															this.buffer = new ArrayBuffer(this.byteLength),
															this.byteOffset = 0,
															i = 0;
														i < this.length;
														i += 1
													)
														this._setter(i, array._getter(i))
												else if (
													'object' !== _typeof(arguments[0]) ||
													arguments[0] instanceof ArrayBuffer ||
													'ArrayBuffer' === ECMAScript.Class(arguments[0])
												) {
													if (
														'object' !== _typeof(arguments[0]) ||
														!(
															arguments[0] instanceof ArrayBuffer ||
															'ArrayBuffer' === ECMAScript.Class(arguments[0])
														)
													)
														throw new TypeError('Unexpected argument type(s)')
													if (
														((this.buffer = buffer),
														(this.byteOffset = ECMAScript.ToUint32(byteOffset)),
														this.byteOffset > this.buffer.byteLength)
													)
														throw new RangeError('byteOffset out of range')
													if (this.byteOffset % this.BYTES_PER_ELEMENT)
														throw new RangeError(
															'ArrayBuffer length minus the byteOffset is not a multiple of the element size.',
														)
													if (arguments.length < 3) {
														if (
															((this.byteLength = this.buffer.byteLength - this.byteOffset),
															this.byteLength % this.BYTES_PER_ELEMENT)
														)
															throw new RangeError(
																'length of buffer minus byteOffset not a multiple of the element size',
															)
														this.length = this.byteLength / this.BYTES_PER_ELEMENT
													} else
														(this.length = ECMAScript.ToUint32(length)),
															(this.byteLength = this.length * this.BYTES_PER_ELEMENT)
													if (this.byteOffset + this.byteLength > this.buffer.byteLength)
														throw new RangeError(
															'byteOffset and length reference an area beyond the end of the buffer',
														)
												} else
													for (
														sequence = arguments[0],
															this.length = ECMAScript.ToUint32(sequence.length),
															this.byteLength = this.length * this.BYTES_PER_ELEMENT,
															this.buffer = new ArrayBuffer(this.byteLength),
															this.byteOffset = 0,
															i = 0;
														i < this.length;
														i += 1
													)
														(s = sequence[i]), this._setter(i, Number(s))
											else {
												if (((this.length = ECMAScript.ToInt32(arguments[0])), length < 0))
													throw new RangeError(
														'ArrayBufferView size is not a small enough positive integer',
													)
												;(this.byteLength = this.length * this.BYTES_PER_ELEMENT),
													(this.buffer = new ArrayBuffer(this.byteLength)),
													(this.byteOffset = 0)
											}
											;(this.constructor = _ctor),
												configureProperties(this),
												makeArrayAccessors(this)
										}),
										(_ctor.prototype = new ArrayBufferView()),
										(_ctor.prototype.BYTES_PER_ELEMENT = bytesPerElement),
										(_ctor.prototype._pack = pack),
										(_ctor.prototype._unpack = unpack),
										(_ctor.BYTES_PER_ELEMENT = bytesPerElement),
										(_ctor.prototype._getter = function (index) {
											if (arguments.length < 1) throw new SyntaxError('Not enough arguments')
											if (!((index = ECMAScript.ToUint32(index)) >= this.length)) {
												var i,
													o,
													bytes = []
												for (
													i = 0, o = this.byteOffset + index * this.BYTES_PER_ELEMENT;
													i < this.BYTES_PER_ELEMENT;
													i += 1, o += 1
												)
													bytes.push(this.buffer._bytes[o])
												return this._unpack(bytes)
											}
										}),
										(_ctor.prototype.get = _ctor.prototype._getter),
										(_ctor.prototype._setter = function (index, value) {
											if (arguments.length < 2) throw new SyntaxError('Not enough arguments')
											if (!((index = ECMAScript.ToUint32(index)) >= this.length)) {
												var i,
													o,
													bytes = this._pack(value)
												for (
													i = 0, o = this.byteOffset + index * this.BYTES_PER_ELEMENT;
													i < this.BYTES_PER_ELEMENT;
													i += 1, o += 1
												)
													this.buffer._bytes[o] = bytes[i]
											}
										}),
										(_ctor.prototype.set = function (index, value) {
											if (arguments.length < 1) throw new SyntaxError('Not enough arguments')
											var array, sequence, offset, len, i, s, d, byteOffset, byteLength, tmp
											if (
												'object' === _typeof(arguments[0]) &&
												arguments[0].constructor === this.constructor
											) {
												if (
													((array = arguments[0]),
													(offset = ECMAScript.ToUint32(arguments[1])) + array.length > this.length)
												)
													throw new RangeError('Offset plus length of array is out of range')
												if (
													((byteOffset = this.byteOffset + offset * this.BYTES_PER_ELEMENT),
													(byteLength = array.length * this.BYTES_PER_ELEMENT),
													array.buffer === this.buffer)
												) {
													for (
														tmp = [], i = 0, s = array.byteOffset;
														i < byteLength;
														i += 1, s += 1
													)
														tmp[i] = array.buffer._bytes[s]
													for (i = 0, d = byteOffset; i < byteLength; i += 1, d += 1)
														this.buffer._bytes[d] = tmp[i]
												} else
													for (
														i = 0, s = array.byteOffset, d = byteOffset;
														i < byteLength;
														i += 1, s += 1, d += 1
													)
														this.buffer._bytes[d] = array.buffer._bytes[s]
											} else {
												if ('object' !== _typeof(arguments[0]) || void 0 === arguments[0].length)
													throw new TypeError('Unexpected argument type(s)')
												if (
													((sequence = arguments[0]),
													(len = ECMAScript.ToUint32(sequence.length)),
													(offset = ECMAScript.ToUint32(arguments[1])) + len > this.length)
												)
													throw new RangeError('Offset plus length of array is out of range')
												for (i = 0; i < len; i += 1)
													(s = sequence[i]), this._setter(offset + i, Number(s))
											}
										}),
										(_ctor.prototype.subarray = function (start, end) {
											function clamp2(v, min2, max) {
												return v < min2 ? min2 : v > max ? max : v
											}
											;(start = ECMAScript.ToInt32(start)),
												(end = ECMAScript.ToInt32(end)),
												arguments.length < 1 && (start = 0),
												arguments.length < 2 && (end = this.length),
												start < 0 && (start = this.length + start),
												end < 0 && (end = this.length + end),
												(start = clamp2(start, 0, this.length))
											var len = (end = clamp2(end, 0, this.length)) - start
											return (
												len < 0 && (len = 0),
												new this.constructor(
													this.buffer,
													this.byteOffset + start * this.BYTES_PER_ELEMENT,
													len,
												)
											)
										}),
										_ctor
									)
								}
								var Int8Array = makeConstructor(1, packI8, unpackI8),
									Uint8Array2 = makeConstructor(1, packU8, unpackU8),
									Uint8ClampedArray2 = makeConstructor(1, packU8Clamped, unpackU8),
									Int16Array = makeConstructor(2, packI16, unpackI16),
									Uint16Array = makeConstructor(2, packU16, unpackU16),
									Int32Array = makeConstructor(4, packI32, unpackI32),
									Uint32Array3 = makeConstructor(4, packU32, unpackU32),
									Float32Array = makeConstructor(4, packF32, unpackF32),
									Float64Array = makeConstructor(8, packF64, unpackF64)
								;(exports.Int8Array = exports.Int8Array || Int8Array),
									(exports.Uint8Array = exports.Uint8Array || Uint8Array2),
									(exports.Uint8ClampedArray = exports.Uint8ClampedArray || Uint8ClampedArray2),
									(exports.Int16Array = exports.Int16Array || Int16Array),
									(exports.Uint16Array = exports.Uint16Array || Uint16Array),
									(exports.Int32Array = exports.Int32Array || Int32Array),
									(exports.Uint32Array = exports.Uint32Array || Uint32Array3),
									(exports.Float32Array = exports.Float32Array || Float32Array),
									(exports.Float64Array = exports.Float64Array || Float64Array)
							})(),
								(function () {
									function r(array, index) {
										return ECMAScript.IsCallable(array.get) ? array.get(index) : array[index]
									}
									var u16array,
										IS_BIG_ENDIAN =
											((u16array = new exports.Uint16Array([4660])),
											18 === r(new exports.Uint8Array(u16array.buffer), 0)),
										DataView = function DataView2(buffer, byteOffset, byteLength) {
											if (0 === arguments.length) buffer = new exports.ArrayBuffer(0)
											else if (
												!(
													buffer instanceof exports.ArrayBuffer ||
													'ArrayBuffer' === ECMAScript.Class(buffer)
												)
											)
												throw new TypeError('TypeError')
											if (
												((this.buffer = buffer || new exports.ArrayBuffer(0)),
												(this.byteOffset = ECMAScript.ToUint32(byteOffset)),
												this.byteOffset > this.buffer.byteLength)
											)
												throw new RangeError('byteOffset out of range')
											if (
												((this.byteLength =
													arguments.length < 3
														? this.buffer.byteLength - this.byteOffset
														: ECMAScript.ToUint32(byteLength)),
												this.byteOffset + this.byteLength > this.buffer.byteLength)
											)
												throw new RangeError(
													'byteOffset and length reference an area beyond the end of the buffer',
												)
											configureProperties(this)
										}
									function makeGetter(arrayType) {
										return function (byteOffset, littleEndian) {
											if (
												(byteOffset = ECMAScript.ToUint32(byteOffset)) +
													arrayType.BYTES_PER_ELEMENT >
												this.byteLength
											)
												throw new RangeError('Array index out of range')
											byteOffset += this.byteOffset
											var i,
												uint8Array = new exports.Uint8Array(
													this.buffer,
													byteOffset,
													arrayType.BYTES_PER_ELEMENT,
												),
												bytes = []
											for (i = 0; i < arrayType.BYTES_PER_ELEMENT; i += 1)
												bytes.push(r(uint8Array, i))
											return (
												Boolean(littleEndian) === Boolean(IS_BIG_ENDIAN) && bytes.reverse(),
												r(new arrayType(new exports.Uint8Array(bytes).buffer), 0)
											)
										}
									}
									function makeSetter(arrayType) {
										return function (byteOffset, value, littleEndian) {
											if (
												(byteOffset = ECMAScript.ToUint32(byteOffset)) +
													arrayType.BYTES_PER_ELEMENT >
												this.byteLength
											)
												throw new RangeError('Array index out of range')
											var i,
												typeArray = new arrayType([value]),
												byteArray = new exports.Uint8Array(typeArray.buffer),
												bytes = []
											for (i = 0; i < arrayType.BYTES_PER_ELEMENT; i += 1)
												bytes.push(r(byteArray, i))
											Boolean(littleEndian) === Boolean(IS_BIG_ENDIAN) && bytes.reverse(),
												new exports.Uint8Array(
													this.buffer,
													byteOffset,
													arrayType.BYTES_PER_ELEMENT,
												).set(bytes)
										}
									}
									;(DataView.prototype.getUint8 = makeGetter(exports.Uint8Array)),
										(DataView.prototype.getInt8 = makeGetter(exports.Int8Array)),
										(DataView.prototype.getUint16 = makeGetter(exports.Uint16Array)),
										(DataView.prototype.getInt16 = makeGetter(exports.Int16Array)),
										(DataView.prototype.getUint32 = makeGetter(exports.Uint32Array)),
										(DataView.prototype.getInt32 = makeGetter(exports.Int32Array)),
										(DataView.prototype.getFloat32 = makeGetter(exports.Float32Array)),
										(DataView.prototype.getFloat64 = makeGetter(exports.Float64Array)),
										(DataView.prototype.setUint8 = makeSetter(exports.Uint8Array)),
										(DataView.prototype.setInt8 = makeSetter(exports.Int8Array)),
										(DataView.prototype.setUint16 = makeSetter(exports.Uint16Array)),
										(DataView.prototype.setInt16 = makeSetter(exports.Int16Array)),
										(DataView.prototype.setUint32 = makeSetter(exports.Uint32Array)),
										(DataView.prototype.setInt32 = makeSetter(exports.Int32Array)),
										(DataView.prototype.setFloat32 = makeSetter(exports.Float32Array)),
										(DataView.prototype.setFloat64 = makeSetter(exports.Float64Array)),
										(exports.DataView = exports.DataView || DataView)
								})()
						}),
						require_weakmap_polyfill = __commonJS(function (exports) {
							!(function (self2) {
								'use strict'
								if (!self2.WeakMap) {
									var hasOwnProperty2 = Object.prototype.hasOwnProperty,
										hasDefine =
											Object.defineProperty &&
											(function () {
												try {
													return 1 === Object.defineProperty({}, 'x', { value: 1 }).x
												} catch (e) {}
											})(),
										defineProperty = function defineProperty(object, name, value) {
											hasDefine
												? Object.defineProperty(object, name, {
														configurable: !0,
														writable: !0,
														value,
												  })
												: (object[name] = value)
										}
									self2.WeakMap = (function () {
										function WeakMap2() {
											if (void 0 === this) throw new TypeError("Constructor WeakMap requires 'new'")
											if ((defineProperty(this, '_id', genId('_WeakMap')), arguments.length > 0))
												throw new TypeError('WeakMap iterable is not supported')
										}
										function checkInstance(x, methodName) {
											if (!isObject(x) || !hasOwnProperty2.call(x, '_id'))
												throw new TypeError(
													methodName + ' method called on incompatible receiver ' + _typeof(x),
												)
										}
										function genId(prefix) {
											return prefix + '_' + rand() + '.' + rand()
										}
										function rand() {
											return Math.random().toString().substring(2)
										}
										return (
											defineProperty(WeakMap2.prototype, 'delete', function (key) {
												if ((checkInstance(this, 'delete'), !isObject(key))) return !1
												var entry = key[this._id]
												return !(!entry || entry[0] !== key) && (delete key[this._id], !0)
											}),
											defineProperty(WeakMap2.prototype, 'get', function (key) {
												if ((checkInstance(this, 'get'), isObject(key))) {
													var entry = key[this._id]
													return entry && entry[0] === key ? entry[1] : void 0
												}
											}),
											defineProperty(WeakMap2.prototype, 'has', function (key) {
												if ((checkInstance(this, 'has'), !isObject(key))) return !1
												var entry = key[this._id]
												return !(!entry || entry[0] !== key)
											}),
											defineProperty(WeakMap2.prototype, 'set', function (key, value) {
												if ((checkInstance(this, 'set'), !isObject(key)))
													throw new TypeError('Invalid value used as weak map key')
												var entry = key[this._id]
												return entry && entry[0] === key
													? ((entry[1] = value), this)
													: (defineProperty(key, this._id, [key, value]), this)
											}),
											defineProperty(WeakMap2, '_polyfill', !0),
											WeakMap2
										)
									})()
								}
								function isObject(x) {
									return Object(x) === x
								}
							})(
								'undefined' != typeof globalThis
									? globalThis
									: 'undefined' != typeof self
									? self
									: void 0 !== window
									? window
									: void 0 !== global
									? global
									: exports,
							)
						}),
						constants = {
							helpUrlBase: 'https://dequeuniversity.com/rules/',
							gridSize: 200,
							results: [],
							resultGroups: [],
							resultGroupMap: {},
							impact: Object.freeze(['minor', 'moderate', 'serious', 'critical']),
							preload: Object.freeze({ assets: ['cssom', 'media'], timeout: 1e4 }),
							allOrigins: '<unsafe_all_origins>',
							sameOrigin: '<same_origin>',
						}
					;[
						{ name: 'NA', value: 'inapplicable', priority: 0, group: 'inapplicable' },
						{ name: 'PASS', value: 'passed', priority: 1, group: 'passes' },
						{ name: 'CANTTELL', value: 'cantTell', priority: 2, group: 'incomplete' },
						{ name: 'FAIL', value: 'failed', priority: 3, group: 'violations' },
					].forEach(function (definition) {
						var name = definition.name,
							value = definition.value,
							priority = definition.priority,
							group = definition.group
						;(constants[name] = value),
							(constants[name + '_PRIO'] = priority),
							(constants[name + '_GROUP'] = group),
							(constants.results[priority] = value),
							(constants.resultGroups[priority] = group),
							(constants.resultGroupMap[value] = group)
					}),
						Object.freeze(constants.results),
						Object.freeze(constants.resultGroups),
						Object.freeze(constants.resultGroupMap),
						Object.freeze(constants)
					var constants_default = constants
					var log_default = function log() {
							'object' === ('undefined' == typeof console ? 'undefined' : _typeof(console)) &&
								console.log &&
								Function.prototype.apply.call(console.log, console, arguments)
						},
						whitespaceRegex = /[\t\r\n\f]/g,
						abstract_virtual_node_default = (function () {
							function AbstractVirtualNode() {
								_classCallCheck(this, AbstractVirtualNode), (this.parent = void 0)
							}
							return (
								_createClass(AbstractVirtualNode, [
									{
										key: 'props',
										get: function get() {
											throw new Error(
												'VirtualNode class must have a "props" object consisting of "nodeType" and "nodeName" properties',
											)
										},
									},
									{
										key: 'attrNames',
										get: function get() {
											throw new Error('VirtualNode class must have an "attrNames" property')
										},
									},
									{
										key: 'attr',
										value: function attr() {
											throw new Error('VirtualNode class must have an "attr" function')
										},
									},
									{
										key: 'hasAttr',
										value: function hasAttr() {
											throw new Error('VirtualNode class must have a "hasAttr" function')
										},
									},
									{
										key: 'hasClass',
										value: function hasClass(className) {
											var classAttr = this.attr('class')
											if (!classAttr) return !1
											var selector = ' ' + className + ' '
											return (
												(' ' + classAttr + ' ').replace(whitespaceRegex, ' ').indexOf(selector) >= 0
											)
										},
									},
								]),
								AbstractVirtualNode
							)
						})(),
						utils_exports = {}
					__export(utils_exports, {
						DqElement: function DqElement() {
							return dq_element_default
						},
						aggregate: function aggregate() {
							return aggregate_default
						},
						aggregateChecks: function aggregateChecks() {
							return aggregate_checks_default
						},
						aggregateNodeResults: function aggregateNodeResults() {
							return aggregate_node_results_default
						},
						aggregateResult: function aggregateResult() {
							return aggregate_result_default
						},
						areStylesSet: function areStylesSet() {
							return are_styles_set_default
						},
						assert: function assert() {
							return assert_default
						},
						checkHelper: function checkHelper() {
							return check_helper_default
						},
						clone: function clone() {
							return clone_default
						},
						closest: function closest() {
							return closest_default
						},
						collectResultsFromFrames: function collectResultsFromFrames() {
							return _collectResultsFromFrames
						},
						contains: function contains() {
							return _contains
						},
						convertSelector: function convertSelector() {
							return _convertSelector
						},
						cssParser: function cssParser() {
							return css_parser_default
						},
						deepMerge: function deepMerge() {
							return deep_merge_default
						},
						escapeSelector: function escapeSelector() {
							return escape_selector_default
						},
						extendMetaData: function extendMetaData() {
							return extend_meta_data_default
						},
						filterHtmlAttrs: function filterHtmlAttrs() {
							return _filterHtmlAttrs
						},
						finalizeRuleResult: function finalizeRuleResult() {
							return finalize_result_default
						},
						findBy: function findBy() {
							return find_by_default
						},
						getAllChecks: function getAllChecks() {
							return get_all_checks_default
						},
						getAncestry: function getAncestry() {
							return _getAncestry
						},
						getBaseLang: function getBaseLang() {
							return get_base_lang_default
						},
						getCheckMessage: function getCheckMessage() {
							return get_check_message_default
						},
						getCheckOption: function getCheckOption() {
							return get_check_option_default
						},
						getEnvironmentData: function getEnvironmentData() {
							return _getEnvironmentData
						},
						getFlattenedTree: function getFlattenedTree() {
							return get_flattened_tree_default
						},
						getFrameContexts: function getFrameContexts() {
							return _getFrameContexts
						},
						getFriendlyUriEnd: function getFriendlyUriEnd() {
							return get_friendly_uri_end_default
						},
						getNodeAttributes: function getNodeAttributes() {
							return get_node_attributes_default
						},
						getNodeFromTree: function getNodeFromTree() {
							return get_node_from_tree_default
						},
						getPreloadConfig: function getPreloadConfig() {
							return _getPreloadConfig
						},
						getRootNode: function getRootNode() {
							return get_root_node_default
						},
						getRule: function getRule() {
							return get_rule_default
						},
						getScroll: function getScroll() {
							return _getScroll
						},
						getScrollState: function getScrollState() {
							return get_scroll_state_default
						},
						getSelector: function getSelector() {
							return _getSelector
						},
						getSelectorData: function getSelectorData() {
							return _getSelectorData
						},
						getShadowSelector: function getShadowSelector() {
							return get_shadow_selector_default
						},
						getStandards: function getStandards() {
							return _getStandards
						},
						getStyleSheetFactory: function getStyleSheetFactory() {
							return get_stylesheet_factory_default
						},
						getXpath: function getXpath() {
							return get_xpath_default
						},
						injectStyle: function injectStyle() {
							return inject_style_default
						},
						isHidden: function isHidden() {
							return is_hidden_default
						},
						isHtmlElement: function isHtmlElement() {
							return is_html_element_default
						},
						isNodeInContext: function isNodeInContext() {
							return is_node_in_context_default
						},
						isShadowRoot: function isShadowRoot() {
							return is_shadow_root_default
						},
						isValidLang: function isValidLang() {
							return valid_langs_default
						},
						isXHTML: function isXHTML() {
							return is_xhtml_default
						},
						matchAncestry: function matchAncestry() {
							return match_ancestry_default
						},
						matches: function matches() {
							return matches_default
						},
						matchesExpression: function matchesExpression() {
							return _matchesExpression
						},
						matchesSelector: function matchesSelector() {
							return element_matches_default
						},
						memoize: function memoize() {
							return memoize_default
						},
						mergeResults: function mergeResults() {
							return merge_results_default
						},
						nodeSorter: function nodeSorter() {
							return node_sorter_default
						},
						parseCrossOriginStylesheet: function parseCrossOriginStylesheet() {
							return parse_crossorigin_stylesheet_default
						},
						parseSameOriginStylesheet: function parseSameOriginStylesheet() {
							return parse_sameorigin_stylesheet_default
						},
						parseStylesheet: function parseStylesheet() {
							return parse_stylesheet_default
						},
						performanceTimer: function performanceTimer() {
							return performance_timer_default
						},
						pollyfillElementsFromPoint: function pollyfillElementsFromPoint() {
							return _pollyfillElementsFromPoint
						},
						preload: function preload() {
							return preload_default
						},
						preloadCssom: function preloadCssom() {
							return preload_cssom_default
						},
						preloadMedia: function preloadMedia() {
							return preload_media_default
						},
						processMessage: function processMessage() {
							return process_message_default
						},
						publishMetaData: function publishMetaData() {
							return publish_metadata_default
						},
						querySelectorAll: function querySelectorAll() {
							return query_selector_all_default
						},
						querySelectorAllFilter: function querySelectorAllFilter() {
							return query_selector_all_filter_default
						},
						queue: function queue() {
							return queue_default
						},
						respondable: function respondable() {
							return _respondable
						},
						ruleShouldRun: function ruleShouldRun() {
							return rule_should_run_default
						},
						select: function select() {
							return select_default
						},
						sendCommandToFrame: function sendCommandToFrame() {
							return _sendCommandToFrame
						},
						setScrollState: function setScrollState() {
							return set_scroll_state_default
						},
						shadowSelect: function shadowSelect() {
							return _shadowSelect
						},
						shouldPreload: function shouldPreload() {
							return _shouldPreload
						},
						toArray: function toArray() {
							return to_array_default
						},
						tokenList: function tokenList() {
							return token_list_default
						},
						uniqueArray: function uniqueArray() {
							return unique_array_default
						},
						uuid: function uuid() {
							return uuid_default
						},
						validInputTypes: function validInputTypes() {
							return valid_input_type_default
						},
						validLangs: function validLangs() {
							return _validLangs
						},
					})
					var aggregate_default = function aggregate(map, values, initial) {
							;(values = values.slice()), initial && values.push(initial)
							var sorting = values
								.map(function (val) {
									return map.indexOf(val)
								})
								.sort()
							return map[sorting.pop()]
						},
						CANTTELL_PRIO = constants_default.CANTTELL_PRIO,
						FAIL_PRIO = constants_default.FAIL_PRIO,
						checkMap = []
					;(checkMap[constants_default.PASS_PRIO] = !0),
						(checkMap[constants_default.CANTTELL_PRIO] = null),
						(checkMap[constants_default.FAIL_PRIO] = !1)
					var checkTypes = ['any', 'all', 'none']
					function anyAllNone(obj, functor) {
						return checkTypes.reduce(function (out, type) {
							return (
								(out[type] = (obj[type] || []).map(function (val) {
									return functor(val, type)
								})),
								out
							)
						}, {})
					}
					var aggregate_checks_default = function aggregateChecks(nodeResOriginal) {
						var nodeResult = Object.assign({}, nodeResOriginal)
						anyAllNone(nodeResult, function (check, type) {
							var i = void 0 === check.result ? -1 : checkMap.indexOf(check.result)
							;(check.priority = -1 !== i ? i : constants_default.CANTTELL_PRIO),
								'none' === type &&
									(check.priority === constants_default.PASS_PRIO
										? (check.priority = constants_default.FAIL_PRIO)
										: check.priority === constants_default.FAIL_PRIO &&
										  (check.priority = constants_default.PASS_PRIO))
						})
						var priorities = {
							all: nodeResult.all.reduce(function (a, b) {
								return Math.max(a, b.priority)
							}, 0),
							none: nodeResult.none.reduce(function (a, b) {
								return Math.max(a, b.priority)
							}, 0),
							any:
								nodeResult.any.reduce(function (a, b) {
									return Math.min(a, b.priority)
								}, 4) % 4,
						}
						nodeResult.priority = Math.max(priorities.all, priorities.none, priorities.any)
						var impacts = []
						return (
							checkTypes.forEach(function (type) {
								;(nodeResult[type] = nodeResult[type].filter(function (check) {
									return (
										check.priority === nodeResult.priority && check.priority === priorities[type]
									)
								})),
									nodeResult[type].forEach(function (check) {
										return impacts.push(check.impact)
									})
							}),
							[CANTTELL_PRIO, FAIL_PRIO].includes(nodeResult.priority)
								? (nodeResult.impact = aggregate_default(constants_default.impact, impacts))
								: (nodeResult.impact = null),
							anyAllNone(nodeResult, function (c) {
								delete c.result, delete c.priority
							}),
							(nodeResult.result = constants_default.results[nodeResult.priority]),
							delete nodeResult.priority,
							nodeResult
						)
					}
					var finalize_result_default = function finalizeRuleResult(ruleResult) {
						var rule = axe._audit.rules.find(function (rule2) {
							return rule2.id === ruleResult.id
						})
						return (
							rule &&
								rule.impact &&
								ruleResult.nodes.forEach(function (node) {
									;['any', 'all', 'none'].forEach(function (checkType) {
										;(node[checkType] || []).forEach(function (checkResult) {
											checkResult.impact = rule.impact
										})
									})
								}),
							Object.assign(ruleResult, aggregate_node_results_default(ruleResult.nodes)),
							delete ruleResult.nodes,
							ruleResult
						)
					}
					var aggregate_node_results_default = function aggregateNodeResults(nodeResults) {
						var ruleResult = {}
						if (
							(nodeResults = nodeResults.map(function (nodeResult) {
								if (nodeResult.any && nodeResult.all && nodeResult.none)
									return aggregate_checks_default(nodeResult)
								if (Array.isArray(nodeResult.node)) return finalize_result_default(nodeResult)
								throw new TypeError('Invalid Result type')
							})) &&
							nodeResults.length
						) {
							var resultList = nodeResults.map(function (node) {
								return node.result
							})
							ruleResult.result = aggregate_default(
								constants_default.results,
								resultList,
								ruleResult.result,
							)
						} else ruleResult.result = 'inapplicable'
						constants_default.resultGroups.forEach(function (group) {
							return (ruleResult[group] = [])
						}),
							nodeResults.forEach(function (nodeResult) {
								var groupName = constants_default.resultGroupMap[nodeResult.result]
								ruleResult[groupName].push(nodeResult)
							})
						var impactGroup = constants_default.FAIL_GROUP
						if (
							(0 === ruleResult[impactGroup].length &&
								(impactGroup = constants_default.CANTTELL_GROUP),
							ruleResult[impactGroup].length > 0)
						) {
							var impactList = ruleResult[impactGroup].map(function (failure) {
								return failure.impact
							})
							ruleResult.impact = aggregate_default(constants_default.impact, impactList) || null
						} else ruleResult.impact = null
						return ruleResult
					}
					function copyToGroup(resultObject, subResult, group) {
						var resultCopy = Object.assign({}, subResult)
						;(resultCopy.nodes = (resultCopy[group] || []).concat()),
							constants_default.resultGroups.forEach(function (group2) {
								delete resultCopy[group2]
							}),
							resultObject[group].push(resultCopy)
					}
					var aggregate_result_default = function aggregateResult(results) {
						var resultObject = {}
						return (
							constants_default.resultGroups.forEach(function (groupName) {
								return (resultObject[groupName] = [])
							}),
							results.forEach(function (subResult) {
								subResult.error
									? copyToGroup(resultObject, subResult, constants_default.CANTTELL_GROUP)
									: subResult.result === constants_default.NA
									? copyToGroup(resultObject, subResult, constants_default.NA_GROUP)
									: constants_default.resultGroups.forEach(function (group) {
											Array.isArray(subResult[group]) &&
												subResult[group].length > 0 &&
												copyToGroup(resultObject, subResult, group)
									  })
							}),
							resultObject
						)
					}
					var are_styles_set_default = function areStylesSet(el, styles, stopAt) {
						var styl = window.getComputedStyle(el, null)
						if (!styl) return !1
						for (var i = 0; i < styles.length; ++i) {
							var att = styles[i]
							if (styl.getPropertyValue(att.property) === att.value) return !0
						}
						return (
							!(!el.parentNode || el.nodeName.toUpperCase() === stopAt.toUpperCase()) &&
							areStylesSet(el.parentNode, styles, stopAt)
						)
					}
					var assert_default = function assert(bool, message) {
						if (!bool) throw new Error(message)
					}
					var to_array_default = function toArray(thing) {
						return Array.prototype.slice.call(thing)
					}
					var escape_selector_default = function escapeSelector(value) {
						for (
							var codeUnit,
								string = String(value),
								length = string.length,
								index = -1,
								result = '',
								firstCodeUnit = string.charCodeAt(0);
							++index < length;

						)
							0 != (codeUnit = string.charCodeAt(index))
								? (result +=
										(codeUnit >= 1 && codeUnit <= 31) ||
										127 == codeUnit ||
										(0 == index && codeUnit >= 48 && codeUnit <= 57) ||
										(1 == index && codeUnit >= 48 && codeUnit <= 57 && 45 == firstCodeUnit)
											? '\\' + codeUnit.toString(16) + ' '
											: (0 != index || 1 != length || 45 != codeUnit) &&
											  (codeUnit >= 128 ||
													45 == codeUnit ||
													95 == codeUnit ||
													(codeUnit >= 48 && codeUnit <= 57) ||
													(codeUnit >= 65 && codeUnit <= 90) ||
													(codeUnit >= 97 && codeUnit <= 122))
											? string.charAt(index)
											: '\\' + string.charAt(index))
								: (result += '�')
						return result
					}
					function isMostlyNumbers() {
						var str = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ''
						return 0 !== str.length && (str.match(/[0-9]/g) || '').length >= str.length / 2
					}
					function splitString(str, splitIndex) {
						return [str.substring(0, splitIndex), str.substring(splitIndex)]
					}
					function trimRight(str) {
						return str.replace(/\s+$/, '')
					}
					function uriParser(url) {
						var original = url,
							protocol = '',
							domain = '',
							port = '',
							query = '',
							hash = ''
						if (url.includes('#')) {
							var _splitString2 = _slicedToArray(splitString(url, url.indexOf('#')), 2)
							;(url = _splitString2[0]), (hash = _splitString2[1])
						}
						if (url.includes('?')) {
							var _splitString4 = _slicedToArray(splitString(url, url.indexOf('?')), 2)
							;(url = _splitString4[0]), (query = _splitString4[1])
						}
						if (url.includes('://')) {
							var _url$split2 = _slicedToArray(url.split('://'), 2)
							protocol = _url$split2[0]
							var _splitString6 = _slicedToArray(
								splitString((url = _url$split2[1]), url.indexOf('/')),
								2,
							)
							;(domain = _splitString6[0]), (url = _splitString6[1])
						} else if ('//' === url.substr(0, 2)) {
							var _splitString8 = _slicedToArray(
								splitString((url = url.substr(2)), url.indexOf('/')),
								2,
							)
							;(domain = _splitString8[0]), (url = _splitString8[1])
						}
						if (
							('www.' === domain.substr(0, 4) && (domain = domain.substr(4)),
							domain && domain.includes(':'))
						) {
							var _splitString10 = _slicedToArray(splitString(domain, domain.indexOf(':')), 2)
							;(domain = _splitString10[0]), (port = _splitString10[1])
						}
						return { original, protocol, domain, port, path: url, query, hash }
					}
					var get_friendly_uri_end_default = function getFriendlyUriEnd() {
						var uri = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
							options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
						if (
							!(
								uri.length <= 1 ||
								'data:' === uri.substr(0, 5) ||
								'javascript:' === uri.substr(0, 11) ||
								uri.includes('?')
							)
						) {
							var currentDomain = options.currentDomain,
								_options$maxLength = options.maxLength,
								maxLength = void 0 === _options$maxLength ? 25 : _options$maxLength,
								_uriParser = uriParser(uri),
								path = _uriParser.path,
								domain = _uriParser.domain,
								hash = _uriParser.hash,
								pathEnd = path.substr(path.substr(0, path.length - 2).lastIndexOf('/') + 1)
							if (hash)
								return pathEnd && (pathEnd + hash).length <= maxLength
									? trimRight(pathEnd + hash)
									: pathEnd.length < 2 && hash.length > 2 && hash.length <= maxLength
									? trimRight(hash)
									: void 0
							if (domain && domain.length < maxLength && path.length <= 1)
								return trimRight(domain + path)
							if (
								path === '/' + pathEnd &&
								domain &&
								currentDomain &&
								domain !== currentDomain &&
								(domain + path).length <= maxLength
							)
								return trimRight(domain + path)
							var lastDotIndex = pathEnd.lastIndexOf('.')
							return (-1 === lastDotIndex || lastDotIndex > 1) &&
								(-1 !== lastDotIndex || pathEnd.length > 2) &&
								pathEnd.length <= maxLength &&
								!pathEnd.match(/index(\.[a-zA-Z]{2-4})?/) &&
								!isMostlyNumbers(pathEnd)
								? trimRight(pathEnd)
								: void 0
						}
					}
					var method,
						get_node_attributes_default = function getNodeAttributes(node) {
							return node.attributes instanceof window.NamedNodeMap
								? node.attributes
								: node.cloneNode(!1).attributes
						},
						element_matches_default = function (node, selector) {
							return (
								(method && node[method]) ||
									(method = (function getMethod(node) {
										var index,
											candidate,
											candidates = [
												'matches',
												'matchesSelector',
												'mozMatchesSelector',
												'webkitMatchesSelector',
												'msMatchesSelector',
											],
											length = candidates.length
										for (index = 0; index < length; index++)
											if (node[(candidate = candidates[index])]) return candidate
									})(node)),
								!!node[method] && node[method](selector)
							)
						}
					var is_xhtml_default = function isXHTML(doc) {
						return !!doc.createElement && 'A' === doc.createElement('A').localName
					}
					var xhtml,
						get_shadow_selector_default = function getShadowSelector(generateSelector2, elm) {
							var options = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
							if (!elm) return ''
							var doc = (elm.getRootNode && elm.getRootNode()) || document
							if (11 !== doc.nodeType) return generateSelector2(elm, options, doc)
							for (var stack = []; 11 === doc.nodeType; ) {
								if (!doc.host) return ''
								stack.unshift({ elm, doc }), (doc = (elm = doc.host).getRootNode())
							}
							return (
								stack.unshift({ elm, doc }),
								stack.map(function (_ref) {
									var elm2 = _ref.elm,
										doc2 = _ref.doc
									return generateSelector2(elm2, options, doc2)
								})
							)
						},
						ignoredAttributes = [
							'class',
							'style',
							'id',
							'selected',
							'checked',
							'disabled',
							'tabindex',
							'aria-checked',
							'aria-selected',
							'aria-invalid',
							'aria-activedescendant',
							'aria-busy',
							'aria-disabled',
							'aria-expanded',
							'aria-grabbed',
							'aria-pressed',
							'aria-valuenow',
						],
						attrCharsRegex = /([\\"])/g,
						newlineChars = /(\r\n|\r|\n)/g
					function escapeAttribute(str) {
						return str.replace(attrCharsRegex, '\\$1').replace(newlineChars, '\\a ')
					}
					function getAttributeNameValue(node, at) {
						var atnv,
							name = at.name
						if (-1 !== name.indexOf('href') || -1 !== name.indexOf('src')) {
							var friendly = get_friendly_uri_end_default(node.getAttribute(name))
							atnv = friendly
								? escape_selector_default(at.name) + '$="' + escapeAttribute(friendly) + '"'
								: escape_selector_default(at.name) +
								  '="' +
								  escapeAttribute(node.getAttribute(name)) +
								  '"'
						} else atnv = escape_selector_default(name) + '="' + escapeAttribute(at.value) + '"'
						return atnv
					}
					function countSort(a, b) {
						return a.count < b.count ? -1 : a.count === b.count ? 0 : 1
					}
					function filterAttributes(at) {
						return (
							!ignoredAttributes.includes(at.name) &&
							-1 === at.name.indexOf(':') &&
							(!at.value || at.value.length < 31)
						)
					}
					function _getSelectorData(domTree) {
						for (
							var data2 = { classes: {}, tags: {}, attributes: {} },
								currentLevel = (domTree = Array.isArray(domTree) ? domTree : [domTree]).slice(),
								stack = [],
								_loop2 = function _loop2() {
									var current = currentLevel.pop(),
										node = current.actualNode
									if (node.querySelectorAll) {
										var tag = node.nodeName
										data2.tags[tag] ? data2.tags[tag]++ : (data2.tags[tag] = 1),
											node.classList &&
												Array.from(node.classList).forEach(function (cl) {
													var ind = escape_selector_default(cl)
													data2.classes[ind] ? data2.classes[ind]++ : (data2.classes[ind] = 1)
												}),
											node.hasAttributes() &&
												Array.from(get_node_attributes_default(node))
													.filter(filterAttributes)
													.forEach(function (at) {
														var atnv = getAttributeNameValue(node, at)
														atnv &&
															(data2.attributes[atnv]
																? data2.attributes[atnv]++
																: (data2.attributes[atnv] = 1))
													})
									}
									for (
										current.children.length &&
										(stack.push(currentLevel), (currentLevel = current.children.slice()));
										!currentLevel.length && stack.length;

									)
										currentLevel = stack.pop()
								};
							currentLevel.length;

						)
							_loop2()
						return data2
					}
					function getNthChildString(elm, selector) {
						var siblings = (elm.parentNode && Array.from(elm.parentNode.children || '')) || []
						return siblings.find(function (sibling) {
							return sibling !== elm && element_matches_default(sibling, selector)
						})
							? ':nth-child(' + (1 + siblings.indexOf(elm)) + ')'
							: ''
					}
					function getElmId(elm) {
						if (elm.getAttribute('id')) {
							var doc = (elm.getRootNode && elm.getRootNode()) || document,
								id = '#' + escape_selector_default(elm.getAttribute('id') || '')
							return id.match(/player_uid_/) || 1 !== doc.querySelectorAll(id).length ? void 0 : id
						}
					}
					function getBaseSelector(elm) {
						return (
							void 0 === xhtml && (xhtml = is_xhtml_default(document)),
							escape_selector_default(xhtml ? elm.localName : elm.nodeName.toLowerCase())
						)
					}
					function getThreeLeastCommonFeatures(elm, selectorData) {
						var features,
							selector = '',
							clss = (function uncommonClasses(node, selectorData) {
								var retVal = [],
									classData = selectorData.classes,
									tagData = selectorData.tags
								return (
									node.classList &&
										Array.from(node.classList).forEach(function (cl) {
											var ind = escape_selector_default(cl)
											classData[ind] < tagData[node.nodeName] &&
												retVal.push({ name: ind, count: classData[ind], species: 'class' })
										}),
									retVal.sort(countSort)
								)
							})(elm, selectorData),
							atts = (function uncommonAttributes(node, selectorData) {
								var retVal = [],
									attData = selectorData.attributes,
									tagData = selectorData.tags
								return (
									node.hasAttributes() &&
										Array.from(get_node_attributes_default(node))
											.filter(filterAttributes)
											.forEach(function (at) {
												var atnv = getAttributeNameValue(node, at)
												atnv &&
													attData[atnv] < tagData[node.nodeName] &&
													retVal.push({ name: atnv, count: attData[atnv], species: 'attribute' })
											}),
									retVal.sort(countSort)
								)
							})(elm, selectorData)
						return (
							clss.length && 1 === clss[0].count
								? (features = [clss[0]])
								: atts.length && 1 === atts[0].count
								? ((features = [atts[0]]), (selector = getBaseSelector(elm)))
								: ((features = clss.concat(atts)).sort(countSort),
								  (features = features.slice(0, 3)).some(function (feat) {
										return 'class' === feat.species
								  })
										? features.sort(function (a, b) {
												return a.species !== b.species && 'class' === a.species
													? -1
													: a.species === b.species
													? 0
													: 1
										  })
										: (selector = getBaseSelector(elm))),
							selector +
								features.reduce(function (val, feat) {
									switch (feat.species) {
										case 'class':
											return val + '.' + feat.name
										case 'attribute':
											return val + '[' + feat.name + ']'
									}
									return val
								}, '')
						)
					}
					function generateSelector(elm, options, doc) {
						if (!axe._selectorData) throw new Error('Expect axe._selectorData to be set up')
						var selector,
							similar,
							_options$toRoot = options.toRoot,
							toRoot = void 0 !== _options$toRoot && _options$toRoot
						do {
							var features = getElmId(elm)
							features ||
								((features = getThreeLeastCommonFeatures(elm, axe._selectorData)),
								(features += getNthChildString(elm, features))),
								(selector = selector ? features + ' > ' + selector : features),
								(similar = similar
									? similar.filter(function (item) {
											return element_matches_default(item, selector)
									  })
									: Array.from(doc.querySelectorAll(selector))),
								(elm = elm.parentElement)
						} while ((similar.length > 1 || toRoot) && elm && 11 !== elm.nodeType)
						return 1 === similar.length
							? selector
							: -1 !== selector.indexOf(' > ')
							? ':root' + selector.substring(selector.indexOf(' > '))
							: ':root'
					}
					function _getSelector(elm, options) {
						return get_shadow_selector_default(generateSelector, elm, options)
					}
					function generateAncestry(node) {
						var nodeName2 = node.nodeName.toLowerCase(),
							parent = node.parentElement
						if (!parent) return nodeName2
						var nthChild = ''
						if ('head' !== nodeName2 && 'body' !== nodeName2 && parent.children.length > 1) {
							var index = Array.prototype.indexOf.call(parent.children, node) + 1
							nthChild = ':nth-child('.concat(index, ')')
						}
						return generateAncestry(parent) + ' > ' + nodeName2 + nthChild
					}
					function _getAncestry(elm, options) {
						return get_shadow_selector_default(generateAncestry, elm, options)
					}
					function getXPathArray(node, path) {
						var sibling, count
						if (!node) return []
						if (!path && 9 === node.nodeType) return (path = [{ str: 'html' }])
						if (
							((path = path || []),
							node.parentNode &&
								node.parentNode !== node &&
								(path = getXPathArray(node.parentNode, path)),
							node.previousSibling)
						) {
							;(count = 1), (sibling = node.previousSibling)
							do {
								1 === sibling.nodeType && sibling.nodeName === node.nodeName && count++,
									(sibling = sibling.previousSibling)
							} while (sibling)
							1 === count && (count = null)
						} else if (node.nextSibling) {
							sibling = node.nextSibling
							do {
								1 === sibling.nodeType && sibling.nodeName === node.nodeName
									? ((count = 1), (sibling = null))
									: ((count = null), (sibling = sibling.previousSibling))
							} while (sibling)
						}
						if (1 === node.nodeType) {
							var element = {}
							element.str = node.nodeName.toLowerCase()
							var id = node.getAttribute && escape_selector_default(node.getAttribute('id'))
							id &&
								1 === node.ownerDocument.querySelectorAll('#' + id).length &&
								(element.id = node.getAttribute('id')),
								count > 1 && (element.count = count),
								path.push(element)
						}
						return path
					}
					var get_xpath_default = function getXpath(node) {
							return (function xpathToString(xpathArray) {
								return xpathArray.reduce(function (str, elm) {
									return elm.id
										? '/'.concat(elm.str, "[@id='").concat(elm.id, "']")
										: str + '/'.concat(elm.str) + (elm.count > 0 ? '['.concat(elm.count, ']') : '')
								}, '')
							})(getXPathArray(node))
						},
						_cache = {}
					var cache_default = {
						set: function set(key, value) {
							!(function validateKey(key) {
								assert_default(
									'string' == typeof key,
									'key must be a string, ' + _typeof(key) + ' given',
								),
									assert_default('' !== key, 'key must not be empty')
							})(key),
								(_cache[key] = value)
						},
						get: function get(key, creator) {
							if (
								((function validateCreator(creator) {
									assert_default(
										'function' == typeof creator || void 0 === creator,
										'creator must be a function or undefined, ' + _typeof(creator) + ' given',
									)
								})(creator),
								key in _cache)
							)
								return _cache[key]
							if ('function' == typeof creator) {
								var value = creator()
								return (
									assert_default(
										void 0 !== value,
										'Cache creator function should not return undefined',
									),
									this.set(key, value),
									_cache[key]
								)
							}
						},
						clear: function clear() {
							_cache = {}
						},
					}
					var get_node_from_tree_default = function getNodeFromTree(vNode, node) {
						var el = node || vNode
						return cache_default.get('nodeMap') ? cache_default.get('nodeMap').get(el) : null
					}
					function getSource(element) {
						if (null == element || !element.outerHTML) return ''
						var source = element.outerHTML
						return (
							source ||
								'function' != typeof window.XMLSerializer ||
								(source = new window.XMLSerializer().serializeToString(element)),
							(function truncate(str, maxLength) {
								if (((maxLength = maxLength || 300), str.length > maxLength)) {
									var index = str.indexOf('>')
									str = str.substring(0, index + 1)
								}
								return str
							})(source || '')
						)
					}
					function DqElement(elm) {
						var _this$spec$selector,
							_this$_virtualNode,
							_this$spec$source,
							options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
							spec = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
						;((this.spec = spec),
						elm instanceof abstract_virtual_node_default
							? ((this._virtualNode = elm), (this._element = elm.actualNode))
							: ((this._element = elm), (this._virtualNode = get_node_from_tree_default(elm))),
						(this.fromFrame =
							(null === (_this$spec$selector = this.spec.selector) || void 0 === _this$spec$selector
								? void 0
								: _this$spec$selector.length) > 1),
						options.absolutePaths && (this._options = { toRoot: !0 }),
						(this.nodeIndexes = []),
						Array.isArray(this.spec.nodeIndexes)
							? (this.nodeIndexes = this.spec.nodeIndexes)
							: 'number' ==
									typeof (null === (_this$_virtualNode = this._virtualNode) ||
									void 0 === _this$_virtualNode
										? void 0
										: _this$_virtualNode.nodeIndex) &&
							  (this.nodeIndexes = [this._virtualNode.nodeIndex]),
						(this.source = null),
						axe._audit.noHtml) ||
							(this.source =
								null !== (_this$spec$source = this.spec.source) && void 0 !== _this$spec$source
									? _this$spec$source
									: getSource(this._element))
					}
					;(DqElement.prototype = {
						get selector() {
							return this.spec.selector || [_getSelector(this.element, this._options)]
						},
						get ancestry() {
							return this.spec.ancestry || [_getAncestry(this.element)]
						},
						get xpath() {
							return this.spec.xpath || [get_xpath_default(this.element)]
						},
						get element() {
							return this._element
						},
						toJSON: function toJSON() {
							return {
								selector: this.selector,
								source: this.source,
								xpath: this.xpath,
								ancestry: this.ancestry,
								nodeIndexes: this.nodeIndexes,
							}
						},
					}),
						(DqElement.fromFrame = function fromFrame(node, options, frame) {
							var spec = DqElement.mergeSpecs(node, frame)
							return new DqElement(frame.element, options, spec)
						}),
						(DqElement.mergeSpecs = function mergeSpec(node, frame) {
							return _extends({}, node, {
								selector: [].concat(
									_toConsumableArray(frame.selector),
									_toConsumableArray(node.selector),
								),
								ancestry: [].concat(
									_toConsumableArray(frame.ancestry),
									_toConsumableArray(node.ancestry),
								),
								xpath: [].concat(_toConsumableArray(frame.xpath), _toConsumableArray(node.xpath)),
								nodeIndexes: [].concat(
									_toConsumableArray(frame.nodeIndexes),
									_toConsumableArray(node.nodeIndexes),
								),
							})
						})
					var dq_element_default = DqElement
					var check_helper_default = function checkHelper(checkResult, options, resolve, reject) {
						return {
							isAsync: !1,
							async: function async() {
								return (
									(this.isAsync = !0),
									function (result) {
										result instanceof Error == !1
											? ((checkResult.result = result), resolve(checkResult))
											: reject(result)
									}
								)
							},
							data: function data(data2) {
								checkResult.data = data2
							},
							relatedNodes: function relatedNodes(nodes) {
								window.Node &&
									(nodes = nodes instanceof window.Node ? [nodes] : to_array_default(nodes)).every(
										function (node) {
											return node instanceof window.Node || node.actualNode
										},
									) &&
									(checkResult.relatedNodes = nodes.map(function (element) {
										return new dq_element_default(element, options)
									}))
							},
						}
					}
					var clone_default = function clone(obj) {
							var _window,
								_window2,
								index,
								length,
								out = obj
							if (
								(null !== (_window = window) &&
									void 0 !== _window &&
									_window.Node &&
									obj instanceof window.Node) ||
								(null !== (_window2 = window) &&
									void 0 !== _window2 &&
									_window2.HTMLCollection &&
									obj instanceof window.HTMLCollection)
							)
								return obj
							if (null !== obj && 'object' === _typeof(obj))
								if (Array.isArray(obj))
									for (out = [], index = 0, length = obj.length; index < length; index++)
										out[index] = clone(obj[index])
								else for (index in ((out = {}), obj)) out[index] = clone(obj[index])
							return out
						},
						parser = new (__toModule(require_lib()).CssSelectorParser)()
					parser.registerSelectorPseudos('not'),
						parser.registerSelectorPseudos('is'),
						parser.registerNestingOperators('>'),
						parser.registerAttrEqualityMods('^', '$', '*', '~')
					var css_parser_default = parser
					function matchExpression(vNode, expression) {
						return (
							(function matchesTag(vNode, exp) {
								return (
									1 === vNode.props.nodeType &&
									('*' === exp.tag || vNode.props.nodeName === exp.tag)
								)
							})(vNode, expression) &&
							(function matchesClasses(vNode, exp) {
								return (
									!exp.classes ||
									exp.classes.every(function (cl) {
										return vNode.hasClass(cl.value)
									})
								)
							})(vNode, expression) &&
							(function matchesAttributes(vNode, exp) {
								return (
									!exp.attributes ||
									exp.attributes.every(function (att) {
										var nodeAtt = vNode.attr(att.key)
										return null !== nodeAtt && att.test(nodeAtt)
									})
								)
							})(vNode, expression) &&
							(function matchesId(vNode, exp) {
								return !exp.id || vNode.props.id === exp.id
							})(vNode, expression) &&
							(function matchesPseudos(target, exp) {
								return !(
									exp.pseudos &&
									!exp.pseudos.every(function (pseudo) {
										if ('not' === pseudo.name)
											return !pseudo.expressions.some(function (expression) {
												return _matchesExpression(target, expression)
											})
										if ('is' === pseudo.name)
											return pseudo.expressions.some(function (expression) {
												return _matchesExpression(target, expression)
											})
										throw new Error(
											'the pseudo selector ' + pseudo.name + ' has not yet been implemented',
										)
									})
								)
							})(vNode, expression)
						)
					}
					var from,
						escapeRegExp =
							((from = /(?=[\-\[\]{}()*+?.\\\^$|,#\s])/g),
							function (string) {
								return string.replace(from, '\\')
							}),
						reUnescape = /\\/g
					function convertAttributes(atts) {
						if (atts)
							return atts.map(function (att) {
								var test,
									regexp,
									attributeKey = att.name.replace(reUnescape, ''),
									attributeValue = (att.value || '').replace(reUnescape, '')
								switch (att.operator) {
									case '^=':
										regexp = new RegExp('^' + escapeRegExp(attributeValue))
										break
									case '$=':
										regexp = new RegExp(escapeRegExp(attributeValue) + '$')
										break
									case '~=':
										regexp = new RegExp('(^|\\s)' + escapeRegExp(attributeValue) + '(\\s|$)')
										break
									case '|=':
										regexp = new RegExp('^' + escapeRegExp(attributeValue) + '(-|$)')
										break
									case '=':
										test = function test(value) {
											return attributeValue === value
										}
										break
									case '*=':
										test = function test(value) {
											return value && value.includes(attributeValue)
										}
										break
									case '!=':
										test = function test(value) {
											return attributeValue !== value
										}
										break
									default:
										test = function test(value) {
											return null !== value
										}
								}
								return (
									'' === attributeValue &&
										/^[*$^]=$/.test(att.operator) &&
										(test = function test() {
											return !1
										}),
									test ||
										(test = function test(value) {
											return value && regexp.test(value)
										}),
									{
										key: attributeKey,
										value: attributeValue,
										type: void 0 === att.value ? 'attrExist' : 'attrValue',
										test,
									}
								)
							})
					}
					function convertClasses(classes) {
						if (classes)
							return classes.map(function (className) {
								return {
									value: (className = className.replace(reUnescape, '')),
									regexp: new RegExp('(^|\\s)' + escapeRegExp(className) + '(\\s|$)'),
								}
							})
					}
					function convertPseudos(pseudos) {
						if (pseudos)
							return pseudos.map(function (p) {
								var expressions
								return (
									['is', 'not'].includes(p.name) &&
										(expressions = convertExpressions(
											(expressions = (expressions = p.value).selectors
												? expressions.selectors
												: [expressions]),
										)),
									{ name: p.name, expressions, value: p.value }
								)
							})
					}
					function convertExpressions(expressions) {
						return expressions.map(function (exp) {
							for (var newExp = [], rule = exp.rule; rule; )
								newExp.push({
									tag: rule.tagName ? rule.tagName.toLowerCase() : '*',
									combinator: rule.nestingOperator ? rule.nestingOperator : ' ',
									id: rule.id,
									attributes: convertAttributes(rule.attrs),
									classes: convertClasses(rule.classNames),
									pseudos: convertPseudos(rule.pseudos),
								}),
									(rule = rule.rule)
							return newExp
						})
					}
					function _convertSelector(selector) {
						var expressions = css_parser_default.parse(selector)
						return convertExpressions(
							(expressions = expressions.selectors ? expressions.selectors : [expressions]),
						)
					}
					function optimizedMatchesExpression(vNode, expressions, index, matchAnyParent) {
						if (!vNode) return !1
						for (
							var expression = Array.isArray(expressions) ? expressions[index] : expressions,
								matches4 = matchExpression(vNode, expression);
							!matches4 && matchAnyParent && vNode.parent;

						)
							matches4 = matchExpression((vNode = vNode.parent), expression)
						if (index > 0) {
							if (!1 === [' ', '>'].includes(expression.combinator))
								throw new Error(
									'axe.utils.matchesExpression does not support the combinator: ' +
										expression.combinator,
								)
							matches4 =
								matches4 &&
								optimizedMatchesExpression(
									vNode.parent,
									expressions,
									index - 1,
									' ' === expression.combinator,
								)
						}
						return matches4
					}
					function _matchesExpression(vNode, expressions, matchAnyParent) {
						return optimizedMatchesExpression(
							vNode,
							expressions,
							expressions.length - 1,
							matchAnyParent,
						)
					}
					var matches_default = function matches(vNode, selector) {
						return _convertSelector(selector).some(function (expression) {
							return _matchesExpression(vNode, expression)
						})
					}
					var closest_default = function closest(vNode, selector) {
						for (; vNode; ) {
							if (matches_default(vNode, selector)) return vNode
							if (void 0 === vNode.parent)
								throw new TypeError('Cannot resolve parent for non-DOM nodes')
							vNode = vNode.parent
						}
						return null
					}
					function noop() {}
					function funcGuard(f) {
						if ('function' != typeof f)
							throw new TypeError('Queue methods require functions as arguments')
					}
					var uuid,
						_rng,
						_rnds8,
						_rnds,
						queue_default = function queue() {
							var err2,
								tasks = [],
								started = 0,
								remaining = 0,
								completeQueue = noop,
								complete = !1,
								defaultFail = function defaultFail(e) {
									;(err2 = e),
										setTimeout(function () {
											null != err2 && log_default('Uncaught error (of queue)', err2)
										}, 1)
								},
								failed = defaultFail
							function createResolve(i) {
								return function (r) {
									;(tasks[i] = r),
										(remaining -= 1) ||
											completeQueue === noop ||
											((complete = !0), completeQueue(tasks))
								}
							}
							function abort(msg) {
								return (completeQueue = noop), failed(msg), tasks
							}
							var q = {
								defer: function defer(fn) {
									if ('object' === _typeof(fn) && fn.then && fn.catch) {
										var defer = fn
										fn = function fn(resolve, reject) {
											defer.then(resolve).catch(reject)
										}
									}
									if ((funcGuard(fn), void 0 === err2)) {
										if (complete) throw new Error('Queue already completed')
										return (
											tasks.push(fn),
											++remaining,
											(function pop() {
												for (var length = tasks.length; started < length; started++) {
													var task = tasks[started]
													try {
														task.call(null, createResolve(started), abort)
													} catch (e) {
														abort(e)
													}
												}
											})(),
											q
										)
									}
								},
								then: function then(fn) {
									if ((funcGuard(fn), completeQueue !== noop))
										throw new Error('queue `then` already set')
									return (
										err2 ||
											((completeQueue = fn), remaining || ((complete = !0), completeQueue(tasks))),
										q
									)
								},
								catch: function _catch(fn) {
									if ((funcGuard(fn), failed !== defaultFail))
										throw new Error('queue `catch` already set')
									return err2 ? (fn(err2), (err2 = null)) : (failed = fn), q
								},
								abort,
							}
							return q
						},
						_crypto = window.crypto || window.msCrypto
					!_rng &&
						_crypto &&
						_crypto.getRandomValues &&
						((_rnds8 = new Uint8Array(16)),
						(_rng = function whatwgRNG() {
							return _crypto.getRandomValues(_rnds8), _rnds8
						})),
						_rng ||
							((_rnds = new Array(16)),
							(_rng = function _rng() {
								for (var r, i = 0; i < 16; i++)
									0 == (3 & i) && (r = 4294967296 * Math.random()),
										(_rnds[i] = (r >>> ((3 & i) << 3)) & 255)
								return _rnds
							}))
					for (
						var BufferClass = 'function' == typeof window.Buffer ? window.Buffer : Array,
							_byteToHex = [],
							_hexToByte = {},
							i = 0;
						i < 256;
						i++
					)
						(_byteToHex[i] = (i + 256).toString(16).substr(1)), (_hexToByte[_byteToHex[i]] = i)
					function unparse(buf, offset) {
						var i = offset || 0,
							bth = _byteToHex
						return (
							bth[buf[i++]] +
							bth[buf[i++]] +
							bth[buf[i++]] +
							bth[buf[i++]] +
							'-' +
							bth[buf[i++]] +
							bth[buf[i++]] +
							'-' +
							bth[buf[i++]] +
							bth[buf[i++]] +
							'-' +
							bth[buf[i++]] +
							bth[buf[i++]] +
							'-' +
							bth[buf[i++]] +
							bth[buf[i++]] +
							bth[buf[i++]] +
							bth[buf[i++]] +
							bth[buf[i++]] +
							bth[buf[i++]]
						)
					}
					var _seedBytes = _rng(),
						_nodeId = [
							1 | _seedBytes[0],
							_seedBytes[1],
							_seedBytes[2],
							_seedBytes[3],
							_seedBytes[4],
							_seedBytes[5],
						],
						_clockseq = 16383 & ((_seedBytes[6] << 8) | _seedBytes[7]),
						_lastMSecs = 0,
						_lastNSecs = 0
					function v1(options, buf, offset) {
						var i = (buf && offset) || 0,
							b = buf || [],
							clockseq = null != (options = options || {}).clockseq ? options.clockseq : _clockseq,
							msecs = null != options.msecs ? options.msecs : new Date().getTime(),
							nsecs = null != options.nsecs ? options.nsecs : _lastNSecs + 1,
							dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4
						if (
							(dt < 0 && null == options.clockseq && (clockseq = (clockseq + 1) & 16383),
							(dt < 0 || msecs > _lastMSecs) && null == options.nsecs && (nsecs = 0),
							nsecs >= 1e4)
						)
							throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
						;(_lastMSecs = msecs), (_lastNSecs = nsecs), (_clockseq = clockseq)
						var tl = (1e4 * (268435455 & (msecs += 122192928e5)) + nsecs) % 4294967296
						;(b[i++] = (tl >>> 24) & 255),
							(b[i++] = (tl >>> 16) & 255),
							(b[i++] = (tl >>> 8) & 255),
							(b[i++] = 255 & tl)
						var tmh = ((msecs / 4294967296) * 1e4) & 268435455
						;(b[i++] = (tmh >>> 8) & 255),
							(b[i++] = 255 & tmh),
							(b[i++] = ((tmh >>> 24) & 15) | 16),
							(b[i++] = (tmh >>> 16) & 255),
							(b[i++] = (clockseq >>> 8) | 128),
							(b[i++] = 255 & clockseq)
						for (var node = options.node || _nodeId, n = 0; n < 6; n++) b[i + n] = node[n]
						return buf || unparse(b)
					}
					function v4(options, buf, offset) {
						var i = (buf && offset) || 0
						'string' == typeof options &&
							((buf = 'binary' == options ? new BufferClass(16) : null), (options = null))
						var rnds = (options = options || {}).random || (options.rng || _rng)()
						if (((rnds[6] = (15 & rnds[6]) | 64), (rnds[8] = (63 & rnds[8]) | 128), buf))
							for (var ii = 0; ii < 16; ii++) buf[i + ii] = rnds[ii]
						return buf || unparse(rnds)
					}
					;((uuid = v4).v1 = v1),
						(uuid.v4 = v4),
						(uuid.parse = function parse(s, buf, offset) {
							var i = (buf && offset) || 0,
								ii = 0
							for (
								buf = buf || [],
									s.toLowerCase().replace(/[0-9a-f]{2}/g, function (oct) {
										ii < 16 && (buf[i + ii++] = _hexToByte[oct])
									});
								ii < 16;

							)
								buf[i + ii++] = 0
							return buf
						}),
						(uuid.unparse = unparse),
						(uuid.BufferClass = BufferClass),
						(axe._uuid = v1())
					var uuid_default = v4,
						errorTypes = Object.freeze([
							'EvalError',
							'RangeError',
							'ReferenceError',
							'SyntaxError',
							'TypeError',
							'URIError',
						])
					function parseMessage(dataString) {
						var data2
						try {
							data2 = JSON.parse(dataString)
						} catch (e) {
							return
						}
						if (
							(function isRespondableMessage(postedMessage) {
								return (
									null !== postedMessage &&
									'object' === _typeof(postedMessage) &&
									'string' == typeof postedMessage.channelId &&
									postedMessage.source === getSource2()
								)
							})(data2)
						) {
							var _data = data2,
								topic = _data.topic,
								channelId = _data.channelId,
								messageId = _data.messageId,
								keepalive = _data.keepalive
							return {
								topic,
								message:
									'object' === _typeof(data2.error)
										? (function buildErrorObject(error) {
												var msg = error.message || 'Unknown error occurred',
													errorName = errorTypes.includes(error.name) ? error.name : 'Error',
													ErrConstructor = window[errorName] || Error
												error.stack && (msg += '\n' + error.stack.replace(error.message, ''))
												return new ErrConstructor(msg)
										  })(data2.error)
										: data2.payload,
								messageId,
								channelId,
								keepalive: !!keepalive,
							}
						}
					}
					function getSource2() {
						var application = 'axeAPI',
							version = ''
						return (
							void 0 !== axe &&
								axe._audit &&
								axe._audit.application &&
								(application = axe._audit.application),
							void 0 !== axe && (version = axe.version),
							application + '.' + version
						)
					}
					function assertIsParentWindow(win) {
						assetNotGlobalWindow(win),
							assert_default(
								window.parent === win,
								'Source of the response must be the parent window.',
							)
					}
					function assertIsFrameWindow(win) {
						assetNotGlobalWindow(win),
							assert_default(
								win.parent === window,
								'Respondable target must be a frame in the current window',
							)
					}
					function assetNotGlobalWindow(win) {
						assert_default(window !== win, 'Messages can not be sent to the same window.')
					}
					var channels = {}
					var messageIds = []
					function createMessageId() {
						var uuid2 = ''.concat(v4(), ':').concat(v4())
						return messageIds.includes(uuid2) ? createMessageId() : (messageIds.push(uuid2), uuid2)
					}
					function postMessage(win, data2, sendToParent, replyHandler) {
						if (
							('function' == typeof replyHandler &&
								(function storeReplyHandler(channelId, replyHandler) {
									var sendToParent =
										!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
									assert_default(
										!channels[channelId],
										'A replyHandler already exists for this message channel.',
									),
										(channels[channelId] = { replyHandler, sendToParent })
								})(data2.channelId, replyHandler, sendToParent),
							sendToParent ? assertIsParentWindow(win) : assertIsFrameWindow(win),
							data2.message instanceof Error && !sendToParent)
						)
							return axe.log(data2.message), !1
						var dataString = (function stringifyMessage(_ref2) {
								var topic = _ref2.topic,
									channelId = _ref2.channelId,
									message = _ref2.message,
									data2 = {
										channelId,
										topic,
										messageId: _ref2.messageId,
										keepalive: !!_ref2.keepalive,
										source: getSource2(),
									}
								return (
									message instanceof Error
										? (data2.error = {
												name: message.name,
												message: message.message,
												stack: message.stack,
										  })
										: (data2.payload = message),
									JSON.stringify(data2)
								)
							})(_extends({ messageId: createMessageId() }, data2)),
							allowedOrigins = axe._audit.allowedOrigins
						return (
							!(!allowedOrigins || !allowedOrigins.length) &&
							(allowedOrigins.forEach(function (origin) {
								try {
									win.postMessage(dataString, origin)
								} catch (err2) {
									if (err2 instanceof win.DOMException)
										throw new Error(
											'allowedOrigins value "'.concat(origin, '" is not a valid origin'),
										)
									throw err2
								}
							}),
							!0)
						)
					}
					function createResponder(win, channelId) {
						var sendToParent = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
						return function respond(message, keepalive, replyHandler) {
							postMessage(win, { channelId, message, keepalive }, sendToParent, replyHandler)
						}
					}
					function messageHandler(_ref3, topicHandler) {
						var origin = _ref3.origin,
							dataString = _ref3.data,
							win = _ref3.source
						try {
							var data2 = parseMessage(dataString) || {},
								channelId = data2.channelId,
								message = data2.message,
								messageId = data2.messageId
							if (
								!(function originIsAllowed(origin) {
									var allowedOrigins = axe._audit.allowedOrigins
									return (
										(allowedOrigins && allowedOrigins.includes('*')) ||
										allowedOrigins.includes(origin)
									)
								})(origin) ||
								!(function isNewMessage(uuid2) {
									return !messageIds.includes(uuid2) && (messageIds.push(uuid2), !0)
								})(messageId)
							)
								return
							if (message instanceof Error && win.parent !== window) return axe.log(message), !1
							try {
								if (data2.topic) {
									var responder = createResponder(win, channelId)
									assertIsParentWindow(win), topicHandler(data2, responder)
								} else
									!(function callReplyHandler(win, data2) {
										var channelId = data2.channelId,
											message = data2.message,
											keepalive = data2.keepalive,
											_ref4 =
												(function getReplyHandler(channelId) {
													return channels[channelId]
												})(channelId) || {},
											replyHandler = _ref4.replyHandler,
											sendToParent = _ref4.sendToParent
										if (!replyHandler) return
										sendToParent ? assertIsParentWindow(win) : assertIsFrameWindow(win)
										var responder = createResponder(win, channelId, sendToParent)
										!keepalive &&
											channelId &&
											(function deleteReplyHandler(channelId) {
												delete channels[channelId]
											})(channelId)
										try {
											replyHandler(message, keepalive, responder)
										} catch (error) {
											axe.log(error), responder(error, keepalive)
										}
									})(win, data2)
							} catch (error) {
								!(function processError(win, error, channelId) {
									if (!win.parent !== window) return axe.log(error)
									try {
										postMessage(
											win,
											{
												topic: null,
												channelId,
												message: error,
												messageId: createMessageId(),
												keepalive: !0,
											},
											!0,
										)
									} catch (err2) {
										return axe.log(err2)
									}
								})(win, error, channelId)
							}
						} catch (error) {
							return axe.log(error), !1
						}
					}
					var closeHandler,
						postMessage2,
						frameMessenger = {
							open: function open(topicHandler) {
								if ('function' == typeof window.addEventListener) {
									var handler = function handler(messageEvent) {
										messageHandler(messageEvent, topicHandler)
									}
									return (
										window.addEventListener('message', handler, !1),
										function () {
											window.removeEventListener('message', handler, !1)
										}
									)
								}
							},
							post: function post(win, data2, replyHandler) {
								return (
									'function' == typeof window.addEventListener &&
									postMessage(win, data2, !1, replyHandler)
								)
							},
						}
					function setDefaultFrameMessenger(respondable2) {
						respondable2.updateMessenger(frameMessenger)
					}
					var topicHandlers = {}
					function _respondable(win, topic, message, keepalive, replyHandler) {
						var data2 = { topic, message, channelId: ''.concat(v4(), ':').concat(v4()), keepalive }
						return postMessage2(win, data2, replyHandler)
					}
					function messageListener(data2, responder) {
						var topic = data2.topic,
							message = data2.message,
							keepalive = data2.keepalive,
							topicHandler = topicHandlers[topic]
						if (topicHandler)
							try {
								topicHandler(message, keepalive, responder)
							} catch (error) {
								axe.log(error), responder(error, keepalive)
							}
					}
					function _sendCommandToFrame(node, parameters, resolve, reject) {
						var _parameters$options$p,
							_parameters$options,
							win = node.contentWindow,
							pingWaitTime =
								null !==
									(_parameters$options$p =
										null === (_parameters$options = parameters.options) ||
										void 0 === _parameters$options
											? void 0
											: _parameters$options.pingWaitTime) && void 0 !== _parameters$options$p
									? _parameters$options$p
									: 500
						if (!win)
							return log_default('Frame does not have a content window', node), void resolve(null)
						if (0 !== pingWaitTime) {
							var timeout = setTimeout(function () {
								timeout = setTimeout(function () {
									parameters.debug ? reject(err('No response from frame', node)) : resolve(null)
								}, 0)
							}, pingWaitTime)
							_respondable(win, 'axe.ping', null, void 0, function () {
								clearTimeout(timeout), callAxeStart(node, parameters, resolve, reject)
							})
						} else callAxeStart(node, parameters, resolve, reject)
					}
					function callAxeStart(node, parameters, resolve, reject) {
						var _parameters$options$f,
							_parameters$options2,
							frameWaitTime =
								null !==
									(_parameters$options$f =
										null === (_parameters$options2 = parameters.options) ||
										void 0 === _parameters$options2
											? void 0
											: _parameters$options2.frameWaitTime) && void 0 !== _parameters$options$f
									? _parameters$options$f
									: 6e4,
							win = node.contentWindow,
							timeout = setTimeout(function collectResultFramesTimeout() {
								reject(err('Axe in frame timed out', node))
							}, frameWaitTime)
						_respondable(win, 'axe.start', parameters, void 0, function (data2) {
							clearTimeout(timeout), data2 instanceof Error == !1 ? resolve(data2) : reject(data2)
						})
					}
					function err(message, node) {
						var selector
						return (
							axe._tree && (selector = _getSelector(node)),
							new Error(message + ': ' + (selector || node))
						)
					}
					;(_respondable.updateMessenger = function updateMessenger(_ref5) {
						var open = _ref5.open,
							post = _ref5.post
						assert_default('function' == typeof open, 'open callback must be a function'),
							assert_default('function' == typeof post, 'post callback must be a function'),
							closeHandler && closeHandler()
						var close = open(messageListener)
						close
							? (assert_default(
									'function' == typeof close,
									'open callback must return a cleanup function',
							  ),
							  (closeHandler = close))
							: (closeHandler = null),
							(postMessage2 = post)
					}),
						(_respondable.subscribe = function subscribe(topic, topicHandler) {
							assert_default(
								'function' == typeof topicHandler,
								'Subscriber callback must be a function',
							),
								assert_default(
									!topicHandlers[topic],
									'Topic '.concat(topic, ' is already registered to.'),
								),
								(topicHandlers[topic] = topicHandler)
						}),
						(_respondable.isInFrame = function isInFrame() {
							var win = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window
							return !!win.frameElement
						}),
						setDefaultFrameMessenger(_respondable)
					var get_all_checks_default = function getAllChecks(object) {
						return []
							.concat(object.any || [])
							.concat(object.all || [])
							.concat(object.none || [])
					}
					var find_by_default = function findBy(array, key, value) {
						if (Array.isArray(array))
							return array.find(function (obj) {
								return 'object' === _typeof(obj) && obj[key] === value
							})
					}
					function nodeIndexSort() {
						for (
							var nodeIndexesA =
									arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
								nodeIndexesB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
								length = Math.max(
									null == nodeIndexesA ? void 0 : nodeIndexesA.length,
									null == nodeIndexesB ? void 0 : nodeIndexesB.length,
								),
								_i3 = 0;
							_i3 < length;
							_i3++
						) {
							var indexA = null == nodeIndexesA ? void 0 : nodeIndexesA[_i3],
								indexB = null == nodeIndexesB ? void 0 : nodeIndexesB[_i3]
							if ('number' != typeof indexA || isNaN(indexA)) return 0 === _i3 ? 1 : -1
							if ('number' != typeof indexB || isNaN(indexB)) return 0 === _i3 ? -1 : 1
							if (indexA !== indexB) return indexA - indexB
						}
						return 0
					}
					var merge_results_default = function mergeResults(frameResults, options) {
						var mergedResult = []
						return (
							frameResults.forEach(function (frameResult) {
								var results = (function normalizeResult(result) {
									return result && result.results
										? Array.isArray(result.results)
											? result.results.length
												? result.results
												: null
											: [result.results]
										: null
								})(frameResult)
								if (results && results.length) {
									var frameSpec = (function getFrameSpec(frameResult, options) {
										if (frameResult.frameElement)
											return new dq_element_default(frameResult.frameElement, options)
										if (frameResult.frameSpec) return frameResult.frameSpec
										return null
									})(frameResult, options)
									results.forEach(function (ruleResult) {
										ruleResult.nodes &&
											frameSpec &&
											(function pushFrame(resultSet, options, frameSpec) {
												resultSet.forEach(function (res) {
													;(res.node = dq_element_default.fromFrame(res.node, options, frameSpec)),
														get_all_checks_default(res).forEach(function (check) {
															check.relatedNodes = check.relatedNodes.map(function (node) {
																return dq_element_default.fromFrame(node, options, frameSpec)
															})
														})
												})
											})(ruleResult.nodes, options, frameSpec)
										var res = find_by_default(mergedResult, 'id', ruleResult.id)
										res
											? ruleResult.nodes.length &&
											  (function spliceNodes(target, to) {
													for (
														var firstFromFrame = to[0].node, _i2 = 0;
														_i2 < target.length;
														_i2++
													) {
														var node = target[_i2].node,
															resultSort = nodeIndexSort(
																node.nodeIndexes,
																firstFromFrame.nodeIndexes,
															)
														if (
															resultSort > 0 ||
															(0 === resultSort &&
																firstFromFrame.selector.length < node.selector.length)
														)
															return void target.splice.apply(
																target,
																[_i2, 0].concat(_toConsumableArray(to)),
															)
													}
													target.push.apply(target, _toConsumableArray(to))
											  })(res.nodes, ruleResult.nodes)
											: mergedResult.push(ruleResult)
									})
								}
							}),
							mergedResult.forEach(function (result) {
								result.nodes &&
									result.nodes.sort(function (nodeA, nodeB) {
										return nodeIndexSort(nodeA.node.nodeIndexes, nodeB.node.nodeIndexes)
									})
							}),
							mergedResult
						)
					}
					function _collectResultsFromFrames(
						parentContent,
						options,
						command,
						parameter,
						resolve,
						reject,
					) {
						var q = queue_default()
						parentContent.frames.forEach(function (_ref6) {
							var frameElement = _ref6.node,
								context = _objectWithoutProperties(_ref6, _excluded)
							q.defer(function (res, rej) {
								_sendCommandToFrame(
									frameElement,
									{ options, command, parameter, context },
									function callback(results) {
										return res(results ? { results, frameElement } : null)
									},
									rej,
								)
							})
						}),
							q
								.then(function (data2) {
									resolve(merge_results_default(data2, options))
								})
								.catch(reject)
					}
					function _contains(vNode, otherVNode) {
						if (vNode.shadowId || otherVNode.shadowId) {
							do {
								if (vNode.shadowId === otherVNode.shadowId) return !0
								otherVNode = otherVNode.parent
							} while (otherVNode)
							return !1
						}
						if (!vNode.actualNode)
							do {
								if (otherVNode === vNode) return !0
								otherVNode = otherVNode.parent
							} while (otherVNode)
						return 'function' != typeof vNode.actualNode.contains
							? !!(16 & vNode.actualNode.compareDocumentPosition(otherVNode.actualNode))
							: vNode.actualNode.contains(otherVNode.actualNode)
					}
					var deep_merge_default = function deepMerge() {
						for (
							var target = {}, _len = arguments.length, sources = new Array(_len), _key = 0;
							_key < _len;
							_key++
						)
							sources[_key] = arguments[_key]
						return (
							sources.forEach(function (source) {
								if (source && 'object' === _typeof(source) && !Array.isArray(source))
									for (
										var _i4 = 0, _Object$keys = Object.keys(source);
										_i4 < _Object$keys.length;
										_i4++
									) {
										var key = _Object$keys[_i4]
										!target.hasOwnProperty(key) ||
										'object' !== _typeof(source[key]) ||
										Array.isArray(target[key])
											? (target[key] = source[key])
											: (target[key] = deepMerge(target[key], source[key]))
									}
							}),
							target
						)
					}
					var extend_meta_data_default = function extendMetaData(to, from) {
							Object.assign(to, from),
								Object.keys(from)
									.filter(function (prop) {
										return 'function' == typeof from[prop]
									})
									.forEach(function (prop) {
										to[prop] = null
										try {
											to[prop] = from[prop](to)
										} catch (e) {}
									})
						},
						possibleShadowRoots = [
							'article',
							'aside',
							'blockquote',
							'body',
							'div',
							'footer',
							'h1',
							'h2',
							'h3',
							'h4',
							'h5',
							'h6',
							'header',
							'main',
							'nav',
							'p',
							'section',
							'span',
						]
					var is_shadow_root_default = function isShadowRoot(node) {
							if (node.shadowRoot) {
								var nodeName2 = node.nodeName.toLowerCase()
								if (
									possibleShadowRoots.includes(nodeName2) ||
									/^[a-z][a-z0-9_.-]*-[a-z0-9_.-]*$/.test(nodeName2)
								)
									return !0
							}
							return !1
						},
						dom_exports = {}
					__export(dom_exports, {
						createGrid: function createGrid() {
							return _createGrid
						},
						findElmsInContext: function findElmsInContext() {
							return find_elms_in_context_default
						},
						findNearbyElms: function findNearbyElms() {
							return _findNearbyElms
						},
						findUp: function findUp() {
							return find_up_default
						},
						findUpVirtual: function findUpVirtual() {
							return find_up_virtual_default
						},
						getComposedParent: function getComposedParent() {
							return get_composed_parent_default
						},
						getElementByReference: function getElementByReference() {
							return get_element_by_reference_default
						},
						getElementCoordinates: function getElementCoordinates() {
							return get_element_coordinates_default
						},
						getElementStack: function getElementStack() {
							return get_element_stack_default
						},
						getRootNode: function getRootNode() {
							return get_root_node_default2
						},
						getScrollOffset: function getScrollOffset() {
							return get_scroll_offset_default
						},
						getTabbableElements: function getTabbableElements() {
							return get_tabbable_elements_default
						},
						getTextElementStack: function getTextElementStack() {
							return get_text_element_stack_default
						},
						getViewportSize: function getViewportSize() {
							return get_viewport_size_default
						},
						hasContent: function hasContent() {
							return has_content_default
						},
						hasContentVirtual: function hasContentVirtual() {
							return has_content_virtual_default
						},
						hasLangText: function hasLangText() {
							return _hasLangText
						},
						idrefs: function idrefs() {
							return idrefs_default
						},
						insertedIntoFocusOrder: function insertedIntoFocusOrder() {
							return inserted_into_focus_order_default
						},
						isCurrentPageLink: function isCurrentPageLink() {
							return _isCurrentPageLink
						},
						isFocusable: function isFocusable() {
							return _isFocusable
						},
						isHTML5: function isHTML5() {
							return is_html5_default
						},
						isHiddenForEveryone: function isHiddenForEveryone() {
							return _isHiddenForEveryone
						},
						isHiddenWithCSS: function isHiddenWithCSS() {
							return is_hidden_with_css_default
						},
						isInTabOrder: function isInTabOrder() {
							return _isInTabOrder
						},
						isInTextBlock: function isInTextBlock() {
							return is_in_text_block_default
						},
						isModalOpen: function isModalOpen() {
							return is_modal_open_default
						},
						isMultiline: function isMultiline() {
							return _isMultiline
						},
						isNativelyFocusable: function isNativelyFocusable() {
							return is_natively_focusable_default
						},
						isNode: function isNode() {
							return is_node_default
						},
						isOffscreen: function isOffscreen() {
							return is_offscreen_default
						},
						isOpaque: function isOpaque() {
							return is_opaque_default
						},
						isSkipLink: function isSkipLink() {
							return _isSkipLink
						},
						isVisible: function isVisible() {
							return is_visible_default
						},
						isVisibleOnScreen: function isVisibleOnScreen() {
							return _isVisibleOnScreen
						},
						isVisibleToScreenReaders: function isVisibleToScreenReaders() {
							return _isVisibleToScreenReaders
						},
						isVisualContent: function isVisualContent() {
							return is_visual_content_default
						},
						reduceToElementsBelowFloating: function reduceToElementsBelowFloating() {
							return reduce_to_elements_below_floating_default
						},
						shadowElementsFromPoint: function shadowElementsFromPoint() {
							return shadow_elements_from_point_default
						},
						urlPropsFromAttribute: function urlPropsFromAttribute() {
							return url_props_from_attribute_default
						},
						visuallyContains: function visuallyContains() {
							return _visuallyContains
						},
						visuallyOverlaps: function visuallyOverlaps() {
							return visually_overlaps_default
						},
						visuallySort: function visuallySort() {
							return _visuallySort
						},
					})
					var get_root_node_default = function getRootNode(node) {
							var doc = (node.getRootNode && node.getRootNode()) || document
							return doc === node && (doc = document), doc
						},
						get_root_node_default2 = get_root_node_default
					var find_elms_in_context_default = function findElmsInContext(_ref7) {
						var root,
							context = _ref7.context,
							value = _ref7.value,
							attr = _ref7.attr,
							_ref7$elm = _ref7.elm,
							elm = void 0 === _ref7$elm ? '' : _ref7$elm,
							escapedValue = escape_selector_default(value)
						return (
							(root =
								9 === context.nodeType || 11 === context.nodeType
									? context
									: get_root_node_default2(context)),
							Array.from(root.querySelectorAll(elm + '[' + attr + '=' + escapedValue + ']'))
						)
					}
					var find_up_virtual_default = function findUpVirtual(element, target) {
						var parent
						if (
							((parent = element.actualNode),
							!element.shadowId && 'function' == typeof element.actualNode.closest)
						) {
							var match = element.actualNode.closest(target)
							return match || null
						}
						do {
							;(parent = parent.assignedSlot ? parent.assignedSlot : parent.parentNode) &&
								11 === parent.nodeType &&
								(parent = parent.host)
						} while (
							parent &&
							!element_matches_default(parent, target) &&
							parent !== document.documentElement
						)
						return parent && element_matches_default(parent, target) ? parent : null
					}
					var find_up_default = function findUp(element, target) {
							return find_up_virtual_default(get_node_from_tree_default(element), target)
						},
						import_memoizee = __toModule(require_memoizee())
					axe._memoizedFns = []
					var memoize_default = function memoizeImplementation(fn) {
						var memoized = (0, import_memoizee.default)(fn)
						return axe._memoizedFns.push(memoized), memoized
					}
					function _rectsOverlap(rect1, rect2) {
						return (
							(0 | rect1.left) < (0 | rect2.right) &&
							(0 | rect1.right) > (0 | rect2.left) &&
							(0 | rect1.top) < (0 | rect2.bottom) &&
							(0 | rect1.bottom) > (0 | rect2.top)
						)
					}
					var clipRegex = /rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/,
						clipPathRegex = /(\w+)\((\d+)/
					function nativelyHidden(vNode) {
						return ['style', 'script', 'noscript', 'template'].includes(vNode.props.nodeName)
					}
					function displayHidden(vNode) {
						return (
							'area' !== vNode.props.nodeName &&
							'none' === vNode.getComputedStylePropertyValue('display')
						)
					}
					function visibilityHidden(vNode) {
						var _ref8 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
							isAncestor = _ref8.isAncestor
						return (
							!isAncestor &&
							['hidden', 'collapse'].includes(vNode.getComputedStylePropertyValue('visibility'))
						)
					}
					function contentVisibiltyHidden(vNode) {
						var _ref9 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
							isAncestor = _ref9.isAncestor
						return (
							!!isAncestor && 'hidden' === vNode.getComputedStylePropertyValue('content-visibility')
						)
					}
					function ariaHidden(vNode) {
						return 'true' === vNode.attr('aria-hidden')
					}
					function opacityHidden(vNode) {
						return '0' === vNode.getComputedStylePropertyValue('opacity')
					}
					function scrollHidden(vNode) {
						var scroll = _getScroll(vNode.actualNode),
							elHeight = parseInt(vNode.getComputedStylePropertyValue('height')),
							elWidth = parseInt(vNode.getComputedStylePropertyValue('width'))
						return !!scroll && (0 === elHeight || 0 === elWidth)
					}
					function overflowHidden(vNode) {
						var _ref10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
							isAncestor = _ref10.isAncestor
						if (isAncestor) return !1
						var rect = vNode.boundingClientRect,
							nodes = getOverflowHiddenAncestors(vNode)
						return (
							!!nodes.length &&
							nodes.some(function (node) {
								var nodeRect = node.boundingClientRect
								return nodeRect.width < 2 || nodeRect.height < 2 || !_rectsOverlap(rect, nodeRect)
							})
						)
					}
					var getOverflowHiddenAncestors = memoize_default(
						function getOverflowHiddenAncestorsMemoized(vNode) {
							var ancestors = []
							return vNode
								? ('hidden' === vNode.getComputedStylePropertyValue('overflow') &&
										ancestors.push(vNode),
								  ancestors.concat(getOverflowHiddenAncestors(vNode.parent)))
								: ancestors
						},
					)
					function clipHidden(vNode) {
						var matchesClip = vNode.getComputedStylePropertyValue('clip').match(clipRegex),
							matchesClipPath = vNode
								.getComputedStylePropertyValue('clip-path')
								.match(clipPathRegex)
						if (matchesClip && 5 === matchesClip.length) {
							var position = vNode.getComputedStylePropertyValue('position')
							if (['fixed', 'absolute'].includes(position))
								return matchesClip[3] - matchesClip[1] <= 0 && matchesClip[2] - matchesClip[4] <= 0
						}
						if (matchesClipPath) {
							var type = matchesClipPath[1],
								value = parseInt(matchesClipPath[2], 10)
							switch (type) {
								case 'inset':
									return value >= 50
								case 'circle':
									return 0 === value
							}
						}
						return !1
					}
					function areaHidden(vNode, visibleFunction) {
						var mapEl = closest_default(vNode, 'map')
						if (!mapEl) return !0
						var mapElName = mapEl.attr('name')
						if (!mapElName) return !0
						var mapElRootNode = get_root_node_default(vNode.actualNode)
						if (!mapElRootNode || 9 !== mapElRootNode.nodeType) return !0
						var refs = query_selector_all_default(
							axe._tree,
							'img[usemap="#'.concat(escape_selector_default(mapElName), '"]'),
						)
						return (
							!refs ||
							!refs.length ||
							refs.some(function (ref) {
								return !visibleFunction(ref)
							})
						)
					}
					function detailsHidden(vNode) {
						var _vNode$parent
						if (
							'details' !==
							(null === (_vNode$parent = vNode.parent) || void 0 === _vNode$parent
								? void 0
								: _vNode$parent.props.nodeName)
						)
							return !1
						if (
							'summary' === vNode.props.nodeName &&
							vNode.parent.children.find(function (node) {
								return 'summary' === node.props.nodeName
							}) === vNode
						)
							return !1
						return !vNode.parent.hasAttr('open')
					}
					var hiddenMethods = [
						displayHidden,
						visibilityHidden,
						contentVisibiltyHidden,
						detailsHidden,
					]
					function _isHiddenForEveryone(vNode) {
						var _ref11 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
							skipAncestors = _ref11.skipAncestors,
							_ref11$isAncestor = _ref11.isAncestor,
							isAncestor = void 0 !== _ref11$isAncestor && _ref11$isAncestor
						return (
							(vNode =
								vNode instanceof abstract_virtual_node_default
									? vNode
									: get_node_from_tree_default(vNode)),
							skipAncestors ? isHiddenSelf(vNode, isAncestor) : isHiddenAncestors(vNode, isAncestor)
						)
					}
					var isHiddenSelf = memoize_default(function isHiddenSelfMemoized(vNode, isAncestor) {
							return (
								!!nativelyHidden(vNode) ||
								(!!vNode.actualNode &&
									(!!hiddenMethods.some(function (method) {
										return method(vNode, { isAncestor })
									}) ||
										!vNode.actualNode.isConnected))
							)
						}),
						isHiddenAncestors = memoize_default(function isHiddenAncestorsMemoized(
							vNode,
							isAncestor,
						) {
							return (
								!!isHiddenSelf(vNode, isAncestor) ||
								(!!vNode.parent && isHiddenAncestors(vNode.parent, !0))
							)
						})
					var get_composed_parent_default = function getComposedParent(element) {
						if (element.assignedSlot) return getComposedParent(element.assignedSlot)
						if (element.parentNode) {
							var parentNode = element.parentNode
							if (1 === parentNode.nodeType) return parentNode
							if (parentNode.host) return parentNode.host
						}
						return null
					}
					var get_scroll_offset_default = function getScrollOffset(element) {
						if (
							(!element.nodeType && element.document && (element = element.document),
							9 === element.nodeType)
						) {
							var docElement = element.documentElement,
								body = element.body
							return {
								left: (docElement && docElement.scrollLeft) || (body && body.scrollLeft) || 0,
								top: (docElement && docElement.scrollTop) || (body && body.scrollTop) || 0,
							}
						}
						return { left: element.scrollLeft, top: element.scrollTop }
					}
					var get_element_coordinates_default = function getElementCoordinates(element) {
						var scrollOffset = get_scroll_offset_default(document),
							xOffset = scrollOffset.left,
							yOffset = scrollOffset.top,
							coords = element.getBoundingClientRect()
						return {
							top: coords.top + yOffset,
							right: coords.right + xOffset,
							bottom: coords.bottom + yOffset,
							left: coords.left + xOffset,
							width: coords.right - coords.left,
							height: coords.bottom - coords.top,
						}
					}
					var get_viewport_size_default = function getViewportSize(win) {
						var doc = win.document,
							docElement = doc.documentElement
						if (win.innerWidth) return { width: win.innerWidth, height: win.innerHeight }
						if (docElement)
							return { width: docElement.clientWidth, height: docElement.clientHeight }
						var body = doc.body
						return { width: body.clientWidth, height: body.clientHeight }
					}
					function noParentScrolled(element, offset) {
						for (
							element = get_composed_parent_default(element);
							element && 'html' !== element.nodeName.toLowerCase();

						) {
							if (element.scrollTop && (offset += element.scrollTop) >= 0) return !1
							element = get_composed_parent_default(element)
						}
						return !0
					}
					var is_offscreen_default = function isOffscreen(element) {
							var _ref12 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
								isAncestor = _ref12.isAncestor
							if (isAncestor) return !1
							if (
								(element =
									element instanceof abstract_virtual_node_default ? element.actualNode : element)
							) {
								var leftBoundary,
									docElement = document.documentElement,
									styl = window.getComputedStyle(element),
									dir = window
										.getComputedStyle(document.body || docElement)
										.getPropertyValue('direction'),
									coords = get_element_coordinates_default(element)
								if (
									coords.bottom < 0 &&
									(noParentScrolled(element, coords.bottom) || 'absolute' === styl.position)
								)
									return !0
								if (0 === coords.left && 0 === coords.right) return !1
								if ('ltr' === dir) {
									if (coords.right <= 0) return !0
								} else if (
									((leftBoundary = Math.max(
										docElement.scrollWidth,
										get_viewport_size_default(window).width,
									)),
									coords.left >= leftBoundary)
								)
									return !0
								return !1
							}
						},
						hiddenMethods2 = [
							opacityHidden,
							scrollHidden,
							overflowHidden,
							clipHidden,
							is_offscreen_default,
						]
					function _isVisibleOnScreen(vNode) {
						return (
							(vNode =
								vNode instanceof abstract_virtual_node_default
									? vNode
									: get_node_from_tree_default(vNode)),
							isVisibleOnScreenVirtual(vNode)
						)
					}
					var isVisibleOnScreenVirtual = memoize_default(function isVisibleOnScreenMemoized(
						vNode,
						isAncestor,
					) {
						return vNode.actualNode && 'area' === vNode.props.nodeName
							? !areaHidden(vNode, isVisibleOnScreenVirtual)
							: !_isHiddenForEveryone(vNode, { skipAncestors: !0, isAncestor }) &&
									(!vNode.actualNode ||
										!hiddenMethods2.some(function (method) {
											return method(vNode, { isAncestor })
										})) &&
									(!vNode.parent || isVisibleOnScreenVirtual(vNode.parent, !0))
					})
					function _getBoundingRect(rectA, rectB) {
						var top = Math.min(rectA.top, rectB.top),
							right = Math.max(rectA.right, rectB.right),
							bottom = Math.max(rectA.bottom, rectB.bottom),
							left = Math.min(rectA.left, rectB.left)
						return new window.DOMRect(left, top, right - left, bottom - top)
					}
					function _isPointInRect(_ref13, _ref14) {
						var x = _ref13.x,
							y = _ref13.y,
							top = _ref14.top,
							right = _ref14.right,
							bottom = _ref14.bottom,
							left = _ref14.left
						return y >= top && x <= right && y <= bottom && x >= left
					}
					function _createGrid() {
						var root =
								arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body,
							rootGrid = arguments.length > 1 ? arguments[1] : void 0,
							parentVNode = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
						if (cache_default.get('gridCreated') && !parentVNode) return constants_default.gridSize
						if ((cache_default.set('gridCreated', !0), !parentVNode)) {
							var _rootGrid,
								vNode = get_node_from_tree_default(document.documentElement)
							if (
								(vNode || (vNode = new virtual_node_default(document.documentElement)),
								(vNode._stackingOrder = [0]),
								(null !== (_rootGrid = rootGrid) && void 0 !== _rootGrid) ||
									(rootGrid = new Grid()),
								addNodeToGrid(rootGrid, vNode),
								_getScroll(vNode.actualNode))
							) {
								var subGrid = new Grid(vNode)
								vNode._subGrid = subGrid
							}
						}
						for (
							var treeWalker = document.createTreeWalker(
									root,
									window.NodeFilter.SHOW_ELEMENT,
									null,
									!1,
								),
								node = parentVNode ? treeWalker.nextNode() : treeWalker.currentNode;
							node;

						) {
							var _vNode = get_node_from_tree_default(node)
							node.parentElement
								? (parentVNode = get_node_from_tree_default(node.parentElement))
								: node.parentNode &&
								  get_node_from_tree_default(node.parentNode) &&
								  (parentVNode = get_node_from_tree_default(node.parentNode)),
								_vNode || (_vNode = new axe.VirtualNode(node, parentVNode)),
								(_vNode._stackingOrder = getStackingOrder(_vNode, parentVNode))
							var scrollRegionParent = findScrollRegionParent(_vNode, parentVNode),
								grid = scrollRegionParent ? scrollRegionParent._subGrid : rootGrid
							if (_getScroll(_vNode.actualNode)) {
								var _subGrid = new Grid(_vNode)
								_vNode._subGrid = _subGrid
							}
							var rect = _vNode.boundingClientRect
							0 !== rect.width &&
								0 !== rect.height &&
								_isVisibleOnScreen(node) &&
								addNodeToGrid(grid, _vNode),
								is_shadow_root_default(node) && _createGrid(node.shadowRoot, grid, _vNode),
								(node = treeWalker.nextNode())
						}
						return constants_default.gridSize
					}
					function getStackingOrder(vNode, parentVNode) {
						var stackingOrder = parentVNode._stackingOrder.slice(),
							zIndex = vNode.getComputedStylePropertyValue('z-index'),
							positioned = 'static' !== vNode.getComputedStylePropertyValue('position'),
							floated = 'none' !== vNode.getComputedStylePropertyValue('float')
						if (positioned && !['auto', '0'].includes(zIndex)) {
							for (
								;
								stackingOrder.find(function (value) {
									return value % 1 != 0
								});

							) {
								var index = stackingOrder.findIndex(function (value) {
									return value % 1 != 0
								})
								stackingOrder.splice(index, 1)
							}
							stackingOrder[stackingOrder.length - 1] = parseInt(zIndex)
						}
						return (
							!(function isStackingContext(vNode, parentVNode) {
								var position = vNode.getComputedStylePropertyValue('position'),
									zIndex = vNode.getComputedStylePropertyValue('z-index')
								if ('fixed' === position || 'sticky' === position) return !0
								if ('auto' !== zIndex && 'static' !== position) return !0
								if ('1' !== vNode.getComputedStylePropertyValue('opacity')) return !0
								if (
									'none' !==
									(vNode.getComputedStylePropertyValue('-webkit-transform') ||
										vNode.getComputedStylePropertyValue('-ms-transform') ||
										vNode.getComputedStylePropertyValue('transform') ||
										'none')
								)
									return !0
								var mixBlendMode = vNode.getComputedStylePropertyValue('mix-blend-mode')
								if (mixBlendMode && 'normal' !== mixBlendMode) return !0
								var filter = vNode.getComputedStylePropertyValue('filter')
								if (filter && 'none' !== filter) return !0
								var perspective = vNode.getComputedStylePropertyValue('perspective')
								if (perspective && 'none' !== perspective) return !0
								var clipPath = vNode.getComputedStylePropertyValue('clip-path')
								if (clipPath && 'none' !== clipPath) return !0
								if (
									'none' !==
									(vNode.getComputedStylePropertyValue('-webkit-mask') ||
										vNode.getComputedStylePropertyValue('mask') ||
										'none')
								)
									return !0
								if (
									'none' !==
									(vNode.getComputedStylePropertyValue('-webkit-mask-image') ||
										vNode.getComputedStylePropertyValue('mask-image') ||
										'none')
								)
									return !0
								if (
									'none' !==
									(vNode.getComputedStylePropertyValue('-webkit-mask-border') ||
										vNode.getComputedStylePropertyValue('mask-border') ||
										'none')
								)
									return !0
								if ('isolate' === vNode.getComputedStylePropertyValue('isolation')) return !0
								var willChange = vNode.getComputedStylePropertyValue('will-change')
								if ('transform' === willChange || 'opacity' === willChange) return !0
								if ('touch' === vNode.getComputedStylePropertyValue('-webkit-overflow-scrolling'))
									return !0
								var contain = vNode.getComputedStylePropertyValue('contain')
								if (['layout', 'paint', 'strict', 'content'].includes(contain)) return !0
								if ('auto' !== zIndex && parentVNode) {
									var parentDsiplay = parentVNode.getComputedStylePropertyValue('display')
									if (
										[
											'flex',
											'inline-flex',
											'inline flex',
											'grid',
											'inline-grid',
											'inline grid',
										].includes(parentDsiplay)
									)
										return !0
								}
								return !1
							})(vNode, parentVNode)
								? positioned
									? stackingOrder.push(0.5)
									: floated && stackingOrder.push(0.25)
								: stackingOrder.push(0),
							stackingOrder
						)
					}
					function findScrollRegionParent(vNode, parentVNode) {
						for (var scrollRegionParent = null, checkedNodes = [vNode]; parentVNode; ) {
							if (_getScroll(parentVNode.actualNode)) {
								scrollRegionParent = parentVNode
								break
							}
							if (parentVNode._scrollRegionParent) {
								scrollRegionParent = parentVNode._scrollRegionParent
								break
							}
							checkedNodes.push(parentVNode),
								(parentVNode = get_node_from_tree_default(
									parentVNode.actualNode.parentElement || parentVNode.actualNode.parentNode,
								))
						}
						return (
							checkedNodes.forEach(function (vNode2) {
								return (vNode2._scrollRegionParent = scrollRegionParent)
							}),
							scrollRegionParent
						)
					}
					function addNodeToGrid(grid, vNode) {
						vNode.clientRects.forEach(function (rect) {
							var _vNode$_grid
							;(null !== (_vNode$_grid = vNode._grid) && void 0 !== _vNode$_grid) ||
								(vNode._grid = grid)
							var gridRect = grid.getGridPositionOfRect(rect)
							grid.loopGridPosition(gridRect, function (gridCell) {
								gridCell.includes(vNode) || gridCell.push(vNode)
							})
						})
					}
					var Grid = (function () {
						function Grid() {
							var container = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
							_classCallCheck(this, Grid), (this.container = container), (this.cells = [])
						}
						return (
							_createClass(Grid, [
								{
									key: 'toGridIndex',
									value: function toGridIndex(num) {
										return Math.floor(num / constants_default.gridSize)
									},
								},
								{
									key: 'getCellFromPoint',
									value: function getCellFromPoint(_ref15) {
										var _this$cells,
											_row,
											x = _ref15.x,
											y = _ref15.y
										assert_default(this.boundaries, 'Grid does not have cells added')
										var rowIndex = this.toGridIndex(y),
											colIndex = this.toGridIndex(x)
										assert_default(
											_isPointInRect({ y: rowIndex, x: colIndex }, this.boundaries),
											'Element midpoint exceeds the grid bounds',
										)
										var row =
											null !== (_this$cells = this.cells[rowIndex - this.cells._negativeIndex]) &&
											void 0 !== _this$cells
												? _this$cells
												: []
										return null !== (_row = row[colIndex - row._negativeIndex]) && void 0 !== _row
											? _row
											: []
									},
								},
								{
									key: 'loopGridPosition',
									value: function loopGridPosition(gridPosition, callback) {
										var _gridPosition = gridPosition,
											left = _gridPosition.left,
											right = _gridPosition.right,
											top = _gridPosition.top,
											bottom = _gridPosition.bottom
										this.boundaries &&
											(gridPosition = _getBoundingRect(this.boundaries, gridPosition)),
											(this.boundaries = gridPosition),
											loopNegativeIndexMatrix(this.cells, top, bottom, function (gridRow, row) {
												loopNegativeIndexMatrix(gridRow, left, right, function (gridCell, col) {
													callback(gridCell, { row, col })
												})
											})
									},
								},
								{
									key: 'getGridPositionOfRect',
									value: function getGridPositionOfRect(_ref16) {
										var top = _ref16.top,
											right = _ref16.right,
											bottom = _ref16.bottom,
											left = _ref16.left,
											margin = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
										return (
											(top = this.toGridIndex(top - margin)),
											(right = this.toGridIndex(right + margin - 1)),
											(bottom = this.toGridIndex(bottom + margin - 1)),
											(left = this.toGridIndex(left - margin)),
											new window.DOMRect(left, top, right - left, bottom - top)
										)
									},
								},
							]),
							Grid
						)
					})()
					function loopNegativeIndexMatrix(matrix, start, end, callback) {
						var _matrix$_negativeInde
						if (
							((null !== (_matrix$_negativeInde = matrix._negativeIndex) &&
								void 0 !== _matrix$_negativeInde) ||
								(matrix._negativeIndex = 0),
							start < matrix._negativeIndex)
						) {
							for (var _i5 = 0; _i5 < matrix._negativeIndex - start; _i5++) matrix.splice(0, 0, [])
							matrix._negativeIndex = start
						}
						for (
							var startOffset = start - matrix._negativeIndex,
								endOffset = end - matrix._negativeIndex,
								index = startOffset;
							index <= endOffset;
							index++
						) {
							var _index, _matrix$_index
							;(null !== (_matrix$_index = matrix[(_index = index)]) &&
								void 0 !== _matrix$_index) ||
								(matrix[_index] = []),
								callback(matrix[index], index + matrix._negativeIndex)
						}
					}
					function _findNearbyElms(vNode) {
						var _vNode$_grid2,
							_vNode$_grid2$cells,
							margin = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
						if (
							(_createGrid(),
							null === (_vNode$_grid2 = vNode._grid) ||
								void 0 === _vNode$_grid2 ||
								null === (_vNode$_grid2$cells = _vNode$_grid2.cells) ||
								void 0 === _vNode$_grid2$cells ||
								!_vNode$_grid2$cells.length)
						)
							return []
						var rect = vNode.boundingClientRect,
							grid = vNode._grid,
							selfIsFixed = hasFixedPosition(vNode),
							gridPosition = grid.getGridPositionOfRect(rect, margin),
							neighbors = []
						return (
							grid.loopGridPosition(gridPosition, function (vNeighbors) {
								var _step2,
									_iterator2 = _createForOfIteratorHelper(vNeighbors)
								try {
									for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
										var vNeighbor = _step2.value
										vNeighbor &&
											vNeighbor !== vNode &&
											!neighbors.includes(vNeighbor) &&
											selfIsFixed === hasFixedPosition(vNeighbor) &&
											neighbors.push(vNeighbor)
									}
								} catch (err) {
									_iterator2.e(err)
								} finally {
									_iterator2.f()
								}
							}),
							neighbors
						)
					}
					var hasFixedPosition = memoize_default(function (vNode) {
							return (
								!!vNode &&
								('fixed' === vNode.getComputedStylePropertyValue('position') ||
									hasFixedPosition(vNode.parent))
							)
						}),
						angularSkipLinkRegex = /^\/\#/,
						angularRouterLinkRegex = /^#[!/]/
					function _isCurrentPageLink(anchor) {
						var _window$location,
							href = anchor.getAttribute('href')
						if (!href || '#' === href) return !1
						if (angularSkipLinkRegex.test(href)) return !0
						var hash = anchor.hash,
							protocol = anchor.protocol,
							hostname = anchor.hostname,
							port = anchor.port,
							pathname = anchor.pathname
						if (angularRouterLinkRegex.test(hash)) return !1
						if ('#' === href.charAt(0)) return !0
						if (
							'string' !=
								typeof (null === (_window$location = window.location) || void 0 === _window$location
									? void 0
									: _window$location.origin) ||
							-1 === window.location.origin.indexOf('://')
						)
							return null
						var url,
							currentPageUrl = window.location.origin + window.location.pathname
						return (
							(url = hostname
								? ''
										.concat(protocol, '//')
										.concat(hostname)
										.concat(port ? ':'.concat(port) : '')
								: window.location.origin),
							(url += pathname
								? ('/' !== pathname[0] ? '/' : '') + pathname
								: window.location.pathname) === currentPageUrl
						)
					}
					var get_element_by_reference_default = function getElementByReference(node, attr) {
						var fragment = node.getAttribute(attr)
						if (!fragment) return null
						if ('href' === attr && !_isCurrentPageLink(node)) return null
						;-1 !== fragment.indexOf('#') &&
							(fragment = decodeURIComponent(fragment.substr(fragment.indexOf('#') + 1)))
						var candidate = document.getElementById(fragment)
						return (
							candidate ||
							((candidate = document.getElementsByName(fragment)).length ? candidate[0] : null)
						)
					}
					function _visuallySort(a, b) {
						_createGrid()
						for (
							var length = Math.max(a._stackingOrder.length, b._stackingOrder.length), _i6 = 0;
							_i6 < length;
							_i6++
						) {
							if (void 0 === b._stackingOrder[_i6]) return -1
							if (void 0 === a._stackingOrder[_i6]) return 1
							if (b._stackingOrder[_i6] > a._stackingOrder[_i6]) return 1
							if (b._stackingOrder[_i6] < a._stackingOrder[_i6]) return -1
						}
						var aNode = a.actualNode,
							bNode = b.actualNode
						if (aNode.getRootNode && aNode.getRootNode() !== bNode.getRootNode()) {
							for (var boundaries = []; aNode; )
								boundaries.push({ root: aNode.getRootNode(), node: aNode }),
									(aNode = aNode.getRootNode().host)
							for (
								;
								bNode &&
								!boundaries.find(function (boundary) {
									return boundary.root === bNode.getRootNode()
								});

							)
								bNode = bNode.getRootNode().host
							if (
								(aNode = boundaries.find(function (boundary) {
									return boundary.root === bNode.getRootNode()
								}).node) === bNode
							)
								return a.actualNode.getRootNode() !== aNode.getRootNode() ? -1 : 1
						}
						var _window$Node = window.Node,
							DOCUMENT_POSITION_FOLLOWING = _window$Node.DOCUMENT_POSITION_FOLLOWING,
							DOCUMENT_POSITION_CONTAINS = _window$Node.DOCUMENT_POSITION_CONTAINS,
							DOCUMENT_POSITION_CONTAINED_BY = _window$Node.DOCUMENT_POSITION_CONTAINED_BY,
							docPosition = aNode.compareDocumentPosition(bNode),
							DOMOrder = docPosition & DOCUMENT_POSITION_FOLLOWING ? 1 : -1,
							isDescendant =
								docPosition & DOCUMENT_POSITION_CONTAINS ||
								docPosition & DOCUMENT_POSITION_CONTAINED_BY,
							aPosition = getPositionOrder(a),
							bPosition = getPositionOrder(b)
						return aPosition === bPosition || isDescendant ? DOMOrder : bPosition - aPosition
					}
					function getPositionOrder(vNode) {
						return -1 !== vNode.getComputedStylePropertyValue('display').indexOf('inline')
							? 2
							: isFloated(vNode)
							? 1
							: 0
					}
					function isFloated(vNode) {
						if (!vNode) return !1
						if (void 0 !== vNode._isFloated) return vNode._isFloated
						if ('none' !== vNode.getComputedStylePropertyValue('float'))
							return (vNode._isFloated = !0), !0
						var floated = isFloated(vNode.parent)
						return (vNode._isFloated = floated), floated
					}
					var math_exports = {}
					function _getOffset(vNodeA, vNodeB) {
						var rectA = vNodeA.boundingClientRect,
							rectB = vNodeB.boundingClientRect,
							pointA = (function getFarthestPoint(rectA, rectB) {
								var farthestPoint = {}
								return (
									[
										['x', 'left', 'right', 'width'],
										['y', 'top', 'bottom', 'height'],
									].forEach(function (_ref17) {
										var _ref18 = _slicedToArray(_ref17, 4),
											axis = _ref18[0],
											start = _ref18[1],
											end = _ref18[2],
											diameter = _ref18[3]
										if (rectB[start] < rectA[start] && rectB[end] > rectA[end])
											farthestPoint[axis] = rectA[start] + rectA[diameter] / 2
										else {
											var centerB = rectB[start] + rectB[diameter] / 2,
												startDistance = Math.abs(centerB - rectA[start]),
												endDistance = Math.abs(centerB - rectA[end])
											farthestPoint[axis] = startDistance >= endDistance ? rectA[start] : rectA[end]
										}
									}),
									farthestPoint
								)
							})(rectA, rectB)
						return (function pointDistance(pointA, pointB) {
							var xDistance = Math.abs(pointA.x - pointB.x),
								yDistance = Math.abs(pointA.y - pointB.y)
							if (!xDistance || !yDistance) return xDistance || yDistance
							return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
						})(
							pointA,
							(function getClosestPoint(_ref19, ownRect, adjacentRect) {
								var x = _ref19.x,
									y = _ref19.y
								if (
									(function pointInRect(_ref20, rect) {
										var x = _ref20.x,
											y = _ref20.y
										return y >= rect.top && x <= rect.right && y <= rect.bottom && x >= rect.left
									})({ x, y }, adjacentRect)
								) {
									var closestPoint = (function getCornerInAdjacentRect(
										_ref21,
										ownRect,
										adjacentRect,
									) {
										var closestX,
											closestY,
											x = _ref21.x,
											y = _ref21.y
										x === ownRect.left && ownRect.right < adjacentRect.right
											? (closestX = ownRect.right)
											: x === ownRect.right &&
											  ownRect.left > adjacentRect.left &&
											  (closestX = ownRect.left)
										y === ownRect.top && ownRect.bottom < adjacentRect.bottom
											? (closestY = ownRect.bottom)
											: y === ownRect.bottom &&
											  ownRect.top > adjacentRect.top &&
											  (closestY = ownRect.top)
										if (!closestX && !closestY) return null
										if (!closestY) return { x: closestX, y }
										if (!closestX) return { x, y: closestY }
										return Math.abs(x - closestX) < Math.abs(y - closestY)
											? { x: closestX, y }
											: { x, y: closestY }
									})({ x, y }, ownRect, adjacentRect)
									if (null !== closestPoint) return closestPoint
									adjacentRect = ownRect
								}
								var _adjacentRect = adjacentRect,
									top = _adjacentRect.top,
									right = _adjacentRect.right,
									bottom = _adjacentRect.bottom,
									left = _adjacentRect.left,
									xAligned = x >= left && x <= right,
									yAligned = y >= top && y <= bottom,
									closestX = Math.abs(left - x) < Math.abs(right - x) ? left : right,
									closestY = Math.abs(top - y) < Math.abs(bottom - y) ? top : bottom
								if (!xAligned && yAligned) return { x: closestX, y }
								if (xAligned && !yAligned) return { x, y: closestY }
								if (!xAligned && !yAligned) return { x: closestX, y: closestY }
								return Math.abs(x - closestX) < Math.abs(y - closestY)
									? { x: closestX, y }
									: { x, y: closestY }
							})(pointA, rectA, rectB),
						)
					}
					function _getRectCenter(_ref22) {
						var left = _ref22.left,
							top = _ref22.top,
							width = _ref22.width,
							height = _ref22.height
						return new window.DOMPoint(left + width / 2, top + height / 2)
					}
					function _hasVisualOverlap(vNodeA, vNodeB) {
						var rectA = vNodeA.boundingClientRect,
							rectB = vNodeB.boundingClientRect
						return (
							!(
								rectA.left >= rectB.right ||
								rectA.right <= rectB.left ||
								rectA.top >= rectB.bottom ||
								rectA.bottom <= rectB.top
							) && _visuallySort(vNodeA, vNodeB) > 0
						)
					}
					function _splitRects(outerRect, overlapRects) {
						var _step3,
							uniqueRects = [outerRect],
							_iterator3 = _createForOfIteratorHelper(overlapRects)
						try {
							var _loop3 = function _loop3() {
								var overlapRect = _step3.value
								uniqueRects = uniqueRects.reduce(function (uniqueRects2, inputRect) {
									return uniqueRects2.concat(
										(function splitRect(inputRect, clipRect) {
											var top = inputRect.top,
												left = inputRect.left,
												bottom = inputRect.bottom,
												right = inputRect.right,
												yAligned = top < clipRect.bottom && bottom > clipRect.top,
												xAligned = left < clipRect.right && right > clipRect.left,
												rects = []
											between(clipRect.top, top, bottom) &&
												xAligned &&
												rects.push({ top, left, bottom: clipRect.top, right })
											between(clipRect.right, left, right) &&
												yAligned &&
												rects.push({ top, left: clipRect.right, bottom, right })
											between(clipRect.bottom, top, bottom) &&
												xAligned &&
												rects.push({ top: clipRect.bottom, right, bottom, left })
											between(clipRect.left, left, right) &&
												yAligned &&
												rects.push({ top, left, bottom, right: clipRect.left })
											0 === rects.length && rects.push(inputRect)
											return rects.map(computeRect)
										})(inputRect, overlapRect),
									)
								}, [])
							}
							for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) _loop3()
						} catch (err) {
							_iterator3.e(err)
						} finally {
							_iterator3.f()
						}
						return uniqueRects
					}
					__export(math_exports, {
						getBoundingRect: function getBoundingRect() {
							return _getBoundingRect
						},
						getOffset: function getOffset() {
							return _getOffset
						},
						getRectCenter: function getRectCenter() {
							return _getRectCenter
						},
						hasVisualOverlap: function hasVisualOverlap() {
							return _hasVisualOverlap
						},
						isPointInRect: function isPointInRect() {
							return _isPointInRect
						},
						rectsOverlap: function rectsOverlap() {
							return _rectsOverlap
						},
						splitRects: function splitRects() {
							return _splitRects
						},
					})
					var between = function between(num, min, max) {
						return num > min && num < max
					}
					function computeRect(baseRect) {
						return _extends({}, baseRect, {
							x: baseRect.left,
							y: baseRect.top,
							height: baseRect.bottom - baseRect.top,
							width: baseRect.right - baseRect.left,
						})
					}
					function getRectStack(grid, rect) {
						var recursed = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
							center = _getRectCenter(rect),
							gridCell = grid.getCellFromPoint(center) || [],
							floorX = Math.floor(center.x),
							floorY = Math.floor(center.y),
							stack = gridCell.filter(function (gridCellNode) {
								return gridCellNode.clientRects.some(function (clientRect) {
									var rectX = clientRect.left,
										rectY = clientRect.top
									return (
										floorX < Math.floor(rectX + clientRect.width) &&
										floorX >= Math.floor(rectX) &&
										floorY < Math.floor(rectY + clientRect.height) &&
										floorY >= Math.floor(rectY)
									)
								})
							}),
							gridContainer = grid.container
						return (
							gridContainer &&
								(stack = getRectStack(
									gridContainer._grid,
									gridContainer.boundingClientRect,
									!0,
								).concat(stack)),
							recursed ||
								(stack = stack
									.sort(_visuallySort)
									.map(function (vNode) {
										return vNode.actualNode
									})
									.concat(document.documentElement)
									.filter(function (node, index, array) {
										return array.indexOf(node) === index
									})),
							stack
						)
					}
					var get_element_stack_default = function getElementStack(node) {
						_createGrid()
						var vNode = get_node_from_tree_default(node),
							grid = vNode._grid
						return grid ? getRectStack(grid, vNode.boundingClientRect) : []
					}
					var get_tabbable_elements_default = function getTabbableElements(virtualNode) {
						return query_selector_all_default(virtualNode, '*').filter(function (vNode) {
							var isFocusable2 = vNode.isFocusable,
								tabIndex = vNode.actualNode.getAttribute('tabindex')
							return (tabIndex =
								tabIndex && !isNaN(parseInt(tabIndex, 10)) ? parseInt(tabIndex) : null)
								? isFocusable2 && tabIndex >= 0
								: isFocusable2
						})
					}
					var sanitize_default = function sanitize(str) {
						return str
							? str
									.replace(/\r\n/g, '\n')
									.replace(/\u00A0/g, ' ')
									.replace(/[\s]{2,}/g, ' ')
									.trim()
							: ''
					}
					var get_text_element_stack_default = function getTextElementStack(node) {
							_createGrid()
							var vNode = get_node_from_tree_default(node),
								grid = vNode._grid
							if (!grid) return []
							var nodeRect = vNode.boundingClientRect,
								clientRects = []
							return (
								Array.from(node.childNodes).forEach(function (elm) {
									if (3 === elm.nodeType && '' !== sanitize_default(elm.textContent)) {
										var range = document.createRange()
										range.selectNodeContents(elm)
										var rects = Array.from(range.getClientRects()),
											outsideRectBounds = rects.some(function (rect) {
												return !_isPointInRect(_getRectCenter(rect), nodeRect)
											})
										if (outsideRectBounds) return
										for (var _i7 = 0, _rects = rects; _i7 < _rects.length; _i7++) {
											var rect = _rects[_i7]
											rect.width >= 1 && rect.height >= 1 && clientRects.push(rect)
										}
									}
								}),
								clientRects.length
									? clientRects.map(function (rect) {
											return getRectStack(grid, rect)
									  })
									: [get_element_stack_default(node)]
							)
						},
						visualRoles = [
							'checkbox',
							'img',
							'meter',
							'progressbar',
							'scrollbar',
							'radio',
							'slider',
							'spinbutton',
							'textbox',
						]
					var is_visual_content_default = function isVisualContent(el) {
						var vNode =
								el instanceof abstract_virtual_node_default ? el : get_node_from_tree_default(el),
							role = axe.commons.aria.getExplicitRole(vNode)
						if (role) return -1 !== visualRoles.indexOf(role)
						switch (vNode.props.nodeName) {
							case 'img':
							case 'iframe':
							case 'object':
							case 'video':
							case 'audio':
							case 'canvas':
							case 'svg':
							case 'math':
							case 'button':
							case 'select':
							case 'textarea':
							case 'keygen':
							case 'progress':
							case 'meter':
								return !0
							case 'input':
								return 'hidden' !== vNode.props.type
							default:
								return !1
						}
					}
					var idrefs_default = function idrefs(node, attr) {
						node = node.actualNode || node
						try {
							var doc = get_root_node_default2(node),
								result = [],
								attrValue = node.getAttribute(attr)
							if (attrValue) {
								attrValue = token_list_default(attrValue)
								for (var index = 0; index < attrValue.length; index++)
									result.push(doc.getElementById(attrValue[index]))
							}
							return result
						} catch (e) {
							throw new TypeError('Cannot resolve id references for non-DOM nodes')
						}
					}
					function _isVisibleToScreenReaders(vNode) {
						return (
							(vNode =
								vNode instanceof abstract_virtual_node_default
									? vNode
									: get_node_from_tree_default(vNode)),
							isVisibleToScreenReadersVirtual(vNode)
						)
					}
					var isVisibleToScreenReadersVirtual = memoize_default(
						function isVisibleToScreenReadersMemoized(vNode, isAncestor) {
							return (
								!ariaHidden(vNode) &&
								(vNode.actualNode && 'area' === vNode.props.nodeName
									? !areaHidden(vNode, isVisibleToScreenReadersVirtual)
									: !_isHiddenForEveryone(vNode, { skipAncestors: !0, isAncestor }) &&
									  (!vNode.parent || isVisibleToScreenReadersVirtual(vNode.parent, !0)))
							)
						},
					)
					var visible_virtual_default = function visibleVirtual(
						element,
						screenReader,
						noRecursing,
					) {
						var vNode =
								element instanceof abstract_virtual_node_default
									? element
									: get_node_from_tree_default(element),
							visibleMethod = screenReader ? _isVisibleToScreenReaders : _isVisibleOnScreen,
							visible2 = !element.actualNode || (element.actualNode && visibleMethod(element)),
							result = vNode.children
								.map(function (child) {
									var _child$props = child.props,
										nodeType = _child$props.nodeType,
										nodeValue = _child$props.nodeValue
									if (3 === nodeType) {
										if (nodeValue && visible2) return nodeValue
									} else if (!noRecursing) return visibleVirtual(child, screenReader)
								})
								.join('')
						return sanitize_default(result)
					}
					var label_virtual_default = function labelVirtual(virtualNode) {
							var candidate
							return (virtualNode.attr('aria-labelledby') &&
								(candidate = idrefs_default(virtualNode.actualNode, 'aria-labelledby')
									.map(function (thing) {
										var vNode = get_node_from_tree_default(thing)
										return vNode ? visible_virtual_default(vNode) : ''
									})
									.join(' ')
									.trim())) ||
								((candidate = virtualNode.attr('aria-label')) &&
									(candidate = sanitize_default(candidate)))
								? candidate
								: null
						},
						hiddenTextElms = [
							'head',
							'title',
							'template',
							'script',
							'style',
							'iframe',
							'object',
							'video',
							'audio',
							'noscript',
						]
					function hasChildTextNodes(elm) {
						return (
							!hiddenTextElms.includes(elm.props.nodeName) &&
							elm.children.some(function (_ref23) {
								var props = _ref23.props
								return 3 === props.nodeType && props.nodeValue.trim()
							})
						)
					}
					var has_content_virtual_default = function hasContentVirtual(
						elm,
						noRecursion,
						ignoreAria,
					) {
						return (
							hasChildTextNodes(elm) ||
							is_visual_content_default(elm.actualNode) ||
							(!ignoreAria && !!label_virtual_default(elm)) ||
							(!noRecursion &&
								elm.children.some(function (child) {
									return 1 === child.actualNode.nodeType && hasContentVirtual(child)
								}))
						)
					}
					var has_content_default = function hasContent(elm, noRecursion, ignoreAria) {
						return (
							(elm = get_node_from_tree_default(elm)),
							has_content_virtual_default(elm, noRecursion, ignoreAria)
						)
					}
					function _hasLangText(virtualNode) {
						return (
							!(void 0 !== virtualNode.children && !hasChildTextNodes(virtualNode)) ||
							(1 === virtualNode.props.nodeType && is_visual_content_default(virtualNode)
								? !!axe.commons.text.accessibleTextVirtual(virtualNode)
								: virtualNode.children.some(function (child) {
										return (
											!child.attr('lang') && _hasLangText(child) && !_isHiddenForEveryone(child)
										)
								  }))
						)
					}
					var allowedDisabledNodeNames = [
						'button',
						'command',
						'fieldset',
						'keygen',
						'optgroup',
						'option',
						'select',
						'textarea',
						'input',
					]
					var focus_disabled_default = function focusDisabled(el) {
						var vNode =
							el instanceof abstract_virtual_node_default ? el : get_node_from_tree_default(el)
						if (
							(function isDisabledAttrAllowed(nodeName2) {
								return allowedDisabledNodeNames.includes(nodeName2)
							})(vNode.props.nodeName) &&
							vNode.hasAttr('disabled')
						)
							return !0
						for (
							var parentNode = vNode.parent, ancestors = [], fieldsetDisabled = !1;
							parentNode &&
							parentNode.shadowId === vNode.shadowId &&
							!fieldsetDisabled &&
							(ancestors.push(parentNode), 'legend' !== parentNode.props.nodeName);

						) {
							if (void 0 !== parentNode._inDisabledFieldset) {
								fieldsetDisabled = parentNode._inDisabledFieldset
								break
							}
							'fieldset' === parentNode.props.nodeName &&
								parentNode.hasAttr('disabled') &&
								(fieldsetDisabled = !0),
								(parentNode = parentNode.parent)
						}
						return (
							ancestors.forEach(function (ancestor) {
								return (ancestor._inDisabledFieldset = fieldsetDisabled)
							}),
							!!fieldsetDisabled ||
								('area' !== vNode.props.nodeName &&
									!!vNode.actualNode &&
									_isHiddenForEveryone(vNode))
						)
					}
					var is_natively_focusable_default = function isNativelyFocusable(el) {
						var vNode =
							el instanceof abstract_virtual_node_default ? el : get_node_from_tree_default(el)
						if (!vNode || focus_disabled_default(vNode)) return !1
						switch (vNode.props.nodeName) {
							case 'a':
							case 'area':
								if (vNode.hasAttr('href')) return !0
								break
							case 'input':
								return 'hidden' !== vNode.props.type
							case 'textarea':
							case 'select':
							case 'summary':
							case 'button':
								return !0
							case 'details':
								return !query_selector_all_default(vNode, 'summary').length
						}
						return !1
					}
					function _isFocusable(el) {
						var vNode =
							el instanceof abstract_virtual_node_default ? el : get_node_from_tree_default(el)
						if (1 !== vNode.props.nodeType) return !1
						if (focus_disabled_default(vNode)) return !1
						if (is_natively_focusable_default(vNode)) return !0
						var tabindex = vNode.attr('tabindex')
						return !(!tabindex || isNaN(parseInt(tabindex, 10)))
					}
					var inserted_into_focus_order_default = function insertedIntoFocusOrder(el) {
						return (
							parseInt(el.getAttribute('tabindex'), 10) > -1 &&
							_isFocusable(el) &&
							!is_natively_focusable_default(el)
						)
					}
					function isHiddenWithCSS(node, descendentVisibilityValue) {
						var vNode =
								node instanceof abstract_virtual_node_default
									? node
									: get_node_from_tree_default(node),
							el = node instanceof window.Node ? node : null == vNode ? void 0 : vNode.actualNode
						return vNode
							? (void 0 === vNode._isHiddenWithCSS &&
									(vNode._isHiddenWithCSS = _isHiddenWithCSS(el, descendentVisibilityValue)),
							  vNode._isHiddenWithCSS)
							: _isHiddenWithCSS(el, descendentVisibilityValue)
					}
					function _isHiddenWithCSS(el, descendentVisibilityValue) {
						if (9 === el.nodeType) return !1
						if (
							(11 === el.nodeType && (el = el.host),
							['STYLE', 'SCRIPT'].includes(el.nodeName.toUpperCase()))
						)
							return !1
						var style = window.getComputedStyle(el, null)
						if (!style) throw new Error('Style does not exist for the given element.')
						if ('none' === style.getPropertyValue('display')) return !0
						var HIDDEN_VISIBILITY_VALUES = ['hidden', 'collapse'],
							visibilityValue = style.getPropertyValue('visibility')
						if (HIDDEN_VISIBILITY_VALUES.includes(visibilityValue) && !descendentVisibilityValue)
							return !0
						if (
							HIDDEN_VISIBILITY_VALUES.includes(visibilityValue) &&
							descendentVisibilityValue &&
							HIDDEN_VISIBILITY_VALUES.includes(descendentVisibilityValue)
						)
							return !0
						var parent = get_composed_parent_default(el)
						return (
							!(!parent || HIDDEN_VISIBILITY_VALUES.includes(visibilityValue)) &&
							isHiddenWithCSS(parent, visibilityValue)
						)
					}
					var is_hidden_with_css_default = isHiddenWithCSS
					var is_html5_default = function isHTML5(doc) {
						var node = doc.doctype
						return null !== node && 'html' === node.name && !node.publicId && !node.systemId
					}
					function _isInTabOrder(el) {
						var vNode =
							el instanceof abstract_virtual_node_default ? el : get_node_from_tree_default(el)
						return (
							1 === vNode.props.nodeType &&
							!(parseInt(vNode.attr('tabindex', 10)) <= -1) &&
							_isFocusable(vNode)
						)
					}
					var aria_attrs_default = {
							'aria-activedescendant': { type: 'idref', allowEmpty: !0 },
							'aria-atomic': { type: 'boolean', global: !0 },
							'aria-autocomplete': { type: 'nmtoken', values: ['inline', 'list', 'both', 'none'] },
							'aria-busy': { type: 'boolean', global: !0 },
							'aria-checked': { type: 'nmtoken', values: ['false', 'mixed', 'true', 'undefined'] },
							'aria-colcount': { type: 'int', minValue: -1 },
							'aria-colindex': { type: 'int', minValue: 1 },
							'aria-colspan': { type: 'int', minValue: 1 },
							'aria-controls': { type: 'idrefs', allowEmpty: !0, global: !0 },
							'aria-current': {
								type: 'nmtoken',
								allowEmpty: !0,
								values: ['page', 'step', 'location', 'date', 'time', 'true', 'false'],
								global: !0,
							},
							'aria-describedby': { type: 'idrefs', allowEmpty: !0, global: !0 },
							'aria-details': { type: 'idref', allowEmpty: !0, global: !0 },
							'aria-disabled': { type: 'boolean', global: !0 },
							'aria-dropeffect': {
								type: 'nmtokens',
								values: ['copy', 'execute', 'link', 'move', 'none', 'popup'],
								global: !0,
							},
							'aria-errormessage': { type: 'idref', allowEmpty: !0, global: !0 },
							'aria-expanded': { type: 'nmtoken', values: ['true', 'false', 'undefined'] },
							'aria-flowto': { type: 'idrefs', allowEmpty: !0, global: !0 },
							'aria-grabbed': {
								type: 'nmtoken',
								values: ['true', 'false', 'undefined'],
								global: !0,
							},
							'aria-haspopup': {
								type: 'nmtoken',
								allowEmpty: !0,
								values: ['true', 'false', 'menu', 'listbox', 'tree', 'grid', 'dialog'],
								global: !0,
							},
							'aria-hidden': {
								type: 'nmtoken',
								values: ['true', 'false', 'undefined'],
								global: !0,
							},
							'aria-invalid': {
								type: 'nmtoken',
								values: ['grammar', 'false', 'spelling', 'true'],
								global: !0,
							},
							'aria-keyshortcuts': { type: 'string', allowEmpty: !0, global: !0 },
							'aria-label': { type: 'string', allowEmpty: !0, global: !0 },
							'aria-labelledby': { type: 'idrefs', allowEmpty: !0, global: !0 },
							'aria-level': { type: 'int', minValue: 1 },
							'aria-live': { type: 'nmtoken', values: ['assertive', 'off', 'polite'], global: !0 },
							'aria-modal': { type: 'boolean' },
							'aria-multiline': { type: 'boolean' },
							'aria-multiselectable': { type: 'boolean' },
							'aria-orientation': {
								type: 'nmtoken',
								values: ['horizontal', 'undefined', 'vertical'],
							},
							'aria-owns': { type: 'idrefs', allowEmpty: !0, global: !0 },
							'aria-placeholder': { type: 'string', allowEmpty: !0 },
							'aria-posinset': { type: 'int', minValue: 1 },
							'aria-pressed': { type: 'nmtoken', values: ['false', 'mixed', 'true', 'undefined'] },
							'aria-readonly': { type: 'boolean' },
							'aria-relevant': {
								type: 'nmtokens',
								values: ['additions', 'all', 'removals', 'text'],
								global: !0,
							},
							'aria-required': { type: 'boolean' },
							'aria-roledescription': { type: 'string', allowEmpty: !0, global: !0 },
							'aria-rowcount': { type: 'int', minValue: -1 },
							'aria-rowindex': { type: 'int', minValue: 1 },
							'aria-rowspan': { type: 'int', minValue: 0 },
							'aria-selected': { type: 'nmtoken', values: ['false', 'true', 'undefined'] },
							'aria-setsize': { type: 'int', minValue: -1 },
							'aria-sort': {
								type: 'nmtoken',
								values: ['ascending', 'descending', 'none', 'other'],
							},
							'aria-valuemax': { type: 'decimal' },
							'aria-valuemin': { type: 'decimal' },
							'aria-valuenow': { type: 'decimal' },
							'aria-valuetext': { type: 'string' },
						},
						aria_roles_default = {
							alert: {
								type: 'widget',
								allowedAttrs: ['aria-expanded'],
								superclassRole: ['section'],
							},
							alertdialog: {
								type: 'widget',
								allowedAttrs: ['aria-expanded', 'aria-modal'],
								superclassRole: ['alert', 'dialog'],
								accessibleNameRequired: !0,
							},
							application: {
								type: 'landmark',
								allowedAttrs: ['aria-activedescendant', 'aria-expanded'],
								superclassRole: ['structure'],
								accessibleNameRequired: !0,
							},
							article: {
								type: 'structure',
								allowedAttrs: ['aria-posinset', 'aria-setsize', 'aria-expanded'],
								superclassRole: ['document'],
							},
							banner: {
								type: 'landmark',
								allowedAttrs: ['aria-expanded'],
								superclassRole: ['landmark'],
							},
							blockquote: { type: 'structure', superclassRole: ['section'] },
							button: {
								type: 'widget',
								allowedAttrs: ['aria-expanded', 'aria-pressed'],
								superclassRole: ['command'],
								accessibleNameRequired: !0,
								nameFromContent: !0,
								childrenPresentational: !0,
							},
							caption: {
								type: 'structure',
								requiredContext: ['figure', 'table', 'grid', 'treegrid'],
								superclassRole: ['section'],
								prohibitedAttrs: ['aria-label', 'aria-labelledby'],
							},
							cell: {
								type: 'structure',
								requiredContext: ['row'],
								allowedAttrs: [
									'aria-colindex',
									'aria-colspan',
									'aria-rowindex',
									'aria-rowspan',
									'aria-expanded',
								],
								superclassRole: ['section'],
								nameFromContent: !0,
							},
							checkbox: {
								type: 'widget',
								allowedAttrs: ['aria-checked', 'aria-readonly', 'aria-required'],
								superclassRole: ['input'],
								accessibleNameRequired: !0,
								nameFromContent: !0,
								childrenPresentational: !0,
							},
							code: {
								type: 'structure',
								superclassRole: ['section'],
								prohibitedAttrs: ['aria-label', 'aria-labelledby'],
							},
							columnheader: {
								type: 'structure',
								requiredContext: ['row'],
								allowedAttrs: [
									'aria-sort',
									'aria-colindex',
									'aria-colspan',
									'aria-expanded',
									'aria-readonly',
									'aria-required',
									'aria-rowindex',
									'aria-rowspan',
									'aria-selected',
								],
								superclassRole: ['cell', 'gridcell', 'sectionhead'],
								accessibleNameRequired: !1,
								nameFromContent: !0,
							},
							combobox: {
								type: 'widget',
								requiredAttrs: ['aria-expanded', 'aria-controls'],
								allowedAttrs: [
									'aria-owns',
									'aria-autocomplete',
									'aria-readonly',
									'aria-required',
									'aria-activedescendant',
									'aria-orientation',
								],
								superclassRole: ['select'],
								accessibleNameRequired: !0,
							},
							command: { type: 'abstract', superclassRole: ['widget'] },
							complementary: {
								type: 'landmark',
								allowedAttrs: ['aria-expanded'],
								superclassRole: ['landmark'],
							},
							composite: { type: 'abstract', superclassRole: ['widget'] },
							contentinfo: {
								type: 'landmark',
								allowedAttrs: ['aria-expanded'],
								superclassRole: ['landmark'],
							},
							comment: {
								type: 'structure',
								allowedAttrs: ['aria-level', 'aria-posinset', 'aria-setsize'],
								superclassRole: ['article'],
							},
							definition: {
								type: 'structure',
								allowedAttrs: ['aria-expanded'],
								superclassRole: ['section'],
							},
							deletion: {
								type: 'structure',
								superclassRole: ['section'],
								prohibitedAttrs: ['aria-label', 'aria-labelledby'],
							},
							dialog: {
								type: 'widget',
								allowedAttrs: ['aria-expanded', 'aria-modal'],
								superclassRole: ['window'],
								accessibleNameRequired: !0,
							},
							directory: {
								type: 'structure',
								allowedAttrs: ['aria-expanded'],
								superclassRole: ['list'],
								nameFromContent: !0,
							},
							document: {
								type: 'structure',
								allowedAttrs: ['aria-expanded'],
								superclassRole: ['structure'],
							},
							emphasis: {
								type: 'structure',
								superclassRole: ['section'],
								prohibitedAttrs: ['aria-label', 'aria-labelledby'],
							},
							feed: {
								type: 'structure',
								requiredOwned: ['article'],
								allowedAttrs: ['aria-expanded'],
								superclassRole: ['list'],
							},
							figure: {
								type: 'structure',
								allowedAttrs: ['aria-expanded'],
								superclassRole: ['section'],
								nameFromContent: !0,
							},
							form: {
								type: 'landmark',
								allowedAttrs: ['aria-expanded'],
								superclassRole: ['landmark'],
							},
							grid: {
								type: 'composite',
								requiredOwned: ['rowgroup', 'row'],
								allowedAttrs: [
									'aria-level',
									'aria-multiselectable',
									'aria-readonly',
									'aria-activedescendant',
									'aria-colcount',
									'aria-expanded',
									'aria-rowcount',
								],
								superclassRole: ['composite', 'table'],
								accessibleNameRequired: !1,
							},
							gridcell: {
								type: 'widget',
								requiredContext: ['row'],
								allowedAttrs: [
									'aria-readonly',
									'aria-required',
									'aria-selected',
									'aria-colindex',
									'aria-colspan',
									'aria-expanded',
									'aria-rowindex',
									'aria-rowspan',
								],
								superclassRole: ['cell', 'widget'],
								nameFromContent: !0,
							},
							group: {
								type: 'structure',
								allowedAttrs: ['aria-activedescendant', 'aria-expanded'],
								superclassRole: ['section'],
							},
							heading: {
								type: 'structure',
								requiredAttrs: ['aria-level'],
								allowedAttrs: ['aria-expanded'],
								superclassRole: ['sectionhead'],
								accessibleNameRequired: !1,
								nameFromContent: !0,
							},
							img: {
								type: 'structure',
								allowedAttrs: ['aria-expanded'],
								superclassRole: ['section'],
								accessibleNameRequired: !0,
								childrenPresentational: !0,
							},
							input: { type: 'abstract', superclassRole: ['widget'] },
							insertion: {
								type: 'structure',
								superclassRole: ['section'],
								prohibitedAttrs: ['aria-label', 'aria-labelledby'],
							},
							landmark: { type: 'abstract', superclassRole: ['section'] },
							link: {
								type: 'widget',
								allowedAttrs: ['aria-expanded'],
								superclassRole: ['command'],
								accessibleNameRequired: !0,
								nameFromContent: !0,
							},
							list: {
								type: 'structure',
								requiredOwned: ['group', 'listitem'],
								allowedAttrs: ['aria-expanded'],
								superclassRole: ['section'],
							},
							listbox: {
								type: 'widget',
								requiredOwned: ['group', 'option'],
								allowedAttrs: [
									'aria-multiselectable',
									'aria-readonly',
									'aria-required',
									'aria-activedescendant',
									'aria-expanded',
									'aria-orientation',
								],
								superclassRole: ['select'],
								accessibleNameRequired: !0,
							},
							listitem: {
								type: 'structure',
								requiredContext: ['list', 'group'],
								allowedAttrs: ['aria-level', 'aria-posinset', 'aria-setsize', 'aria-expanded'],
								superclassRole: ['section'],
								nameFromContent: !0,
							},
							log: { type: 'widget', allowedAttrs: ['aria-expanded'], superclassRole: ['section'] },
							main: {
								type: 'landmark',
								allowedAttrs: ['aria-expanded'],
								superclassRole: ['landmark'],
							},
							marquee: {
								type: 'widget',
								allowedAttrs: ['aria-expanded'],
								superclassRole: ['section'],
							},
							math: {
								type: 'structure',
								allowedAttrs: ['aria-expanded'],
								superclassRole: ['section'],
								childrenPresentational: !0,
							},
							menu: {
								type: 'composite',
								requiredOwned: ['group', 'menuitemradio', 'menuitem', 'menuitemcheckbox'],
								allowedAttrs: ['aria-activedescendant', 'aria-expanded', 'aria-orientation'],
								superclassRole: ['select'],
							},
							menubar: {
								type: 'composite',
								requiredOwned: ['group', 'menuitemradio', 'menuitem', 'menuitemcheckbox', 'menu'],
								allowedAttrs: ['aria-activedescendant', 'aria-expanded', 'aria-orientation'],
								superclassRole: ['menu'],
							},
							menuitem: {
								type: 'widget',
								requiredContext: ['menu', 'menubar', 'group'],
								allowedAttrs: ['aria-posinset', 'aria-setsize', 'aria-expanded'],
								superclassRole: ['command'],
								accessibleNameRequired: !0,
								nameFromContent: !0,
							},
							menuitemcheckbox: {
								type: 'widget',
								requiredContext: ['menu', 'menubar', 'group'],
								allowedAttrs: ['aria-checked', 'aria-posinset', 'aria-readonly', 'aria-setsize'],
								superclassRole: ['checkbox', 'menuitem'],
								accessibleNameRequired: !0,
								nameFromContent: !0,
								childrenPresentational: !0,
							},
							menuitemradio: {
								type: 'widget',
								requiredContext: ['menu', 'menubar', 'group'],
								allowedAttrs: ['aria-checked', 'aria-posinset', 'aria-readonly', 'aria-setsize'],
								superclassRole: ['menuitemcheckbox', 'radio'],
								accessibleNameRequired: !0,
								nameFromContent: !0,
								childrenPresentational: !0,
							},
							meter: {
								type: 'structure',
								allowedAttrs: ['aria-valuetext'],
								requiredAttrs: ['aria-valuemax', 'aria-valuemin', 'aria-valuenow'],
								superclassRole: ['range'],
								accessibleNameRequired: !0,
								childrenPresentational: !0,
							},
							mark: {
								type: 'structure',
								superclassRole: ['section'],
								prohibitedAttrs: ['aria-label', 'aria-labelledby'],
							},
							navigation: {
								type: 'landmark',
								allowedAttrs: ['aria-expanded'],
								superclassRole: ['landmark'],
							},
							none: {
								type: 'structure',
								superclassRole: ['structure'],
								prohibitedAttrs: ['aria-label', 'aria-labelledby'],
							},
							note: {
								type: 'structure',
								allowedAttrs: ['aria-expanded'],
								superclassRole: ['section'],
							},
							option: {
								type: 'widget',
								requiredContext: ['group', 'listbox'],
								allowedAttrs: ['aria-selected', 'aria-checked', 'aria-posinset', 'aria-setsize'],
								superclassRole: ['input'],
								accessibleNameRequired: !0,
								nameFromContent: !0,
								childrenPresentational: !0,
							},
							paragraph: {
								type: 'structure',
								superclassRole: ['section'],
								prohibitedAttrs: ['aria-label', 'aria-labelledby'],
							},
							presentation: {
								type: 'structure',
								superclassRole: ['structure'],
								prohibitedAttrs: ['aria-label', 'aria-labelledby'],
							},
							progressbar: {
								type: 'widget',
								allowedAttrs: [
									'aria-expanded',
									'aria-valuemax',
									'aria-valuemin',
									'aria-valuenow',
									'aria-valuetext',
								],
								superclassRole: ['range'],
								accessibleNameRequired: !0,
								childrenPresentational: !0,
							},
							radio: {
								type: 'widget',
								allowedAttrs: ['aria-checked', 'aria-posinset', 'aria-setsize', 'aria-required'],
								superclassRole: ['input'],
								accessibleNameRequired: !0,
								nameFromContent: !0,
								childrenPresentational: !0,
							},
							radiogroup: {
								type: 'composite',
								allowedAttrs: [
									'aria-readonly',
									'aria-required',
									'aria-activedescendant',
									'aria-expanded',
									'aria-orientation',
								],
								superclassRole: ['select'],
								accessibleNameRequired: !1,
							},
							range: { type: 'abstract', superclassRole: ['widget'] },
							region: {
								type: 'landmark',
								allowedAttrs: ['aria-expanded'],
								superclassRole: ['landmark'],
								accessibleNameRequired: !1,
							},
							roletype: { type: 'abstract', superclassRole: [] },
							row: {
								type: 'structure',
								requiredContext: ['grid', 'rowgroup', 'table', 'treegrid'],
								requiredOwned: ['cell', 'columnheader', 'gridcell', 'rowheader'],
								allowedAttrs: [
									'aria-colindex',
									'aria-level',
									'aria-rowindex',
									'aria-selected',
									'aria-activedescendant',
									'aria-expanded',
									'aria-posinset',
									'aria-setsize',
								],
								superclassRole: ['group', 'widget'],
								nameFromContent: !0,
							},
							rowgroup: {
								type: 'structure',
								requiredContext: ['grid', 'table', 'treegrid'],
								requiredOwned: ['row'],
								superclassRole: ['structure'],
								nameFromContent: !0,
							},
							rowheader: {
								type: 'structure',
								requiredContext: ['row'],
								allowedAttrs: [
									'aria-sort',
									'aria-colindex',
									'aria-colspan',
									'aria-expanded',
									'aria-readonly',
									'aria-required',
									'aria-rowindex',
									'aria-rowspan',
									'aria-selected',
								],
								superclassRole: ['cell', 'gridcell', 'sectionhead'],
								accessibleNameRequired: !1,
								nameFromContent: !0,
							},
							scrollbar: {
								type: 'widget',
								requiredAttrs: ['aria-valuenow'],
								allowedAttrs: [
									'aria-controls',
									'aria-orientation',
									'aria-valuemax',
									'aria-valuemin',
									'aria-valuetext',
								],
								superclassRole: ['range'],
								childrenPresentational: !0,
							},
							search: {
								type: 'landmark',
								allowedAttrs: ['aria-expanded'],
								superclassRole: ['landmark'],
							},
							searchbox: {
								type: 'widget',
								allowedAttrs: [
									'aria-activedescendant',
									'aria-autocomplete',
									'aria-multiline',
									'aria-placeholder',
									'aria-readonly',
									'aria-required',
								],
								superclassRole: ['textbox'],
								accessibleNameRequired: !0,
							},
							section: { type: 'abstract', superclassRole: ['structure'], nameFromContent: !0 },
							sectionhead: { type: 'abstract', superclassRole: ['structure'], nameFromContent: !0 },
							select: { type: 'abstract', superclassRole: ['composite', 'group'] },
							separator: {
								type: 'structure',
								allowedAttrs: [
									'aria-valuemax',
									'aria-valuemin',
									'aria-valuenow',
									'aria-orientation',
									'aria-valuetext',
								],
								superclassRole: ['structure', 'widget'],
								childrenPresentational: !0,
							},
							slider: {
								type: 'widget',
								requiredAttrs: ['aria-valuenow'],
								allowedAttrs: [
									'aria-valuemax',
									'aria-valuemin',
									'aria-orientation',
									'aria-readonly',
									'aria-valuetext',
								],
								superclassRole: ['input', 'range'],
								accessibleNameRequired: !0,
								childrenPresentational: !0,
							},
							spinbutton: {
								type: 'widget',
								allowedAttrs: [
									'aria-valuemax',
									'aria-valuemin',
									'aria-readonly',
									'aria-required',
									'aria-activedescendant',
									'aria-valuetext',
									'aria-valuenow',
								],
								superclassRole: ['composite', 'input', 'range'],
								accessibleNameRequired: !0,
							},
							status: {
								type: 'widget',
								allowedAttrs: ['aria-expanded'],
								superclassRole: ['section'],
							},
							strong: {
								type: 'structure',
								superclassRole: ['section'],
								prohibitedAttrs: ['aria-label', 'aria-labelledby'],
							},
							structure: { type: 'abstract', superclassRole: ['roletype'] },
							subscript: {
								type: 'structure',
								superclassRole: ['section'],
								prohibitedAttrs: ['aria-label', 'aria-labelledby'],
							},
							superscript: {
								type: 'structure',
								superclassRole: ['section'],
								prohibitedAttrs: ['aria-label', 'aria-labelledby'],
							},
							switch: {
								type: 'widget',
								requiredAttrs: ['aria-checked'],
								allowedAttrs: ['aria-readonly'],
								superclassRole: ['checkbox'],
								accessibleNameRequired: !0,
								nameFromContent: !0,
								childrenPresentational: !0,
							},
							suggestion: {
								type: 'structure',
								requiredOwned: ['insertion', 'deletion'],
								superclassRole: ['section'],
								prohibitedAttrs: ['aria-label', 'aria-labelledby'],
							},
							tab: {
								type: 'widget',
								requiredContext: ['tablist'],
								allowedAttrs: ['aria-posinset', 'aria-selected', 'aria-setsize', 'aria-expanded'],
								superclassRole: ['sectionhead', 'widget'],
								nameFromContent: !0,
								childrenPresentational: !0,
							},
							table: {
								type: 'structure',
								requiredOwned: ['rowgroup', 'row'],
								allowedAttrs: ['aria-colcount', 'aria-rowcount', 'aria-expanded'],
								superclassRole: ['section'],
								accessibleNameRequired: !1,
								nameFromContent: !0,
							},
							tablist: {
								type: 'composite',
								requiredOwned: ['tab'],
								allowedAttrs: [
									'aria-level',
									'aria-multiselectable',
									'aria-orientation',
									'aria-activedescendant',
									'aria-expanded',
								],
								superclassRole: ['composite'],
							},
							tabpanel: {
								type: 'widget',
								allowedAttrs: ['aria-expanded'],
								superclassRole: ['section'],
								accessibleNameRequired: !1,
							},
							term: {
								type: 'structure',
								allowedAttrs: ['aria-expanded'],
								superclassRole: ['section'],
								nameFromContent: !0,
							},
							text: { type: 'structure', superclassRole: ['section'], nameFromContent: !0 },
							textbox: {
								type: 'widget',
								allowedAttrs: [
									'aria-activedescendant',
									'aria-autocomplete',
									'aria-multiline',
									'aria-placeholder',
									'aria-readonly',
									'aria-required',
								],
								superclassRole: ['input'],
								accessibleNameRequired: !0,
							},
							time: { type: 'structure', superclassRole: ['section'] },
							timer: {
								type: 'widget',
								allowedAttrs: ['aria-expanded'],
								superclassRole: ['status'],
							},
							toolbar: {
								type: 'structure',
								allowedAttrs: ['aria-orientation', 'aria-activedescendant', 'aria-expanded'],
								superclassRole: ['group'],
								accessibleNameRequired: !0,
							},
							tooltip: {
								type: 'structure',
								allowedAttrs: ['aria-expanded'],
								superclassRole: ['section'],
								nameFromContent: !0,
							},
							tree: {
								type: 'composite',
								requiredOwned: ['group', 'treeitem'],
								allowedAttrs: [
									'aria-multiselectable',
									'aria-required',
									'aria-activedescendant',
									'aria-expanded',
									'aria-orientation',
								],
								superclassRole: ['select'],
								accessibleNameRequired: !1,
							},
							treegrid: {
								type: 'composite',
								requiredOwned: ['rowgroup', 'row'],
								allowedAttrs: [
									'aria-activedescendant',
									'aria-colcount',
									'aria-expanded',
									'aria-level',
									'aria-multiselectable',
									'aria-orientation',
									'aria-readonly',
									'aria-required',
									'aria-rowcount',
								],
								superclassRole: ['grid', 'tree'],
								accessibleNameRequired: !1,
							},
							treeitem: {
								type: 'widget',
								requiredContext: ['group', 'tree'],
								allowedAttrs: [
									'aria-checked',
									'aria-expanded',
									'aria-level',
									'aria-posinset',
									'aria-selected',
									'aria-setsize',
								],
								superclassRole: ['listitem', 'option'],
								accessibleNameRequired: !0,
								nameFromContent: !0,
							},
							widget: { type: 'abstract', superclassRole: ['roletype'] },
							window: { type: 'abstract', superclassRole: ['roletype'] },
						},
						html_elms_default = {
							a: {
								variant: {
									href: {
										matches: '[href]',
										contentTypes: ['interactive', 'phrasing', 'flow'],
										allowedRoles: [
											'button',
											'checkbox',
											'menuitem',
											'menuitemcheckbox',
											'menuitemradio',
											'option',
											'radio',
											'switch',
											'tab',
											'treeitem',
											'doc-backlink',
											'doc-biblioref',
											'doc-glossref',
											'doc-noteref',
										],
										namingMethods: ['subtreeText'],
									},
									default: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
								},
							},
							abbr: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
							address: { contentTypes: ['flow'], allowedRoles: !0 },
							area: {
								variant: {
									href: { matches: '[href]', allowedRoles: !1 },
									default: { allowedRoles: ['button', 'link'] },
								},
								contentTypes: ['phrasing', 'flow'],
								namingMethods: ['altText'],
							},
							article: {
								contentTypes: ['sectioning', 'flow'],
								allowedRoles: [
									'feed',
									'presentation',
									'none',
									'document',
									'application',
									'main',
									'region',
								],
								shadowRoot: !0,
							},
							aside: {
								contentTypes: ['sectioning', 'flow'],
								allowedRoles: [
									'feed',
									'note',
									'presentation',
									'none',
									'region',
									'search',
									'doc-dedication',
									'doc-example',
									'doc-footnote',
									'doc-pullquote',
									'doc-tip',
								],
							},
							audio: {
								variant: {
									controls: {
										matches: '[controls]',
										contentTypes: ['interactive', 'embedded', 'phrasing', 'flow'],
									},
									default: { contentTypes: ['embedded', 'phrasing', 'flow'] },
								},
								allowedRoles: ['application'],
								chromiumRole: 'Audio',
							},
							b: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
							base: { allowedRoles: !1, noAriaAttrs: !0 },
							bdi: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
							bdo: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
							blockquote: { contentTypes: ['flow'], allowedRoles: !0, shadowRoot: !0 },
							body: { allowedRoles: !1, shadowRoot: !0 },
							br: {
								contentTypes: ['phrasing', 'flow'],
								allowedRoles: ['presentation', 'none'],
								namingMethods: ['titleText', 'singleSpace'],
							},
							button: {
								contentTypes: ['interactive', 'phrasing', 'flow'],
								allowedRoles: [
									'checkbox',
									'link',
									'menuitem',
									'menuitemcheckbox',
									'menuitemradio',
									'option',
									'radio',
									'switch',
									'tab',
								],
								namingMethods: ['subtreeText'],
							},
							canvas: {
								allowedRoles: !0,
								contentTypes: ['embedded', 'phrasing', 'flow'],
								chromiumRole: 'Canvas',
							},
							caption: { allowedRoles: !1 },
							cite: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
							code: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
							col: { allowedRoles: !1, noAriaAttrs: !0 },
							colgroup: { allowedRoles: !1, noAriaAttrs: !0 },
							data: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
							datalist: {
								contentTypes: ['phrasing', 'flow'],
								allowedRoles: !1,
								implicitAttrs: { 'aria-multiselectable': 'false' },
							},
							dd: { allowedRoles: !1 },
							del: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
							dfn: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
							details: { contentTypes: ['interactive', 'flow'], allowedRoles: !1 },
							dialog: { contentTypes: ['flow'], allowedRoles: ['alertdialog'] },
							div: { contentTypes: ['flow'], allowedRoles: !0, shadowRoot: !0 },
							dl: {
								contentTypes: ['flow'],
								allowedRoles: ['group', 'list', 'presentation', 'none'],
								chromiumRole: 'DescriptionList',
							},
							dt: { allowedRoles: ['listitem'] },
							em: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
							embed: {
								contentTypes: ['interactive', 'embedded', 'phrasing', 'flow'],
								allowedRoles: ['application', 'document', 'img', 'presentation', 'none'],
								chromiumRole: 'EmbeddedObject',
							},
							fieldset: {
								contentTypes: ['flow'],
								allowedRoles: ['none', 'presentation', 'radiogroup'],
								namingMethods: ['fieldsetLegendText'],
							},
							figcaption: { allowedRoles: ['group', 'none', 'presentation'] },
							figure: {
								contentTypes: ['flow'],
								allowedRoles: !0,
								namingMethods: ['figureText', 'titleText'],
							},
							footer: {
								contentTypes: ['flow'],
								allowedRoles: ['group', 'none', 'presentation', 'doc-footnote'],
								shadowRoot: !0,
							},
							form: { contentTypes: ['flow'], allowedRoles: ['search', 'none', 'presentation'] },
							h1: {
								contentTypes: ['heading', 'flow'],
								allowedRoles: ['none', 'presentation', 'tab', 'doc-subtitle'],
								shadowRoot: !0,
								implicitAttrs: { 'aria-level': '1' },
							},
							h2: {
								contentTypes: ['heading', 'flow'],
								allowedRoles: ['none', 'presentation', 'tab', 'doc-subtitle'],
								shadowRoot: !0,
								implicitAttrs: { 'aria-level': '2' },
							},
							h3: {
								contentTypes: ['heading', 'flow'],
								allowedRoles: ['none', 'presentation', 'tab', 'doc-subtitle'],
								shadowRoot: !0,
								implicitAttrs: { 'aria-level': '3' },
							},
							h4: {
								contentTypes: ['heading', 'flow'],
								allowedRoles: ['none', 'presentation', 'tab', 'doc-subtitle'],
								shadowRoot: !0,
								implicitAttrs: { 'aria-level': '4' },
							},
							h5: {
								contentTypes: ['heading', 'flow'],
								allowedRoles: ['none', 'presentation', 'tab', 'doc-subtitle'],
								shadowRoot: !0,
								implicitAttrs: { 'aria-level': '5' },
							},
							h6: {
								contentTypes: ['heading', 'flow'],
								allowedRoles: ['none', 'presentation', 'tab', 'doc-subtitle'],
								shadowRoot: !0,
								implicitAttrs: { 'aria-level': '6' },
							},
							head: { allowedRoles: !1, noAriaAttrs: !0 },
							header: {
								contentTypes: ['flow'],
								allowedRoles: ['group', 'none', 'presentation', 'doc-footnote'],
								shadowRoot: !0,
							},
							hgroup: { contentTypes: ['heading', 'flow'], allowedRoles: !0 },
							hr: {
								contentTypes: ['flow'],
								allowedRoles: ['none', 'presentation', 'doc-pagebreak'],
								namingMethods: ['titleText', 'singleSpace'],
							},
							html: { allowedRoles: !1, noAriaAttrs: !0 },
							i: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
							iframe: {
								contentTypes: ['interactive', 'embedded', 'phrasing', 'flow'],
								allowedRoles: ['application', 'document', 'img', 'none', 'presentation'],
								chromiumRole: 'Iframe',
							},
							img: {
								variant: {
									nonEmptyAlt: {
										matches: [{ attributes: { alt: '/.+/' } }, { hasAccessibleName: !0 }],
										allowedRoles: [
											'button',
											'checkbox',
											'link',
											'menuitem',
											'menuitemcheckbox',
											'menuitemradio',
											'option',
											'progressbar',
											'radio',
											'scrollbar',
											'separator',
											'slider',
											'switch',
											'tab',
											'treeitem',
											'doc-cover',
										],
									},
									usemap: {
										matches: '[usemap]',
										contentTypes: ['interactive', 'embedded', 'flow'],
									},
									default: {
										allowedRoles: ['presentation', 'none'],
										contentTypes: ['embedded', 'flow'],
									},
								},
								namingMethods: ['altText'],
							},
							input: {
								variant: {
									button: {
										matches: { properties: { type: 'button' } },
										allowedRoles: [
											'link',
											'menuitem',
											'menuitemcheckbox',
											'menuitemradio',
											'option',
											'radio',
											'switch',
											'tab',
										],
									},
									buttonType: {
										matches: { properties: { type: ['button', 'submit', 'reset'] } },
										namingMethods: ['valueText', 'titleText', 'buttonDefaultText'],
									},
									checkboxPressed: {
										matches: {
											properties: { type: 'checkbox' },
											attributes: { 'aria-pressed': '/.*/' },
										},
										allowedRoles: ['button', 'menuitemcheckbox', 'option', 'switch'],
										implicitAttrs: { 'aria-checked': 'false' },
									},
									checkbox: {
										matches: {
											properties: { type: 'checkbox' },
											attributes: { 'aria-pressed': null },
										},
										allowedRoles: ['menuitemcheckbox', 'option', 'switch'],
										implicitAttrs: { 'aria-checked': 'false' },
									},
									noRoles: {
										matches: {
											properties: {
												type: [
													'color',
													'date',
													'datetime-local',
													'file',
													'month',
													'number',
													'password',
													'range',
													'reset',
													'submit',
													'time',
													'week',
												],
											},
										},
										allowedRoles: !1,
									},
									hidden: {
										matches: { properties: { type: 'hidden' } },
										contentTypes: ['flow'],
										allowedRoles: !1,
										noAriaAttrs: !0,
									},
									image: {
										matches: { properties: { type: 'image' } },
										allowedRoles: [
											'link',
											'menuitem',
											'menuitemcheckbox',
											'menuitemradio',
											'radio',
											'switch',
										],
										namingMethods: [
											'altText',
											'valueText',
											'labelText',
											'titleText',
											'buttonDefaultText',
										],
									},
									radio: {
										matches: { properties: { type: 'radio' } },
										allowedRoles: ['menuitemradio'],
										implicitAttrs: { 'aria-checked': 'false' },
									},
									textWithList: {
										matches: { properties: { type: 'text' }, attributes: { list: '/.*/' } },
										allowedRoles: !1,
									},
									default: {
										contentTypes: ['interactive', 'flow'],
										allowedRoles: ['combobox', 'searchbox', 'spinbutton'],
										implicitAttrs: { 'aria-valuenow': '' },
										namingMethods: ['labelText', 'placeholderText'],
									},
								},
							},
							ins: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
							kbd: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
							label: {
								contentTypes: ['interactive', 'phrasing', 'flow'],
								allowedRoles: !1,
								chromiumRole: 'Label',
							},
							legend: { allowedRoles: !1 },
							li: {
								allowedRoles: [
									'menuitem',
									'menuitemcheckbox',
									'menuitemradio',
									'option',
									'none',
									'presentation',
									'radio',
									'separator',
									'tab',
									'treeitem',
									'doc-biblioentry',
									'doc-endnote',
								],
								implicitAttrs: { 'aria-setsize': '1', 'aria-posinset': '1' },
							},
							link: { contentTypes: ['phrasing', 'flow'], allowedRoles: !1, noAriaAttrs: !0 },
							main: { contentTypes: ['flow'], allowedRoles: !1, shadowRoot: !0 },
							map: { contentTypes: ['phrasing', 'flow'], allowedRoles: !1, noAriaAttrs: !0 },
							math: { contentTypes: ['embedded', 'phrasing', 'flow'], allowedRoles: !1 },
							mark: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
							menu: {
								contentTypes: ['flow'],
								allowedRoles: [
									'directory',
									'group',
									'listbox',
									'menu',
									'menubar',
									'none',
									'presentation',
									'radiogroup',
									'tablist',
									'toolbar',
									'tree',
								],
							},
							meta: {
								variant: {
									itemprop: { matches: '[itemprop]', contentTypes: ['phrasing', 'flow'] },
								},
								allowedRoles: !1,
								noAriaAttrs: !0,
							},
							meter: {
								contentTypes: ['phrasing', 'flow'],
								allowedRoles: !1,
								chromiumRole: 'progressbar',
							},
							nav: {
								contentTypes: ['sectioning', 'flow'],
								allowedRoles: [
									'doc-index',
									'doc-pagelist',
									'doc-toc',
									'menu',
									'menubar',
									'none',
									'presentation',
									'tablist',
								],
								shadowRoot: !0,
							},
							noscript: { contentTypes: ['phrasing', 'flow'], allowedRoles: !1, noAriaAttrs: !0 },
							object: {
								variant: {
									usemap: {
										matches: '[usemap]',
										contentTypes: ['interactive', 'embedded', 'phrasing', 'flow'],
									},
									default: { contentTypes: ['embedded', 'phrasing', 'flow'] },
								},
								allowedRoles: ['application', 'document', 'img'],
								chromiumRole: 'PluginObject',
							},
							ol: {
								contentTypes: ['flow'],
								allowedRoles: [
									'directory',
									'group',
									'listbox',
									'menu',
									'menubar',
									'none',
									'presentation',
									'radiogroup',
									'tablist',
									'toolbar',
									'tree',
								],
							},
							optgroup: { allowedRoles: !1 },
							option: { allowedRoles: !1, implicitAttrs: { 'aria-selected': 'false' } },
							output: {
								contentTypes: ['phrasing', 'flow'],
								allowedRoles: !0,
								namingMethods: ['subtreeText'],
							},
							p: { contentTypes: ['flow'], allowedRoles: !0, shadowRoot: !0 },
							param: { allowedRoles: !1, noAriaAttrs: !0 },
							picture: { contentTypes: ['phrasing', 'flow'], allowedRoles: !1, noAriaAttrs: !0 },
							pre: { contentTypes: ['flow'], allowedRoles: !0 },
							progress: {
								contentTypes: ['phrasing', 'flow'],
								allowedRoles: !1,
								implicitAttrs: {
									'aria-valuemax': '100',
									'aria-valuemin': '0',
									'aria-valuenow': '0',
								},
							},
							q: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
							rp: { allowedRoles: !0 },
							rt: { allowedRoles: !0 },
							ruby: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
							s: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
							samp: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
							script: { contentTypes: ['phrasing', 'flow'], allowedRoles: !1, noAriaAttrs: !0 },
							section: {
								contentTypes: ['sectioning', 'flow'],
								allowedRoles: [
									'alert',
									'alertdialog',
									'application',
									'banner',
									'complementary',
									'contentinfo',
									'dialog',
									'document',
									'feed',
									'group',
									'log',
									'main',
									'marquee',
									'navigation',
									'none',
									'note',
									'presentation',
									'search',
									'status',
									'tabpanel',
									'doc-abstract',
									'doc-acknowledgments',
									'doc-afterword',
									'doc-appendix',
									'doc-bibliography',
									'doc-chapter',
									'doc-colophon',
									'doc-conclusion',
									'doc-credit',
									'doc-credits',
									'doc-dedication',
									'doc-endnotes',
									'doc-epigraph',
									'doc-epilogue',
									'doc-errata',
									'doc-example',
									'doc-foreword',
									'doc-glossary',
									'doc-index',
									'doc-introduction',
									'doc-notice',
									'doc-pagelist',
									'doc-part',
									'doc-preface',
									'doc-prologue',
									'doc-pullquote',
									'doc-qna',
									'doc-toc',
								],
								shadowRoot: !0,
							},
							select: {
								variant: {
									combobox: {
										matches: { attributes: { multiple: null, size: [null, '1'] } },
										allowedRoles: ['menu'],
									},
									default: { allowedRoles: !1 },
								},
								contentTypes: ['interactive', 'phrasing', 'flow'],
								implicitAttrs: { 'aria-valuenow': '' },
								namingMethods: ['labelText'],
							},
							slot: { contentTypes: ['phrasing', 'flow'], allowedRoles: !1, noAriaAttrs: !0 },
							small: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
							source: { allowedRoles: !1, noAriaAttrs: !0 },
							span: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0, shadowRoot: !0 },
							strong: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
							style: { allowedRoles: !1, noAriaAttrs: !0 },
							svg: {
								contentTypes: ['embedded', 'phrasing', 'flow'],
								allowedRoles: !0,
								chromiumRole: 'SVGRoot',
								namingMethods: ['svgTitleText'],
							},
							sub: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
							summary: { allowedRoles: !1, namingMethods: ['subtreeText'] },
							sup: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
							table: {
								contentTypes: ['flow'],
								allowedRoles: !0,
								namingMethods: ['tableCaptionText', 'tableSummaryText'],
							},
							tbody: { allowedRoles: !0 },
							template: { contentTypes: ['phrasing', 'flow'], allowedRoles: !1, noAriaAttrs: !0 },
							textarea: {
								contentTypes: ['interactive', 'phrasing', 'flow'],
								allowedRoles: !1,
								implicitAttrs: { 'aria-valuenow': '', 'aria-multiline': 'true' },
								namingMethods: ['labelText', 'placeholderText'],
							},
							tfoot: { allowedRoles: !0 },
							thead: { allowedRoles: !0 },
							time: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
							title: { allowedRoles: !1, noAriaAttrs: !0 },
							td: { allowedRoles: !0 },
							th: { allowedRoles: !0 },
							tr: { allowedRoles: !0 },
							track: { allowedRoles: !1, noAriaAttrs: !0 },
							u: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
							ul: {
								contentTypes: ['flow'],
								allowedRoles: [
									'directory',
									'group',
									'listbox',
									'menu',
									'menubar',
									'none',
									'presentation',
									'radiogroup',
									'tablist',
									'toolbar',
									'tree',
								],
							},
							var: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
							video: {
								variant: {
									controls: {
										matches: '[controls]',
										contentTypes: ['interactive', 'embedded', 'phrasing', 'flow'],
									},
									default: { contentTypes: ['embedded', 'phrasing', 'flow'] },
								},
								allowedRoles: ['application'],
								chromiumRole: 'video',
							},
							wbr: { contentTypes: ['phrasing', 'flow'], allowedRoles: ['presentation', 'none'] },
						},
						css_colors_default = {
							aliceblue: [240, 248, 255],
							antiquewhite: [250, 235, 215],
							aqua: [0, 255, 255],
							aquamarine: [127, 255, 212],
							azure: [240, 255, 255],
							beige: [245, 245, 220],
							bisque: [255, 228, 196],
							black: [0, 0, 0],
							blanchedalmond: [255, 235, 205],
							blue: [0, 0, 255],
							blueviolet: [138, 43, 226],
							brown: [165, 42, 42],
							burlywood: [222, 184, 135],
							cadetblue: [95, 158, 160],
							chartreuse: [127, 255, 0],
							chocolate: [210, 105, 30],
							coral: [255, 127, 80],
							cornflowerblue: [100, 149, 237],
							cornsilk: [255, 248, 220],
							crimson: [220, 20, 60],
							cyan: [0, 255, 255],
							darkblue: [0, 0, 139],
							darkcyan: [0, 139, 139],
							darkgoldenrod: [184, 134, 11],
							darkgray: [169, 169, 169],
							darkgreen: [0, 100, 0],
							darkgrey: [169, 169, 169],
							darkkhaki: [189, 183, 107],
							darkmagenta: [139, 0, 139],
							darkolivegreen: [85, 107, 47],
							darkorange: [255, 140, 0],
							darkorchid: [153, 50, 204],
							darkred: [139, 0, 0],
							darksalmon: [233, 150, 122],
							darkseagreen: [143, 188, 143],
							darkslateblue: [72, 61, 139],
							darkslategray: [47, 79, 79],
							darkslategrey: [47, 79, 79],
							darkturquoise: [0, 206, 209],
							darkviolet: [148, 0, 211],
							deeppink: [255, 20, 147],
							deepskyblue: [0, 191, 255],
							dimgray: [105, 105, 105],
							dimgrey: [105, 105, 105],
							dodgerblue: [30, 144, 255],
							firebrick: [178, 34, 34],
							floralwhite: [255, 250, 240],
							forestgreen: [34, 139, 34],
							fuchsia: [255, 0, 255],
							gainsboro: [220, 220, 220],
							ghostwhite: [248, 248, 255],
							gold: [255, 215, 0],
							goldenrod: [218, 165, 32],
							gray: [128, 128, 128],
							green: [0, 128, 0],
							greenyellow: [173, 255, 47],
							grey: [128, 128, 128],
							honeydew: [240, 255, 240],
							hotpink: [255, 105, 180],
							indianred: [205, 92, 92],
							indigo: [75, 0, 130],
							ivory: [255, 255, 240],
							khaki: [240, 230, 140],
							lavender: [230, 230, 250],
							lavenderblush: [255, 240, 245],
							lawngreen: [124, 252, 0],
							lemonchiffon: [255, 250, 205],
							lightblue: [173, 216, 230],
							lightcoral: [240, 128, 128],
							lightcyan: [224, 255, 255],
							lightgoldenrodyellow: [250, 250, 210],
							lightgray: [211, 211, 211],
							lightgreen: [144, 238, 144],
							lightgrey: [211, 211, 211],
							lightpink: [255, 182, 193],
							lightsalmon: [255, 160, 122],
							lightseagreen: [32, 178, 170],
							lightskyblue: [135, 206, 250],
							lightslategray: [119, 136, 153],
							lightslategrey: [119, 136, 153],
							lightsteelblue: [176, 196, 222],
							lightyellow: [255, 255, 224],
							lime: [0, 255, 0],
							limegreen: [50, 205, 50],
							linen: [250, 240, 230],
							magenta: [255, 0, 255],
							maroon: [128, 0, 0],
							mediumaquamarine: [102, 205, 170],
							mediumblue: [0, 0, 205],
							mediumorchid: [186, 85, 211],
							mediumpurple: [147, 112, 219],
							mediumseagreen: [60, 179, 113],
							mediumslateblue: [123, 104, 238],
							mediumspringgreen: [0, 250, 154],
							mediumturquoise: [72, 209, 204],
							mediumvioletred: [199, 21, 133],
							midnightblue: [25, 25, 112],
							mintcream: [245, 255, 250],
							mistyrose: [255, 228, 225],
							moccasin: [255, 228, 181],
							navajowhite: [255, 222, 173],
							navy: [0, 0, 128],
							oldlace: [253, 245, 230],
							olive: [128, 128, 0],
							olivedrab: [107, 142, 35],
							orange: [255, 165, 0],
							orangered: [255, 69, 0],
							orchid: [218, 112, 214],
							palegoldenrod: [238, 232, 170],
							palegreen: [152, 251, 152],
							paleturquoise: [175, 238, 238],
							palevioletred: [219, 112, 147],
							papayawhip: [255, 239, 213],
							peachpuff: [255, 218, 185],
							peru: [205, 133, 63],
							pink: [255, 192, 203],
							plum: [221, 160, 221],
							powderblue: [176, 224, 230],
							purple: [128, 0, 128],
							rebeccapurple: [102, 51, 153],
							red: [255, 0, 0],
							rosybrown: [188, 143, 143],
							royalblue: [65, 105, 225],
							saddlebrown: [139, 69, 19],
							salmon: [250, 128, 114],
							sandybrown: [244, 164, 96],
							seagreen: [46, 139, 87],
							seashell: [255, 245, 238],
							sienna: [160, 82, 45],
							silver: [192, 192, 192],
							skyblue: [135, 206, 235],
							slateblue: [106, 90, 205],
							slategray: [112, 128, 144],
							slategrey: [112, 128, 144],
							snow: [255, 250, 250],
							springgreen: [0, 255, 127],
							steelblue: [70, 130, 180],
							tan: [210, 180, 140],
							teal: [0, 128, 128],
							thistle: [216, 191, 216],
							tomato: [255, 99, 71],
							turquoise: [64, 224, 208],
							violet: [238, 130, 238],
							wheat: [245, 222, 179],
							white: [255, 255, 255],
							whitesmoke: [245, 245, 245],
							yellow: [255, 255, 0],
							yellowgreen: [154, 205, 50],
						},
						originals = {
							ariaAttrs: aria_attrs_default,
							ariaRoles: _extends(
								{},
								aria_roles_default,
								{
									'doc-abstract': {
										type: 'section',
										allowedAttrs: ['aria-expanded'],
										superclassRole: ['section'],
									},
									'doc-acknowledgments': {
										type: 'landmark',
										allowedAttrs: ['aria-expanded'],
										superclassRole: ['landmark'],
									},
									'doc-afterword': {
										type: 'landmark',
										allowedAttrs: ['aria-expanded'],
										superclassRole: ['landmark'],
									},
									'doc-appendix': {
										type: 'landmark',
										allowedAttrs: ['aria-expanded'],
										superclassRole: ['landmark'],
									},
									'doc-backlink': {
										type: 'link',
										allowedAttrs: ['aria-expanded'],
										nameFromContent: !0,
										superclassRole: ['link'],
									},
									'doc-biblioentry': {
										type: 'listitem',
										allowedAttrs: ['aria-expanded', 'aria-level', 'aria-posinset', 'aria-setsize'],
										superclassRole: ['listitem'],
										deprecated: !0,
									},
									'doc-bibliography': {
										type: 'landmark',
										allowedAttrs: ['aria-expanded'],
										superclassRole: ['landmark'],
									},
									'doc-biblioref': {
										type: 'link',
										allowedAttrs: ['aria-expanded'],
										nameFromContent: !0,
										superclassRole: ['link'],
									},
									'doc-chapter': {
										type: 'landmark',
										allowedAttrs: ['aria-expanded'],
										superclassRole: ['landmark'],
									},
									'doc-colophon': {
										type: 'section',
										allowedAttrs: ['aria-expanded'],
										superclassRole: ['section'],
									},
									'doc-conclusion': {
										type: 'landmark',
										allowedAttrs: ['aria-expanded'],
										superclassRole: ['landmark'],
									},
									'doc-cover': {
										type: 'img',
										allowedAttrs: ['aria-expanded'],
										superclassRole: ['img'],
									},
									'doc-credit': {
										type: 'section',
										allowedAttrs: ['aria-expanded'],
										superclassRole: ['section'],
									},
									'doc-credits': {
										type: 'landmark',
										allowedAttrs: ['aria-expanded'],
										superclassRole: ['landmark'],
									},
									'doc-dedication': {
										type: 'section',
										allowedAttrs: ['aria-expanded'],
										superclassRole: ['section'],
									},
									'doc-endnote': {
										type: 'listitem',
										allowedAttrs: ['aria-expanded', 'aria-level', 'aria-posinset', 'aria-setsize'],
										superclassRole: ['listitem'],
										deprecated: !0,
									},
									'doc-endnotes': {
										type: 'landmark',
										allowedAttrs: ['aria-expanded'],
										superclassRole: ['landmark'],
									},
									'doc-epigraph': {
										type: 'section',
										allowedAttrs: ['aria-expanded'],
										superclassRole: ['section'],
									},
									'doc-epilogue': {
										type: 'landmark',
										allowedAttrs: ['aria-expanded'],
										superclassRole: ['landmark'],
									},
									'doc-errata': {
										type: 'landmark',
										allowedAttrs: ['aria-expanded'],
										superclassRole: ['landmark'],
									},
									'doc-example': {
										type: 'section',
										allowedAttrs: ['aria-expanded'],
										superclassRole: ['section'],
									},
									'doc-footnote': {
										type: 'section',
										allowedAttrs: ['aria-expanded'],
										superclassRole: ['section'],
									},
									'doc-foreword': {
										type: 'landmark',
										allowedAttrs: ['aria-expanded'],
										superclassRole: ['landmark'],
									},
									'doc-glossary': {
										type: 'landmark',
										allowedAttrs: ['aria-expanded'],
										superclassRole: ['landmark'],
									},
									'doc-glossref': {
										type: 'link',
										allowedAttrs: ['aria-expanded'],
										nameFromContent: !0,
										superclassRole: ['link'],
									},
									'doc-index': {
										type: 'navigation',
										allowedAttrs: ['aria-expanded'],
										superclassRole: ['navigation'],
									},
									'doc-introduction': {
										type: 'landmark',
										allowedAttrs: ['aria-expanded'],
										superclassRole: ['landmark'],
									},
									'doc-noteref': {
										type: 'link',
										allowedAttrs: ['aria-expanded'],
										nameFromContent: !0,
										superclassRole: ['link'],
									},
									'doc-notice': {
										type: 'note',
										allowedAttrs: ['aria-expanded'],
										superclassRole: ['note'],
									},
									'doc-pagebreak': {
										type: 'separator',
										allowedAttrs: ['aria-expanded', 'aria-orientation'],
										superclassRole: ['separator'],
										childrenPresentational: !0,
									},
									'doc-pagelist': {
										type: 'navigation',
										allowedAttrs: ['aria-expanded'],
										superclassRole: ['navigation'],
									},
									'doc-part': {
										type: 'landmark',
										allowedAttrs: ['aria-expanded'],
										superclassRole: ['landmark'],
									},
									'doc-preface': {
										type: 'landmark',
										allowedAttrs: ['aria-expanded'],
										superclassRole: ['landmark'],
									},
									'doc-prologue': {
										type: 'landmark',
										allowedAttrs: ['aria-expanded'],
										superclassRole: ['landmark'],
									},
									'doc-pullquote': { type: 'none', superclassRole: ['none'] },
									'doc-qna': {
										type: 'section',
										allowedAttrs: ['aria-expanded'],
										superclassRole: ['section'],
									},
									'doc-subtitle': {
										type: 'sectionhead',
										allowedAttrs: ['aria-expanded'],
										superclassRole: ['sectionhead'],
									},
									'doc-tip': {
										type: 'note',
										allowedAttrs: ['aria-expanded'],
										superclassRole: ['note'],
									},
									'doc-toc': {
										type: 'navigation',
										allowedAttrs: ['aria-expanded'],
										superclassRole: ['navigation'],
									},
								},
								{
									'graphics-document': {
										type: 'structure',
										superclassRole: ['document'],
										accessibleNameRequired: !0,
									},
									'graphics-object': {
										type: 'structure',
										superclassRole: ['group'],
										nameFromContent: !0,
									},
									'graphics-symbol': {
										type: 'structure',
										superclassRole: ['img'],
										accessibleNameRequired: !0,
										childrenPresentational: !0,
									},
								},
							),
							htmlElms: html_elms_default,
							cssColors: css_colors_default,
						},
						standards = _extends({}, originals)
					var standards_default = standards
					var get_role_type_default = function getRoleType(role) {
						var _window3
						;(role instanceof abstract_virtual_node_default ||
							(null !== (_window3 = window) &&
								void 0 !== _window3 &&
								_window3.Node &&
								role instanceof window.Node)) &&
							(role = axe.commons.aria.getRole(role))
						var roleDef = standards_default.ariaRoles[role]
						return (null == roleDef ? void 0 : roleDef.type) || null
					}
					function walkDomNode(node, functor) {
						!1 !== functor(node.actualNode) &&
							node.children.forEach(function (child) {
								return walkDomNode(child, functor)
							})
					}
					var blockLike = ['block', 'list-item', 'table', 'flex', 'grid', 'inline-block']
					function isBlock(elm) {
						var display = window.getComputedStyle(elm).getPropertyValue('display')
						return blockLike.includes(display) || 'table-' === display.substr(0, 6)
					}
					var is_in_text_block_default = function isInTextBlock(node, options) {
						if (isBlock(node)) return !1
						var virtualParent = (function getBlockParent(node) {
								for (
									var parentBlock = get_composed_parent_default(node);
									parentBlock && !isBlock(parentBlock);

								)
									parentBlock = get_composed_parent_default(parentBlock)
								return get_node_from_tree_default(parentBlock)
							})(node),
							parentText = '',
							widgetText = '',
							inBrBlock = 0
						return (
							walkDomNode(virtualParent, function (currNode) {
								if (2 === inBrBlock) return !1
								if (
									(3 === currNode.nodeType && (parentText += currNode.nodeValue),
									1 === currNode.nodeType)
								) {
									var nodeName2 = (currNode.nodeName || '').toUpperCase()
									if ((currNode === node && (inBrBlock = 1), ['BR', 'HR'].includes(nodeName2)))
										0 === inBrBlock ? ((parentText = ''), (widgetText = '')) : (inBrBlock = 2)
									else {
										if (
											'none' === currNode.style.display ||
											'hidden' === currNode.style.overflow ||
											!['', null, 'none'].includes(currNode.style.float) ||
											!['', null, 'relative'].includes(currNode.style.position)
										)
											return !1
										if ('widget' === get_role_type_default(currNode))
											return (widgetText += currNode.textContent), !1
									}
								}
							}),
							(parentText = sanitize_default(parentText)),
							null != options && options.noLengthCompare
								? 0 !== parentText.length
								: ((widgetText = sanitize_default(widgetText)),
								  parentText.length > widgetText.length)
						)
					}
					var is_modal_open_default = function isModalOpen(options) {
						var modalPercent = (options = options || {}).modalPercent || 0.75
						if (cache_default.get('isModalOpen')) return cache_default.get('isModalOpen')
						if (
							query_selector_all_filter_default(
								axe._tree[0],
								'dialog, [role=dialog], [aria-modal=true]',
								_isVisibleOnScreen,
							).length
						)
							return cache_default.set('isModalOpen', !0), !0
						for (
							var viewport = get_viewport_size_default(window),
								percentWidth = viewport.width * modalPercent,
								percentHeight = viewport.height * modalPercent,
								x = (viewport.width - percentWidth) / 2,
								y = (viewport.height - percentHeight) / 2,
								stacks = [
									{ x, y },
									{ x: viewport.width - x, y },
									{ x: viewport.width / 2, y: viewport.height / 2 },
									{ x, y: viewport.height - y },
									{ x: viewport.width - x, y: viewport.height - y },
								].map(function (point) {
									return Array.from(document.elementsFromPoint(point.x, point.y))
								}),
								_loop4 = function _loop4(_i8) {
									var modalElement = stacks[_i8].find(function (elm) {
										var style = window.getComputedStyle(elm)
										return (
											parseInt(style.width, 10) >= percentWidth &&
											parseInt(style.height, 10) >= percentHeight &&
											'none' !== style.getPropertyValue('pointer-events') &&
											('absolute' === style.position || 'fixed' === style.position)
										)
									})
									if (
										modalElement &&
										stacks.every(function (stack) {
											return stack.includes(modalElement)
										})
									)
										return cache_default.set('isModalOpen', !0), { v: !0 }
								},
								_i8 = 0;
							_i8 < stacks.length;
							_i8++
						) {
							var _ret = _loop4(_i8)
							if ('object' === _typeof(_ret)) return _ret.v
						}
						cache_default.set('isModalOpen', void 0)
					}
					function _isMultiline(domNode) {
						var margin = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
							range = domNode.ownerDocument.createRange()
						range.setStart(domNode, 0), range.setEnd(domNode, domNode.childNodes.length)
						var _step4,
							lastLineEnd = 0,
							lineCount = 0,
							_iterator4 = _createForOfIteratorHelper(range.getClientRects())
						try {
							for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
								var rect = _step4.value
								if (!(rect.height <= margin))
									if (lastLineEnd > rect.top + margin)
										lastLineEnd = Math.max(lastLineEnd, rect.bottom)
									else {
										if (0 !== lineCount) return !0
										;(lastLineEnd = rect.bottom), lineCount++
									}
							}
						} catch (err) {
							_iterator4.e(err)
						} finally {
							_iterator4.f()
						}
						return !1
					}
					var is_node_default = function isNode(element) {
							return element instanceof window.Node
						},
						data = {},
						incomplete_data_default = {
							set: function set(key, reason) {
								if ('string' != typeof key) throw new Error('Incomplete data: key must be a string')
								return reason && (data[key] = reason), data[key]
							},
							get: function get(key) {
								return data[key]
							},
							clear: function clear() {
								data = {}
							},
						}
					var element_has_image_default = function elementHasImage(elm, style) {
						var nodeName2 = elm.nodeName.toUpperCase()
						if (['IMG', 'CANVAS', 'OBJECT', 'IFRAME', 'VIDEO', 'SVG'].includes(nodeName2))
							return incomplete_data_default.set('bgColor', 'imgNode'), !0
						var bgImageStyle = (style = style || window.getComputedStyle(elm)).getPropertyValue(
								'background-image',
							),
							hasBgImage = 'none' !== bgImageStyle
						if (hasBgImage) {
							var hasGradient = /gradient/.test(bgImageStyle)
							incomplete_data_default.set('bgColor', hasGradient ? 'bgGradient' : 'bgImage')
						}
						return hasBgImage
					}
					var color_default = function Color(red, green, blue, alpha) {
						;(this.red = red),
							(this.green = green),
							(this.blue = blue),
							(this.alpha = alpha),
							(this.toHexString = function toHexString() {
								var redString = Math.round(this.red).toString(16),
									greenString = Math.round(this.green).toString(16),
									blueString = Math.round(this.blue).toString(16)
								return (
									'#' +
									(this.red > 15.5 ? redString : '0' + redString) +
									(this.green > 15.5 ? greenString : '0' + greenString) +
									(this.blue > 15.5 ? blueString : '0' + blueString)
								)
							})
						var hexRegex = /^#[0-9a-f]{3,8}$/i,
							colorFnRegex = /^((?:rgb|hsl)a?)\s*\(([^\)]*)\)/i
						;(this.parseString = function parseString(colorString) {
							if (standards_default.cssColors[colorString] || 'transparent' === colorString) {
								var _ref27 = _slicedToArray(
										standards_default.cssColors[colorString] || [0, 0, 0],
										3,
									),
									red2 = _ref27[0],
									green2 = _ref27[1],
									blue2 = _ref27[2]
								return (
									(this.red = red2),
									(this.green = green2),
									(this.blue = blue2),
									void (this.alpha = 'transparent' === colorString ? 0 : 1)
								)
							}
							if (colorString.match(colorFnRegex)) this.parseColorFnString(colorString)
							else {
								if (!colorString.match(hexRegex))
									throw new Error('Unable to parse color "'.concat(colorString, '"'))
								this.parseHexString(colorString)
							}
						}),
							(this.parseRgbString = function parseRgbString(colorString) {
								if ('transparent' === colorString)
									return (this.red = 0), (this.green = 0), (this.blue = 0), void (this.alpha = 0)
								this.parseColorFnString(colorString)
							}),
							(this.parseHexString = function parseHexString(colorString) {
								if (colorString.match(hexRegex) && ![6, 8].includes(colorString.length)) {
									if ((colorString = colorString.replace('#', '')).length < 6) {
										var _colorString2 = _slicedToArray(colorString, 4),
											r = _colorString2[0],
											g = _colorString2[1],
											b = _colorString2[2],
											a = _colorString2[3]
										;(colorString = r + r + g + g + b + b), a && (colorString += a + a)
									}
									var aRgbHex = colorString.match(/.{1,2}/g)
									;(this.red = parseInt(aRgbHex[0], 16)),
										(this.green = parseInt(aRgbHex[1], 16)),
										(this.blue = parseInt(aRgbHex[2], 16)),
										aRgbHex[3] ? (this.alpha = parseInt(aRgbHex[3], 16) / 255) : (this.alpha = 1)
								}
							}),
							(this.parseColorFnString = function parseColorFnString(colorString) {
								var _ref29 = _slicedToArray(colorString.match(colorFnRegex) || [], 3),
									colorFunc = _ref29[1],
									colorValStr = _ref29[2]
								if (colorFunc && colorValStr) {
									var colorNums = colorValStr
										.split(/\s*[,\/\s]\s*/)
										.map(function (str) {
											return str.replace(',', '').trim()
										})
										.filter(function (str) {
											return '' !== str
										})
										.map(function (val, index) {
											return (function convertColorVal(colorFunc, value, index) {
												if (/%$/.test(value))
													return 3 === index
														? parseFloat(value) / 100
														: (255 * parseFloat(value)) / 100
												if ('h' === colorFunc[index]) {
													if (/turn$/.test(value)) return 360 * parseFloat(value)
													if (/rad$/.test(value)) return 57.3 * parseFloat(value)
												}
												return parseFloat(value)
											})(colorFunc, val, index)
										})
									'hsl' === colorFunc.substr(0, 3) &&
										(colorNums = (function hslToRgb(_ref24) {
											var _ref25 = _slicedToArray(_ref24, 4),
												hue = _ref25[0],
												saturation = _ref25[1],
												lightness = _ref25[2],
												alpha = _ref25[3]
											;(saturation /= 255), (lightness /= 255)
											var high = (1 - Math.abs(2 * lightness - 1)) * saturation,
												low = high * (1 - Math.abs(((hue / 60) % 2) - 1)),
												base = lightness - high / 2
											return (
												hue < 60
													? [high, low, 0]
													: hue < 120
													? [low, high, 0]
													: hue < 180
													? [0, high, low]
													: hue < 240
													? [0, low, high]
													: hue < 300
													? [low, 0, high]
													: [high, 0, low]
											)
												.map(function (color) {
													return Math.round(255 * (color + base))
												})
												.concat(alpha)
										})(colorNums)),
										(this.red = colorNums[0]),
										(this.green = colorNums[1]),
										(this.blue = colorNums[2]),
										(this.alpha = 'number' == typeof colorNums[3] ? colorNums[3] : 1)
								}
							}),
							(this.getRelativeLuminance = function getRelativeLuminance() {
								var rSRGB = this.red / 255,
									gSRGB = this.green / 255,
									bSRGB = this.blue / 255
								return (
									0.2126 *
										(rSRGB <= 0.03928 ? rSRGB / 12.92 : Math.pow((rSRGB + 0.055) / 1.055, 2.4)) +
									0.7152 *
										(gSRGB <= 0.03928 ? gSRGB / 12.92 : Math.pow((gSRGB + 0.055) / 1.055, 2.4)) +
									0.0722 *
										(bSRGB <= 0.03928 ? bSRGB / 12.92 : Math.pow((bSRGB + 0.055) / 1.055, 2.4))
								)
							})
					}
					var get_own_background_color_default = function getOwnBackgroundColor(elmStyle) {
						var bgColor = new color_default()
						if (
							(bgColor.parseString(elmStyle.getPropertyValue('background-color')),
							0 !== bgColor.alpha)
						) {
							var opacity = elmStyle.getPropertyValue('opacity')
							bgColor.alpha = bgColor.alpha * opacity
						}
						return bgColor
					}
					var is_opaque_default = function isOpaque(node) {
						var style = window.getComputedStyle(node)
						return (
							element_has_image_default(node, style) ||
							1 === get_own_background_color_default(style).alpha
						)
					}
					function _isSkipLink(element) {
						if (!element.href) return !1
						var firstPageLink = cache_default.get('firstPageLink', generateFirstPageLink)
						return (
							!firstPageLink ||
							element.compareDocumentPosition(firstPageLink.actualNode) ===
								element.DOCUMENT_POSITION_FOLLOWING
						)
					}
					function generateFirstPageLink() {
						return (
							(window.location.origin
								? query_selector_all_default(axe._tree, 'a[href]:not([href^="javascript:"])').find(
										function (link) {
											return !_isCurrentPageLink(link.actualNode)
										},
								  )
								: query_selector_all_default(
										axe._tree,
										'a:not([href^="#"]):not([href^="/#"]):not([href^="javascript:"])',
								  )[0]) || null
						)
					}
					var clipRegex2 = /rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/,
						clipPathRegex2 = /(\w+)\((\d+)/
					function isVisible(el, screenReader, recursed) {
						var _window$Node2
						if (!el) throw new TypeError('Cannot determine if element is visible for non-DOM nodes')
						var vNode =
							el instanceof abstract_virtual_node_default ? el : get_node_from_tree_default(el)
						el = vNode ? vNode.actualNode : el
						var cacheName = '_isVisible' + (screenReader ? 'ScreenReader' : ''),
							_ref31 =
								null !== (_window$Node2 = window.Node) && void 0 !== _window$Node2
									? _window$Node2
									: {},
							DOCUMENT_NODE = _ref31.DOCUMENT_NODE,
							DOCUMENT_FRAGMENT_NODE = _ref31.DOCUMENT_FRAGMENT_NODE,
							nodeType = vNode ? vNode.props.nodeType : el.nodeType,
							nodeName2 = vNode ? vNode.props.nodeName : el.nodeName.toLowerCase()
						if (vNode && void 0 !== vNode[cacheName]) return vNode[cacheName]
						if (nodeType === DOCUMENT_NODE) return !0
						if (['style', 'script', 'noscript', 'template'].includes(nodeName2)) return !1
						if (
							(el && nodeType === DOCUMENT_FRAGMENT_NODE && (el = el.host), screenReader) &&
							'true' === (vNode ? vNode.attr('aria-hidden') : el.getAttribute('aria-hidden'))
						)
							return !1
						if (!el) {
							var parent2 = vNode.parent,
								visible3 = !0
							return (
								parent2 && (visible3 = isVisible(parent2, screenReader, !0)),
								vNode && (vNode[cacheName] = visible3),
								visible3
							)
						}
						var style = window.getComputedStyle(el, null)
						if (null === style) return !1
						if ('area' === nodeName2)
							return (function isAreaVisible(el, screenReader, recursed) {
								var mapEl = find_up_default(el, 'map')
								if (!mapEl) return !1
								var mapElName = mapEl.getAttribute('name')
								if (!mapElName) return !1
								var mapElRootNode = get_root_node_default2(el)
								if (!mapElRootNode || 9 !== mapElRootNode.nodeType) return !1
								var refs = query_selector_all_default(
									axe._tree,
									'img[usemap="#'.concat(escape_selector_default(mapElName), '"]'),
								)
								return (
									!(!refs || !refs.length) &&
									refs.some(function (_ref30) {
										return isVisible(_ref30.actualNode, screenReader, recursed)
									})
								)
							})(el, screenReader, recursed)
						if ('none' === style.getPropertyValue('display')) return !1
						var elHeight = parseInt(style.getPropertyValue('height')),
							elWidth = parseInt(style.getPropertyValue('width')),
							scroll = _getScroll(el),
							scrollableWithZeroHeight = scroll && 0 === elHeight,
							scrollableWithZeroWidth = scroll && 0 === elWidth,
							posAbsoluteOverflowHiddenAndSmall =
								'absolute' === style.getPropertyValue('position') &&
								(elHeight < 2 || elWidth < 2) &&
								'hidden' === style.getPropertyValue('overflow')
						if (
							!screenReader &&
							((function isClipped(style) {
								var matchesClip = style.getPropertyValue('clip').match(clipRegex2),
									matchesClipPath = style.getPropertyValue('clip-path').match(clipPathRegex2)
								if (matchesClip && 5 === matchesClip.length) {
									var position = style.getPropertyValue('position')
									if (['fixed', 'absolute'].includes(position))
										return (
											matchesClip[3] - matchesClip[1] <= 0 && matchesClip[2] - matchesClip[4] <= 0
										)
								}
								if (matchesClipPath) {
									var type = matchesClipPath[1],
										value = parseInt(matchesClipPath[2], 10)
									switch (type) {
										case 'inset':
											return value >= 50
										case 'circle':
											return 0 === value
									}
								}
								return !1
							})(style) ||
								'0' === style.getPropertyValue('opacity') ||
								scrollableWithZeroHeight ||
								scrollableWithZeroWidth ||
								posAbsoluteOverflowHiddenAndSmall)
						)
							return !1
						if (
							!recursed &&
							('hidden' === style.getPropertyValue('visibility') ||
								(!screenReader && is_offscreen_default(el)))
						)
							return !1
						var parent = el.assignedSlot ? el.assignedSlot : el.parentNode,
							visible2 = !1
						return (
							parent && (visible2 = isVisible(parent, screenReader, !0)),
							vNode && (vNode[cacheName] = visible2),
							visible2
						)
					}
					var is_visible_default = isVisible
					var reduce_to_elements_below_floating_default = function reduceToElementsBelowFloating(
						elements,
						targetNode,
					) {
						for (
							var floatingPositions = ['fixed', 'sticky'],
								finalElements = [],
								targetFound = !1,
								index = 0;
							index < elements.length;
							++index
						) {
							var currentNode = elements[index]
							currentNode === targetNode && (targetFound = !0)
							var style = window.getComputedStyle(currentNode)
							targetFound || -1 === floatingPositions.indexOf(style.position)
								? finalElements.push(currentNode)
								: (finalElements = [])
						}
						return finalElements
					}
					function _visuallyContains(node, parent) {
						var parentScrollAncestor = getScrollAncestor(parent)
						do {
							var nextScrollAncestor = getScrollAncestor(node)
							if (nextScrollAncestor === parentScrollAncestor || nextScrollAncestor === parent)
								return contains2(node, parent)
							node = nextScrollAncestor
						} while (node)
						return !1
					}
					function getScrollAncestor(node) {
						for (var ancestor = get_node_from_tree_default(node).parent; ancestor; ) {
							if (_getScroll(ancestor.actualNode)) return ancestor.actualNode
							ancestor = ancestor.parent
						}
					}
					function contains2(node, parent) {
						var style = window.getComputedStyle(parent),
							overflow = style.getPropertyValue('overflow')
						if ('inline' === style.getPropertyValue('display')) return !0
						var clientRects = Array.from(node.getClientRects()),
							boundingRect = parent.getBoundingClientRect(),
							rect = {
								left: boundingRect.left,
								top: boundingRect.top,
								width: boundingRect.width,
								height: boundingRect.height,
							}
						return (
							(['scroll', 'auto'].includes(overflow) || parent instanceof window.HTMLHtmlElement) &&
								((rect.width = parent.scrollWidth), (rect.height = parent.scrollHeight)),
							1 === clientRects.length &&
								'hidden' === overflow &&
								'nowrap' === style.getPropertyValue('white-space') &&
								(clientRects[0] = rect),
							clientRects.some(function (clientRect) {
								return !(
									Math.ceil(clientRect.left) < Math.floor(rect.left) ||
									Math.ceil(clientRect.top) < Math.floor(rect.top) ||
									Math.floor(clientRect.left + clientRect.width) >
										Math.ceil(rect.left + rect.width) ||
									Math.floor(clientRect.top + clientRect.height) > Math.ceil(rect.top + rect.height)
								)
							})
						)
					}
					var shadow_elements_from_point_default = function shadowElementsFromPoint(nodeX, nodeY) {
						var root = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document,
							i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
						if (i > 999) throw new Error('Infinite loop detected')
						return Array.from(root.elementsFromPoint(nodeX, nodeY) || [])
							.filter(function (nodes) {
								return get_root_node_default2(nodes) === root
							})
							.reduce(function (stack, elm) {
								if (is_shadow_root_default(elm)) {
									var shadowStack = shadowElementsFromPoint(nodeX, nodeY, elm.shadowRoot, i + 1)
									;(stack = stack.concat(shadowStack)).length &&
										_visuallyContains(stack[0], elm) &&
										stack.push(elm)
								} else stack.push(elm)
								return stack
							}, [])
					}
					function getSearchPairs(searchStr) {
						var query = {}
						if (!searchStr || !searchStr.length) return query
						var pairs = searchStr.substring(1).split('&')
						if (!pairs || !pairs.length) return query
						for (var index = 0; index < pairs.length; index++) {
							var _pair$split2 = _slicedToArray(pairs[index].split('='), 2),
								key = _pair$split2[0],
								_pair$split2$ = _pair$split2[1],
								value = void 0 === _pair$split2$ ? '' : _pair$split2$
							query[decodeURIComponent(key)] = decodeURIComponent(value)
						}
						return query
					}
					function getHashRoute(hash) {
						if (!hash) return ''
						var hasMatch = hash.match(/#!?\/?/g)
						return hasMatch ? ('#' === _slicedToArray(hasMatch, 1)[0] ? '' : hash) : ''
					}
					var url_props_from_attribute_default = function urlPropsFromAttribute(node, attribute) {
						if (node.hasAttribute(attribute)) {
							var nodeName2 = node.nodeName.toUpperCase(),
								parser2 = node
							;(['A', 'AREA'].includes(nodeName2) && !node.ownerSVGElement) ||
								((parser2 = document.createElement('a')).href = node.getAttribute(attribute))
							var port,
								protocol = ['https:', 'ftps:'].includes(parser2.protocol)
									? parser2.protocol.replace(/s:$/, ':')
									: parser2.protocol,
								_getPathnameOrFilenam = (function getPathnameOrFilename(pathname) {
									var filename = pathname.split('/').pop()
									if (!filename || -1 === filename.indexOf('.')) return { pathname, filename: '' }
									return {
										pathname: pathname.replace(filename, ''),
										filename: /index./.test(filename) ? '' : filename,
									}
								})(/^\//.test(parser2.pathname) ? parser2.pathname : '/'.concat(parser2.pathname)),
								pathname = _getPathnameOrFilenam.pathname,
								filename = _getPathnameOrFilenam.filename
							return {
								protocol,
								hostname: parser2.hostname,
								port:
									((port = parser2.port), ['443', '80'], ['443', '80'].includes(port) ? '' : port),
								pathname: /\/$/.test(pathname) ? pathname : ''.concat(pathname, '/'),
								search: getSearchPairs(parser2.search),
								hash: getHashRoute(parser2.hash),
								filename,
							}
						}
					}
					var isXHTMLGlobal,
						visually_overlaps_default = function visuallyOverlaps(rect, parent) {
							var parentRect = parent.getBoundingClientRect(),
								parentTop = parentRect.top,
								parentLeft = parentRect.left,
								parentScrollArea_top = parentTop - parent.scrollTop,
								parentScrollArea_bottom = parentTop - parent.scrollTop + parent.scrollHeight,
								parentScrollArea_left = parentLeft - parent.scrollLeft,
								parentScrollArea_right = parentLeft - parent.scrollLeft + parent.scrollWidth
							if (
								(rect.left > parentScrollArea_right && rect.left > parentRect.right) ||
								(rect.top > parentScrollArea_bottom && rect.top > parentRect.bottom) ||
								(rect.right < parentScrollArea_left && rect.right < parentRect.left) ||
								(rect.bottom < parentScrollArea_top && rect.bottom < parentRect.top)
							)
								return !1
							var style = window.getComputedStyle(parent)
							return (
								!(rect.left > parentRect.right || rect.top > parentRect.bottom) ||
								'scroll' === style.overflow ||
								'auto' === style.overflow ||
								parent instanceof window.HTMLBodyElement ||
								parent instanceof window.HTMLHtmlElement
							)
						},
						nodeIndex = 0,
						virtual_node_default = (function (_abstract_virtual_nod) {
							_inherits(VirtualNode, _abstract_virtual_nod)
							var _super = _createSuper(VirtualNode)
							function VirtualNode(node, parent, shadowId) {
								var _this
								if (
									(_classCallCheck(this, VirtualNode),
									((_this = _super.call(this)).shadowId = shadowId),
									(_this.children = []),
									(_this.actualNode = node),
									(_this.parent = parent),
									parent || (nodeIndex = 0),
									(_this.nodeIndex = nodeIndex++),
									(_this._isHidden = null),
									(_this._cache = {}),
									void 0 === isXHTMLGlobal &&
										(isXHTMLGlobal = is_xhtml_default(node.ownerDocument)),
									(_this._isXHTML = isXHTMLGlobal),
									'input' === node.nodeName.toLowerCase())
								) {
									var type = node.getAttribute('type')
									;(type = _this._isXHTML ? type : (type || '').toLowerCase()),
										valid_input_type_default().includes(type) || (type = 'text'),
										(_this._type = type)
								}
								return (
									cache_default.get('nodeMap') &&
										cache_default.get('nodeMap').set(node, _assertThisInitialized(_this)),
									_this
								)
							}
							return (
								_createClass(VirtualNode, [
									{
										key: 'props',
										get: function get() {
											if (!this._cache.hasOwnProperty('props')) {
												var _this$actualNode = this.actualNode,
													nodeType = _this$actualNode.nodeType,
													nodeName2 = _this$actualNode.nodeName,
													id = _this$actualNode.id,
													multiple = _this$actualNode.multiple,
													nodeValue = _this$actualNode.nodeValue,
													value = _this$actualNode.value,
													selected = _this$actualNode.selected
												this._cache.props = {
													nodeType,
													nodeName: this._isXHTML ? nodeName2 : nodeName2.toLowerCase(),
													id,
													type: this._type,
													multiple,
													nodeValue,
													value,
													selected,
												}
											}
											return this._cache.props
										},
									},
									{
										key: 'attr',
										value: function attr(attrName) {
											return 'function' != typeof this.actualNode.getAttribute
												? null
												: this.actualNode.getAttribute(attrName)
										},
									},
									{
										key: 'hasAttr',
										value: function hasAttr(attrName) {
											return (
												'function' == typeof this.actualNode.hasAttribute &&
												this.actualNode.hasAttribute(attrName)
											)
										},
									},
									{
										key: 'attrNames',
										get: function get() {
											var attrs
											this._cache.hasOwnProperty('attrNames') ||
												((attrs =
													this.actualNode.attributes instanceof window.NamedNodeMap
														? this.actualNode.attributes
														: this.actualNode.cloneNode(!1).attributes),
												(this._cache.attrNames = Array.from(attrs).map(function (attr) {
													return attr.name
												})))
											return this._cache.attrNames
										},
									},
									{
										key: 'getComputedStylePropertyValue',
										value: function getComputedStylePropertyValue(property) {
											var key = 'computedStyle_' + property
											return (
												this._cache.hasOwnProperty(key) ||
													(this._cache.hasOwnProperty('computedStyle') ||
														(this._cache.computedStyle = window.getComputedStyle(this.actualNode)),
													(this._cache[key] =
														this._cache.computedStyle.getPropertyValue(property))),
												this._cache[key]
											)
										},
									},
									{
										key: 'isFocusable',
										get: function get() {
											return (
												this._cache.hasOwnProperty('isFocusable') ||
													(this._cache.isFocusable = _isFocusable(this.actualNode)),
												this._cache.isFocusable
											)
										},
									},
									{
										key: 'tabbableElements',
										get: function get() {
											return (
												this._cache.hasOwnProperty('tabbableElements') ||
													(this._cache.tabbableElements = get_tabbable_elements_default(this)),
												this._cache.tabbableElements
											)
										},
									},
									{
										key: 'clientRects',
										get: function get() {
											return (
												this._cache.hasOwnProperty('clientRects') ||
													(this._cache.clientRects = Array.from(
														this.actualNode.getClientRects(),
													).filter(function (rect) {
														return rect.width > 0
													})),
												this._cache.clientRects
											)
										},
									},
									{
										key: 'boundingClientRect',
										get: function get() {
											return (
												this._cache.hasOwnProperty('boundingClientRect') ||
													(this._cache.boundingClientRect =
														this.actualNode.getBoundingClientRect()),
												this._cache.boundingClientRect
											)
										},
									},
								]),
								VirtualNode
							)
						})(abstract_virtual_node_default)
					var hasShadowRoot,
						token_list_default = function tokenList(str) {
							return (str || '')
								.trim()
								.replace(/\s{2,}/g, ' ')
								.split(' ')
						},
						idsKey = ' [idsMap]'
					function getNodesMatchingExpression(domTree, expressions, filter) {
						var selectorMap = domTree[0]._selectorMap
						if (selectorMap) {
							for (var shadowId = domTree[0].shadowId, _i9 = 0; _i9 < expressions.length; _i9++)
								if (
									expressions[_i9].length > 1 &&
									expressions[_i9].some(function (expression) {
										return isGlobalSelector(expression)
									})
								)
									return
							var nodeSet = new Set()
							expressions.forEach(function (expression) {
								var _matchingNodes$nodes,
									matchingNodes = (function findMatchingNodes(expression, selectorMap, shadowId) {
										var exp = expression[expression.length - 1],
											nodes = null,
											isComplexSelector = expression.length > 1 || !!exp.pseudos || !!exp.classes
										if (isGlobalSelector(exp)) nodes = selectorMap['*']
										else {
											if (exp.id) {
												var _selectorMap$idsKey$e
												if (
													!selectorMap[idsKey] ||
													null === (_selectorMap$idsKey$e = selectorMap[idsKey][exp.id]) ||
													void 0 === _selectorMap$idsKey$e ||
													!_selectorMap$idsKey$e.length
												)
													return
												nodes = selectorMap[idsKey][exp.id].filter(function (node) {
													return node.shadowId === shadowId
												})
											}
											if (exp.tag && '*' !== exp.tag) {
												var _selectorMap$exp$tag
												if (
													null === (_selectorMap$exp$tag = selectorMap[exp.tag]) ||
													void 0 === _selectorMap$exp$tag ||
													!_selectorMap$exp$tag.length
												)
													return
												var cachedNodes = selectorMap[exp.tag]
												nodes = nodes ? getSharedValues(cachedNodes, nodes) : cachedNodes
											}
											if (exp.classes) {
												var _selectorMap$Class
												if (
													null === (_selectorMap$Class = selectorMap['[class]']) ||
													void 0 === _selectorMap$Class ||
													!_selectorMap$Class.length
												)
													return
												var _cachedNodes = selectorMap['[class]']
												nodes = nodes ? getSharedValues(_cachedNodes, nodes) : _cachedNodes
											}
											if (exp.attributes)
												for (var _i10 = 0; _i10 < exp.attributes.length; _i10++) {
													var _selectorMap,
														attr = exp.attributes[_i10]
													if (
														('attrValue' === attr.type && (isComplexSelector = !0),
														null === (_selectorMap = selectorMap['['.concat(attr.key, ']')]) ||
															void 0 === _selectorMap ||
															!_selectorMap.length)
													)
														return
													var _cachedNodes2 = selectorMap['['.concat(attr.key, ']')]
													nodes = nodes ? getSharedValues(_cachedNodes2, nodes) : _cachedNodes2
												}
										}
										return { nodes, isComplexSelector }
									})(expression, selectorMap, shadowId)
								null == matchingNodes ||
									null === (_matchingNodes$nodes = matchingNodes.nodes) ||
									void 0 === _matchingNodes$nodes ||
									_matchingNodes$nodes.forEach(function (node) {
										;(matchingNodes.isComplexSelector && !_matchesExpression(node, expression)) ||
											nodeSet.add(node)
									})
							})
							var matchedNodes = []
							return (
								nodeSet.forEach(function (node) {
									return matchedNodes.push(node)
								}),
								filter && (matchedNodes = matchedNodes.filter(filter)),
								matchedNodes.sort(function (a, b) {
									return a.nodeIndex - b.nodeIndex
								})
							)
						}
					}
					function isGlobalSelector(expression) {
						return (
							'*' === expression.tag &&
							!expression.attributes &&
							!expression.id &&
							!expression.classes
						)
					}
					function getSharedValues(a, b) {
						return a.filter(function (node) {
							return b.includes(node)
						})
					}
					function cacheSelector(key, vNode, map) {
						;(map[key] = map[key] || []), map[key].push(vNode)
					}
					function cacheNodeSelectors(vNode, selectorMap) {
						1 === vNode.props.nodeType &&
							(cacheSelector(vNode.props.nodeName, vNode, selectorMap),
							cacheSelector('*', vNode, selectorMap),
							vNode.attrNames.forEach(function (attrName) {
								'id' === attrName &&
									((selectorMap[idsKey] = selectorMap[idsKey] || {}),
									token_list_default(vNode.attr(attrName)).forEach(function (value) {
										cacheSelector(value, vNode, selectorMap[idsKey])
									})),
									cacheSelector('['.concat(attrName, ']'), vNode, selectorMap)
							}))
					}
					function createNode(node, parent, shadowId) {
						var vNode = new virtual_node_default(node, parent, shadowId)
						return cacheNodeSelectors(vNode, cache_default.get('selectorMap')), vNode
					}
					function flattenTree(node, shadowId, parent) {
						var retVal, realArray, nodeName2
						function reduceShadowDOM(res, child, parent2) {
							var replacements = flattenTree(child, shadowId, parent2)
							return replacements && (res = res.concat(replacements)), res
						}
						if (
							(node.documentElement && (node = node.documentElement),
							(nodeName2 = node.nodeName.toLowerCase()),
							is_shadow_root_default(node))
						)
							return (
								(hasShadowRoot = !0),
								(retVal = createNode(node, parent, shadowId)),
								(shadowId = 'a' + Math.random().toString().substring(2)),
								(realArray = Array.from(node.shadowRoot.childNodes)),
								(retVal.children = realArray.reduce(function (res, child) {
									return reduceShadowDOM(res, child, retVal)
								}, [])),
								[retVal]
							)
						if ('content' === nodeName2 && 'function' == typeof node.getDistributedNodes)
							return (realArray = Array.from(node.getDistributedNodes())).reduce(function (
								res,
								child,
							) {
								return reduceShadowDOM(res, child, parent)
							},
							[])
						if ('slot' === nodeName2 && 'function' == typeof node.assignedNodes) {
							;(realArray = Array.from(node.assignedNodes())).length ||
								(realArray = (function getSlotChildren(node) {
									var retVal = []
									for (node = node.firstChild; node; ) retVal.push(node), (node = node.nextSibling)
									return retVal
								})(node))
							window.getComputedStyle(node)
							return realArray.reduce(function (res, child) {
								return reduceShadowDOM(res, child, parent)
							}, [])
						}
						return 1 === node.nodeType
							? ((retVal = createNode(node, parent, shadowId)),
							  (realArray = Array.from(node.childNodes)),
							  (retVal.children = realArray.reduce(function (res, child) {
									return reduceShadowDOM(res, child, retVal)
							  }, [])),
							  [retVal])
							: 3 === node.nodeType
							? [createNode(node, parent)]
							: void 0
					}
					var get_flattened_tree_default = function getFlattenedTree() {
						var node =
								arguments.length > 0 && void 0 !== arguments[0]
									? arguments[0]
									: document.documentElement,
							shadowId = arguments.length > 1 ? arguments[1] : void 0
						hasShadowRoot = !1
						var selectorMap = {}
						cache_default.set('nodeMap', new WeakMap()),
							cache_default.set('selectorMap', selectorMap)
						var tree = flattenTree(node, shadowId, null)
						return (
							(tree[0]._selectorMap = selectorMap), (tree[0]._hasShadowRoot = hasShadowRoot), tree
						)
					}
					var get_base_lang_default = function getBaseLang(lang) {
						return lang ? lang.trim().split('-')[0].toLowerCase() : ''
					}
					var failure_summary_default = function failureSummary(nodeData) {
						var failingChecks = {}
						return (
							(failingChecks.none = nodeData.none.concat(nodeData.all)),
							(failingChecks.any = nodeData.any),
							Object.keys(failingChecks)
								.map(function (key) {
									if (failingChecks[key].length) {
										var sum = axe._audit.data.failureSummaries[key]
										return sum && 'function' == typeof sum.failureMessage
											? sum.failureMessage(
													failingChecks[key].map(function (check) {
														return check.message || ''
													}),
											  )
											: void 0
									}
								})
								.filter(function (i) {
									return void 0 !== i
								})
								.join('\n\n')
						)
					}
					function incompleteFallbackMessage() {
						var incompleteFallbackMessage2 = axe._audit.data.incompleteFallbackMessage
						return (
							'function' == typeof incompleteFallbackMessage2 &&
								(incompleteFallbackMessage2 = incompleteFallbackMessage2()),
							'string' != typeof incompleteFallbackMessage2 ? '' : incompleteFallbackMessage2
						)
					}
					var resultKeys = constants_default.resultGroups
					var process_aggregate_default = function processAggregate(results, options) {
							var resultObject = axe.utils.aggregateResult(results)
							return (
								resultKeys.forEach(function (key) {
									options.resultTypes &&
										!options.resultTypes.includes(key) &&
										(resultObject[key] || []).forEach(function (ruleResult) {
											Array.isArray(ruleResult.nodes) &&
												ruleResult.nodes.length > 0 &&
												(ruleResult.nodes = [ruleResult.nodes[0]])
										}),
										(resultObject[key] = (resultObject[key] || []).map(function (ruleResult) {
											return (
												(ruleResult = Object.assign({}, ruleResult)),
												Array.isArray(ruleResult.nodes) &&
													ruleResult.nodes.length > 0 &&
													(ruleResult.nodes = ruleResult.nodes.map(function (subResult) {
														return (
															'object' === _typeof(subResult.node) &&
																((subResult.html = subResult.node.source),
																options.elementRef &&
																	!subResult.node.fromFrame &&
																	(subResult.element = subResult.node.element),
																(!1 !== options.selectors || subResult.node.fromFrame) &&
																	(subResult.target = subResult.node.selector),
																options.ancestry && (subResult.ancestry = subResult.node.ancestry),
																options.xpath && (subResult.xpath = subResult.node.xpath)),
															delete subResult.result,
															delete subResult.node,
															(function normalizeRelatedNodes(node, options) {
																;['any', 'all', 'none'].forEach(function (type) {
																	Array.isArray(node[type]) &&
																		node[type]
																			.filter(function (checkRes) {
																				return Array.isArray(checkRes.relatedNodes)
																			})
																			.forEach(function (checkRes) {
																				checkRes.relatedNodes = checkRes.relatedNodes.map(function (
																					relatedNode,
																				) {
																					var _relatedNode$source,
																						_relatedNode$element,
																						_relatedNode$selector,
																						_relatedNode$ancestry,
																						_relatedNode$xpath,
																						res = {
																							html:
																								null !==
																									(_relatedNode$source =
																										null == relatedNode
																											? void 0
																											: relatedNode.source) &&
																								void 0 !== _relatedNode$source
																									? _relatedNode$source
																									: 'Undefined',
																						}
																					return (
																						!options.elementRef ||
																							(null != relatedNode && relatedNode.fromFrame) ||
																							(res.element =
																								null !==
																									(_relatedNode$element =
																										null == relatedNode
																											? void 0
																											: relatedNode.element) &&
																								void 0 !== _relatedNode$element
																									? _relatedNode$element
																									: null),
																						(!1 !== options.selectors ||
																							(null != relatedNode && relatedNode.fromFrame)) &&
																							(res.target =
																								null !==
																									(_relatedNode$selector =
																										null == relatedNode
																											? void 0
																											: relatedNode.selector) &&
																								void 0 !== _relatedNode$selector
																									? _relatedNode$selector
																									: [':root']),
																						options.ancestry &&
																							(res.ancestry =
																								null !==
																									(_relatedNode$ancestry =
																										null == relatedNode
																											? void 0
																											: relatedNode.ancestry) &&
																								void 0 !== _relatedNode$ancestry
																									? _relatedNode$ancestry
																									: [':root']),
																						options.xpath &&
																							(res.xpath =
																								null !==
																									(_relatedNode$xpath =
																										null == relatedNode
																											? void 0
																											: relatedNode.xpath) &&
																								void 0 !== _relatedNode$xpath
																									? _relatedNode$xpath
																									: ['/']),
																						res
																					)
																				})
																			})
																})
															})(subResult, options),
															subResult
														)
													})),
												resultKeys.forEach(function (key2) {
													return delete ruleResult[key2]
												}),
												delete ruleResult.pageLevel,
												delete ruleResult.result,
												ruleResult
											)
										}))
								}),
								resultObject
							)
						},
						dataRegex = /\$\{\s?data\s?\}/g
					function substitute(str, data2) {
						if ('string' == typeof data2) return str.replace(dataRegex, data2)
						for (var prop in data2)
							if (data2.hasOwnProperty(prop)) {
								var regex = new RegExp('\\${\\s?data\\.' + prop + '\\s?}', 'g'),
									replace = void 0 === data2[prop] ? '' : String(data2[prop])
								str = str.replace(regex, replace)
							}
						return str
					}
					var process_message_default = function processMessage(message, data2) {
						if (message) {
							if (Array.isArray(data2))
								return (
									(data2.values = data2.join(', ')),
									'string' == typeof message.singular && 'string' == typeof message.plural
										? substitute(1 === data2.length ? message.singular : message.plural, data2)
										: substitute(message, data2)
								)
							if ('string' == typeof message) return substitute(message, data2)
							if ('string' == typeof data2) return substitute(message[data2], data2)
							var str = message.default || incompleteFallbackMessage()
							return (
								data2 &&
									data2.messageKey &&
									message[data2.messageKey] &&
									(str = message[data2.messageKey]),
								processMessage(str, data2)
							)
						}
					}
					var get_check_message_default = function getCheckMessage(checkId, type, data2) {
						var check = axe._audit.data.checks[checkId]
						if (!check)
							throw new Error('Cannot get message for unknown check: '.concat(checkId, '.'))
						if (!check.messages[type])
							throw new Error(
								'Check "'.concat(checkId, '"" does not have a "').concat(type, '" message.'),
							)
						return process_message_default(check.messages[type], data2)
					}
					var get_check_option_default = function getCheckOption(check, ruleID, options) {
						var ruleCheckOption = (((options.rules && options.rules[ruleID]) || {}).checks || {})[
								check.id
							],
							checkOption = (options.checks || {})[check.id],
							enabled = check.enabled,
							opts = check.options
						return (
							checkOption &&
								(checkOption.hasOwnProperty('enabled') && (enabled = checkOption.enabled),
								checkOption.hasOwnProperty('options') && (opts = checkOption.options)),
							ruleCheckOption &&
								(ruleCheckOption.hasOwnProperty('enabled') && (enabled = ruleCheckOption.enabled),
								ruleCheckOption.hasOwnProperty('options') && (opts = ruleCheckOption.options)),
							{ enabled, options: opts, absolutePaths: options.absolutePaths }
						)
					}
					function _getEnvironmentData() {
						var _win$location,
							metadata = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
							win = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window
						return metadata && 'object' === _typeof(metadata)
							? metadata
							: 'object' !== _typeof(win)
							? {}
							: {
									testEngine: { name: 'axe-core', version: axe.version },
									testRunner: { name: axe._audit.brand },
									testEnvironment: getTestEnvironment(win),
									timestamp: new Date().toISOString(),
									url:
										null === (_win$location = win.location) || void 0 === _win$location
											? void 0
											: _win$location.href,
							  }
					}
					function getTestEnvironment(win) {
						if (!win.navigator || 'object' !== _typeof(win.navigator)) return {}
						var navigator = win.navigator,
							innerHeight = win.innerHeight,
							innerWidth = win.innerWidth,
							_ref32 =
								(function getOrientation(_ref33) {
									var screen = _ref33.screen
									return screen.orientation || screen.msOrientation || screen.mozOrientation
								})(win) || {},
							angle = _ref32.angle,
							type = _ref32.type
						return {
							userAgent: navigator.userAgent,
							windowWidth: innerWidth,
							windowHeight: innerHeight,
							orientationAngle: angle,
							orientationType: type,
						}
					}
					function createFrameContext(frame, _ref34) {
						var focusable = _ref34.focusable,
							page = _ref34.page
						return {
							node: frame,
							include: [],
							exclude: [],
							initiator: !1,
							focusable: focusable && frameFocusable(frame),
							size: getBoundingSize(frame),
							page,
						}
					}
					function frameFocusable(frame) {
						var tabIndex = frame.getAttribute('tabindex')
						if (!tabIndex) return !0
						var _int = parseInt(tabIndex, 10)
						return isNaN(_int) || _int >= 0
					}
					function getBoundingSize(domNode) {
						var width = parseInt(domNode.getAttribute('width'), 10),
							height = parseInt(domNode.getAttribute('height'), 10)
						if (isNaN(width) || isNaN(height)) {
							var rect = domNode.getBoundingClientRect()
							;(width = isNaN(width) ? rect.width : width),
								(height = isNaN(height) ? rect.height : height)
						}
						return { width, height }
					}
					function pushUniqueFrameSelector(context, type, selectorArray) {
						context.frames = context.frames || []
						var frameSelector = selectorArray.shift(),
							frames = document.querySelectorAll(frameSelector)
						Array.from(frames).forEach(function (frame) {
							if (
								(context.frames.forEach(function (contextFrame) {
									contextFrame.node === frame && contextFrame[type].push(selectorArray)
								}),
								!context.frames.find(function (result) {
									return result.node === frame
								}))
							) {
								var result = createFrameContext(frame, context)
								selectorArray && result[type].push(selectorArray), context.frames.push(result)
							}
						})
					}
					function parseSelectorArray(context, type) {
						for (var item, nodeList, result = [], i = 0, l = context[type].length; i < l; i++) {
							if ('string' == typeof (item = context[type][i])) {
								;(nodeList = Array.from(document.querySelectorAll(item))),
									(result = result.concat(
										nodeList.map(function (node) {
											return get_node_from_tree_default(node)
										}),
									))
								break
							}
							!item || !item.length || item instanceof window.Node
								? item instanceof window.Node &&
								  (item.documentElement instanceof window.Node
										? result.push(context.flatTree[0])
										: result.push(get_node_from_tree_default(item)))
								: item.length > 1
								? pushUniqueFrameSelector(context, type, item)
								: ((nodeList = Array.from(document.querySelectorAll(item[0]))),
								  (result = result.concat(
										nodeList.map(function (node) {
											return get_node_from_tree_default(node)
										}),
								  )))
						}
						return result.filter(function (r) {
							return r
						})
					}
					function Context(spec, flatTree) {
						var _spec,
							_spec2,
							_spec3,
							_spec4,
							_this2 = this
						;(spec = clone_default(spec)),
							(this.frames = []),
							(this.page =
								'boolean' ==
								typeof (null === (_spec = spec) || void 0 === _spec ? void 0 : _spec.page)
									? spec.page
									: void 0),
							(this.initiator =
								'boolean' !=
									typeof (null === (_spec2 = spec) || void 0 === _spec2
										? void 0
										: _spec2.initiator) || spec.initiator),
							(this.focusable =
								'boolean' !=
									typeof (null === (_spec3 = spec) || void 0 === _spec3
										? void 0
										: _spec3.focusable) || spec.focusable),
							(this.size =
								'object' ===
								_typeof(null === (_spec4 = spec) || void 0 === _spec4 ? void 0 : _spec4.size)
									? spec.size
									: {}),
							(spec = (function normalizeContext(context) {
								if (
									(context && 'object' === _typeof(context)) ||
									context instanceof window.NodeList
								) {
									if (context instanceof window.Node) return { include: [context], exclude: [] }
									if (context.hasOwnProperty('include') || context.hasOwnProperty('exclude'))
										return {
											include:
												context.include && +context.include.length ? context.include : [document],
											exclude: context.exclude || [],
										}
									if (context.length === +context.length) return { include: context, exclude: [] }
								}
								return 'string' == typeof context
									? { include: [context], exclude: [] }
									: { include: [document], exclude: [] }
							})(spec)),
							(this.flatTree =
								null != flatTree
									? flatTree
									: get_flattened_tree_default(
											(function getRootNode2(_ref36) {
												for (
													var include = _ref36.include,
														exclude = _ref36.exclude,
														selectors = Array.from(include).concat(Array.from(exclude)),
														i = 0;
													i < selectors.length;
													++i
												) {
													var item = selectors[i]
													if (item instanceof window.Element)
														return item.ownerDocument.documentElement
													if (item instanceof window.Document) return item.documentElement
												}
												return document.documentElement
											})(spec),
									  )),
							(this.exclude = spec.exclude),
							(this.include = spec.include),
							(this.include = parseSelectorArray(this, 'include')),
							(this.exclude = parseSelectorArray(this, 'exclude')),
							select_default('frame, iframe', this).forEach(function (frame) {
								is_node_in_context_default(frame, _this2) &&
									(function pushUniqueFrame(context, frame) {
										_isVisibleToScreenReaders(frame) &&
											!find_by_default(context.frames, 'node', frame) &&
											context.frames.push(createFrameContext(frame, context))
									})(_this2, frame.actualNode)
							}),
							void 0 === this.page &&
								((this.page = (function isPageContext(_ref35) {
									var include = _ref35.include
									return 1 === include.length && include[0].actualNode === document.documentElement
								})(this)),
								this.frames.forEach(function (frame) {
									frame.page = _this2.page
								}))
						var err2 = (function validateContext(context) {
							if (0 === context.include.length) {
								if (0 === context.frames.length) {
									var env = _respondable.isInFrame() ? 'frame' : 'page'
									return new Error('No elements found for include in ' + env + ' Context')
								}
								context.frames.forEach(function (frame, i) {
									if (0 === frame.include.length)
										return new Error('No elements found for include in Context of frame ' + i)
								})
							}
						})(this)
						if (err2 instanceof Error) throw err2
						Array.isArray(this.include) || (this.include = Array.from(this.include)),
							this.include.sort(node_sorter_default)
					}
					function _getFrameContexts(context) {
						var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
						if (!1 === options.iframes) return []
						var _Context = new Context(context),
							frames = _Context.frames
						return frames.map(function (_ref37) {
							var node = _ref37.node,
								frameContext = _objectWithoutProperties(_ref37, _excluded2)
							return (
								(frameContext.initiator = !1), { frameSelector: _getAncestry(node), frameContext }
							)
						})
					}
					var get_rule_default = function getRule(ruleId) {
						var rule = axe._audit.rules.find(function (rule2) {
							return rule2.id === ruleId
						})
						if (!rule) throw new Error('Cannot find rule by id: '.concat(ruleId))
						return rule
					}
					function _getScroll(elm) {
						var buffer = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
							overflowX = elm.scrollWidth > elm.clientWidth + buffer,
							overflowY = elm.scrollHeight > elm.clientHeight + buffer
						if (overflowX || overflowY) {
							var style = window.getComputedStyle(elm),
								scrollableX = isScrollable(style, 'overflow-x'),
								scrollableY = isScrollable(style, 'overflow-y')
							return (overflowX && scrollableX) || (overflowY && scrollableY)
								? { elm, top: elm.scrollTop, left: elm.scrollLeft }
								: void 0
						}
					}
					function isScrollable(style, prop) {
						var overflowProp = style.getPropertyValue(prop)
						return ['scroll', 'auto'].includes(overflowProp)
					}
					function getElmScrollRecursive(root) {
						return Array.from(root.children || root.childNodes || []).reduce(function (
							scrolls,
							elm,
						) {
							var scroll = _getScroll(elm)
							return scroll && scrolls.push(scroll), scrolls.concat(getElmScrollRecursive(elm))
						},
						[])
					}
					var get_scroll_state_default = function getScrollState() {
						var win = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window,
							root = win.document.documentElement,
							windowScroll = [
								void 0 !== win.pageXOffset
									? { elm: win, top: win.pageYOffset, left: win.pageXOffset }
									: { elm: root, top: root.scrollTop, left: root.scrollLeft },
							]
						return windowScroll.concat(getElmScrollRecursive(document.body))
					}
					function _getStandards() {
						return clone_default(standards_default)
					}
					var styleSheet,
						get_stylesheet_factory_default = function getStyleSheetFactory(dynamicDoc) {
							if (!dynamicDoc)
								throw new Error('axe.utils.getStyleSheetFactory should be invoked with an argument')
							return function (options) {
								var data2 = options.data,
									_options$isCrossOrigi = options.isCrossOrigin,
									isCrossOrigin = void 0 !== _options$isCrossOrigi && _options$isCrossOrigi,
									shadowId = options.shadowId,
									root = options.root,
									priority = options.priority,
									_options$isLink = options.isLink,
									isLink = void 0 !== _options$isLink && _options$isLink,
									style = dynamicDoc.createElement('style')
								if (isLink) {
									var text = dynamicDoc.createTextNode('@import "'.concat(data2.href, '"'))
									style.appendChild(text)
								} else style.appendChild(dynamicDoc.createTextNode(data2))
								return (
									dynamicDoc.head.appendChild(style),
									{ sheet: style.sheet, isCrossOrigin, shadowId, root, priority }
								)
							}
						}
					var inject_style_default = function injectStyle(style) {
						if (styleSheet && styleSheet.parentNode)
							return (
								void 0 === styleSheet.styleSheet
									? styleSheet.appendChild(document.createTextNode(style))
									: (styleSheet.styleSheet.cssText += style),
								styleSheet
							)
						if (style) {
							var head = document.head || document.getElementsByTagName('head')[0]
							return (
								((styleSheet = document.createElement('style')).type = 'text/css'),
								void 0 === styleSheet.styleSheet
									? styleSheet.appendChild(document.createTextNode(style))
									: (styleSheet.styleSheet.cssText = style),
								head.appendChild(styleSheet),
								styleSheet
							)
						}
					}
					var is_hidden_default = function isHidden(el, recursed) {
						var node = get_node_from_tree_default(el)
						if (9 === el.nodeType) return !1
						if ((11 === el.nodeType && (el = el.host), node && null !== node._isHidden))
							return node._isHidden
						var style = window.getComputedStyle(el, null)
						if (
							!style ||
							!el.parentNode ||
							'none' === style.getPropertyValue('display') ||
							(!recursed && 'hidden' === style.getPropertyValue('visibility')) ||
							'true' === el.getAttribute('aria-hidden')
						)
							return !0
						var hidden = isHidden(el.assignedSlot ? el.assignedSlot : el.parentNode, !0)
						return node && (node._isHidden = hidden), hidden
					}
					var is_html_element_default = function isHtmlElement(node) {
						var _node$props$nodeName,
							_node$props,
							nodeName2 =
								null !==
									(_node$props$nodeName =
										null === (_node$props = node.props) || void 0 === _node$props
											? void 0
											: _node$props.nodeName) && void 0 !== _node$props$nodeName
									? _node$props$nodeName
									: node.nodeName.toLowerCase()
						return (
							'http://www.w3.org/2000/svg' !== node.namespaceURI &&
							!!standards_default.htmlElms[nodeName2]
						)
					}
					function getDeepest(collection) {
						return collection.sort(function (a, b) {
							return _contains(a, b) ? 1 : -1
						})[0]
					}
					var is_node_in_context_default = function isNodeInContext(node, context) {
						var include =
								context.include &&
								getDeepest(
									context.include.filter(function (candidate) {
										return _contains(candidate, node)
									}),
								),
							exclude =
								context.exclude &&
								getDeepest(
									context.exclude.filter(function (candidate) {
										return _contains(candidate, node)
									}),
								)
						return !!((!exclude && include) || (exclude && _contains(exclude, include)))
					}
					var match_ancestry_default = function matchAncestry(ancestryA, ancestryB) {
						return (
							ancestryA.length === ancestryB.length &&
							ancestryA.every(function (selectorA, index) {
								var selectorB = ancestryB[index]
								return Array.isArray(selectorA)
									? selectorA.length === selectorB.length &&
											selectorA.every(function (str, index2) {
												return selectorB[index2] === str
											})
									: selectorA === selectorB
							})
						)
					}
					var node_sorter_default = function nodeSorter(nodeA, nodeB) {
						return (nodeA = nodeA.actualNode || nodeA) === (nodeB = nodeB.actualNode || nodeB)
							? 0
							: 4 & nodeA.compareDocumentPosition(nodeB)
							? -1
							: 1
					}
					var parse_sameorigin_stylesheet_default = function parseSameOriginStylesheet(
						sheet,
						options,
						priority,
						importedUrls,
					) {
						var isCrossOrigin = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
							rules = Array.from(sheet.cssRules)
						if (!rules) return Promise.resolve()
						var cssImportRules = rules.filter(function (r) {
							return 3 === r.type
						})
						if (!cssImportRules.length)
							return Promise.resolve({
								isCrossOrigin,
								priority,
								root: options.rootNode,
								shadowId: options.shadowId,
								sheet,
							})
						var cssImportUrlsNotAlreadyImported = cssImportRules
								.filter(function (rule) {
									return rule.href
								})
								.map(function (rule) {
									return rule.href
								})
								.filter(function (url) {
									return !importedUrls.includes(url)
								}),
							promises = cssImportUrlsNotAlreadyImported.map(function (importUrl, cssRuleIndex) {
								var newPriority = [].concat(_toConsumableArray(priority), [cssRuleIndex]),
									isCrossOriginRequest = /^https?:\/\/|^\/\//i.test(importUrl)
								return parse_crossorigin_stylesheet_default(
									importUrl,
									options,
									newPriority,
									importedUrls,
									isCrossOriginRequest,
								)
							}),
							nonImportCSSRules = rules.filter(function (r) {
								return 3 !== r.type
							})
						return nonImportCSSRules.length
							? (promises.push(
									Promise.resolve(
										options.convertDataToStylesheet({
											data: nonImportCSSRules
												.map(function (rule) {
													return rule.cssText
												})
												.join(),
											isCrossOrigin,
											priority,
											root: options.rootNode,
											shadowId: options.shadowId,
										}),
									),
							  ),
							  Promise.all(promises))
							: Promise.all(promises)
					}
					function isSameOriginStylesheet(sheet) {
						try {
							return !(!sheet.cssRules && sheet.href)
						} catch (e) {
							return !1
						}
					}
					var parse_stylesheet_default = function parseStylesheet(
						sheet,
						options,
						priority,
						importedUrls,
					) {
						var isCrossOrigin = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
							isSameOrigin = isSameOriginStylesheet(sheet)
						return isSameOrigin
							? parse_sameorigin_stylesheet_default(
									sheet,
									options,
									priority,
									importedUrls,
									isCrossOrigin,
							  )
							: parse_crossorigin_stylesheet_default(
									sheet.href,
									options,
									priority,
									importedUrls,
									!0,
							  )
					}
					var toStr,
						isCallable,
						maxSafeInteger,
						toLength,
						parse_crossorigin_stylesheet_default = function parseCrossOriginStylesheet(
							url,
							options,
							priority,
							importedUrls,
							isCrossOrigin,
						) {
							return (
								importedUrls.push(url),
								new Promise(function (resolve, reject) {
									var request = new window.XMLHttpRequest()
									request.open('GET', url),
										(request.timeout = constants_default.preload.timeout),
										request.addEventListener('error', reject),
										request.addEventListener('timeout', reject),
										request.addEventListener('loadend', function (event) {
											if (event.loaded && request.responseText) return resolve(request.responseText)
											reject(request.responseText)
										}),
										request.send()
								}).then(function (data2) {
									var result = options.convertDataToStylesheet({
										data: data2,
										isCrossOrigin,
										priority,
										root: options.rootNode,
										shadowId: options.shadowId,
									})
									return parse_stylesheet_default(
										result.sheet,
										options,
										priority,
										importedUrls,
										result.isCrossOrigin,
									)
								})
							)
						},
						performanceTimer = (function () {
							function now() {
								if (window.performance && window.performance) return window.performance.now()
							}
							var originalTime = null,
								lastRecordedTime = now()
							return {
								start: function start() {
									this.mark('mark_axe_start')
								},
								end: function end() {
									this.mark('mark_axe_end'),
										this.measure('axe', 'mark_axe_start', 'mark_axe_end'),
										this.logMeasures('axe')
								},
								auditStart: function auditStart() {
									this.mark('mark_audit_start')
								},
								auditEnd: function auditEnd() {
									this.mark('mark_audit_end'),
										this.measure('audit_start_to_end', 'mark_audit_start', 'mark_audit_end'),
										this.logMeasures()
								},
								mark: function mark(markName) {
									window.performance &&
										void 0 !== window.performance.mark &&
										window.performance.mark(markName)
								},
								measure: function measure(measureName, startMark, endMark) {
									window.performance &&
										void 0 !== window.performance.measure &&
										window.performance.measure(measureName, startMark, endMark)
								},
								logMeasures: function logMeasures(measureName) {
									function logMeasure(req2) {
										log_default('Measure ' + req2.name + ' took ' + req2.duration + 'ms')
									}
									if (window.performance && void 0 !== window.performance.getEntriesByType)
										for (
											var axeStart = window.performance.getEntriesByName('mark_axe_start')[0],
												measures = window.performance
													.getEntriesByType('measure')
													.filter(function (measure) {
														return measure.startTime >= axeStart.startTime
													}),
												i = 0;
											i < measures.length;
											++i
										) {
											var req = measures[i]
											if (req.name === measureName) return void logMeasure(req)
											logMeasure(req)
										}
								},
								timeElapsed: function timeElapsed() {
									return now() - lastRecordedTime
								},
								reset: function reset() {
									originalTime || (originalTime = now()), (lastRecordedTime = now())
								},
							}
						})(),
						performance_timer_default = performanceTimer
					function _pollyfillElementsFromPoint() {
						if (document.elementsFromPoint) return document.elementsFromPoint
						if (document.msElementsFromPoint) return document.msElementsFromPoint
						var element,
							usePointer =
								(((element = document.createElement('x')).style.cssText = 'pointer-events:auto'),
								'auto' === element.style.pointerEvents),
							cssProp = usePointer ? 'pointer-events' : 'visibility',
							cssDisableVal = usePointer ? 'none' : 'hidden',
							style = document.createElement('style')
						return (
							(style.innerHTML = usePointer
								? '* { pointer-events: all }'
								: '* { visibility: visible }'),
							function (x, y) {
								var current,
									i,
									d,
									elements = [],
									previousPointerEvents = []
								for (
									document.head.appendChild(style);
									(current = document.elementFromPoint(x, y)) && -1 === elements.indexOf(current);

								)
									elements.push(current),
										previousPointerEvents.push({
											value: current.style.getPropertyValue(cssProp),
											priority: current.style.getPropertyPriority(cssProp),
										}),
										current.style.setProperty(cssProp, cssDisableVal, 'important')
								for (
									elements.indexOf(document.documentElement) < elements.length - 1 &&
										(elements.splice(elements.indexOf(document.documentElement), 1),
										elements.push(document.documentElement)),
										i = previousPointerEvents.length;
									(d = previousPointerEvents[--i]);

								)
									elements[i].style.setProperty(cssProp, d.value ? d.value : '', d.priority)
								return document.head.removeChild(style), elements
							}
						)
					}
					'function' != typeof Object.assign &&
						(Object.assign = function (target) {
							if (null == target) throw new TypeError('Cannot convert undefined or null to object')
							for (var output = Object(target), index = 1; index < arguments.length; index++) {
								var source = arguments[index]
								if (null != source)
									for (var nextKey in source)
										source.hasOwnProperty(nextKey) && (output[nextKey] = source[nextKey])
							}
							return output
						}),
						Array.prototype.find ||
							Object.defineProperty(Array.prototype, 'find', {
								value: function value(predicate) {
									if (null === this)
										throw new TypeError('Array.prototype.find called on null or undefined')
									if ('function' != typeof predicate)
										throw new TypeError('predicate must be a function')
									for (
										var value,
											list = Object(this),
											length = list.length >>> 0,
											thisArg = arguments[1],
											i = 0;
										i < length;
										i++
									)
										if (((value = list[i]), predicate.call(thisArg, value, i, list))) return value
								},
							}),
						Array.prototype.findIndex ||
							Object.defineProperty(Array.prototype, 'findIndex', {
								value: function value(predicate, thisArg) {
									if (null === this)
										throw new TypeError('Array.prototype.find called on null or undefined')
									if ('function' != typeof predicate)
										throw new TypeError('predicate must be a function')
									for (
										var value, list = Object(this), length = list.length >>> 0, i = 0;
										i < length;
										i++
									)
										if (((value = list[i]), predicate.call(thisArg, value, i, list))) return i
									return -1
								},
							}),
						'function' == typeof window.addEventListener &&
							(document.elementsFromPoint = _pollyfillElementsFromPoint()),
						Array.prototype.includes ||
							Object.defineProperty(Array.prototype, 'includes', {
								value: function value(searchElement) {
									var O = Object(this),
										len = parseInt(O.length, 10) || 0
									if (0 === len) return !1
									var k,
										currentElement,
										n = parseInt(arguments[1], 10) || 0
									for (n >= 0 ? (k = n) : (k = len + n) < 0 && (k = 0); k < len; ) {
										if (
											searchElement === (currentElement = O[k]) ||
											(searchElement != searchElement && currentElement != currentElement)
										)
											return !0
										k++
									}
									return !1
								},
							}),
						Array.prototype.some ||
							Object.defineProperty(Array.prototype, 'some', {
								value: function value(fun) {
									if (null == this)
										throw new TypeError('Array.prototype.some called on null or undefined')
									if ('function' != typeof fun) throw new TypeError()
									for (
										var t = Object(this),
											len = t.length >>> 0,
											thisArg = arguments.length >= 2 ? arguments[1] : void 0,
											i = 0;
										i < len;
										i++
									)
										if (i in t && fun.call(thisArg, t[i], i, t)) return !0
									return !1
								},
							}),
						Array.from ||
							Object.defineProperty(Array, 'from', {
								value:
									((toStr = Object.prototype.toString),
									(isCallable = function isCallable(fn) {
										return 'function' == typeof fn || '[object Function]' === toStr.call(fn)
									}),
									(maxSafeInteger = Math.pow(2, 53) - 1),
									(toLength = function toLength(value) {
										var len = (function toInteger(value) {
											var number = Number(value)
											return isNaN(number)
												? 0
												: 0 !== number && isFinite(number)
												? (number > 0 ? 1 : -1) * Math.floor(Math.abs(number))
												: number
										})(value)
										return Math.min(Math.max(len, 0), maxSafeInteger)
									}),
									function from(arrayLike) {
										var C = this,
											items = Object(arrayLike)
										if (null == arrayLike)
											throw new TypeError(
												'Array.from requires an array-like object - not null or undefined',
											)
										var T,
											mapFn = arguments.length > 1 ? arguments[1] : void 0
										if (void 0 !== mapFn) {
											if (!isCallable(mapFn))
												throw new TypeError(
													'Array.from: when provided, the second argument must be a function',
												)
											arguments.length > 2 && (T = arguments[2])
										}
										for (
											var kValue,
												len = toLength(items.length),
												A = isCallable(C) ? Object(new C(len)) : new Array(len),
												k = 0;
											k < len;

										)
											(kValue = items[k]),
												(A[k] = mapFn
													? void 0 === T
														? mapFn(kValue, k)
														: mapFn.call(T, kValue, k)
													: kValue),
												(k += 1)
										return (A.length = len), A
									}),
							}),
						String.prototype.includes ||
							(String.prototype.includes = function (search, start) {
								return (
									'number' != typeof start && (start = 0),
									!(start + search.length > this.length) && -1 !== this.indexOf(search, start)
								)
							}),
						Array.prototype.flat ||
							Object.defineProperty(Array.prototype, 'flat', {
								configurable: !0,
								value: function flat() {
									var depth = isNaN(arguments[0]) ? 1 : Number(arguments[0])
									return depth
										? Array.prototype.reduce.call(
												this,
												function (acc, cur) {
													return (
														Array.isArray(cur)
															? acc.push.apply(acc, flat.call(cur, depth - 1))
															: acc.push(cur),
														acc
													)
												},
												[],
										  )
										: Array.prototype.slice.call(this)
								},
								writable: !0,
							}),
						window.Node &&
							!('isConnected' in window.Node.prototype) &&
							Object.defineProperty(window.Node.prototype, 'isConnected', {
								get: function get() {
									return !(
										this.ownerDocument &&
										this.ownerDocument.compareDocumentPosition(this) &
											this.DOCUMENT_POSITION_DISCONNECTED
									)
								},
							})
					var unique_array_default = function uniqueArray(arr1, arr2) {
						return arr1.concat(arr2).filter(function (elem, pos, arr) {
							return arr.indexOf(elem) === pos
						})
					}
					function createLocalVariables(
						vNodes,
						anyLevel,
						thisLevel,
						parentShadowId,
						recycledLocalVariable,
					) {
						var retVal = recycledLocalVariable || {}
						return (
							(retVal.vNodes = vNodes),
							(retVal.vNodesIndex = 0),
							(retVal.anyLevel = anyLevel),
							(retVal.thisLevel = thisLevel),
							(retVal.parentShadowId = parentShadowId),
							retVal
						)
					}
					var recycledLocalVariables = []
					var query_selector_all_filter_default = function querySelectorAllFilter(
						domTree,
						selector,
						filter,
					) {
						domTree = Array.isArray(domTree) ? domTree : [domTree]
						var expressions = _convertSelector(selector),
							nodes = getNodesMatchingExpression(domTree, expressions, filter)
						return (
							nodes ||
							(function matchExpressions(domTree, expressions, filter) {
								for (
									var stack = [],
										currentLevel = createLocalVariables(
											Array.isArray(domTree) ? domTree : [domTree],
											expressions,
											null,
											domTree[0].shadowId,
											recycledLocalVariables.pop(),
										),
										result = [];
									currentLevel.vNodesIndex < currentLevel.vNodes.length;

								) {
									for (
										var _currentLevel$anyLeve,
											_currentLevel$thisLev,
											vNode = currentLevel.vNodes[currentLevel.vNodesIndex++],
											childOnly = null,
											childAny = null,
											combinedLength =
												((null === (_currentLevel$anyLeve = currentLevel.anyLevel) ||
												void 0 === _currentLevel$anyLeve
													? void 0
													: _currentLevel$anyLeve.length) || 0) +
												((null === (_currentLevel$thisLev = currentLevel.thisLevel) ||
												void 0 === _currentLevel$thisLev
													? void 0
													: _currentLevel$thisLev.length) || 0),
											added = !1,
											_i11 = 0;
										_i11 < combinedLength;
										_i11++
									) {
										var _currentLevel$anyLeve2,
											_currentLevel$anyLeve3,
											_currentLevel$anyLeve4,
											exp =
												_i11 <
												((null === (_currentLevel$anyLeve2 = currentLevel.anyLevel) ||
												void 0 === _currentLevel$anyLeve2
													? void 0
													: _currentLevel$anyLeve2.length) || 0)
													? currentLevel.anyLevel[_i11]
													: currentLevel.thisLevel[
															_i11 -
																((null === (_currentLevel$anyLeve3 = currentLevel.anyLevel) ||
																void 0 === _currentLevel$anyLeve3
																	? void 0
																	: _currentLevel$anyLeve3.length) || 0)
													  ]
										if (
											(!exp[0].id || vNode.shadowId === currentLevel.parentShadowId) &&
											_matchesExpression(vNode, exp[0])
										)
											if (1 === exp.length)
												added || (filter && !filter(vNode)) || (result.push(vNode), (added = !0))
											else {
												var rest = exp.slice(1)
												if (!1 === [' ', '>'].includes(rest[0].combinator))
													throw new Error(
														'axe.utils.querySelectorAll does not support the combinator: ' +
															exp[1].combinator,
													)
												'>' === rest[0].combinator
													? (childOnly = childOnly || []).push(rest)
													: (childAny = childAny || []).push(rest)
											}
										;(exp[0].id && vNode.shadowId !== currentLevel.parentShadowId) ||
											null === (_currentLevel$anyLeve4 = currentLevel.anyLevel) ||
											void 0 === _currentLevel$anyLeve4 ||
											!_currentLevel$anyLeve4.includes(exp) ||
											(childAny = childAny || []).push(exp)
									}
									for (
										vNode.children &&
										vNode.children.length &&
										(stack.push(currentLevel),
										(currentLevel = createLocalVariables(
											vNode.children,
											childAny,
											childOnly,
											vNode.shadowId,
											recycledLocalVariables.pop(),
										)));
										currentLevel.vNodesIndex === currentLevel.vNodes.length && stack.length;

									)
										recycledLocalVariables.push(currentLevel), (currentLevel = stack.pop())
								}
								return result
							})(domTree, expressions, filter)
						)
					}
					var preload_cssom_default = function preloadCssom(_ref38) {
						var _ref38$treeRoot = _ref38.treeRoot,
							rootNodes = (function getAllRootNodesInTree(tree) {
								var ids = [],
									rootNodes = query_selector_all_filter_default(tree, '*', function (node) {
										return !ids.includes(node.shadowId) && (ids.push(node.shadowId), !0)
									}).map(function (node) {
										return {
											shadowId: node.shadowId,
											rootNode: get_root_node_default(node.actualNode),
										}
									})
								return unique_array_default(rootNodes, [])
							})(void 0 === _ref38$treeRoot ? axe._tree[0] : _ref38$treeRoot)
						if (!rootNodes.length) return Promise.resolve()
						var dynamicDoc = document.implementation.createHTMLDocument(
							'Dynamic document for loading cssom',
						)
						return (function getCssomForAllRootNodes(rootNodes, convertDataToStylesheet) {
							var promises = []
							return (
								rootNodes.forEach(function (_ref39, index) {
									var rootNode = _ref39.rootNode,
										shadowId = _ref39.shadowId,
										sheets = (function getStylesheetsOfRootNode(
											rootNode,
											shadowId,
											convertDataToStylesheet,
										) {
											var sheets
											sheets =
												11 === rootNode.nodeType && shadowId
													? (function getStylesheetsFromDocumentFragment(
															rootNode,
															convertDataToStylesheet,
													  ) {
															return Array.from(rootNode.children)
																.filter(filerStyleAndLinkAttributesInDocumentFragment)
																.reduce(function (out, node) {
																	var nodeName2 = node.nodeName.toUpperCase(),
																		data2 = 'STYLE' === nodeName2 ? node.textContent : node,
																		stylesheet = convertDataToStylesheet({
																			data: data2,
																			isLink: 'LINK' === nodeName2,
																			root: rootNode,
																		})
																	return out.push(stylesheet.sheet), out
																}, [])
													  })(rootNode, convertDataToStylesheet)
													: (function getStylesheetsFromDocument(rootNode) {
															return Array.from(rootNode.styleSheets).filter(function (sheet) {
																return !!sheet.media && filterMediaIsPrint(sheet.media.mediaText)
															})
													  })(rootNode)
											return (function filterStylesheetsWithSameHref(sheets) {
												var hrefs = []
												return sheets.filter(function (sheet) {
													return (
														!sheet.href ||
														(!hrefs.includes(sheet.href) && (hrefs.push(sheet.href), !0))
													)
												})
											})(sheets)
										})(rootNode, shadowId, convertDataToStylesheet)
									if (!sheets) return Promise.all(promises)
									var rootIndex = index + 1,
										parseOptions = { rootNode, shadowId, convertDataToStylesheet, rootIndex },
										importedUrls = [],
										p = Promise.all(
											sheets.map(function (sheet, sheetIndex) {
												return parse_stylesheet_default(
													sheet,
													parseOptions,
													[rootIndex, sheetIndex],
													importedUrls,
												)
											}),
										)
									promises.push(p)
								}),
								Promise.all(promises)
							)
						})(rootNodes, get_stylesheet_factory_default(dynamicDoc)).then(function (assets) {
							return flattenAssets(assets)
						})
					}
					function flattenAssets(assets) {
						return assets.reduce(function (acc, val) {
							return Array.isArray(val) ? acc.concat(flattenAssets(val)) : acc.concat(val)
						}, [])
					}
					function filerStyleAndLinkAttributesInDocumentFragment(node) {
						var nodeName2 = node.nodeName.toUpperCase(),
							linkHref = node.getAttribute('href'),
							linkRel = node.getAttribute('rel'),
							isLink =
								'LINK' === nodeName2 &&
								linkHref &&
								linkRel &&
								node.rel.toUpperCase().includes('STYLESHEET')
						return 'STYLE' === nodeName2 || (isLink && filterMediaIsPrint(node.media))
					}
					function filterMediaIsPrint(media) {
						return !media || !media.toUpperCase().includes('PRINT')
					}
					var preload_media_default = function preloadMedia(_ref40) {
						var _ref40$treeRoot = _ref40.treeRoot,
							treeRoot = void 0 === _ref40$treeRoot ? axe._tree[0] : _ref40$treeRoot,
							mediaVirtualNodes = query_selector_all_filter_default(
								treeRoot,
								'video, audio',
								function (_ref41) {
									var actualNode = _ref41.actualNode
									return actualNode.hasAttribute('src')
										? !!actualNode.getAttribute('src')
										: !(
												Array.from(actualNode.getElementsByTagName('source')).filter(function (
													source,
												) {
													return !!source.getAttribute('src')
												}).length <= 0
										  )
								},
							)
						return Promise.all(
							mediaVirtualNodes.map(function (_ref42) {
								return (function isMediaElementReady(elm) {
									return new Promise(function (resolve) {
										function onMediaReady() {
											elm.removeEventListener('loadedmetadata', onMediaReady), resolve(elm)
										}
										elm.readyState > 0 && resolve(elm),
											elm.addEventListener('loadedmetadata', onMediaReady)
									})
								})(_ref42.actualNode)
							}),
						)
					}
					function _shouldPreload(options) {
						return (
							!options ||
							void 0 === options.preload ||
							null === options.preload ||
							('boolean' == typeof options.preload
								? options.preload
								: (function isValidPreloadObject(preload2) {
										return 'object' === _typeof(preload2) && Array.isArray(preload2.assets)
								  })(options.preload))
						)
					}
					function _getPreloadConfig(options) {
						var _constants_default$pr = constants_default.preload,
							assets = _constants_default$pr.assets,
							timeout = _constants_default$pr.timeout,
							config = { assets, timeout }
						if (!options.preload) return config
						if ('boolean' == typeof options.preload) return config
						if (
							!options.preload.assets.every(function (a) {
								return assets.includes(a.toLowerCase())
							})
						)
							throw new Error(
								'Requested assets, not supported. Supported assets are: '.concat(
									assets.join(', '),
									'.',
								),
							)
						return (
							(config.assets = unique_array_default(
								options.preload.assets.map(function (a) {
									return a.toLowerCase()
								}),
								[],
							)),
							options.preload.timeout &&
								'number' == typeof options.preload.timeout &&
								!isNaN(options.preload.timeout) &&
								(config.timeout = options.preload.timeout),
							config
						)
					}
					var preload_default = function preload(options) {
						var preloadFunctionsMap = { cssom: preload_cssom_default, media: preload_media_default }
						return _shouldPreload(options)
							? new Promise(function (resolve, reject) {
									var _getPreloadConfig2 = _getPreloadConfig(options),
										assets = _getPreloadConfig2.assets,
										timeout = _getPreloadConfig2.timeout,
										preloadTimeout = setTimeout(function () {
											return reject(new Error('Preload assets timed out.'))
										}, timeout)
									Promise.all(
										assets.map(function (asset) {
											return preloadFunctionsMap[asset](options).then(function (results) {
												return (function _defineProperty(obj, key, value) {
													return (
														key in obj
															? Object.defineProperty(obj, key, {
																	value,
																	enumerable: !0,
																	configurable: !0,
																	writable: !0,
															  })
															: (obj[key] = value),
														obj
													)
												})({}, asset, results)
											})
										}),
									)
										.then(function (results) {
											var preloadAssets = results.reduce(function (out, result) {
												return _extends({}, out, result)
											}, {})
											clearTimeout(preloadTimeout), resolve(preloadAssets)
										})
										.catch(function (err2) {
											clearTimeout(preloadTimeout), reject(err2)
										})
							  })
							: Promise.resolve()
					}
					function extender(checksData, shouldBeTrue, rule) {
						return function (check) {
							var sourceData = checksData[check.id] || {},
								messages = sourceData.messages || {},
								data2 = Object.assign({}, sourceData)
							delete data2.messages,
								rule.reviewOnFail || void 0 !== check.result
									? (data2.message = check.result === shouldBeTrue ? messages.pass : messages.fail)
									: ('object' !== _typeof(messages.incomplete) ||
											Array.isArray(check.data) ||
											(data2.message = (function getIncompleteReason(checkData, messages) {
												function getDefaultMsg(messages2) {
													return messages2.incomplete && messages2.incomplete.default
														? messages2.incomplete.default
														: incompleteFallbackMessage()
												}
												if (!checkData || !checkData.missingData)
													return checkData && checkData.messageKey
														? messages.incomplete[checkData.messageKey]
														: getDefaultMsg(messages)
												try {
													var msg = messages.incomplete[checkData.missingData[0].reason]
													if (!msg) throw new Error()
													return msg
												} catch (e) {
													return 'string' == typeof checkData.missingData
														? messages.incomplete[checkData.missingData]
														: getDefaultMsg(messages)
												}
											})(check.data, messages)),
									  data2.message || (data2.message = messages.incomplete)),
								'function' != typeof data2.message &&
									(data2.message = process_message_default(data2.message, check.data)),
								extend_meta_data_default(check, data2)
						}
					}
					var publish_metadata_default = function publishMetaData(ruleResult) {
						var checksData = axe._audit.data.checks || {},
							rulesData = axe._audit.data.rules || {},
							rule = find_by_default(axe._audit.rules, 'id', ruleResult.id) || {}
						ruleResult.tags = clone_default(rule.tags || [])
						var shouldBeTrue = extender(checksData, !0, rule),
							shouldBeFalse = extender(checksData, !1, rule)
						ruleResult.nodes.forEach(function (detail) {
							detail.any.forEach(shouldBeTrue),
								detail.all.forEach(shouldBeTrue),
								detail.none.forEach(shouldBeFalse)
						}),
							extend_meta_data_default(ruleResult, clone_default(rulesData[ruleResult.id] || {}))
					}
					var query_selector_all_default = function querySelectorAll(domTree, selector) {
						return query_selector_all_filter_default(domTree, selector)
					}
					function matchTags(rule, runOnly) {
						var include,
							exclude,
							defaultExclude = axe._audit && axe._audit.tagExclude ? axe._audit.tagExclude : []
						return (
							runOnly.hasOwnProperty('include') || runOnly.hasOwnProperty('exclude')
								? ((include = runOnly.include || []),
								  (include = Array.isArray(include) ? include : [include]),
								  (exclude = runOnly.exclude || []),
								  (exclude = (exclude = Array.isArray(exclude) ? exclude : [exclude]).concat(
										defaultExclude.filter(function (tag) {
											return -1 === include.indexOf(tag)
										}),
								  )))
								: ((include = Array.isArray(runOnly) ? runOnly : [runOnly]),
								  (exclude = defaultExclude.filter(function (tag) {
										return -1 === include.indexOf(tag)
								  }))),
							!!(
								include.some(function (tag) {
									return -1 !== rule.tags.indexOf(tag)
								}) ||
								(0 === include.length && !1 !== rule.enabled)
							) &&
								exclude.every(function (tag) {
									return -1 === rule.tags.indexOf(tag)
								})
						)
					}
					var rule_should_run_default = function ruleShouldRun(rule, context, options) {
						var runOnly = options.runOnly || {},
							ruleOptions = (options.rules || {})[rule.id]
						return (
							!(rule.pageLevel && !context.page) &&
							('rule' === runOnly.type
								? -1 !== runOnly.values.indexOf(rule.id)
								: ruleOptions && 'boolean' == typeof ruleOptions.enabled
								? ruleOptions.enabled
								: 'tag' === runOnly.type && runOnly.values
								? matchTags(rule, runOnly.values)
								: matchTags(rule, []))
						)
					}
					function _filterHtmlAttrs(element, filterAttrs) {
						if (!filterAttrs) return element
						var node = element.cloneNode(!1),
							attributes2 = get_node_attributes_default(node)
						if (1 === node.nodeType) {
							var outerHTML = node.outerHTML
							node = cache_default.get(outerHTML, function () {
								return setNodeAttributes(node, attributes2, element, filterAttrs)
							})
						} else node = setNodeAttributes(node, attributes2, element, filterAttrs)
						return (
							Array.from(element.childNodes).forEach(function (child) {
								node.appendChild(_filterHtmlAttrs(child, filterAttrs))
							}),
							node
						)
					}
					function setNodeAttributes(node, attributes2, element, filterAttrs) {
						return attributes2
							? ((node = document.createElement(node.nodeName)),
							  Array.from(attributes2).forEach(function (attr) {
									;(function attributeMatches(node, attrName, filterAttrs) {
										if (void 0 === filterAttrs[attrName]) return !1
										if (!0 === filterAttrs[attrName]) return !0
										return element_matches_default(node, filterAttrs[attrName])
									})(element, attr.name, filterAttrs) || node.setAttribute(attr.name, attr.value)
							  }),
							  node)
							: node
					}
					function pushNode(result, nodes) {
						var temp
						if (0 === result.length) return nodes
						result.length < nodes.length && ((temp = result), (result = nodes), (nodes = temp))
						for (var _i12 = 0, l = nodes.length; _i12 < l; _i12++)
							result.includes(nodes[_i12]) || result.push(nodes[_i12])
						return result
					}
					var select_default = function select(selector, context) {
						var candidate,
							result = []
						if (axe._selectCache)
							for (var j = 0, l = axe._selectCache.length; j < l; j++) {
								var item = axe._selectCache[j]
								if (item.selector === selector) return item.result
							}
						for (
							var outerIncludes = (function getOuterIncludes(includes) {
									return includes.reduce(function (res, el) {
										return (res.length && _contains(res[res.length - 1], el)) || res.push(el), res
									}, [])
								})(context.include),
								isInContext = (function getContextFilter(context) {
									if (!context.exclude || 0 === context.exclude.length) return null
									return function (node) {
										return is_node_in_context_default(node, context)
									}
								})(context),
								_i13 = 0;
							_i13 < outerIncludes.length;
							_i13++
						) {
							;(candidate = outerIncludes[_i13]),
								(result = pushNode(
									result,
									query_selector_all_filter_default(candidate, selector, isInContext),
								))
						}
						return axe._selectCache && axe._selectCache.push({ selector, result }), result
					}
					var set_scroll_state_default = function setScrollState(scrollState) {
						scrollState.forEach(function (_ref44) {
							return (function setScroll(elm, top, left) {
								if (elm === window) return elm.scroll(left, top)
								;(elm.scrollTop = top), (elm.scrollLeft = left)
							})(_ref44.elm, _ref44.top, _ref44.left)
						})
					}
					function _shadowSelect(selectors) {
						return selectRecursive(
							Array.isArray(selectors) ? _toConsumableArray(selectors) : [selectors],
							document,
						)
					}
					function selectRecursive(selectors, doc) {
						var selectorStr = selectors.shift(),
							elm = selectorStr ? doc.querySelector(selectorStr) : null
						return 0 === selectors.length
							? elm
							: null != elm && elm.shadowRoot
							? selectRecursive(selectors, elm.shadowRoot)
							: null
					}
					var valid_input_type_default = function validInputTypes() {
							return [
								'hidden',
								'text',
								'search',
								'tel',
								'url',
								'email',
								'password',
								'date',
								'month',
								'week',
								'time',
								'datetime-local',
								'number',
								'range',
								'color',
								'checkbox',
								'radio',
								'file',
								'submit',
								'image',
								'reset',
								'button',
							]
						},
						langs = [
							,
							[
								,
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, , , , , , 1, 1, 1, 1, , , 1, 1, 1, , 1, , 1, , 1, 1],
								[1, 1, 1, , 1, 1, , 1, 1, 1, , 1, , , 1, 1, 1, , , 1, 1, 1, , , , , 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, , , , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1],
								[, 1, , , , , , 1, , 1, , , , , 1, , 1, , , , 1, 1, , 1, , , 1],
								[1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, , , 1, , 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, , 1, 1, , , 1, , , , , 1, 1, 1, , 1, , 1, , 1, , , , , , 1],
								[1, , 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1],
								[1, , 1, , 1, , , , , 1, , 1, 1, 1, 1, 1, , , , 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1],
								[, , 1, , , 1, , 1, , , , 1, 1, 1, , , , , , , , , , , 1],
								[1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1],
								[1, 1, 1, 1, 1, , , 1, , , 1, , , 1, 1, 1, , , , , 1, , , , , , 1],
							],
							[
								,
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, , 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
							],
							[
								,
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1],
								[, 1, , 1, 1, 1, , 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, , , 1, 1, , , , , , 1, 1],
								[1, 1, 1, , , , , 1, , , , 1, 1, , 1, , , , , , 1, , , , , 1],
								[, 1, , , 1, , , 1, , , , , , 1],
								[, 1, , 1, , , , 1, , , , 1],
								[1, , 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , , 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, , , 1, , , 1, , 1, 1, , 1, , 1, , , , , 1, , 1],
								[, 1, , , , 1, , , 1, 1, , 1, , 1, 1, 1, 1, , 1, 1, , , 1, , , 1],
								[, 1, 1, , , , , , 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1],
								[, 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, 1, , 1, , , , , 1, 1, , 1, , 1],
								[, 1, , 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, , , 1, 1, 1],
								[, 1, 1, 1, , , , 1, 1, 1, , 1, 1, , , 1, 1, , 1, 1, 1, 1, , 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, , 1, 1, 1, , 1, , , , , 1, 1, 1, , , 1, , 1, , , 1, 1],
								[, , , , 1, , , , , , , , , , , , , , , , , 1],
								[1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1],
								[, 1, , 1, 1, 1, , 1, 1, , , , 1, 1, 1, 1, 1, , , 1, 1, 1, , , , , 1],
								[1, 1, 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, , , , , , , 1, , , , , , , 1],
								[, 1, 1, , 1, 1, , 1, , , , , , , , , , , , , 1],
								,
								[1, 1, 1, , , , , , , , , , , , , 1],
								[, , , , , , , , 1, , , 1, , , 1, 1, , , , , 1],
							],
							[
								,
								[1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1],
								[, 1, 1, , 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1],
								[, , , 1, , , , , , , , , , , , , , , 1],
								[, 1, , , 1, 1, , 1, , 1, 1, , , , 1, 1, , , 1, 1, , , , 1],
								[1, , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , , 1, , , , 1],
								,
								[, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, , , 1, 1, 1, 1, , 1, 1, , 1],
								[, 1, , , 1, , , 1, , 1, , , 1, 1, 1, 1, , , 1, 1, , 1, 1, 1, 1],
								[, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, , , 1, , , 1, , 1],
								[, 1, , , , , , , , , , 1, 1, , , , , , 1, 1, , , , , 1],
								[, , , , , , , 1, , , , 1, , 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, 1, , , 1, 1, , 1, 1, 1, 1, 1],
								[, 1, , , 1, 1, , 1, , 1, 1, 1, , , 1, 1, , , 1, , 1, 1, 1, 1, , 1],
								[, 1, 1, 1, , 1, 1, , 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1],
								[, , , , , , , , , , , , , , , , 1],
								,
								[, 1, 1, 1, 1, 1, , 1, 1, 1, , , 1, , 1, 1, , 1, 1, 1, 1, 1, , 1, , 1],
								[, , 1, , , 1, , , 1, 1, , , 1, , 1, 1, , 1],
								[, 1, 1, , 1, , , , 1, 1, , 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , , , 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1],
								[1, 1],
								[, 1, , , , , , , , , , 1, 1, , , , , , 1, 1, , 1, , 1, , 1, 1],
								,
								[, 1, 1, , 1, , , 1, , 1, , , , 1, 1, 1, , , , , , 1, , , , 1],
								[1, 1, , , 1, 1, , 1, , , , , 1, , 1],
							],
							[
								,
								[, 1],
								[, , , 1, , , , 1, , , , 1, , , , 1, , , 1, , , 1],
								[, , , , , , , , , , , , , , , , , , 1, 1, , , , , , 1],
								,
								[1, , , , , 1],
								[, 1, , , , 1, , , , 1],
								[, 1, , , , , , , , , , , 1, , , 1, , , , , , , , , 1, 1],
								[, , , , , , , , , , , , , , , , , , , , , 1],
								[, , , , , , , , , , , , , , , , 1, , , , 1, , 1],
								[, 1],
								[, 1, , 1, , 1, , 1, , 1, , 1, 1, 1, , 1, 1, , 1, , , , , , , 1],
								[1, , , , , 1, , , 1, 1, , 1, , 1, , 1, 1, , , , , 1, , , 1],
								[, 1, 1, , , 1, , 1, , 1, , 1, , 1, 1, 1, 1, , , 1, , 1, , 1, 1, 1],
								[1, 1, 1, 1, 1, , 1, , 1, , , , 1, 1, 1, 1, , 1, 1, , , 1, 1, 1, 1],
								[1, , , , , , , , , , , , , , , , , , , , 1],
								[, , , , , , , , , 1],
								,
								[, 1, , , , , , 1, 1, 1, , 1, , , , 1, , , 1, 1, 1, , , 1],
								[1, , , , , 1, , 1, 1, 1, , 1, 1, 1, 1, 1, , 1, , 1, , 1, , , 1, 1],
								[1, , 1, 1, , , , , 1, , , , , , 1, 1, , , 1, 1, 1, 1, , , 1, , 1],
								[1, , , , , , , , , , , , , , , , , 1],
								[, , , , , 1, , , 1, , , , , , 1],
								[, , , , , , , , , , , , , , , 1],
								[, , , , , , , , , , , , , , , , , , , , 1],
								[, 1, , , , , , , , , , , , , , 1],
								[, 1, , , , 1],
							],
							[
								,
								[1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , 1, 1, , , 1, 1, 1],
								[, , , , , , , , , , , , 1],
								[, , , , , , , , , , , , , , , , , , , 1],
								,
								[, , , , , , , , , , , , , , , , , , 1],
								[1, , , , , , , , , 1, , , , 1],
								[, , , , , , , , , , , , , , , , , , 1],
								,
								[1, 1, , , , 1, 1, , , , , , 1, , , , 1, , 1, , 1, 1, , 1],
								[1],
								[, , , , , , , , , , , 1, , , , , , , , , , , 1],
								[, 1, , , , , , , 1, 1, , , 1, , 1, , , , 1, , , , , , , 1],
								[, , , , , , , , , , , , , , , , 1, , , , , 1],
								[, , 1, , , , , 1, , 1],
								[1, , , , 1, , , , , 1, , , , 1, 1, , , , 1, 1, , , , , 1],
								[, , , , , 1],
								[, , , , , , , , , , , , , , , , , , , 1],
								[1, , , 1, 1, , , , , , , 1, , 1, , 1, 1, 1, 1, 1, 1],
								[, , , , , 1, , , , , , , 1, , , , , , , 1],
								,
								[, , 1, 1, 1, 1, 1, , 1, 1, 1, , , 1, 1, , , 1, 1, , 1, 1, 1, , , 1],
								[, , , , , , , , , , , , , , , , , , 1],
								[, 1, , , , 1],
								,
								[1],
							],
							[
								,
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1],
								[, , , 1, 1, 1, 1, , , , , , 1, , 1, , , , 1, , 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , , 1],
								[, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, , 1, , , 1, 1, 1, 1, 1],
								[, , , , , , , , , , , 1, , , , , , , , , 1, , , , 1],
								[, 1, 1, , 1, 1, , 1, , , , 1, 1, , 1, 1, , , 1, , 1, 1, , 1],
								[, 1, , 1, , 1, , , 1, , , 1, 1, , 1, 1, , , 1, 1, 1],
								[, 1, 1, 1, 1, 1, , 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1],
								[, , , , , , , , , 1, , 1, , 1, 1, , , , 1, , , 1],
								[, 1, , , 1, 1, , , , , , , , , 1, 1, 1, , , , , 1],
								[1, , , 1, 1, , , , 1, 1, 1, 1, 1, , , 1, , , 1, , , 1, , 1, , 1],
								[, 1, 1, , 1, 1, , 1, 1, , , , 1, 1, 1, , , 1, 1, , , 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, , 1, , , 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1],
								[, 1, , , , 1, , , , , , , , , 1],
								[, 1, , , , , , , , 1, , , , , 1, , , , 1, , , 1],
								[, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, , , , , 1, , 1, , , , , 1, 1, 1, 1, 1, , , 1, , , , 1],
								[, 1, , , , , , , , 1, , , , , , , , , , , , 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1],
								[1, 1, , 1, , 1, 1, , , , 1, , 1, 1, 1, 1, 1, , 1, 1, , , , , , 1],
								[, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , , 1, 1, , , , 1, , 1, 1, , 1, 1],
								[, , , , , , , , , , , , , , , , , , , , , , , , 1],
								[, 1, 1, , 1, 1, 1, 1, , 1, , , 1, 1, 1, 1, , , 1, , , , , , , 1],
								[, 1, , , , , , , , 1, , , , , 1],
							],
							[
								,
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1],
								[, 1, 1, , , , , , , , , , , , 1, 1, , , , , , 1],
								[, 1, , , , , , , 1],
								[, , , , , , , , , , , , , , 1, , , , , 1, , , , , , 1],
								[1, 1, , , 1, , , 1, 1, 1, , , , 1],
								,
								[, , , , , , , , , , , , , 1, , , , , , , , , , 1],
								[, , , , , , , , , 1, , , , , , , , , 1, , , , , , , 1],
								[1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, , , 1, , 1, , , 1, 1],
								[, , , , , , , , , 1],
								[, 1, , , , 1, , , , , , 1, , , 1, , , , , 1],
								[, 1, 1, , 1, 1, , , , , , , , , , , , , , , 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, , , 1, 1, , 1, 1, 1, 1, , , , 1, 1, , , , 1, , 1],
								[1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, , 1, 1, , 1, 1],
								[, , , , , , , , , , , , , , , 1, , , , 1],
								,
								[1, 1, , 1, , 1, , , , , , 1, , 1, , 1, 1, , 1, , 1, 1, , 1, 1, , 1],
								[, , 1, , , , , , 1, , , , 1, , 1, , , , , 1],
								[1, , , , , , , , , 1, , , , , , 1, , , , 1, , 1, , , 1],
								[1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, , , 1, , 1, , , , , , 1, , , 1, , , , , , , , 1],
								[, 1, , 1, , , , , , , , , , , , 1],
								,
								[1, 1, , , , , , , , , , , , , , , , , , , , , , 1, 1],
								[1],
							],
							[
								,
								[1, , , , , , , , , 1, , , , , 1, , 1, , 1],
								[, 1, 1, , 1, 1, , 1, 1, 1, , , 1, 1, 1, , , , 1, , , 1, , , , 1],
								[, 1, , , , , , , 1, , , , 1, , , , , , 1],
								[1, 1, 1, 1, 1, 1, , , , 1, , , , , , , , , 1, 1, 1, 1],
								[1],
								[, 1, 1, , , 1, 1, , , , , 1, , 1, , , , , , , , 1, , , , 1],
								[1, , 1, , , 1, , 1, , , , , 1, 1, 1, 1, , , , 1, , , , 1],
								[, , 1, , , , , , , 1, , , , , , , 1, , , , , , , 1],
								[1, , , , , , , , , , , , , , 1, , , , 1],
								[, , , 1, , 1, , , , , 1, , , , 1, 1, , , , 1],
								[1, , , , , 1, , , , 1, , 1, 1, , , 1, 1, , 1, 1, 1, , 1, 1, 1, , 1],
								[, 1, 1, , , , , 1, , 1, , 1, 1, 1, , 1, 1, , , 1, , 1, 1, 1],
								[, 1, , , , 1, , , , 1, , , 1, , 1, 1, , , 1, 1, , , , , , 1],
								[1, , 1, 1, , 1, , 1, 1, , 1, , 1, 1, 1, 1, 1, , , 1, 1, , , , , , 1],
								[1, , , , , , , , , , , , , , , , , , 1, , , 1, , 1],
								[, , , , , , , , , 1, , , , , , 1],
								[, , , , , , , , , , , , , , , , , , , , , 1, , 1],
								[, 1, , , , 1, , , 1, 1, , 1, , , 1, 1, , , 1, , , 1, , , 1, 1],
								[1, 1, , 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, , , 1, , 1, 1],
								[1, , 1, 1, 1, 1, , , , 1, , 1, 1, 1, , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1],
								[1, , , , , , , , , , , , , 1],
								[, , 1, , , , , , , , , , , , , , , , , , , , 1],
								[1, , , , , , , , , , , 1, , 1, , 1, , , , 1],
								[, , , 1, , , , , , , , , 1],
								[, 1, , , , , , , , , , , , , , 1, , , , , , , , , 1],
								[, , , , , , , , 1, 1, , , , , , , , , 1, , , , , , , , 1],
							],
							[
								,
								[1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, 1, 1],
								[, , , , , 1, , , , 1, 1, 1, , , 1, 1, , , 1, , 1, 1, , 1],
								[, , , , , , , , , , , , , , , , , , , 1, 1],
								[, 1, , , , , , 1, , , , , , , , , , , , , 1],
								[, , 1, , , 1, , 1, 1, 1, , 1, 1, , 1, , , , 1, , 1, 1],
								,
								[, , 1, , , 1, , , , , , 1, , , , 1],
								[, , , , , , , , , 1, , , , , , , , , , 1],
								[1, 1, 1, 1, 1, 1, , 1, 1, 1, , , 1, 1, , 1, , 1, , , 1, 1, 1, , , 1],
								[, , , , , 1, , , , , , , , , , , , , 1],
								[, 1, , , , , , , , , , , , 1, , 1, 1, , 1, , , 1],
								[, , , , , 1, , , , , , , , , , , , , , 1],
								[, 1, 1, 1, 1, , , , , 1, , , 1, , 1, , , , 1, 1, , , , 1, 1],
								[, 1, , , 1, , , 1, , 1, 1, , 1, , , , , , , 1],
								[, , 1, , 1, , , 1, , , , , , , , , , , 1, 1, , , , 1],
								[, 1, , , , , , , , , , , , , , , , , 1, , , , , , 1],
								[, , , , , , , , , , , , , , , , , , 1],
								[, 1, 1, , , , , , , , , , , , , , , , 1, , 1, 1],
								[, , , , , , , , , , , , 1],
								,
								[, 1, 1, 1, 1, , , , 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, , 1],
								[1, , , , 1, , , , , , , , , , 1],
								[1, , , , , , , , , 1],
								,
								[, 1, , , , 1, , , , , , , , , , , , , , , , , , , , 1],
							],
							[
								,
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, , , , 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
							],
							[
								,
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, , 1, 1, 1, 1],
								[1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, , , 1, 1, 1, 1, , 1, , , , 1, 1, , , 1, 1, , 1],
								[, 1, 1, , 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, , , , , , , , , , , , , 1],
								[1, 1, 1, , , , , 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, , 1, 1, , , , , 1],
								[, 1, , , , , , , 1, 1, , , 1, 1, 1, , 1, , , 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1],
								[, 1, , , , 1, , , , 1, , , 1, , , , 1, , , , , , , 1, 1],
								[, 1, 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, , , , 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , , 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1],
								[1, 1, 1, , 1, , , 1, 1, 1, 1, , 1, 1, 1, 1, , , , 1, , 1, , 1, , , 1],
								[1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, , , , 1, , , , , , , , , 1, 1, , , , , , , , , 1],
								,
								[, 1, , 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, , , 1, , 1, , 1, , , , 1],
								[, 1, , , 1, 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , , 1],
								[1, , , 1, , , , 1, 1, 1, , , , , 1, 1, , , , 1, , 1],
								[1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1],
								[1, 1, , , , , , , , 1, , 1, , , , , , , , 1, , 1],
								[, 1, , , , 1, , 1, 1, , , , 1, 1, , 1, , , , 1, 1, 1, , 1],
								,
								[, 1, , , , , , 1, , , , , , , 1],
								[, , , , , , , , 1, , , , 1, , 1, , , , , , , , , , , , 1],
							],
							[
								,
								[, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, , 1],
								[, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1],
								[, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
							],
							[
								,
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, , 1],
								[1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, , , 1, , , , , , , , 1, , , , , , 1, , , 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, , 1, , , , 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, , , 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1],
								[1, 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, , , 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1],
								[, 1, 1, , , , , 1, 1, 1, , , 1, , 1, 1, , , , 1, , 1, , , 1, 1],
								[, , , , , , , 1, , , , 1, 1, 1, 1, 1, , 1, , , , , , , , 1],
								[1, 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, 1, , 1, , 1, , 1, 1, , , 1, , 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, , , , 1, 1, , 1, , 1, 1, 1, , 1, , 1, 1, , 1, 1, , 1, , 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, , , , , , , , 1, , , , , 1, , 1],
								[, 1, 1, 1, , 1, , 1, , 1, , , , 1, , 1, , , 1, , , , , , 1, 1],
								[, 1, , , 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, , 1, 1, , , 1, , , 1],
								[1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, , 1, , , , , 1, , 1, , 1, , , , , , 1, , 1, , , , 1, 1],
							],
							[
								,
								[, 1, , 1, , , , , , , , , , , , , , , 1, , , , 1],
								[, , , , , , , , , 1, , 1, 1, 1, , 1, , , 1, , 1, 1],
								[1, 1, , , , , , , 1, , , , , , , 1, , , , , , 1],
								[, 1, , , , , , , , , , 1, , , , , , , , , 1, 1],
								,
								[, , , , , , , , , , , , , , , 1, , , , 1, , 1],
								[, , 1, 1, , 1, , 1, , , , , , , , 1, , , , , , 1],
								[, , , , , , , , , , , , , , , , , , , , 1, 1],
								[, 1, , , , , , , , , , , , , 1],
								[1, , 1, 1, , , , 1, , , , , , , , , 1, , , 1, , , 1, 1],
								[, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, , 1, 1, , 1],
								[, 1, , , 1, 1, , , , , , 1, , 1, , 1, , , 1, , 1, 1],
								[1, 1, 1, 1, , 1, , 1, , 1, , 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1],
								[, 1, 1, , , 1, , 1, , 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, , 1, 1],
								[, , , , 1, , , 1, , , , , , , 1, , , , 1, 1],
								[, 1, , , , , , , , , , 1, , 1, , 1, , , , , 1, , , , , 1],
								,
								[1, 1, , 1, , 1, , 1, 1, , , , , , 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, , 1, , , , , , 1, , , , , , 1, 1, , , , 1, 1, , , 1],
								[, 1, 1, , 1, 1, , , , 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1],
								[, 1, 1, , , 1, , , , 1, , , , 1, 1],
								[, , , , 1],
								[, , , , , , , , , 1, , , 1],
								,
								[, , 1, , 1, , , , , , , , , 1, , , , , , , , , , , , 1],
								[, , , , , , , , , , , , , 1],
							],
							[
								,
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, , 1, 1, , 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , , , , 1],
								[, 1, , 1, , , , , , 1, , , , , 1, 1, , , , , 1, 1],
								[, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , , 1, , 1, 1, 1],
								[, 1, , , , 1, , , , , , , 1],
								[, 1, , , 1, , , 1, , 1, , 1, 1, , 1, , , , , 1, , 1, , , , 1, 1],
								[, 1, , , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, , , , , , , , , , , , , , , , , , , , 1],
								[, 1, 1, 1, , , , 1, 1, , , , , , 1, 1, 1, , 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1],
								[, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, , , 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1],
								[, 1, , , , 1, , , , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, , , , 1, , , , , , , , 1, , , , , , , , , , 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1],
								[1, 1, , 1, 1, 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1],
								[1, 1, , , , , , , 1, 1, , , , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1],
								[, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1],
								,
								[, 1, 1, , , , , 1, , 1, , , , 1, 1, 1, , , 1, , , , , 1],
								[, , , , , , , , , , , , , 1],
								[, , , , , 1, , , , , , , , 1, 1, , , , , 1, , 1, , , 1, 1],
								[, , , , , , , , , , , , , , 1],
							],
							[
								,
								[, 1],
								,
								,
								,
								,
								,
								,
								,
								,
								,
								,
								,
								,
								,
								,
								,
								,
								,
								,
								,
								[1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, 1],
								[, 1, , 1, , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, , , , 1, , 1, 1],
								[, 1, , 1, , 1, , , 1, , , , , 1, , , , , , 1, 1],
								[, 1, , 1, , , , , 1, , , , 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1],
								[, 1, , , , , , , , , , , , , , , 1],
							],
							[
								,
								[, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, , 1, , , , , , , , , 1, 1, , , , 1],
								[, , , , , , 1],
								[, , 1],
								[, 1, 1, , , 1, , 1, , 1, 1, , 1, 1, 1, , , , 1, 1, 1, , , , , 1],
								,
								[, 1, , , , 1, , , , , , 1, , , 1, , , , 1, 1, , 1],
								[, , , , , , , 1, , , , , , , , , 1],
								[, 1, , , , 1, 1, , , , , , 1, 1, 1, , , , 1, , 1, 1],
								[, , , , , , , 1, , 1, , , , , , , , , , 1],
								[, 1, 1, , , , , , 1, 1, , , , 1, , , , , , , 1, , , 1],
								,
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, , , 1, , , 1, , , , , 1, , 1, , 1, , 1, , , , , 1],
								[1, 1, 1, 1, 1, 1, 1, 1, , , , , 1, 1, , 1, 1, , 1, , , 1, , 1],
								[, , , , , , , , , , , , , , 1, , , , , , 1],
								,
								[, , , , , , , , , 1, , , , , , 1, , , , , 1],
								[, , 1, , , , , , , 1, , , 1, 1],
								[, , , 1, , , , , 1, , , , , 1, , , , , , 1, , , , 1],
								[1, , 1, 1, , 1, 1, 1, 1, 1, , 1, , , , 1, 1, 1, , , 1, 1, , , , 1, 1],
								,
								[1, 1, , , , , , , , , , 1, , 1, , 1, , , 1],
								[, , , , 1, , , , , , , , , , , , , , , , , , , 1],
								[, , , , , , , , , , , , , , 1, , , , , 1, , 1],
								[, , , , , , , , 1],
							],
							[
								,
								[1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1],
								[, , 1, , , 1, , , , , , , , 1, , , , , , 1, , , , 1],
								[1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, , 1, 1, , 1, , , , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1],
								[1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1],
								[, , 1, 1, 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1],
								[1, 1, , , , , , , 1, , 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1],
								[1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1],
								[1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1],
								[1, 1, 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, 1],
								[1, 1, 1, 1, , 1, , , , , , 1, , 1, , , , , 1, 1, , , , , 1],
								[1, , 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, , 1, 1, , 1, , 1, , , , 1, 1, 1, 1, 1, , , 1, 1, , 1, , 1],
								[, 1, 1, 1, 1, , , , , 1, , 1, 1, 1, 1, 1, , , 1, 1, , , , 1, 1, 1],
								[, 1, 1, 1, 1, 1, , 1, , , , , 1, , 1, , 1, , , 1, , , 1, 1, , 1],
							],
							[
								,
								[1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, , , , , , , , , 1, , , , , 1, 1, , , 1, , 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, , , 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, , , , , , 1, , 1, 1, , 1, 1, 1, 1, 1, , , 1, , 1, , 1],
								[1, 1, 1, , 1, 1, 1, 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1],
								[1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1],
								[, 1, , 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1],
								[, , 1, , , , , , , , , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, , , 1, 1, , , , , , 1, 1, 1, 1, 1, , , , 1, 1, 1, , 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1],
								[, 1, 1, 1, , 1, , 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, 1],
								[1, 1, , , , 1, , , 1, 1, 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, , 1, , 1],
								[, 1, , , , , , , 1, , 1, , 1, 1, 1, 1, , , , , , , , , 1],
							],
							[
								,
								[, , , , , , , , , , , , , 1, 1, , , , 1],
								[, 1, , , , , , , , 1, , , 1, , , , , , 1, , , 1, , , , 1],
								,
								[, 1, , , , 1, , 1, , 1, 1, , 1, 1, , , , , , , , 1],
								[, , , , , , , , , , , , , , , , , , , 1],
								[, , , , , , , , , 1],
								[1, 1, 1, , , 1, , , , , , , , , 1, 1, , , , , , , , , , 1],
								[, 1, , , , , , , , , , , , , 1],
								[, , , , , , , , , , , , , , , , , , , 1, , , 1],
								[, , , , , , , , , 1],
								[1, 1, , , , , , 1, 1, 1, , 1, 1, , , , 1, 1, , 1, , 1, 1, 1, , 1],
								[, 1, 1, 1, , 1, 1, , , 1, , 1, 1, 1, 1, , , , , , , 1, , 1],
								[, 1, 1, 1, 1, , , 1, , 1, , , , 1, 1, 1, 1, , 1, 1, , 1],
								[, 1, , , 1, 1, , 1, , , , 1, , 1, 1, , 1, , 1, , , 1, , , 1, , 1],
								[, , , , , , , , , , , 1],
								[, , , , , , , , , 1, , , , , , , , , , , , , 1],
								,
								[1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1],
								[, 1, , , , , , , 1, 1, , 1, , , , , 1, , , 1, , 1],
								[, 1, , , , 1, , , 1, , , , , , , , 1, , 1, , , 1],
								[, , , , , , , , , , , , , 1, 1, , , , 1, , , 1],
								[, , , , , 1, , , 1, , , , 1],
								[, 1],
								,
								[, 1],
								[1, , , , , , , , , , , , , , 1, , , , , 1],
							],
							[
								,
								[, 1, , , , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, , , 1],
								[, , 1, , , , , , , , , 1],
								,
								,
								[1, , , 1, 1, , , , , , , , 1, 1, , 1, 1, , 1],
								,
								[, , , , , , , , , , , , , , , , , , 1, , 1],
								,
								[1, , , 1, 1, , 1, 1, , , , , 1, , 1, , , , , 1, 1, , 1],
								,
								[, 1, , , , , , , , 1, 1, 1, 1, 1, , 1, 1, , , , 1, 1],
								[, , , , , , , , , , , , , , , , 1, , , 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1],
								[, , , , , , , , , , , 1, , 1, , , 1],
								[1, , , , , , , , , , , , , , , , , , 1, , 1],
								,
								,
								[, 1, , , , , , , , , , , , , , 1, , , , 1, 1],
								[, , , , , , , , , 1, , , 1, , , , , , , , , , 1],
								[, , , , , , , , , , , , , , , 1],
								[, , , , , , , , , , , , , 1, 1, , , , , , 1],
								,
								[, 1],
							],
							[
								,
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, , , 1, 1, , 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1],
								[, 1, , , , , , , , 1],
								[, , , , 1, , , 1, , , 1, 1, , , , , , , , , , 1, , , , 1],
								[, 1, , 1, 1, , , 1, 1, 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, , 1],
								[, , , , , , , 1],
								[, 1, 1, , , , , 1, , 1, , , , , , 1, , , , , , 1, , 1, , 1],
								[, 1, , , , , , 1, , , , 1, , , , , , , , , , 1],
								[, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, , 1, 1, 1, 1, , 1],
								[, 1, , , , , , , , 1],
								[, 1, 1, , 1, , , , , , , , 1, , , , , , 1, , , 1, , 1, , 1],
								[, 1, , 1, , 1, , 1, 1, 1, , 1, 1, 1, , 1, , , 1, 1, , 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, , , 1, 1, , , , 1, 1, 1, , , , 1, 1, , , 1, 1],
								[, , 1, 1, 1, 1, , 1, , 1, , 1, , 1, 1, 1, 1, , , , , 1, , 1, , 1],
								[1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , 1, 1, 1, , , 1, 1, , , , 1, , 1],
								[, , , 1],
								,
								[, 1, 1, , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1],
								[, 1, , , , , , 1, , 1, , 1, , , , , , , 1, 1, , 1, 1],
								[, , , , , , 1, , 1, 1, , 1, , 1, , , , , , , , , , 1],
								[, 1, 1, , 1, , , , 1, , , , 1, 1, 1, , , , 1, , 1, 1, 1, , 1, 1],
								,
								[, 1, 1, , , , , , , , , , , , , 1, , , 1, , , , , 1],
								[, 1, , , , , , , , , , , , , , , , , , , , , , 1],
								[, 1, 1, , , , , , , 1, , , , 1, , , , , 1, , , , , , , 1],
							],
							[
								,
								[, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1],
								[, 1, 1, 1, 1, 1, , 1, , 1, 1, , , 1, 1, 1, 1, , 1, , , , , 1, 1, 1],
								[, , 1, 1, , 1, , 1, 1, , , , 1, 1, 1, 1, , , 1, , 1, 1, 1, 1, , 1],
								[, 1, , 1, , , , , , , , 1, , 1, , 1, , , , , , , , , , 1],
								[, , 1, , 1, , , 1, , , , , 1, 1, , , 1, , 1, 1, 1, 1],
								[, 1],
								[, 1, 1, , 1, , 1, 1, , 1, , , 1, 1, 1, , , , 1, , , 1, , 1],
								[1, 1, , 1, 1, 1, , , , , , , , , , , , , 1, , 1, 1, 1],
								[, 1, 1, , , , , , , 1, , , 1, , 1, , 1, , 1, 1, , , 1, , , 1],
								[, , 1, , , , , , , , , , , , , , , , , , 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, 1, 1, 1, , 1, , 1, , , , , 1, 1, 1, , , 1, , 1, , , , 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, , 1, , , 1, 1, 1, , 1, , 1, 1, 1, , , 1, 1, 1, 1, , , , 1, 1],
								[, , , 1, 1, , , 1, , 1, , 1, , 1, 1, 1, 1, , 1, , , , , 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, , , , , , , , , , , , , , , , , , , 1],
								[, 1, 1, , 1, 1, , 1, , 1, , , , 1, 1, , , 1, 1, , 1, 1, , 1],
								[, 1, 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , , 1],
								[, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1],
								[, 1, 1, , 1, , , 1, , , 1, , 1, 1, 1, 1, 1, , 1, , 1, 1],
								[, , , , , 1, , , , 1, , , , , 1, 1, , , , 1],
								[, 1, , 1, 1, 1, , 1, , , 1, 1, 1, , , 1, , , 1, , 1, , , 1],
								[, , 1, , , , , , , , , 1, , 1, , , , , 1, , 1],
								[, 1, 1, , , , , , , , 1, 1, 1, , , , , , , , 1, , , , , 1],
								[, , , , , , , , 1, , , , , 1, , , 1],
							],
							[
								,
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, 1, , 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, , , , , , , , , 1, 1],
								[, , , , , , , , 1, , , , 1, , 1, , 1],
								[, 1, , , 1, 1, , 1, , , , 1, , , , , , , , 1],
								[, 1, , 1, , 1, , , , 1, 1, , 1, , 1, , , , 1, 1, 1, 1, 1, , , 1],
								,
								[, 1, , , , , , , , 1, , , 1, 1, , , 1, , 1, 1, , 1, , 1],
								[, 1, , , 1, , , , , , , , 1, , , , , , , 1],
								[1, 1, , , , , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1],
								,
								[, 1, , , , , , 1, , 1, , 1, 1, 1, 1, 1, , , 1, , 1, 1, , , , 1],
								[, 1, 1, , , 1, , 1, , 1, , , 1, 1, 1, 1, , , 1, , , 1, , , , 1],
								[, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, , 1],
								[, 1, , , 1, 1, , 1, 1, , , 1, 1, , 1, 1, , 1, , 1, , 1],
								[1, , 1, , , , , 1, , 1, , 1, 1, 1, 1, , , , , 1, 1, , , , 1, 1],
								[, 1, 1, , , , , 1, 1, , , 1, , 1, 1, 1, 1, , , , , , , , , , 1],
								,
								[, 1, 1, , , 1, , , , 1, , 1, 1, 1, 1, 1, , , , 1, , , , 1, , 1],
								[, , , 1, 1, , , 1, , , , , 1, , 1, 1, 1, , 1, 1, , , , , , 1],
								[, 1, , , , , , , , , , , 1, , , , 1, , , , , , , 1, , 1],
								[, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, 1, 1],
								[, 1, , , , , , , , , , , , , , , , , , , 1],
								[, 1, , , , , , 1, , , , , 1, , 1, , , 1, 1, , 1, 1, , 1],
								[, 1, , , , , , 1, , , , , 1, 1, , , , , , , , 1, , , , 1],
								[, , , , , , , , , , , , , , , , , , 1, , , 1, , , , , 1],
								[, , , , , , , 1, , , , 1],
							],
							[
								,
								[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, , 1, , 1, , , , , , , 1, , , , , , , , 1, , , 1],
								[, 1, , , , , , , 1],
								[, , , , , , , , , , 1],
								[, 1, , , , , , 1, 1, , , , , , 1],
								,
								[, 1, 1, , , , , , 1, , , , , 1, 1, , , , 1],
								[1, , 1, , 1, , , , , 1, , , , , 1, , , , , , , , , 1, 1],
								[, 1, 1, , , , , , , , , 1, 1, 1, 1, , , , 1, , , , , 1, , , 1],
								,
								[, 1, 1, , 1, , , 1, 1, , , 1, , , 1, 1, 1, , 1, , 1, 1, 1, , , , 1],
								[, , , , , 1, , , , , 1, , , 1, 1, , , 1, , 1, , , , 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, 1, , , 1, 1, , 1, , , , 1, , , , , , , , 1],
								[, , , 1, , , , , 1, , , , , 1, , 1, , 1, 1, 1],
								[, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
								[, , , , , 1],
								[, 1, , , , , , 1, , , , , , , 1, 1, 1, , , 1],
								[, 1, , , , , , , , , , 1, 1, 1, , , , , 1, , , 1],
								[, , , , , 1, , 1, , , , , 1, 1, 1, , 1, 1, , 1, 1, 1, , , 1, 1],
								[1, 1, , , , , , , 1, , , , , 1, 1, , , , , , , , , , , 1],
								,
								[, 1],
								[, , , , , , , , , , , , , , , , , , , , , , , , 1],
								[, , 1, , , , , 1, , , 1, , , , 1, , 1],
								[, 1, , , , , , , , , 1],
							],
						]
					function _validLangs(langArray) {
						langArray = Array.isArray(langArray) ? langArray : langs
						var codes = []
						return (
							langArray.forEach(function (lang, index) {
								var _char2 = String.fromCharCode(index + 96).replace('`', '')
								Array.isArray(lang)
									? (codes = codes.concat(
											_validLangs(lang).map(function (newLang) {
												return _char2 + newLang
											}),
									  ))
									: codes.push(_char2)
							}),
							codes
						)
					}
					var valid_langs_default = function isValidLang(lang) {
							for (var array = langs; lang.length < 3; ) lang += '`'
							for (var _i14 = 0; _i14 <= lang.length - 1; _i14++) {
								if (!(array = array[lang.charCodeAt(_i14) - 96])) return !1
							}
							return !0
						},
						SerialVirtualNode = (function (_abstract_virtual_nod2) {
							_inherits(SerialVirtualNode, _abstract_virtual_nod2)
							var _super2 = _createSuper(SerialVirtualNode)
							function SerialVirtualNode(serialNode) {
								var _this3
								return (
									_classCallCheck(this, SerialVirtualNode),
									((_this3 = _super2.call(this))._props = (function normaliseProps(serialNode) {
										var _serialNode$nodeName,
											_ref45,
											_serialNode$nodeType,
											nodeName2 =
												null !== (_serialNode$nodeName = serialNode.nodeName) &&
												void 0 !== _serialNode$nodeName
													? _serialNode$nodeName
													: nodeTypeToName[serialNode.nodeType],
											nodeType =
												null !==
													(_ref45 =
														null !== (_serialNode$nodeType = serialNode.nodeType) &&
														void 0 !== _serialNode$nodeType
															? _serialNode$nodeType
															: nodeNamesToTypes[serialNode.nodeName]) && void 0 !== _ref45
													? _ref45
													: 1
										assert_default(
											'number' == typeof nodeType,
											"nodeType has to be a number, got '".concat(nodeType, "'"),
										),
											assert_default(
												'string' == typeof nodeName2,
												"nodeName has to be a string, got '".concat(nodeName2, "'"),
											),
											(nodeName2 = nodeName2.toLowerCase())
										var type = null
										'input' === nodeName2 &&
											((type = (
												serialNode.type ||
												(serialNode.attributes && serialNode.attributes.type) ||
												''
											).toLowerCase()),
											valid_input_type_default().includes(type) || (type = 'text'))
										var props = _extends({}, serialNode, { nodeType, nodeName: nodeName2 })
										type && (props.type = type)
										return delete props.attributes, Object.freeze(props)
									})(serialNode)),
									(_this3._attrs = (function normaliseAttrs(_ref46) {
										var _ref46$attributes = _ref46.attributes,
											attributes2 = void 0 === _ref46$attributes ? {} : _ref46$attributes,
											attrMap = { htmlFor: 'for', className: 'class' }
										return Object.keys(attributes2).reduce(function (attrs, attrName) {
											var value = attributes2[attrName]
											;(assert_default(
												'object' !== _typeof(value) || null === value,
												"expects attributes not to be an object, '".concat(attrName, "' was"),
											),
											void 0 !== value) &&
												(attrs[attrMap[attrName] || attrName] =
													null !== value ? String(value) : null)
											return attrs
										}, {})
									})(serialNode)),
									_this3
								)
							}
							return (
								_createClass(SerialVirtualNode, [
									{
										key: 'props',
										get: function get() {
											return this._props
										},
									},
									{
										key: 'attr',
										value: function attr(attrName) {
											var _this$_attrs$attrName
											return null !== (_this$_attrs$attrName = this._attrs[attrName]) &&
												void 0 !== _this$_attrs$attrName
												? _this$_attrs$attrName
												: null
										},
									},
									{
										key: 'hasAttr',
										value: function hasAttr(attrName) {
											return void 0 !== this._attrs[attrName]
										},
									},
									{
										key: 'attrNames',
										get: function get() {
											return Object.keys(this._attrs)
										},
									},
								]),
								SerialVirtualNode
							)
						})(abstract_virtual_node_default),
						nodeNamesToTypes = {
							'#cdata-section': 2,
							'#text': 3,
							'#comment': 8,
							'#document': 9,
							'#document-fragment': 11,
						},
						nodeTypeToName = {}
					Object.keys(nodeNamesToTypes).forEach(function (nodeName2) {
						nodeTypeToName[nodeNamesToTypes[nodeName2]] = nodeName2
					})
					var serial_virtual_node_default = SerialVirtualNode,
						imports_exports = {}
					__export(imports_exports, {
						CssSelectorParser: function CssSelectorParser() {
							return import_css_selector_parser2.CssSelectorParser
						},
						doT: function doT() {
							return import_dot.default
						},
						emojiRegexText: function emojiRegexText() {
							return emoji_regex_default
						},
						memoize: function memoize() {
							return import_memoizee2.default
						},
					})
					var import_css_selector_parser2 = __toModule(require_lib()),
						import_dot = __toModule(require_doT()),
						emoji_regex_default = function emoji_regex_default() {
							return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC3\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC08\uDC26](?:\u200D\u2B1B)?|[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g
						},
						import_memoizee2 = __toModule(require_memoizee()),
						import_es6_promise = __toModule(require_es6_promise()),
						import_typedarray = __toModule(require_typedarray())
					__toModule(require_weakmap_polyfill())
					;(import_dot.default.templateSettings.strip = !1),
						'Promise' in window || import_es6_promise.default.polyfill(),
						'Uint32Array' in window || (window.Uint32Array = import_typedarray.Uint32Array),
						window.Uint32Array &&
							('some' in window.Uint32Array.prototype ||
								Object.defineProperty(window.Uint32Array.prototype, 'some', {
									value: Array.prototype.some,
								}),
							'reduce' in window.Uint32Array.prototype ||
								Object.defineProperty(window.Uint32Array.prototype, 'reduce', {
									value: Array.prototype.reduce,
								}))
					var defaultReporter,
						cleanup_default = function cleanup(resolve, reject) {
							if (
								((resolve = resolve || function res() {}),
								(reject = reject || axe.log),
								!axe._audit)
							)
								throw new Error('No audit configured')
							var q = axe.utils.queue(),
								cleanupErrors = []
							Object.keys(axe.plugins).forEach(function (key) {
								q.defer(function (res) {
									var rej = function rej2(err2) {
										cleanupErrors.push(err2), res()
									}
									try {
										axe.plugins[key].cleanup(res, rej)
									} catch (err2) {
										rej(err2)
									}
								})
							})
							var flattenedTree = axe.utils.getFlattenedTree(document.body)
							axe.utils.querySelectorAll(flattenedTree, 'iframe, frame').forEach(function (node) {
								q.defer(function (res, rej) {
									return axe.utils.sendCommandToFrame(
										node.actualNode,
										{ command: 'cleanup-plugin' },
										res,
										rej,
									)
								})
							}),
								q
									.then(function (results) {
										0 === cleanupErrors.length ? resolve(results) : reject(cleanupErrors)
									})
									.catch(reject)
						},
						reporters = {}
					function hasReporter(reporterName) {
						return reporters.hasOwnProperty(reporterName)
					}
					function getReporter(reporter) {
						return 'string' == typeof reporter && reporters[reporter]
							? reporters[reporter]
							: 'function' == typeof reporter
							? reporter
							: defaultReporter
					}
					var configure_default = function configure(spec) {
						var audit
						if (!(audit = axe._audit)) throw new Error('No audit configured')
						if (spec.axeVersion || spec.ver) {
							var specVersion = spec.axeVersion || spec.ver
							if (!/^\d+\.\d+\.\d+(-canary)?/.test(specVersion))
								throw new Error('Invalid configured version '.concat(specVersion))
							var _specVersion$split2 = _slicedToArray(specVersion.split('-'), 2),
								version = _specVersion$split2[0],
								canary = _specVersion$split2[1],
								_version$split$map2 = _slicedToArray(version.split('.').map(Number), 3),
								major = _version$split$map2[0],
								minor = _version$split$map2[1],
								patch = _version$split$map2[2],
								_axe$version$split2 = _slicedToArray(axe.version.split('-'), 2),
								axeVersion = _axe$version$split2[0],
								axeCanary = _axe$version$split2[1],
								_axeVersion$split$map2 = _slicedToArray(axeVersion.split('.').map(Number), 3),
								axeMajor = _axeVersion$split$map2[0],
								axeMinor = _axeVersion$split$map2[1],
								axePatch = _axeVersion$split$map2[2]
							if (
								major !== axeMajor ||
								axeMinor < minor ||
								(axeMinor === minor && axePatch < patch) ||
								(major === axeMajor &&
									minor === axeMinor &&
									patch === axePatch &&
									canary &&
									canary !== axeCanary)
							)
								throw new Error(
									'Configured version '
										.concat(specVersion, ' is not compatible with current axe version ')
										.concat(axe.version),
								)
						}
						if (
							(spec.reporter &&
								('function' == typeof spec.reporter || hasReporter(spec.reporter)) &&
								(audit.reporter = spec.reporter),
							spec.checks)
						) {
							if (!Array.isArray(spec.checks))
								throw new TypeError('Checks property must be an array')
							spec.checks.forEach(function (check) {
								if (!check.id)
									throw new TypeError(
										'Configured check '.concat(
											JSON.stringify(check),
											' is invalid. Checks must be an object with at least an id property',
										),
									)
								audit.addCheck(check)
							})
						}
						var modifiedRules = []
						if (spec.rules) {
							if (!Array.isArray(spec.rules)) throw new TypeError('Rules property must be an array')
							spec.rules.forEach(function (rule) {
								if (!rule.id)
									throw new TypeError(
										'Configured rule '.concat(
											JSON.stringify(rule),
											' is invalid. Rules must be an object with at least an id property',
										),
									)
								modifiedRules.push(rule.id), audit.addRule(rule)
							})
						}
						if (
							(spec.disableOtherRules &&
								audit.rules.forEach(function (rule) {
									!1 === modifiedRules.includes(rule.id) && (rule.enabled = !1)
								}),
							void 0 !== spec.branding
								? audit.setBranding(spec.branding)
								: audit._constructHelpUrls(),
							spec.tagExclude && (audit.tagExclude = spec.tagExclude),
							spec.locale && audit.applyLocale(spec.locale),
							spec.standards &&
								(function configureStandards(config) {
									Object.keys(standards).forEach(function (propName) {
										config[propName] &&
											(standards[propName] = deep_merge_default(
												standards[propName],
												config[propName],
											))
									})
								})(spec.standards),
							spec.noHtml && (audit.noHtml = !0),
							spec.allowedOrigins)
						) {
							if (!Array.isArray(spec.allowedOrigins))
								throw new TypeError('Allowed origins property must be an array')
							if (spec.allowedOrigins.includes('*'))
								throw new Error(
									'"*" is not allowed. Use "'.concat(constants_default.allOrigins, '" instead'),
								)
							audit.setAllowedOrigins(spec.allowedOrigins)
						}
					}
					var get_rules_default = function getRules(tags) {
							var matchingRules = (tags = tags || []).length
									? axe._audit.rules.filter(function (item) {
											return !!tags.filter(function (tag) {
												return -1 !== item.tags.indexOf(tag)
											}).length
									  })
									: axe._audit.rules,
								ruleData = axe._audit.data.rules || {}
							return matchingRules.map(function (matchingRule) {
								var rd = ruleData[matchingRule.id] || {}
								return {
									ruleId: matchingRule.id,
									description: rd.description,
									help: rd.help,
									helpUrl: rd.helpUrl,
									tags: matchingRule.tags,
									actIds: matchingRule.actIds,
								}
							})
						},
						aria_exports = {}
					__export(aria_exports, {
						allowedAttr: function allowedAttr() {
							return allowed_attr_default
						},
						arialabelText: function arialabelText() {
							return arialabel_text_default
						},
						arialabelledbyText: function arialabelledbyText() {
							return arialabelledby_text_default
						},
						getAccessibleRefs: function getAccessibleRefs() {
							return get_accessible_refs_default
						},
						getElementUnallowedRoles: function getElementUnallowedRoles() {
							return get_element_unallowed_roles_default
						},
						getExplicitRole: function getExplicitRole() {
							return get_explicit_role_default
						},
						getImplicitRole: function getImplicitRole() {
							return implicit_role_default
						},
						getOwnedVirtual: function getOwnedVirtual() {
							return get_owned_virtual_default
						},
						getRole: function getRole() {
							return get_role_default
						},
						getRoleType: function getRoleType() {
							return get_role_type_default
						},
						getRolesByType: function getRolesByType() {
							return get_roles_by_type_default
						},
						getRolesWithNameFromContents: function getRolesWithNameFromContents() {
							return get_roles_with_name_from_contents_default
						},
						implicitNodes: function implicitNodes() {
							return implicit_nodes_default
						},
						implicitRole: function implicitRole() {
							return implicit_role_default
						},
						isAccessibleRef: function isAccessibleRef() {
							return is_accessible_ref_default
						},
						isAriaRoleAllowedOnElement: function isAriaRoleAllowedOnElement() {
							return is_aria_role_allowed_on_element_default
						},
						isUnsupportedRole: function isUnsupportedRole() {
							return is_unsupported_role_default
						},
						isValidRole: function isValidRole() {
							return is_valid_role_default
						},
						label: function label() {
							return label_default2
						},
						labelVirtual: function labelVirtual() {
							return label_virtual_default
						},
						lookupTable: function lookupTable() {
							return lookup_table_default
						},
						namedFromContents: function namedFromContents() {
							return named_from_contents_default
						},
						requiredAttr: function requiredAttr() {
							return required_attr_default
						},
						requiredContext: function requiredContext() {
							return required_context_default
						},
						requiredOwned: function requiredOwned() {
							return required_owned_default
						},
						validateAttr: function validateAttr() {
							return validate_attr_default
						},
						validateAttrValue: function validateAttrValue() {
							return validate_attr_value_default
						},
					})
					var get_global_aria_attrs_default = function getGlobalAriaAttrs() {
						return cache_default.get('globalAriaAttrs', function () {
							return Object.keys(standards_default.ariaAttrs).filter(function (attrName) {
								return standards_default.ariaAttrs[attrName].global
							})
						})
					}
					var allowed_attr_default = function allowedAttr(role) {
						var roleDef = standards_default.ariaRoles[role],
							attrs = _toConsumableArray(get_global_aria_attrs_default())
						return roleDef
							? (roleDef.allowedAttrs &&
									attrs.push.apply(attrs, _toConsumableArray(roleDef.allowedAttrs)),
							  roleDef.requiredAttrs &&
									attrs.push.apply(attrs, _toConsumableArray(roleDef.requiredAttrs)),
							  attrs)
							: attrs
					}
					var arialabel_text_default = function arialabelText(vNode) {
						if (!(vNode instanceof abstract_virtual_node_default)) {
							if (1 !== vNode.nodeType) return ''
							vNode = get_node_from_tree_default(vNode)
						}
						return vNode.attr('aria-label') || ''
					}
					var is_unsupported_role_default = function isUnsupportedRole(role) {
						var roleDefinition = standards_default.ariaRoles[role]
						return !!roleDefinition && !!roleDefinition.unsupported
					}
					var is_valid_role_default = function isValidRole(role) {
						var _ref47 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
							allowAbstract = _ref47.allowAbstract,
							_ref47$flagUnsupporte = _ref47.flagUnsupported,
							flagUnsupported = void 0 !== _ref47$flagUnsupporte && _ref47$flagUnsupporte,
							roleDefinition = standards_default.ariaRoles[role],
							isRoleUnsupported = is_unsupported_role_default(role)
						return (
							!(!roleDefinition || (flagUnsupported && isRoleUnsupported)) &&
							(!!allowAbstract || 'abstract' !== roleDefinition.type)
						)
					}
					var get_explicit_role_default = function getExplicitRole(vNode) {
						var _ref48 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
							fallback = _ref48.fallback,
							abstracts = _ref48.abstracts,
							dpub = _ref48.dpub
						if (
							1 !==
							(vNode =
								vNode instanceof abstract_virtual_node_default
									? vNode
									: get_node_from_tree_default(vNode)).props.nodeType
						)
							return null
						var roleAttr = (vNode.attr('role') || '').trim().toLowerCase(),
							roleList = fallback ? token_list_default(roleAttr) : [roleAttr],
							firstValidRole = roleList.find(function (role) {
								return (
									!(!dpub && 'doc-' === role.substr(0, 4)) &&
									is_valid_role_default(role, { allowAbstract: abstracts })
								)
							})
						return firstValidRole || null
					}
					var get_elements_by_content_type_default = function getElementsByContentType(type) {
						return Object.keys(standards_default.htmlElms).filter(function (nodeName2) {
							var elm = standards_default.htmlElms[nodeName2]
							return elm.contentTypes
								? elm.contentTypes.includes(type)
								: !!elm.variant &&
										!(!elm.variant.default || !elm.variant.default.contentTypes) &&
										elm.variant.default.contentTypes.includes(type)
						})
					}
					var to_grid_default = memoize_default(function toGrid(node) {
						for (
							var table = [], rows = node.rows, i = 0, rowLength = rows.length;
							i < rowLength;
							i++
						) {
							var cells = rows[i].cells
							table[i] = table[i] || []
							for (var columnIndex = 0, j = 0, cellLength = cells.length; j < cellLength; j++)
								for (var colSpan = 0; colSpan < cells[j].colSpan; colSpan++) {
									for (
										var rowspanAttr = cells[j].getAttribute('rowspan'),
											rowspanValue =
												0 === parseInt(rowspanAttr) || 0 === cells[j].rowspan
													? rows.length
													: cells[j].rowSpan,
											rowSpan = 0;
										rowSpan < rowspanValue;
										rowSpan++
									) {
										for (
											table[i + rowSpan] = table[i + rowSpan] || [];
											table[i + rowSpan][columnIndex];

										)
											columnIndex++
										table[i + rowSpan][columnIndex] = cells[j]
									}
									columnIndex++
								}
						}
						return table
					})
					var get_cell_position_default = memoize_default(function getCellPosition(
						cell,
						tableGrid,
					) {
						var rowIndex, index
						for (
							tableGrid || (tableGrid = to_grid_default(find_up_default(cell, 'table'))),
								rowIndex = 0;
							rowIndex < tableGrid.length;
							rowIndex++
						)
							if (tableGrid[rowIndex] && -1 !== (index = tableGrid[rowIndex].indexOf(cell)))
								return { x: index, y: rowIndex }
					})
					var get_scope_default = function getScope(cell) {
						var vNode =
							cell instanceof abstract_virtual_node_default
								? cell
								: get_node_from_tree_default(cell)
						cell = vNode.actualNode
						var scope = vNode.attr('scope'),
							role = vNode.attr('role')
						if (!['td', 'th'].includes(vNode.props.nodeName))
							throw new TypeError('Expected TD or TH element')
						if ('columnheader' === role) return 'col'
						if ('rowheader' === role) return 'row'
						if ('col' === scope || 'row' === scope) return scope
						if ('th' !== vNode.props.nodeName) return !1
						if (!vNode.actualNode) return 'auto'
						var tableGrid = to_grid_default(find_up_default(cell, 'table')),
							pos = get_cell_position_default(cell, tableGrid)
						return tableGrid[pos.y].reduce(function (headerRow2, cell2) {
							return headerRow2 && 'TH' === cell2.nodeName.toUpperCase()
						}, !0)
							? 'col'
							: tableGrid
									.map(function (col) {
										return col[pos.x]
									})
									.reduce(function (headerCol2, cell2) {
										return headerCol2 && cell2 && 'TH' === cell2.nodeName.toUpperCase()
									}, !0)
							? 'row'
							: 'auto'
					}
					var is_column_header_default = function isColumnHeader(element) {
						return -1 !== ['col', 'auto'].indexOf(get_scope_default(element))
					}
					var is_row_header_default = function isRowHeader(cell) {
							return ['row', 'auto'].includes(get_scope_default(cell))
						},
						sectioningElementSelector =
							get_elements_by_content_type_default('sectioning')
								.map(function (nodeName2) {
									return ''.concat(nodeName2, ':not([role])')
								})
								.join(', ') +
							' , main:not([role]), [role=article], [role=complementary], [role=main], [role=navigation], [role=region]'
					function hasAccessibleName(vNode) {
						var ariaLabelledby = sanitize_default(arialabelledby_text_default(vNode)),
							ariaLabel = sanitize_default(arialabel_text_default(vNode))
						return !(!ariaLabelledby && !ariaLabel)
					}
					var implicit_html_roles_default = {
						a: function a(vNode) {
							return vNode.hasAttr('href') ? 'link' : null
						},
						area: function area(vNode) {
							return vNode.hasAttr('href') ? 'link' : null
						},
						article: 'article',
						aside: 'complementary',
						body: 'document',
						button: 'button',
						datalist: 'listbox',
						dd: 'definition',
						dfn: 'term',
						details: 'group',
						dialog: 'dialog',
						dt: 'term',
						fieldset: 'group',
						figure: 'figure',
						footer: function footer(vNode) {
							return closest_default(vNode, sectioningElementSelector) ? null : 'contentinfo'
						},
						form: function form(vNode) {
							return hasAccessibleName(vNode) ? 'form' : null
						},
						h1: 'heading',
						h2: 'heading',
						h3: 'heading',
						h4: 'heading',
						h5: 'heading',
						h6: 'heading',
						header: function header(vNode) {
							return closest_default(vNode, sectioningElementSelector) ? null : 'banner'
						},
						hr: 'separator',
						img: function img(vNode) {
							var emptyAlt = vNode.hasAttr('alt') && !vNode.attr('alt'),
								hasGlobalAria = get_global_aria_attrs_default().find(function (attr) {
									return vNode.hasAttr(attr)
								})
							return !emptyAlt || hasGlobalAria || _isFocusable(vNode) ? 'img' : 'presentation'
						},
						input: function input(vNode) {
							var suggestionsSourceElement
							if (vNode.hasAttr('list')) {
								var listElement = idrefs_default(vNode.actualNode, 'list').filter(function (node) {
									return !!node
								})[0]
								suggestionsSourceElement =
									listElement && 'datalist' === listElement.nodeName.toLowerCase()
							}
							switch (vNode.props.type) {
								case 'checkbox':
									return 'checkbox'
								case 'number':
									return 'spinbutton'
								case 'radio':
									return 'radio'
								case 'range':
									return 'slider'
								case 'search':
									return suggestionsSourceElement ? 'combobox' : 'searchbox'
								case 'button':
								case 'image':
								case 'reset':
								case 'submit':
									return 'button'
								case 'text':
								case 'tel':
								case 'url':
								case 'email':
								case '':
									return suggestionsSourceElement ? 'combobox' : 'textbox'
								default:
									return 'textbox'
							}
						},
						li: 'listitem',
						main: 'main',
						math: 'math',
						menu: 'list',
						nav: 'navigation',
						ol: 'list',
						optgroup: 'group',
						option: 'option',
						output: 'status',
						progress: 'progressbar',
						section: function section(vNode) {
							return hasAccessibleName(vNode) ? 'region' : null
						},
						select: function select(vNode) {
							return vNode.hasAttr('multiple') || parseInt(vNode.attr('size')) > 1
								? 'listbox'
								: 'combobox'
						},
						summary: 'button',
						table: 'table',
						tbody: 'rowgroup',
						td: function td(vNode) {
							var table = closest_default(vNode, 'table'),
								role = get_explicit_role_default(table)
							return ['grid', 'treegrid'].includes(role) ? 'gridcell' : 'cell'
						},
						textarea: 'textbox',
						tfoot: 'rowgroup',
						th: function th(vNode) {
							return is_column_header_default(vNode)
								? 'columnheader'
								: is_row_header_default(vNode)
								? 'rowheader'
								: void 0
						},
						thead: 'rowgroup',
						tr: 'row',
						ul: 'list',
					}
					var from_primative_default = function fromPrimative(someString, matcher) {
						var matcherType = _typeof(matcher)
						if (Array.isArray(matcher) && void 0 !== someString) return matcher.includes(someString)
						if ('function' === matcherType) return !!matcher(someString)
						if (null != someString) {
							if (matcher instanceof RegExp) return matcher.test(someString)
							if (/^\/.*\/$/.test(matcher)) {
								var pattern = matcher.substring(1, matcher.length - 1)
								return new RegExp(pattern).test(someString)
							}
						}
						return matcher === someString
					}
					var has_accessible_name_default = function hasAccessibleName2(vNode, matcher) {
						return from_primative_default(!!accessible_text_virtual_default(vNode), matcher)
					}
					var from_function_default = function fromFunction(getValue, matcher) {
						if (
							'object' !== _typeof(matcher) ||
							Array.isArray(matcher) ||
							matcher instanceof RegExp
						)
							throw new Error('Expect matcher to be an object')
						return Object.keys(matcher).every(function (propName) {
							return from_primative_default(getValue(propName), matcher[propName])
						})
					}
					var attributes_default = function attributes(vNode, matcher) {
						return (
							vNode instanceof abstract_virtual_node_default ||
								(vNode = get_node_from_tree_default(vNode)),
							from_function_default(function (attrName) {
								return vNode.attr(attrName)
							}, matcher)
						)
					}
					var condition_default = function condition(arg, condition2) {
						return !!condition2(arg)
					}
					var explicit_role_default = function explicitRole(vNode, matcher) {
						return from_primative_default(get_explicit_role_default(vNode), matcher)
					}
					var implicit_role_default2 = function implicitRole(vNode, matcher) {
						return from_primative_default(implicit_role_default(vNode), matcher)
					}
					var node_name_default = function nodeName(vNode, matcher) {
						return (
							vNode instanceof abstract_virtual_node_default ||
								(vNode = get_node_from_tree_default(vNode)),
							from_primative_default(vNode.props.nodeName, matcher)
						)
					}
					var properties_default = function properties(vNode, matcher) {
						return (
							vNode instanceof abstract_virtual_node_default ||
								(vNode = get_node_from_tree_default(vNode)),
							from_function_default(function (propName) {
								return vNode.props[propName]
							}, matcher)
						)
					}
					var semantic_role_default = function semanticRole(vNode, matcher) {
							return from_primative_default(get_role_default(vNode), matcher)
						},
						matchers = {
							hasAccessibleName: has_accessible_name_default,
							attributes: attributes_default,
							condition: condition_default,
							explicitRole: explicit_role_default,
							implicitRole: implicit_role_default2,
							nodeName: node_name_default,
							properties: properties_default,
							semanticRole: semantic_role_default,
						}
					var from_definition_default = function fromDefinition(vNode, definition) {
						return (
							vNode instanceof abstract_virtual_node_default ||
								(vNode = get_node_from_tree_default(vNode)),
							Array.isArray(definition)
								? definition.some(function (definitionItem) {
										return fromDefinition(vNode, definitionItem)
								  })
								: 'string' == typeof definition
								? matches_default(vNode, definition)
								: Object.keys(definition).every(function (matcherName) {
										if (!matchers[matcherName])
											throw new Error('Unknown matcher type "'.concat(matcherName, '"'))
										var matchMethod = matchers[matcherName],
											matcher = definition[matcherName]
										return matchMethod(vNode, matcher)
								  })
						)
					}
					var matches_default2 = function matches2(vNode, definition) {
						return from_definition_default(vNode, definition)
					}
					;(matches_default2.hasAccessibleName = has_accessible_name_default),
						(matches_default2.attributes = attributes_default),
						(matches_default2.condition = condition_default),
						(matches_default2.explicitRole = explicit_role_default),
						(matches_default2.fromDefinition = from_definition_default),
						(matches_default2.fromFunction = from_function_default),
						(matches_default2.fromPrimative = from_primative_default),
						(matches_default2.implicitRole = implicit_role_default2),
						(matches_default2.nodeName = node_name_default),
						(matches_default2.properties = properties_default),
						(matches_default2.semanticRole = semantic_role_default)
					var matches_default3 = matches_default2
					var get_element_spec_default = function getElementSpec(vNode) {
						var _ref49 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
							_ref49$noMatchAccessi = _ref49.noMatchAccessibleName,
							noMatchAccessibleName = void 0 !== _ref49$noMatchAccessi && _ref49$noMatchAccessi,
							standard = standards_default.htmlElms[vNode.props.nodeName]
						if (!standard) return {}
						if (!standard.variant) return standard
						var variant = standard.variant,
							spec = _objectWithoutProperties(standard, _excluded3)
						for (var variantName in variant)
							if (variant.hasOwnProperty(variantName) && 'default' !== variantName) {
								for (
									var _variant$variantName = variant[variantName],
										matches4 = _variant$variantName.matches,
										props = _objectWithoutProperties(_variant$variantName, _excluded4),
										matchProperties = Array.isArray(matches4) ? matches4 : [matches4],
										_i15 = 0;
									_i15 < matchProperties.length && noMatchAccessibleName;
									_i15++
								)
									if (matchProperties[_i15].hasOwnProperty('hasAccessibleName')) return standard
								if (matches_default3(vNode, matches4))
									for (var propName in props)
										props.hasOwnProperty(propName) && (spec[propName] = props[propName])
							}
						for (var _propName in variant.default)
							variant.default.hasOwnProperty(_propName) &&
								void 0 === spec[_propName] &&
								(spec[_propName] = variant.default[_propName])
						return spec
					}
					var implicit_role_default = function implicitRole2(node) {
							var _ref50 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
								chromium = _ref50.chromium,
								vNode =
									node instanceof abstract_virtual_node_default
										? node
										: get_node_from_tree_default(node)
							if (((node = vNode.actualNode), !vNode))
								throw new ReferenceError(
									'Cannot get implicit role of a node outside the current scope.',
								)
							var nodeName2 = vNode.props.nodeName,
								role = implicit_html_roles_default[nodeName2]
							if (!role && chromium) {
								var _get_element_spec_def = get_element_spec_default(vNode),
									chromiumRole = _get_element_spec_def.chromiumRole
								return chromiumRole || null
							}
							return 'function' == typeof role ? role(vNode) : role || null
						},
						inheritsPresentationChain = {
							td: ['tr'],
							th: ['tr'],
							tr: ['thead', 'tbody', 'tfoot', 'table'],
							thead: ['table'],
							tbody: ['table'],
							tfoot: ['table'],
							li: ['ol', 'ul'],
							dt: ['dl', 'div'],
							dd: ['dl', 'div'],
							div: ['dl'],
						}
					function getInheritedRole(vNode, explicitRoleOptions) {
						var parentNodeNames = inheritsPresentationChain[vNode.props.nodeName]
						if (!parentNodeNames) return null
						if (!vNode.parent)
							throw new ReferenceError(
								'Cannot determine role presentational inheritance of a required parent outside the current scope.',
							)
						if (!parentNodeNames.includes(vNode.parent.props.nodeName)) return null
						var parentRole = get_explicit_role_default(vNode.parent, explicitRoleOptions)
						return ['none', 'presentation'].includes(parentRole) &&
							!hasConflictResolution(vNode.parent)
							? parentRole
							: parentRole
							? null
							: getInheritedRole(vNode.parent, explicitRoleOptions)
					}
					function resolveImplicitRole(vNode, _ref51) {
						var chromium = _ref51.chromium,
							explicitRoleOptions = _objectWithoutProperties(_ref51, _excluded5),
							implicitRole3 = implicit_role_default(vNode, { chromium })
						if (!implicitRole3) return null
						var presentationalRole = getInheritedRole(vNode, explicitRoleOptions)
						return presentationalRole || implicitRole3
					}
					function hasConflictResolution(vNode) {
						return (
							get_global_aria_attrs_default().some(function (attr) {
								return vNode.hasAttr(attr)
							}) || _isFocusable(vNode)
						)
					}
					function resolveRole(node) {
						var _ref52 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
							noImplicit = _ref52.noImplicit,
							roleOptions = _objectWithoutProperties(_ref52, _excluded6),
							vNode =
								node instanceof abstract_virtual_node_default
									? node
									: get_node_from_tree_default(node)
						if (1 !== vNode.props.nodeType) return null
						var explicitRole2 = get_explicit_role_default(vNode, roleOptions)
						return explicitRole2
							? ['presentation', 'none'].includes(explicitRole2) && hasConflictResolution(vNode)
								? noImplicit
									? null
									: resolveImplicitRole(vNode, roleOptions)
								: explicitRole2
							: noImplicit
							? null
							: resolveImplicitRole(vNode, roleOptions)
					}
					var get_role_default = function getRole(node) {
							var _ref53 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
								noPresentational = _ref53.noPresentational,
								options = _objectWithoutProperties(_ref53, _excluded7),
								role = resolveRole(node, options)
							return noPresentational && ['presentation', 'none'].includes(role) ? null : role
						},
						alwaysTitleElements = ['iframe']
					var title_text_default = function titleText(node) {
						var vNode =
							node instanceof abstract_virtual_node_default
								? node
								: get_node_from_tree_default(node)
						return 1 === vNode.props.nodeType && node.hasAttr('title')
							? !matches_default2(vNode, alwaysTitleElements) &&
							  ['none', 'presentation'].includes(get_role_default(vNode))
								? ''
								: vNode.attr('title')
							: ''
					}
					var named_from_contents_default = function namedFromContents(vNode) {
						var _ref54 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
							strict = _ref54.strict
						if (
							1 !==
							(vNode =
								vNode instanceof abstract_virtual_node_default
									? vNode
									: get_node_from_tree_default(vNode)).props.nodeType
						)
							return !1
						var role = get_role_default(vNode),
							roleDef = standards_default.ariaRoles[role]
						return (
							!(!roleDef || !roleDef.nameFromContent) ||
							(!strict && (!roleDef || ['presentation', 'none'].includes(role)))
						)
					}
					var get_owned_virtual_default = function getOwnedVirtual(virtualNode) {
						var actualNode = virtualNode.actualNode,
							children = virtualNode.children
						if (!children) throw new Error('getOwnedVirtual requires a virtual node')
						if (virtualNode.hasAttr('aria-owns')) {
							var owns = idrefs_default(actualNode, 'aria-owns')
								.filter(function (element) {
									return !!element
								})
								.map(function (element) {
									return axe.utils.getNodeFromTree(element)
								})
							return [].concat(_toConsumableArray(children), _toConsumableArray(owns))
						}
						return _toConsumableArray(children)
					}
					var phrasingElements = get_elements_by_content_type_default('phrasing').concat(['#text'])
					function appendAccessibleText(contentText, virtualNode, context) {
						var nodeName2 = virtualNode.props.nodeName,
							contentTextAdd = accessible_text_virtual_default(virtualNode, context)
						return contentTextAdd
							? (phrasingElements.includes(nodeName2) ||
									(' ' !== contentTextAdd[0] && (contentTextAdd += ' '),
									contentText &&
										' ' !== contentText[contentText.length - 1] &&
										(contentTextAdd = ' ' + contentTextAdd)),
							  contentText + contentTextAdd)
							: contentText
					}
					var subtree_text_default = function subtreeText(virtualNode) {
						var context = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
							alreadyProcessed2 = accessible_text_virtual_default.alreadyProcessed
						context.startNode = context.startNode || virtualNode
						var _context = context,
							strict = _context.strict,
							inControlContext = _context.inControlContext,
							inLabelledByContext = _context.inLabelledByContext,
							_get_element_spec_def2 = get_element_spec_default(virtualNode, {
								noMatchAccessibleName: !0,
							}),
							contentTypes = _get_element_spec_def2.contentTypes
						if (
							alreadyProcessed2(virtualNode, context) ||
							1 !== virtualNode.props.nodeType ||
							(null != contentTypes && contentTypes.includes('embedded'))
						)
							return ''
						if (!named_from_contents_default(virtualNode, { strict }) && !context.subtreeDescendant)
							return ''
						if (!strict) {
							var subtreeDescendant = !inControlContext && !inLabelledByContext
							context = _extends({ subtreeDescendant }, context)
						}
						return get_owned_virtual_default(virtualNode).reduce(function (contentText, child) {
							return appendAccessibleText(contentText, child, context)
						}, '')
					}
					function getExplicitLabels(virtualNode) {
						if (!virtualNode.attr('id')) return []
						if (!virtualNode.actualNode)
							throw new TypeError('Cannot resolve explicit label reference for non-DOM nodes')
						return find_elms_in_context_default({
							elm: 'label',
							attr: 'for',
							value: virtualNode.attr('id'),
							context: virtualNode.actualNode,
						})
					}
					var label_text_default = function labelText(virtualNode) {
							var context = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
								alreadyProcessed2 = accessible_text_virtual_default.alreadyProcessed
							if (
								context.inControlContext ||
								context.inLabelledByContext ||
								alreadyProcessed2(virtualNode, context)
							)
								return ''
							context.startNode || (context.startNode = virtualNode)
							var labels,
								labelContext = _extends({ inControlContext: !0 }, context),
								explicitLabels = getExplicitLabels(virtualNode),
								implicitLabel = closest_default(virtualNode, 'label')
							return (
								implicitLabel
									? (labels = [].concat(_toConsumableArray(explicitLabels), [
											implicitLabel.actualNode,
									  ])).sort(node_sorter_default)
									: (labels = explicitLabels),
								labels
									.map(function (label3) {
										return accessible_text_default(label3, labelContext)
									})
									.filter(function (text) {
										return '' !== text
									})
									.join(' ')
							)
						},
						defaultButtonValues = { submit: 'Submit', image: 'Submit', reset: 'Reset', button: '' }
					function attrText(attr, vNode) {
						return vNode.attr(attr) || ''
					}
					function descendantText(nodeName2, _ref57, context) {
						var actualNode = _ref57.actualNode,
							nodeNames2 = [
								(nodeName2 = nodeName2.toLowerCase()),
								actualNode.nodeName.toLowerCase(),
							].join(','),
							candidate = actualNode.querySelector(nodeNames2)
						return candidate && candidate.nodeName.toLowerCase() === nodeName2
							? accessible_text_default(candidate, context)
							: ''
					}
					var native_text_methods_default = {
						valueText: function valueText(_ref55) {
							return _ref55.actualNode.value || ''
						},
						buttonDefaultText: function buttonDefaultText(_ref56) {
							var actualNode = _ref56.actualNode
							return defaultButtonValues[actualNode.type] || ''
						},
						tableCaptionText: descendantText.bind(null, 'caption'),
						figureText: descendantText.bind(null, 'figcaption'),
						svgTitleText: descendantText.bind(null, 'title'),
						fieldsetLegendText: descendantText.bind(null, 'legend'),
						altText: attrText.bind(null, 'alt'),
						tableSummaryText: attrText.bind(null, 'summary'),
						titleText: title_text_default,
						subtreeText: subtree_text_default,
						labelText: label_text_default,
						singleSpace: function singleSpace() {
							return ' '
						},
						placeholderText: attrText.bind(null, 'placeholder'),
					}
					function findTextMethods(virtualNode) {
						return (
							get_element_spec_default(virtualNode, { noMatchAccessibleName: !0 }).namingMethods ||
							[]
						).map(function (methodName) {
							return native_text_methods_default[methodName]
						})
					}
					var native_text_alternative_default = function nativeTextAlternative(virtualNode) {
							var context = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
								actualNode = virtualNode.actualNode
							if (
								1 !== virtualNode.props.nodeType ||
								['presentation', 'none'].includes(get_role_default(virtualNode))
							)
								return ''
							var textMethods = findTextMethods(virtualNode),
								accName = textMethods.reduce(function (accName2, step) {
									return accName2 || step(virtualNode, context)
								}, '')
							return (
								context.debug && axe.log(accName || '{empty-value}', actualNode, context), accName
							)
						},
						unsupported_default = {
							accessibleNameFromFieldValue: ['combobox', 'listbox', 'progressbar'],
						},
						nonTextInputTypes = [
							'button',
							'checkbox',
							'color',
							'file',
							'hidden',
							'image',
							'password',
							'radio',
							'reset',
							'submit',
						]
					var is_native_textbox_default = function isNativeTextbox(node) {
						var nodeName2 = (node =
							node instanceof abstract_virtual_node_default
								? node
								: get_node_from_tree_default(node)).props.nodeName
						return (
							'textarea' === nodeName2 ||
							('input' === nodeName2 &&
								!nonTextInputTypes.includes((node.attr('type') || '').toLowerCase()))
						)
					}
					var is_native_select_default = function isNativeSelect(node) {
						return (
							'select' ===
							(node =
								node instanceof abstract_virtual_node_default
									? node
									: get_node_from_tree_default(node)).props.nodeName
						)
					}
					var is_aria_textbox_default = function isAriaTextbox(node) {
						return 'textbox' === get_explicit_role_default(node)
					}
					var is_aria_listbox_default = function isAriaListbox(node) {
						return 'listbox' === get_explicit_role_default(node)
					}
					var is_aria_combobox_default = function isAriaCombobox(node) {
							return 'combobox' === get_explicit_role_default(node)
						},
						rangeRoles = ['progressbar', 'scrollbar', 'slider', 'spinbutton']
					var is_aria_range_default = function isAriaRange(node) {
							var role = get_explicit_role_default(node)
							return rangeRoles.includes(role)
						},
						controlValueRoles = [
							'textbox',
							'progressbar',
							'scrollbar',
							'slider',
							'spinbutton',
							'combobox',
							'listbox',
						],
						_formControlValueMethods = {
							nativeTextboxValue: function nativeTextboxValue(node) {
								var vNode =
									node instanceof abstract_virtual_node_default
										? node
										: get_node_from_tree_default(node)
								if (is_native_textbox_default(vNode)) return vNode.props.value || ''
								return ''
							},
							nativeSelectValue: function nativeSelectValue(node) {
								var vNode =
									node instanceof abstract_virtual_node_default
										? node
										: get_node_from_tree_default(node)
								if (!is_native_select_default(vNode)) return ''
								var options = query_selector_all_default(vNode, 'option'),
									selectedOptions = options.filter(function (option) {
										return option.props.selected
									})
								selectedOptions.length || selectedOptions.push(options[0])
								return (
									selectedOptions
										.map(function (option) {
											return visible_virtual_default(option)
										})
										.join(' ') || ''
								)
							},
							ariaTextboxValue: function ariaTextboxValue(node) {
								var vNode =
										node instanceof abstract_virtual_node_default
											? node
											: get_node_from_tree_default(node),
									actualNode = vNode.actualNode
								if (!is_aria_textbox_default(vNode)) return ''
								return !actualNode || (actualNode && !_isHiddenForEveryone(actualNode))
									? visible_virtual_default(vNode, !0)
									: actualNode.textContent
							},
							ariaListboxValue,
							ariaComboboxValue: function ariaComboboxValue(node, context) {
								var vNode =
									node instanceof abstract_virtual_node_default
										? node
										: get_node_from_tree_default(node)
								if (!is_aria_combobox_default(vNode)) return ''
								var listbox = get_owned_virtual_default(vNode).filter(function (elm) {
									return 'listbox' === get_role_default(elm)
								})[0]
								return listbox ? ariaListboxValue(listbox, context) : ''
							},
							ariaRangeValue: function ariaRangeValue(node) {
								var vNode =
									node instanceof abstract_virtual_node_default
										? node
										: get_node_from_tree_default(node)
								if (!is_aria_range_default(vNode) || !vNode.hasAttr('aria-valuenow')) return ''
								var valueNow = +vNode.attr('aria-valuenow')
								return isNaN(valueNow) ? '0' : String(valueNow)
							},
						}
					function ariaListboxValue(node, context) {
						var vNode =
							node instanceof abstract_virtual_node_default
								? node
								: get_node_from_tree_default(node)
						if (!is_aria_listbox_default(vNode)) return ''
						var selected = get_owned_virtual_default(vNode).filter(function (owned) {
							return 'option' === get_role_default(owned) && 'true' === owned.attr('aria-selected')
						})
						return 0 === selected.length
							? ''
							: accessible_text_virtual_default(selected[0], context)
					}
					var form_control_value_default = function formControlValue(virtualNode) {
						var context = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
							actualNode = virtualNode.actualNode,
							unsupportedRoles = unsupported_default.accessibleNameFromFieldValue || [],
							role = get_role_default(virtualNode)
						if (
							context.startNode === virtualNode ||
							!controlValueRoles.includes(role) ||
							unsupportedRoles.includes(role)
						)
							return ''
						var valueMethods = Object.keys(_formControlValueMethods).map(function (name) {
								return _formControlValueMethods[name]
							}),
							valueString = valueMethods.reduce(function (accName, step) {
								return accName || step(virtualNode, context)
							}, '')
						return (
							context.debug && log_default(valueString || '{empty-value}', actualNode, context),
							valueString
						)
					}
					var has_unicode_default = function hasUnicode(str, options) {
						var emoji = options.emoji,
							nonBmp = options.nonBmp,
							punctuations = options.punctuations
						return emoji
							? emoji_regex_default().test(str)
							: nonBmp
							? /[\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u20A0-\u20CF\u20D0-\u20FF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\uE000-\uF8FF]/g.test(
									str,
							  ) || /[\uDB80-\uDBBF][\uDC00-\uDFFF]/g.test(str)
							: !!punctuations &&
							  /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&\xa3\xa2\xa5\xa7\u20ac()*+,\-.\/:;<=>?@\[\]^_`{|}~\xb1]/g.test(
									str,
							  )
					}
					var is_icon_ligature_default = function isIconLigature(textVNode) {
						var differenceThreshold =
								arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.15,
							occuranceThreshold =
								arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
							nodeValue = textVNode.actualNode.nodeValue.trim()
						if (
							!sanitize_default(nodeValue) ||
							has_unicode_default(nodeValue, { emoji: !0, nonBmp: !0 })
						)
							return !1
						var canvasContext = cache_default.get('canvasContext', function () {
								return document.createElement('canvas').getContext('2d')
							}),
							canvas = canvasContext.canvas
						cache_default.get('fonts') || cache_default.set('fonts', {})
						var fonts = cache_default.get('fonts'),
							style = window.getComputedStyle(textVNode.parent.actualNode),
							fontFamily = style.getPropertyValue('font-family')
						fonts[fontFamily] || (fonts[fontFamily] = { occurances: 0, numLigatures: 0 })
						var font = fonts[fontFamily]
						if (font.occurances >= occuranceThreshold) {
							if (font.numLigatures / font.occurances == 1) return !0
							if (0 === font.numLigatures) return !1
						}
						font.occurances++
						var fontSize = 30,
							fontStyle = ''.concat(fontSize, 'px ').concat(fontFamily)
						canvasContext.font = fontStyle
						var firstChar = nodeValue.charAt(0),
							width = canvasContext.measureText(firstChar).width
						if (width < 30) {
							var diff = 30 / width
							;(width *= diff),
								(fontStyle = ''.concat((fontSize *= diff), 'px ').concat(fontFamily))
						}
						;(canvas.width = width),
							(canvas.height = fontSize),
							(canvasContext.font = fontStyle),
							(canvasContext.textAlign = 'left'),
							(canvasContext.textBaseline = 'top'),
							canvasContext.fillText(firstChar, 0, 0)
						var compareData = new Uint32Array(
							canvasContext.getImageData(0, 0, width, fontSize).data.buffer,
						)
						if (
							!compareData.some(function (pixel) {
								return pixel
							})
						)
							return font.numLigatures++, !0
						canvasContext.clearRect(0, 0, width, fontSize), canvasContext.fillText(nodeValue, 0, 0)
						var compareWith = new Uint32Array(
								canvasContext.getImageData(0, 0, width, fontSize).data.buffer,
							),
							differences = compareData.reduce(function (diff, pixel, i) {
								return (0 === pixel && 0 === compareWith[i]) ||
									(0 !== pixel && 0 !== compareWith[i])
									? diff
									: ++diff
							}, 0),
							expectedWidth = nodeValue.split('').reduce(function (width2, _char3) {
								return width2 + canvasContext.measureText(_char3).width
							}, 0),
							actualWidth = canvasContext.measureText(nodeValue).width,
							pixelDifference = differences / compareData.length,
							sizeDifference = 1 - actualWidth / expectedWidth
						return (
							pixelDifference >= differenceThreshold &&
							sizeDifference >= differenceThreshold &&
							(font.numLigatures++, !0)
						)
					}
					function accessibleTextVirtual(virtualNode) {
						var context = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
						if (
							((context = prepareContext(virtualNode, context)),
							shouldIgnoreHidden(virtualNode, context))
						)
							return ''
						if (shouldIgnoreIconLigature(virtualNode, context)) return ''
						var computationSteps = [
								arialabelledby_text_default,
								arialabel_text_default,
								native_text_alternative_default,
								form_control_value_default,
								subtree_text_default,
								textNodeValue,
								title_text_default,
							],
							accName = computationSteps.reduce(function (accName2, step) {
								return (
									context.startNode === virtualNode && (accName2 = sanitize_default(accName2)),
									'' !== accName2 ? accName2 : step(virtualNode, context)
								)
							}, '')
						return (
							context.debug && axe.log(accName || '{empty-value}', virtualNode.actualNode, context),
							accName
						)
					}
					function textNodeValue(virtualNode) {
						return 3 !== virtualNode.props.nodeType ? '' : virtualNode.props.nodeValue
					}
					function shouldIgnoreHidden(virtualNode, context) {
						return (
							!!virtualNode &&
							1 === virtualNode.props.nodeType &&
							!context.includeHidden &&
							!_isVisibleToScreenReaders(virtualNode)
						)
					}
					function shouldIgnoreIconLigature(virtualNode, context) {
						var ignoreIconLigature = context.ignoreIconLigature,
							pixelThreshold = context.pixelThreshold,
							occuranceThreshold = context.occuranceThreshold
						return (
							!(3 !== virtualNode.props.nodeType || !ignoreIconLigature) &&
							is_icon_ligature_default(virtualNode, pixelThreshold, occuranceThreshold)
						)
					}
					function prepareContext(virtualNode, context) {
						return (
							context.startNode || (context = _extends({ startNode: virtualNode }, context)),
							1 === virtualNode.props.nodeType &&
								context.inLabelledByContext &&
								void 0 === context.includeHidden &&
								(context = _extends(
									{ includeHidden: !_isVisibleToScreenReaders(virtualNode) },
									context,
								)),
							context
						)
					}
					accessibleTextVirtual.alreadyProcessed = function alreadyProcessed(virtualnode, context) {
						return (
							(context.processed = context.processed || []),
							!!context.processed.includes(virtualnode) || (context.processed.push(virtualnode), !1)
						)
					}
					var accessible_text_virtual_default = accessibleTextVirtual
					var accessible_text_default = function accessibleText(element, context) {
						var virtualNode = get_node_from_tree_default(element)
						return accessible_text_virtual_default(virtualNode, context)
					}
					var arialabelledby_text_default = function arialabelledbyText(vNode) {
							var context = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
							if (!(vNode instanceof abstract_virtual_node_default)) {
								if (1 !== vNode.nodeType) return ''
								vNode = get_node_from_tree_default(vNode)
							}
							if (
								1 !== vNode.props.nodeType ||
								context.inLabelledByContext ||
								context.inControlContext ||
								!vNode.attr('aria-labelledby')
							)
								return ''
							var refs = idrefs_default(vNode, 'aria-labelledby').filter(function (elm) {
								return elm
							})
							return refs.reduce(function (accessibleName, elm) {
								var accessibleNameAdd = accessible_text_default(
									elm,
									_extends(
										{ inLabelledByContext: !0, startNode: context.startNode || vNode },
										context,
									),
								)
								return accessibleName
									? ''.concat(accessibleName, ' ').concat(accessibleNameAdd)
									: accessibleNameAdd
							}, '')
						},
						text_exports = {}
					__export(text_exports, {
						accessibleText: function accessibleText() {
							return accessible_text_default
						},
						accessibleTextVirtual: function accessibleTextVirtual() {
							return accessible_text_virtual_default
						},
						autocomplete: function autocomplete() {
							return _autocomplete
						},
						formControlValue: function formControlValue() {
							return form_control_value_default
						},
						formControlValueMethods: function formControlValueMethods() {
							return _formControlValueMethods
						},
						hasUnicode: function hasUnicode() {
							return has_unicode_default
						},
						isHumanInterpretable: function isHumanInterpretable() {
							return is_human_interpretable_default
						},
						isIconLigature: function isIconLigature() {
							return is_icon_ligature_default
						},
						isValidAutocomplete: function isValidAutocomplete() {
							return is_valid_autocomplete_default
						},
						label: function label() {
							return label_default
						},
						labelText: function labelText() {
							return label_text_default
						},
						labelVirtual: function labelVirtual() {
							return label_virtual_default2
						},
						nativeElementType: function nativeElementType() {
							return native_element_type_default
						},
						nativeTextAlternative: function nativeTextAlternative() {
							return native_text_alternative_default
						},
						nativeTextMethods: function nativeTextMethods() {
							return native_text_methods_default
						},
						removeUnicode: function removeUnicode() {
							return remove_unicode_default
						},
						sanitize: function sanitize() {
							return sanitize_default
						},
						subtreeText: function subtreeText() {
							return subtree_text_default
						},
						titleText: function titleText() {
							return title_text_default
						},
						unsupported: function unsupported() {
							return unsupported_default
						},
						visible: function visible() {
							return visible_default
						},
						visibleTextNodes: function visibleTextNodes() {
							return visible_text_nodes_default
						},
						visibleVirtual: function visibleVirtual() {
							return visible_virtual_default
						},
					})
					var remove_unicode_default = function removeUnicode(str, options) {
						var emoji = options.emoji,
							nonBmp = options.nonBmp,
							punctuations = options.punctuations
						return (
							emoji && (str = str.replace(emoji_regex_default(), '')),
							nonBmp &&
								(str = (str = str.replace(
									/[\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u20A0-\u20CF\u20D0-\u20FF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\uE000-\uF8FF]/g,
									'',
								)).replace(/[\uDB80-\uDBBF][\uDC00-\uDFFF]/g, '')),
							punctuations &&
								(str = str.replace(
									/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&\xa3\xa2\xa5\xa7\u20ac()*+,\-.\/:;<=>?@\[\]^_`{|}~\xb1]/g,
									'',
								)),
							str
						)
					}
					var is_human_interpretable_default = function isHumanInterpretable(str) {
							if (!str.length) return 0
							if (['x', 'i'].includes(str)) return 0
							var noUnicodeStr = remove_unicode_default(str, {
								emoji: !0,
								nonBmp: !0,
								punctuations: !0,
							})
							return sanitize_default(noUnicodeStr) ? 1 : 0
						},
						_autocomplete = {
							stateTerms: ['on', 'off'],
							standaloneTerms: [
								'name',
								'honorific-prefix',
								'given-name',
								'additional-name',
								'family-name',
								'honorific-suffix',
								'nickname',
								'username',
								'new-password',
								'current-password',
								'organization-title',
								'organization',
								'street-address',
								'address-line1',
								'address-line2',
								'address-line3',
								'address-level4',
								'address-level3',
								'address-level2',
								'address-level1',
								'country',
								'country-name',
								'postal-code',
								'cc-name',
								'cc-given-name',
								'cc-additional-name',
								'cc-family-name',
								'cc-number',
								'cc-exp',
								'cc-exp-month',
								'cc-exp-year',
								'cc-csc',
								'cc-type',
								'transaction-currency',
								'transaction-amount',
								'language',
								'bday',
								'bday-day',
								'bday-month',
								'bday-year',
								'sex',
								'url',
								'photo',
								'one-time-code',
							],
							qualifiers: ['home', 'work', 'mobile', 'fax', 'pager'],
							qualifiedTerms: [
								'tel',
								'tel-country-code',
								'tel-national',
								'tel-area-code',
								'tel-local',
								'tel-local-prefix',
								'tel-local-suffix',
								'tel-extension',
								'email',
								'impp',
							],
							locations: ['billing', 'shipping'],
						}
					var is_valid_autocomplete_default = function isValidAutocomplete(autocompleteValue) {
						var _ref58 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
							_ref58$looseTyped = _ref58.looseTyped,
							looseTyped = void 0 !== _ref58$looseTyped && _ref58$looseTyped,
							_ref58$stateTerms = _ref58.stateTerms,
							stateTerms = void 0 === _ref58$stateTerms ? [] : _ref58$stateTerms,
							_ref58$locations = _ref58.locations,
							locations = void 0 === _ref58$locations ? [] : _ref58$locations,
							_ref58$qualifiers = _ref58.qualifiers,
							qualifiers = void 0 === _ref58$qualifiers ? [] : _ref58$qualifiers,
							_ref58$standaloneTerm = _ref58.standaloneTerms,
							standaloneTerms = void 0 === _ref58$standaloneTerm ? [] : _ref58$standaloneTerm,
							_ref58$qualifiedTerms = _ref58.qualifiedTerms,
							qualifiedTerms = void 0 === _ref58$qualifiedTerms ? [] : _ref58$qualifiedTerms
						if (
							((autocompleteValue = autocompleteValue.toLowerCase().trim()),
							(stateTerms = stateTerms.concat(_autocomplete.stateTerms)).includes(
								autocompleteValue,
							) || '' === autocompleteValue)
						)
							return !0
						;(qualifiers = qualifiers.concat(_autocomplete.qualifiers)),
							(locations = locations.concat(_autocomplete.locations)),
							(standaloneTerms = standaloneTerms.concat(_autocomplete.standaloneTerms)),
							(qualifiedTerms = qualifiedTerms.concat(_autocomplete.qualifiedTerms))
						var autocompleteTerms = autocompleteValue.split(/\s+/g)
						if (
							!looseTyped &&
							(autocompleteTerms[0].length > 8 &&
								'section-' === autocompleteTerms[0].substr(0, 8) &&
								autocompleteTerms.shift(),
							locations.includes(autocompleteTerms[0]) && autocompleteTerms.shift(),
							qualifiers.includes(autocompleteTerms[0]) &&
								(autocompleteTerms.shift(), (standaloneTerms = [])),
							1 !== autocompleteTerms.length)
						)
							return !1
						var purposeTerm = autocompleteTerms[autocompleteTerms.length - 1]
						return standaloneTerms.includes(purposeTerm) || qualifiedTerms.includes(purposeTerm)
					}
					var visible_default = function visible(element, screenReader, noRecursing) {
						return (
							(element = get_node_from_tree_default(element)),
							visible_virtual_default(element, screenReader, noRecursing)
						)
					}
					var label_virtual_default2 = function labelVirtual2(virtualNode) {
						var ref, candidate
						if ((candidate = label_virtual_default(virtualNode))) return candidate
						if (virtualNode.attr('id')) {
							if (!virtualNode.actualNode)
								throw new TypeError('Cannot resolve explicit label reference for non-DOM nodes')
							var id = escape_selector_default(virtualNode.attr('id'))
							if (
								(candidate =
									(ref = get_root_node_default2(virtualNode.actualNode).querySelector(
										'label[for="' + id + '"]',
									)) && visible_default(ref, !0))
							)
								return candidate
						}
						return (
							(candidate =
								(ref = closest_default(virtualNode, 'label')) &&
								visible_virtual_default(ref, !0)) || null
						)
					}
					var label_default = function label(node) {
							return (node = get_node_from_tree_default(node)), label_virtual_default2(node)
						},
						native_element_type_default = [
							{
								matches: [
									{ nodeName: 'textarea' },
									{
										nodeName: 'input',
										properties: { type: ['text', 'password', 'search', 'tel', 'email', 'url'] },
									},
								],
								namingMethods: 'labelText',
							},
							{
								matches: { nodeName: 'input', properties: { type: ['button', 'submit', 'reset'] } },
								namingMethods: ['valueText', 'titleText', 'buttonDefaultText'],
							},
							{
								matches: { nodeName: 'input', properties: { type: 'image' } },
								namingMethods: [
									'altText',
									'valueText',
									'labelText',
									'titleText',
									'buttonDefaultText',
								],
							},
							{ matches: 'button', namingMethods: 'subtreeText' },
							{ matches: 'fieldset', namingMethods: 'fieldsetLegendText' },
							{ matches: 'OUTPUT', namingMethods: 'subtreeText' },
							{
								matches: [
									{ nodeName: 'select' },
									{
										nodeName: 'input',
										properties: {
											type: /^(?!text|password|search|tel|email|url|button|submit|reset)/,
										},
									},
								],
								namingMethods: 'labelText',
							},
							{ matches: 'summary', namingMethods: 'subtreeText' },
							{ matches: 'figure', namingMethods: ['figureText', 'titleText'] },
							{ matches: 'img', namingMethods: 'altText' },
							{ matches: 'table', namingMethods: ['tableCaptionText', 'tableSummaryText'] },
							{ matches: ['hr', 'br'], namingMethods: ['titleText', 'singleSpace'] },
						]
					var visible_text_nodes_default = function visibleTextNodes(vNode) {
							var parentVisible = _isVisibleOnScreen(vNode),
								nodes = []
							return (
								vNode.children.forEach(function (child) {
									3 === child.actualNode.nodeType
										? parentVisible && nodes.push(child)
										: (nodes = nodes.concat(visibleTextNodes(child)))
								}),
								nodes
							)
						},
						idRefsRegex = /^idrefs?$/
					function cacheIdRefs(node, idRefs, refAttrs) {
						if (node.hasAttribute) {
							if ('LABEL' === node.nodeName.toUpperCase() && node.hasAttribute('for')) {
								var id = node.getAttribute('for')
								;(idRefs[id] = idRefs[id] || []), idRefs[id].push(node)
							}
							for (var _i16 = 0; _i16 < refAttrs.length; ++_i16) {
								var attr = refAttrs[_i16],
									attrValue = sanitize_default(node.getAttribute(attr) || '')
								if (attrValue)
									for (var tokens = token_list_default(attrValue), k = 0; k < tokens.length; ++k)
										(idRefs[tokens[k]] = idRefs[tokens[k]] || []), idRefs[tokens[k]].push(node)
							}
						}
						for (var _i17 = 0; _i17 < node.childNodes.length; _i17++)
							1 === node.childNodes[_i17].nodeType &&
								cacheIdRefs(node.childNodes[_i17], idRefs, refAttrs)
					}
					var get_accessible_refs_default = function getAccessibleRefs(node) {
						node = node.actualNode || node
						var root = get_root_node_default2(node)
						root = root.documentElement || root
						var idRefsByRoot = cache_default.get('idRefsByRoot', function () {
								return new WeakMap()
							}),
							idRefs = idRefsByRoot.get(root)
						return (
							idRefs ||
								((idRefs = {}),
								idRefsByRoot.set(root, idRefs),
								cacheIdRefs(
									root,
									idRefs,
									Object.keys(standards_default.ariaAttrs).filter(function (attr) {
										var type = standards_default.ariaAttrs[attr].type
										return idRefsRegex.test(type)
									}),
								)),
							idRefs[node.id] || []
						)
					}
					var is_aria_role_allowed_on_element_default = function isAriaRoleAllowedOnElement(
							node,
							role,
						) {
							var vNode =
									node instanceof abstract_virtual_node_default
										? node
										: get_node_from_tree_default(node),
								implicitRole3 = implicit_role_default(vNode),
								spec = get_element_spec_default(vNode)
							return Array.isArray(spec.allowedRoles)
								? spec.allowedRoles.includes(role)
								: role !== implicitRole3 && !!spec.allowedRoles
						},
						dpubRoles2 = [
							'doc-backlink',
							'doc-biblioentry',
							'doc-biblioref',
							'doc-cover',
							'doc-endnote',
							'doc-glossref',
							'doc-noteref',
						],
						landmarkRoles = { header: 'banner', footer: 'contentinfo' }
					function getRoleSegments(vNode) {
						var roles = []
						if (!vNode) return roles
						if (vNode.hasAttr('role')) {
							var nodeRoles = token_list_default(vNode.attr('role').toLowerCase())
							roles = roles.concat(nodeRoles)
						}
						return roles.filter(function (role) {
							return is_valid_role_default(role)
						})
					}
					function roleIsAllowed(role, vNode, allowImplicit, implicitRole3) {
						return (
							!(!allowImplicit || role !== implicitRole3) ||
							((!dpubRoles2.includes(role) || get_role_type_default(role) === implicitRole3) &&
								is_aria_role_allowed_on_element_default(vNode, role))
						)
					}
					var get_element_unallowed_roles_default = function getElementUnallowedRoles(node) {
						var allowImplicit = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
							vNode =
								node instanceof abstract_virtual_node_default
									? node
									: get_node_from_tree_default(node)
						if (!is_html_element_default(vNode)) return []
						var nodeName2 = vNode.props.nodeName,
							implicitRole3 = implicit_role_default(vNode) || landmarkRoles[nodeName2],
							roleSegments = getRoleSegments(vNode)
						return roleSegments.filter(function (role) {
							return !roleIsAllowed(role, vNode, allowImplicit, implicitRole3)
						})
					}
					var get_aria_roles_by_type_default = function getAriaRolesByType(type) {
						return Object.keys(standards_default.ariaRoles).filter(function (roleName) {
							return standards_default.ariaRoles[roleName].type === type
						})
					}
					var get_roles_by_type_default = function getRolesByType(roleType) {
						return get_aria_roles_by_type_default(roleType)
					}
					var get_aria_roles_supporting_name_from_content_default =
						function getAriaRolesSupportingNameFromContent() {
							return cache_default.get('ariaRolesNameFromContent', function () {
								return Object.keys(standards_default.ariaRoles).filter(function (roleName) {
									return standards_default.ariaRoles[roleName].nameFromContent
								})
							})
						}
					var get_roles_with_name_from_contents_default = function getRolesWithNameFromContents() {
							return get_aria_roles_supporting_name_from_content_default()
						},
						isNull = function isNull(value) {
							return null === value
						},
						isNotNull = function isNotNull(value) {
							return null !== value
						},
						lookupTable = {
							attributes: {
								'aria-activedescendant': { type: 'idref', allowEmpty: !0, unsupported: !1 },
								'aria-atomic': { type: 'boolean', values: ['true', 'false'], unsupported: !1 },
								'aria-autocomplete': {
									type: 'nmtoken',
									values: ['inline', 'list', 'both', 'none'],
									unsupported: !1,
								},
								'aria-busy': { type: 'boolean', values: ['true', 'false'], unsupported: !1 },
								'aria-checked': {
									type: 'nmtoken',
									values: ['true', 'false', 'mixed', 'undefined'],
									unsupported: !1,
								},
								'aria-colcount': { type: 'int', unsupported: !1 },
								'aria-colindex': { type: 'int', unsupported: !1 },
								'aria-colspan': { type: 'int', unsupported: !1 },
								'aria-controls': { type: 'idrefs', allowEmpty: !0, unsupported: !1 },
								'aria-current': {
									type: 'nmtoken',
									allowEmpty: !0,
									values: ['page', 'step', 'location', 'date', 'time', 'true', 'false'],
									unsupported: !1,
								},
								'aria-describedby': { type: 'idrefs', allowEmpty: !0, unsupported: !1 },
								'aria-describedat': { unsupported: !0, unstandardized: !0 },
								'aria-details': { type: 'idref', allowEmpty: !0, unsupported: !1 },
								'aria-disabled': { type: 'boolean', values: ['true', 'false'], unsupported: !1 },
								'aria-dropeffect': {
									type: 'nmtokens',
									values: ['copy', 'move', 'reference', 'execute', 'popup', 'none'],
									unsupported: !1,
								},
								'aria-errormessage': { type: 'idref', allowEmpty: !0, unsupported: !1 },
								'aria-expanded': {
									type: 'nmtoken',
									values: ['true', 'false', 'undefined'],
									unsupported: !1,
								},
								'aria-flowto': { type: 'idrefs', allowEmpty: !0, unsupported: !1 },
								'aria-grabbed': {
									type: 'nmtoken',
									values: ['true', 'false', 'undefined'],
									unsupported: !1,
								},
								'aria-haspopup': {
									type: 'nmtoken',
									allowEmpty: !0,
									values: ['true', 'false', 'menu', 'listbox', 'tree', 'grid', 'dialog'],
									unsupported: !1,
								},
								'aria-hidden': { type: 'boolean', values: ['true', 'false'], unsupported: !1 },
								'aria-invalid': {
									type: 'nmtoken',
									allowEmpty: !0,
									values: ['true', 'false', 'spelling', 'grammar'],
									unsupported: !1,
								},
								'aria-keyshortcuts': { type: 'string', allowEmpty: !0, unsupported: !1 },
								'aria-label': { type: 'string', allowEmpty: !0, unsupported: !1 },
								'aria-labelledby': { type: 'idrefs', allowEmpty: !0, unsupported: !1 },
								'aria-level': { type: 'int', unsupported: !1 },
								'aria-live': {
									type: 'nmtoken',
									values: ['off', 'polite', 'assertive'],
									unsupported: !1,
								},
								'aria-modal': { type: 'boolean', values: ['true', 'false'], unsupported: !1 },
								'aria-multiline': { type: 'boolean', values: ['true', 'false'], unsupported: !1 },
								'aria-multiselectable': {
									type: 'boolean',
									values: ['true', 'false'],
									unsupported: !1,
								},
								'aria-orientation': {
									type: 'nmtoken',
									values: ['horizontal', 'vertical'],
									unsupported: !1,
								},
								'aria-owns': { type: 'idrefs', allowEmpty: !0, unsupported: !1 },
								'aria-placeholder': { type: 'string', allowEmpty: !0, unsupported: !1 },
								'aria-posinset': { type: 'int', unsupported: !1 },
								'aria-pressed': {
									type: 'nmtoken',
									values: ['true', 'false', 'mixed', 'undefined'],
									unsupported: !1,
								},
								'aria-readonly': { type: 'boolean', values: ['true', 'false'], unsupported: !1 },
								'aria-relevant': {
									type: 'nmtokens',
									values: ['additions', 'removals', 'text', 'all'],
									unsupported: !1,
								},
								'aria-required': { type: 'boolean', values: ['true', 'false'], unsupported: !1 },
								'aria-roledescription': { type: 'string', allowEmpty: !0, unsupported: !1 },
								'aria-rowcount': { type: 'int', unsupported: !1 },
								'aria-rowindex': { type: 'int', unsupported: !1 },
								'aria-rowspan': { type: 'int', unsupported: !1 },
								'aria-selected': {
									type: 'nmtoken',
									values: ['true', 'false', 'undefined'],
									unsupported: !1,
								},
								'aria-setsize': { type: 'int', unsupported: !1 },
								'aria-sort': {
									type: 'nmtoken',
									values: ['ascending', 'descending', 'other', 'none'],
									unsupported: !1,
								},
								'aria-valuemax': { type: 'decimal', unsupported: !1 },
								'aria-valuemin': { type: 'decimal', unsupported: !1 },
								'aria-valuenow': { type: 'decimal', unsupported: !1 },
								'aria-valuetext': { type: 'string', unsupported: !1 },
							},
							globalAttributes: [
								'aria-atomic',
								'aria-busy',
								'aria-controls',
								'aria-current',
								'aria-describedby',
								'aria-details',
								'aria-disabled',
								'aria-dropeffect',
								'aria-flowto',
								'aria-grabbed',
								'aria-haspopup',
								'aria-hidden',
								'aria-invalid',
								'aria-keyshortcuts',
								'aria-label',
								'aria-labelledby',
								'aria-live',
								'aria-owns',
								'aria-relevant',
								'aria-roledescription',
							],
						}
					;(lookupTable.role = {
						alert: {
							type: 'widget',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['section'],
						},
						alertdialog: {
							type: 'widget',
							attributes: { allowed: ['aria-expanded', 'aria-modal', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['dialog', 'section'],
						},
						application: {
							type: 'landmark',
							attributes: {
								allowed: ['aria-expanded', 'aria-errormessage', 'aria-activedescendant'],
							},
							owned: null,
							nameFrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: [
								'article',
								'audio',
								'embed',
								'iframe',
								'object',
								'section',
								'svg',
								'video',
							],
						},
						article: {
							type: 'structure',
							attributes: {
								allowed: ['aria-expanded', 'aria-posinset', 'aria-setsize', 'aria-errormessage'],
							},
							owned: null,
							nameFrom: ['author'],
							context: null,
							implicit: ['article'],
							unsupported: !1,
						},
						banner: {
							type: 'landmark',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author'],
							context: null,
							implicit: ['header'],
							unsupported: !1,
							allowedElements: ['section'],
						},
						button: {
							type: 'widget',
							attributes: { allowed: ['aria-expanded', 'aria-pressed', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author', 'contents'],
							context: null,
							implicit: [
								'button',
								'input[type="button"]',
								'input[type="image"]',
								'input[type="reset"]',
								'input[type="submit"]',
								'summary',
							],
							unsupported: !1,
							allowedElements: [{ nodeName: 'a', attributes: { href: isNotNull } }],
						},
						cell: {
							type: 'structure',
							attributes: {
								allowed: [
									'aria-colindex',
									'aria-colspan',
									'aria-rowindex',
									'aria-rowspan',
									'aria-errormessage',
								],
							},
							owned: null,
							nameFrom: ['author', 'contents'],
							context: ['row'],
							implicit: ['td', 'th'],
							unsupported: !1,
						},
						checkbox: {
							type: 'widget',
							attributes: {
								allowed: ['aria-checked', 'aria-required', 'aria-readonly', 'aria-errormessage'],
							},
							owned: null,
							nameFrom: ['author', 'contents'],
							context: null,
							implicit: ['input[type="checkbox"]'],
							unsupported: !1,
							allowedElements: ['button'],
						},
						columnheader: {
							type: 'structure',
							attributes: {
								allowed: [
									'aria-colindex',
									'aria-colspan',
									'aria-expanded',
									'aria-rowindex',
									'aria-rowspan',
									'aria-required',
									'aria-readonly',
									'aria-selected',
									'aria-sort',
									'aria-errormessage',
								],
							},
							owned: null,
							nameFrom: ['author', 'contents'],
							context: ['row'],
							implicit: ['th'],
							unsupported: !1,
						},
						combobox: {
							type: 'composite',
							attributes: {
								allowed: [
									'aria-autocomplete',
									'aria-required',
									'aria-activedescendant',
									'aria-orientation',
									'aria-errormessage',
								],
								required: ['aria-expanded'],
							},
							owned: { all: ['listbox', 'tree', 'grid', 'dialog', 'textbox'] },
							nameFrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: [
								{
									nodeName: 'input',
									properties: { type: ['text', 'search', 'tel', 'url', 'email'] },
								},
							],
						},
						command: { nameFrom: ['author'], type: 'abstract', unsupported: !1 },
						complementary: {
							type: 'landmark',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author'],
							context: null,
							implicit: ['aside'],
							unsupported: !1,
							allowedElements: ['section'],
						},
						composite: { nameFrom: ['author'], type: 'abstract', unsupported: !1 },
						contentinfo: {
							type: 'landmark',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author'],
							context: null,
							implicit: ['footer'],
							unsupported: !1,
							allowedElements: ['section'],
						},
						definition: {
							type: 'structure',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author'],
							context: null,
							implicit: ['dd', 'dfn'],
							unsupported: !1,
						},
						dialog: {
							type: 'widget',
							attributes: { allowed: ['aria-expanded', 'aria-modal', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author'],
							context: null,
							implicit: ['dialog'],
							unsupported: !1,
							allowedElements: ['section'],
						},
						directory: {
							type: 'structure',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author', 'contents'],
							context: null,
							unsupported: !1,
							allowedElements: ['ol', 'ul'],
						},
						document: {
							type: 'structure',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author'],
							context: null,
							implicit: ['body'],
							unsupported: !1,
							allowedElements: ['article', 'embed', 'iframe', 'object', 'section', 'svg'],
						},
						'doc-abstract': {
							type: 'section',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['section'],
						},
						'doc-acknowledgments': {
							type: 'landmark',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['section'],
						},
						'doc-afterword': {
							type: 'landmark',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['section'],
						},
						'doc-appendix': {
							type: 'landmark',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['section'],
						},
						'doc-backlink': {
							type: 'link',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author', 'contents'],
							context: null,
							unsupported: !1,
							allowedElements: [{ nodeName: 'a', attributes: { href: isNotNull } }],
						},
						'doc-biblioentry': {
							type: 'listitem',
							attributes: {
								allowed: [
									'aria-expanded',
									'aria-level',
									'aria-posinset',
									'aria-setsize',
									'aria-errormessage',
								],
							},
							owned: null,
							nameFrom: ['author'],
							context: ['doc-bibliography'],
							unsupported: !1,
							allowedElements: ['li'],
						},
						'doc-bibliography': {
							type: 'landmark',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: { one: ['doc-biblioentry'] },
							nameFrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['section'],
						},
						'doc-biblioref': {
							type: 'link',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author', 'contents'],
							context: null,
							unsupported: !1,
							allowedElements: [{ nodeName: 'a', attributes: { href: isNotNull } }],
						},
						'doc-chapter': {
							type: 'landmark',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							namefrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['section'],
						},
						'doc-colophon': {
							type: 'section',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							namefrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['section'],
						},
						'doc-conclusion': {
							type: 'landmark',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							namefrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['section'],
						},
						'doc-cover': {
							type: 'img',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							namefrom: ['author'],
							context: null,
							unsupported: !1,
						},
						'doc-credit': {
							type: 'section',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							namefrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['section'],
						},
						'doc-credits': {
							type: 'landmark',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							namefrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['section'],
						},
						'doc-dedication': {
							type: 'section',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							namefrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['section'],
						},
						'doc-endnote': {
							type: 'listitem',
							attributes: {
								allowed: [
									'aria-expanded',
									'aria-level',
									'aria-posinset',
									'aria-setsize',
									'aria-errormessage',
								],
							},
							owned: null,
							namefrom: ['author'],
							context: ['doc-endnotes'],
							unsupported: !1,
							allowedElements: ['li'],
						},
						'doc-endnotes': {
							type: 'landmark',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: { one: ['doc-endnote'] },
							namefrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['section'],
						},
						'doc-epigraph': {
							type: 'section',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							namefrom: ['author'],
							context: null,
							unsupported: !1,
						},
						'doc-epilogue': {
							type: 'landmark',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							namefrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['section'],
						},
						'doc-errata': {
							type: 'landmark',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							namefrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['section'],
						},
						'doc-example': {
							type: 'section',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							namefrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['aside', 'section'],
						},
						'doc-footnote': {
							type: 'section',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							namefrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['aside', 'footer', 'header'],
						},
						'doc-foreword': {
							type: 'landmark',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							namefrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['section'],
						},
						'doc-glossary': {
							type: 'landmark',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: ['term', 'definition'],
							namefrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['dl'],
						},
						'doc-glossref': {
							type: 'link',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							namefrom: ['author', 'contents'],
							context: null,
							unsupported: !1,
							allowedElements: [{ nodeName: 'a', attributes: { href: isNotNull } }],
						},
						'doc-index': {
							type: 'navigation',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							namefrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['nav', 'section'],
						},
						'doc-introduction': {
							type: 'landmark',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							namefrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['section'],
						},
						'doc-noteref': {
							type: 'link',
							attributes: { allowed: ['aria-expanded'] },
							owned: null,
							namefrom: ['author', 'contents'],
							context: null,
							unsupported: !1,
							allowedElements: [{ nodeName: 'a', attributes: { href: isNotNull } }],
						},
						'doc-notice': {
							type: 'note',
							attributes: { allowed: ['aria-expanded'] },
							owned: null,
							namefrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['section'],
						},
						'doc-pagebreak': {
							type: 'separator',
							attributes: { allowed: ['aria-expanded'] },
							owned: null,
							namefrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['hr'],
						},
						'doc-pagelist': {
							type: 'navigation',
							attributes: { allowed: ['aria-expanded'] },
							owned: null,
							namefrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['nav', 'section'],
						},
						'doc-part': {
							type: 'landmark',
							attributes: { allowed: ['aria-expanded'] },
							owned: null,
							namefrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['section'],
						},
						'doc-preface': {
							type: 'landmark',
							attributes: { allowed: ['aria-expanded'] },
							owned: null,
							namefrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['section'],
						},
						'doc-prologue': {
							type: 'landmark',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							namefrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['section'],
						},
						'doc-pullquote': {
							type: 'none',
							attributes: { allowed: ['aria-expanded'] },
							owned: null,
							namefrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['aside', 'section'],
						},
						'doc-qna': {
							type: 'section',
							attributes: { allowed: ['aria-expanded'] },
							owned: null,
							namefrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['section'],
						},
						'doc-subtitle': {
							type: 'sectionhead',
							attributes: { allowed: ['aria-expanded'] },
							owned: null,
							namefrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: { nodeName: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] },
						},
						'doc-tip': {
							type: 'note',
							attributes: { allowed: ['aria-expanded'] },
							owned: null,
							namefrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['aside'],
						},
						'doc-toc': {
							type: 'navigation',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							namefrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['nav', 'section'],
						},
						feed: {
							type: 'structure',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: { one: ['article'] },
							nameFrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['article', 'aside', 'section'],
						},
						figure: {
							type: 'structure',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author', 'contents'],
							context: null,
							implicit: ['figure'],
							unsupported: !1,
						},
						form: {
							type: 'landmark',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author'],
							context: null,
							implicit: ['form'],
							unsupported: !1,
						},
						grid: {
							type: 'composite',
							attributes: {
								allowed: [
									'aria-activedescendant',
									'aria-expanded',
									'aria-colcount',
									'aria-level',
									'aria-multiselectable',
									'aria-readonly',
									'aria-rowcount',
									'aria-errormessage',
								],
							},
							owned: { one: ['rowgroup', 'row'] },
							nameFrom: ['author'],
							context: null,
							implicit: ['table'],
							unsupported: !1,
						},
						gridcell: {
							type: 'widget',
							attributes: {
								allowed: [
									'aria-colindex',
									'aria-colspan',
									'aria-expanded',
									'aria-rowindex',
									'aria-rowspan',
									'aria-selected',
									'aria-readonly',
									'aria-required',
									'aria-errormessage',
								],
							},
							owned: null,
							nameFrom: ['author', 'contents'],
							context: ['row'],
							implicit: ['td', 'th'],
							unsupported: !1,
						},
						group: {
							type: 'structure',
							attributes: {
								allowed: ['aria-activedescendant', 'aria-expanded', 'aria-errormessage'],
							},
							owned: null,
							nameFrom: ['author'],
							context: null,
							implicit: ['details', 'optgroup'],
							unsupported: !1,
							allowedElements: [
								'dl',
								'figcaption',
								'fieldset',
								'figure',
								'footer',
								'header',
								'ol',
								'ul',
							],
						},
						heading: {
							type: 'structure',
							attributes: {
								required: ['aria-level'],
								allowed: ['aria-expanded', 'aria-errormessage'],
							},
							owned: null,
							nameFrom: ['author', 'contents'],
							context: null,
							implicit: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
							unsupported: !1,
						},
						img: {
							type: 'structure',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author'],
							context: null,
							implicit: ['img'],
							unsupported: !1,
							allowedElements: ['embed', 'iframe', 'object', 'svg'],
						},
						input: { nameFrom: ['author'], type: 'abstract', unsupported: !1 },
						landmark: { nameFrom: ['author'], type: 'abstract', unsupported: !1 },
						link: {
							type: 'widget',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author', 'contents'],
							context: null,
							implicit: ['a[href]', 'area[href]'],
							unsupported: !1,
							allowedElements: [
								'button',
								{ nodeName: 'input', properties: { type: ['image', 'button'] } },
							],
						},
						list: {
							type: 'structure',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: { all: ['listitem'] },
							nameFrom: ['author'],
							context: null,
							implicit: ['ol', 'ul', 'dl'],
							unsupported: !1,
						},
						listbox: {
							type: 'composite',
							attributes: {
								allowed: [
									'aria-activedescendant',
									'aria-multiselectable',
									'aria-readonly',
									'aria-required',
									'aria-expanded',
									'aria-orientation',
									'aria-errormessage',
								],
							},
							owned: { all: ['option'] },
							nameFrom: ['author'],
							context: null,
							implicit: ['select'],
							unsupported: !1,
							allowedElements: ['ol', 'ul'],
						},
						listitem: {
							type: 'structure',
							attributes: {
								allowed: [
									'aria-level',
									'aria-posinset',
									'aria-setsize',
									'aria-expanded',
									'aria-errormessage',
								],
							},
							owned: null,
							nameFrom: ['author', 'contents'],
							context: ['list'],
							implicit: ['li', 'dt'],
							unsupported: !1,
						},
						log: {
							type: 'widget',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['section'],
						},
						main: {
							type: 'landmark',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author'],
							context: null,
							implicit: ['main'],
							unsupported: !1,
							allowedElements: ['article', 'section'],
						},
						marquee: {
							type: 'widget',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['section'],
						},
						math: {
							type: 'structure',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author'],
							context: null,
							implicit: ['math'],
							unsupported: !1,
						},
						menu: {
							type: 'composite',
							attributes: {
								allowed: [
									'aria-activedescendant',
									'aria-expanded',
									'aria-orientation',
									'aria-errormessage',
								],
							},
							owned: { one: ['menuitem', 'menuitemradio', 'menuitemcheckbox'] },
							nameFrom: ['author'],
							context: null,
							implicit: ['menu[type="context"]'],
							unsupported: !1,
							allowedElements: ['ol', 'ul'],
						},
						menubar: {
							type: 'composite',
							attributes: {
								allowed: [
									'aria-activedescendant',
									'aria-expanded',
									'aria-orientation',
									'aria-errormessage',
								],
							},
							owned: { one: ['menuitem', 'menuitemradio', 'menuitemcheckbox'] },
							nameFrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['ol', 'ul'],
						},
						menuitem: {
							type: 'widget',
							attributes: {
								allowed: ['aria-posinset', 'aria-setsize', 'aria-expanded', 'aria-errormessage'],
							},
							owned: null,
							nameFrom: ['author', 'contents'],
							context: ['menu', 'menubar'],
							implicit: ['menuitem[type="command"]'],
							unsupported: !1,
							allowedElements: [
								'button',
								'li',
								{ nodeName: 'iput', properties: { type: ['image', 'button'] } },
								{ nodeName: 'a', attributes: { href: isNotNull } },
							],
						},
						menuitemcheckbox: {
							type: 'widget',
							attributes: {
								allowed: ['aria-checked', 'aria-posinset', 'aria-setsize', 'aria-errormessage'],
							},
							owned: null,
							nameFrom: ['author', 'contents'],
							context: ['menu', 'menubar'],
							implicit: ['menuitem[type="checkbox"]'],
							unsupported: !1,
							allowedElements: [
								{ nodeName: ['button', 'li'] },
								{ nodeName: 'input', properties: { type: ['checkbox', 'image', 'button'] } },
								{ nodeName: 'a', attributes: { href: isNotNull } },
							],
						},
						menuitemradio: {
							type: 'widget',
							attributes: {
								allowed: [
									'aria-checked',
									'aria-selected',
									'aria-posinset',
									'aria-setsize',
									'aria-errormessage',
								],
							},
							owned: null,
							nameFrom: ['author', 'contents'],
							context: ['menu', 'menubar'],
							implicit: ['menuitem[type="radio"]'],
							unsupported: !1,
							allowedElements: [
								{ nodeName: ['button', 'li'] },
								{ nodeName: 'input', properties: { type: ['image', 'button', 'radio'] } },
								{ nodeName: 'a', attributes: { href: isNotNull } },
							],
						},
						navigation: {
							type: 'landmark',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author'],
							context: null,
							implicit: ['nav'],
							unsupported: !1,
							allowedElements: ['section'],
						},
						none: {
							type: 'structure',
							attributes: null,
							owned: null,
							nameFrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: [
								{
									nodeName: [
										'article',
										'aside',
										'dl',
										'embed',
										'figcaption',
										'fieldset',
										'figure',
										'footer',
										'form',
										'h1',
										'h2',
										'h3',
										'h4',
										'h5',
										'h6',
										'header',
										'hr',
										'iframe',
										'li',
										'ol',
										'section',
										'ul',
									],
								},
								{ nodeName: 'img', attributes: { alt: isNotNull } },
							],
						},
						note: {
							type: 'structure',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['aside'],
						},
						option: {
							type: 'widget',
							attributes: {
								allowed: [
									'aria-selected',
									'aria-posinset',
									'aria-setsize',
									'aria-checked',
									'aria-errormessage',
								],
							},
							owned: null,
							nameFrom: ['author', 'contents'],
							context: ['listbox'],
							implicit: ['option'],
							unsupported: !1,
							allowedElements: [
								{ nodeName: ['button', 'li'] },
								{ nodeName: 'input', properties: { type: ['checkbox', 'button'] } },
								{ nodeName: 'a', attributes: { href: isNotNull } },
							],
						},
						presentation: {
							type: 'structure',
							attributes: null,
							owned: null,
							nameFrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: [
								{
									nodeName: [
										'article',
										'aside',
										'dl',
										'embed',
										'figcaption',
										'fieldset',
										'figure',
										'footer',
										'form',
										'h1',
										'h2',
										'h3',
										'h4',
										'h5',
										'h6',
										'header',
										'hr',
										'iframe',
										'li',
										'ol',
										'section',
										'ul',
									],
								},
								{ nodeName: 'img', attributes: { alt: isNotNull } },
							],
						},
						progressbar: {
							type: 'widget',
							attributes: {
								allowed: [
									'aria-valuetext',
									'aria-valuenow',
									'aria-valuemax',
									'aria-valuemin',
									'aria-expanded',
									'aria-errormessage',
								],
							},
							owned: null,
							nameFrom: ['author'],
							context: null,
							implicit: ['progress'],
							unsupported: !1,
						},
						radio: {
							type: 'widget',
							attributes: {
								allowed: [
									'aria-selected',
									'aria-posinset',
									'aria-setsize',
									'aria-required',
									'aria-errormessage',
									'aria-checked',
								],
							},
							owned: null,
							nameFrom: ['author', 'contents'],
							context: null,
							implicit: ['input[type="radio"]'],
							unsupported: !1,
							allowedElements: [
								{ nodeName: ['button', 'li'] },
								{ nodeName: 'input', properties: { type: ['image', 'button'] } },
							],
						},
						radiogroup: {
							type: 'composite',
							attributes: {
								allowed: [
									'aria-activedescendant',
									'aria-required',
									'aria-expanded',
									'aria-readonly',
									'aria-errormessage',
									'aria-orientation',
								],
							},
							owned: { all: ['radio'] },
							nameFrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: { nodeName: ['ol', 'ul', 'fieldset'] },
						},
						range: { nameFrom: ['author'], type: 'abstract', unsupported: !1 },
						region: {
							type: 'landmark',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author'],
							context: null,
							implicit: ['section[aria-label]', 'section[aria-labelledby]', 'section[title]'],
							unsupported: !1,
							allowedElements: { nodeName: ['article', 'aside'] },
						},
						roletype: { type: 'abstract', unsupported: !1 },
						row: {
							type: 'structure',
							attributes: {
								allowed: [
									'aria-activedescendant',
									'aria-colindex',
									'aria-expanded',
									'aria-level',
									'aria-selected',
									'aria-rowindex',
									'aria-errormessage',
								],
							},
							owned: { one: ['cell', 'columnheader', 'rowheader', 'gridcell'] },
							nameFrom: ['author', 'contents'],
							context: ['rowgroup', 'grid', 'treegrid', 'table'],
							implicit: ['tr'],
							unsupported: !1,
						},
						rowgroup: {
							type: 'structure',
							attributes: {
								allowed: ['aria-activedescendant', 'aria-expanded', 'aria-errormessage'],
							},
							owned: { all: ['row'] },
							nameFrom: ['author', 'contents'],
							context: ['grid', 'table', 'treegrid'],
							implicit: ['tbody', 'thead', 'tfoot'],
							unsupported: !1,
						},
						rowheader: {
							type: 'structure',
							attributes: {
								allowed: [
									'aria-colindex',
									'aria-colspan',
									'aria-expanded',
									'aria-rowindex',
									'aria-rowspan',
									'aria-required',
									'aria-readonly',
									'aria-selected',
									'aria-sort',
									'aria-errormessage',
								],
							},
							owned: null,
							nameFrom: ['author', 'contents'],
							context: ['row'],
							implicit: ['th'],
							unsupported: !1,
						},
						scrollbar: {
							type: 'widget',
							attributes: {
								required: ['aria-controls', 'aria-valuenow'],
								allowed: [
									'aria-valuetext',
									'aria-orientation',
									'aria-errormessage',
									'aria-valuemax',
									'aria-valuemin',
								],
							},
							owned: null,
							nameFrom: ['author'],
							context: null,
							unsupported: !1,
						},
						search: {
							type: 'landmark',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: { nodeName: ['aside', 'form', 'section'] },
						},
						searchbox: {
							type: 'widget',
							attributes: {
								allowed: [
									'aria-activedescendant',
									'aria-autocomplete',
									'aria-multiline',
									'aria-readonly',
									'aria-required',
									'aria-placeholder',
									'aria-errormessage',
								],
							},
							owned: null,
							nameFrom: ['author'],
							context: null,
							implicit: ['input[type="search"]'],
							unsupported: !1,
							allowedElements: { nodeName: 'input', properties: { type: 'text' } },
						},
						section: { nameFrom: ['author', 'contents'], type: 'abstract', unsupported: !1 },
						sectionhead: { nameFrom: ['author', 'contents'], type: 'abstract', unsupported: !1 },
						select: { nameFrom: ['author'], type: 'abstract', unsupported: !1 },
						separator: {
							type: 'structure',
							attributes: {
								allowed: [
									'aria-expanded',
									'aria-orientation',
									'aria-valuenow',
									'aria-valuemax',
									'aria-valuemin',
									'aria-valuetext',
									'aria-errormessage',
								],
							},
							owned: null,
							nameFrom: ['author'],
							context: null,
							implicit: ['hr'],
							unsupported: !1,
							allowedElements: ['li'],
						},
						slider: {
							type: 'widget',
							attributes: {
								allowed: [
									'aria-valuetext',
									'aria-orientation',
									'aria-readonly',
									'aria-errormessage',
									'aria-valuemax',
									'aria-valuemin',
								],
								required: ['aria-valuenow'],
							},
							owned: null,
							nameFrom: ['author'],
							context: null,
							implicit: ['input[type="range"]'],
							unsupported: !1,
						},
						spinbutton: {
							type: 'widget',
							attributes: {
								allowed: [
									'aria-valuetext',
									'aria-required',
									'aria-readonly',
									'aria-errormessage',
									'aria-valuemax',
									'aria-valuemin',
								],
								required: ['aria-valuenow'],
							},
							owned: null,
							nameFrom: ['author'],
							context: null,
							implicit: ['input[type="number"]'],
							unsupported: !1,
							allowedElements: { nodeName: 'input', properties: { type: ['text', 'tel'] } },
						},
						status: {
							type: 'widget',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author'],
							context: null,
							implicit: ['output'],
							unsupported: !1,
							allowedElements: ['section'],
						},
						structure: { type: 'abstract', unsupported: !1 },
						switch: {
							type: 'widget',
							attributes: { allowed: ['aria-errormessage'], required: ['aria-checked'] },
							owned: null,
							nameFrom: ['author', 'contents'],
							context: null,
							unsupported: !1,
							allowedElements: [
								'button',
								{ nodeName: 'input', properties: { type: ['checkbox', 'image', 'button'] } },
								{ nodeName: 'a', attributes: { href: isNotNull } },
							],
						},
						tab: {
							type: 'widget',
							attributes: {
								allowed: [
									'aria-selected',
									'aria-expanded',
									'aria-setsize',
									'aria-posinset',
									'aria-errormessage',
								],
							},
							owned: null,
							nameFrom: ['author', 'contents'],
							context: ['tablist'],
							unsupported: !1,
							allowedElements: [
								{ nodeName: ['button', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li'] },
								{ nodeName: 'input', properties: { type: 'button' } },
								{ nodeName: 'a', attributes: { href: isNotNull } },
							],
						},
						table: {
							type: 'structure',
							attributes: { allowed: ['aria-colcount', 'aria-rowcount', 'aria-errormessage'] },
							owned: { one: ['rowgroup', 'row'] },
							nameFrom: ['author', 'contents'],
							context: null,
							implicit: ['table'],
							unsupported: !1,
						},
						tablist: {
							type: 'composite',
							attributes: {
								allowed: [
									'aria-activedescendant',
									'aria-expanded',
									'aria-level',
									'aria-multiselectable',
									'aria-orientation',
									'aria-errormessage',
								],
							},
							owned: { all: ['tab'] },
							nameFrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['ol', 'ul'],
						},
						tabpanel: {
							type: 'widget',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['section'],
						},
						term: {
							type: 'structure',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author', 'contents'],
							context: null,
							implicit: ['dt'],
							unsupported: !1,
						},
						textbox: {
							type: 'widget',
							attributes: {
								allowed: [
									'aria-activedescendant',
									'aria-autocomplete',
									'aria-multiline',
									'aria-readonly',
									'aria-required',
									'aria-placeholder',
									'aria-errormessage',
								],
							},
							owned: null,
							nameFrom: ['author'],
							context: null,
							implicit: [
								'input[type="text"]',
								'input[type="email"]',
								'input[type="password"]',
								'input[type="tel"]',
								'input[type="url"]',
								'input:not([type])',
								'textarea',
							],
							unsupported: !1,
						},
						timer: {
							type: 'widget',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author'],
							context: null,
							unsupported: !1,
						},
						toolbar: {
							type: 'structure',
							attributes: {
								allowed: [
									'aria-activedescendant',
									'aria-expanded',
									'aria-orientation',
									'aria-errormessage',
								],
							},
							owned: null,
							nameFrom: ['author'],
							context: null,
							implicit: ['menu[type="toolbar"]'],
							unsupported: !1,
							allowedElements: ['ol', 'ul'],
						},
						tooltip: {
							type: 'structure',
							attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
							owned: null,
							nameFrom: ['author', 'contents'],
							context: null,
							unsupported: !1,
						},
						tree: {
							type: 'composite',
							attributes: {
								allowed: [
									'aria-activedescendant',
									'aria-multiselectable',
									'aria-required',
									'aria-expanded',
									'aria-orientation',
									'aria-errormessage',
								],
							},
							owned: { all: ['treeitem'] },
							nameFrom: ['author'],
							context: null,
							unsupported: !1,
							allowedElements: ['ol', 'ul'],
						},
						treegrid: {
							type: 'composite',
							attributes: {
								allowed: [
									'aria-activedescendant',
									'aria-colcount',
									'aria-expanded',
									'aria-level',
									'aria-multiselectable',
									'aria-readonly',
									'aria-required',
									'aria-rowcount',
									'aria-orientation',
									'aria-errormessage',
								],
							},
							owned: { one: ['rowgroup', 'row'] },
							nameFrom: ['author'],
							context: null,
							unsupported: !1,
						},
						treeitem: {
							type: 'widget',
							attributes: {
								allowed: [
									'aria-checked',
									'aria-selected',
									'aria-expanded',
									'aria-level',
									'aria-posinset',
									'aria-setsize',
									'aria-errormessage',
								],
							},
							owned: null,
							nameFrom: ['author', 'contents'],
							context: ['group', 'tree'],
							unsupported: !1,
							allowedElements: ['li', { nodeName: 'a', attributes: { href: isNotNull } }],
						},
						widget: { type: 'abstract', unsupported: !1 },
						window: { nameFrom: ['author'], type: 'abstract', unsupported: !1 },
					}),
						(lookupTable.implicitHtmlRole = implicit_html_roles_default),
						(lookupTable.elementsAllowedNoRole = [
							{
								nodeName: [
									'base',
									'body',
									'caption',
									'col',
									'colgroup',
									'datalist',
									'dd',
									'details',
									'dt',
									'head',
									'html',
									'keygen',
									'label',
									'legend',
									'main',
									'map',
									'math',
									'meta',
									'meter',
									'noscript',
									'optgroup',
									'param',
									'picture',
									'progress',
									'script',
									'source',
									'style',
									'template',
									'textarea',
									'title',
									'track',
								],
							},
							{ nodeName: 'area', attributes: { href: isNotNull } },
							{
								nodeName: 'input',
								properties: {
									type: [
										'color',
										'data',
										'datatime',
										'file',
										'hidden',
										'month',
										'number',
										'password',
										'range',
										'reset',
										'submit',
										'time',
										'week',
									],
								},
							},
							{ nodeName: 'link', attributes: { href: isNotNull } },
							{ nodeName: 'menu', attributes: { type: 'context' } },
							{ nodeName: 'menuitem', attributes: { type: ['command', 'checkbox', 'radio'] } },
							{
								nodeName: 'select',
								condition: function condition(vNode) {
									return (
										vNode instanceof axe.AbstractVirtualNode ||
											(vNode = axe.utils.getNodeFromTree(vNode)),
										Number(vNode.attr('size')) > 1
									)
								},
								properties: { multiple: !0 },
							},
							{
								nodeName: [
									'clippath',
									'cursor',
									'defs',
									'desc',
									'feblend',
									'fecolormatrix',
									'fecomponenttransfer',
									'fecomposite',
									'feconvolvematrix',
									'fediffuselighting',
									'fedisplacementmap',
									'fedistantlight',
									'fedropshadow',
									'feflood',
									'fefunca',
									'fefuncb',
									'fefuncg',
									'fefuncr',
									'fegaussianblur',
									'feimage',
									'femerge',
									'femergenode',
									'femorphology',
									'feoffset',
									'fepointlight',
									'fespecularlighting',
									'fespotlight',
									'fetile',
									'feturbulence',
									'filter',
									'hatch',
									'hatchpath',
									'lineargradient',
									'marker',
									'mask',
									'meshgradient',
									'meshpatch',
									'meshrow',
									'metadata',
									'mpath',
									'pattern',
									'radialgradient',
									'solidcolor',
									'stop',
									'switch',
									'view',
								],
							},
						]),
						(lookupTable.elementsAllowedAnyRole = [
							{ nodeName: 'a', attributes: { href: isNull } },
							{ nodeName: 'img', attributes: { alt: isNull } },
							{
								nodeName: [
									'abbr',
									'address',
									'canvas',
									'div',
									'p',
									'pre',
									'blockquote',
									'ins',
									'del',
									'output',
									'span',
									'table',
									'tbody',
									'thead',
									'tfoot',
									'td',
									'em',
									'strong',
									'small',
									's',
									'cite',
									'q',
									'dfn',
									'abbr',
									'time',
									'code',
									'var',
									'samp',
									'kbd',
									'sub',
									'sup',
									'i',
									'b',
									'u',
									'mark',
									'ruby',
									'rt',
									'rp',
									'bdi',
									'bdo',
									'br',
									'wbr',
									'th',
									'tr',
								],
							},
						]),
						(lookupTable.evaluateRoleForElement = {
							A: function A(_ref59) {
								var node = _ref59.node,
									out = _ref59.out
								return (
									'http://www.w3.org/2000/svg' === node.namespaceURI || !node.href.length || out
								)
							},
							AREA: function AREA(_ref60) {
								return !_ref60.node.href
							},
							BUTTON: function BUTTON(_ref61) {
								var node = _ref61.node,
									role = _ref61.role,
									out = _ref61.out
								return 'menu' === node.getAttribute('type') ? 'menuitem' === role : out
							},
							IMG: function IMG(_ref62) {
								var node = _ref62.node,
									role = _ref62.role,
									out = _ref62.out
								switch (node.alt) {
									case null:
										return out
									case '':
										return 'presentation' === role || 'none' === role
									default:
										return 'presentation' !== role && 'none' !== role
								}
							},
							INPUT: function INPUT(_ref63) {
								var node = _ref63.node,
									role = _ref63.role,
									out = _ref63.out
								switch (node.type) {
									case 'button':
									case 'image':
										return out
									case 'checkbox':
										return !('button' !== role || !node.hasAttribute('aria-pressed')) || out
									case 'radio':
										return 'menuitemradio' === role
									case 'text':
										return 'combobox' === role || 'searchbox' === role || 'spinbutton' === role
									case 'tel':
										return 'combobox' === role || 'spinbutton' === role
									case 'url':
									case 'search':
									case 'email':
										return 'combobox' === role
									default:
										return !1
								}
							},
							LI: function LI(_ref64) {
								var node = _ref64.node,
									out = _ref64.out
								return !axe.utils.matchesSelector(node, 'ol li, ul li') || out
							},
							MENU: function MENU(_ref65) {
								return 'context' !== _ref65.node.getAttribute('type')
							},
							OPTION: function OPTION(_ref66) {
								var node = _ref66.node
								return !axe.utils.matchesSelector(
									node,
									'select > option, datalist > option, optgroup > option',
								)
							},
							SELECT: function SELECT(_ref67) {
								var node = _ref67.node,
									role = _ref67.role
								return !node.multiple && node.size <= 1 && 'menu' === role
							},
							SVG: function SVG(_ref68) {
								var node = _ref68.node,
									out = _ref68.out
								return (
									!(
										!node.parentNode ||
										'http://www.w3.org/2000/svg' !== node.parentNode.namespaceURI
									) || out
								)
							},
						}),
						(lookupTable.rolesOfType = {
							widget: [
								'button',
								'checkbox',
								'dialog',
								'gridcell',
								'link',
								'log',
								'marquee',
								'menuitem',
								'menuitemcheckbox',
								'menuitemradio',
								'option',
								'progressbar',
								'radio',
								'scrollbar',
								'searchbox',
								'slider',
								'spinbutton',
								'status',
								'switch',
								'tab',
								'tabpanel',
								'textbox',
								'timer',
								'tooltip',
								'tree',
								'treeitem',
							],
						})
					var lookup_table_default = lookupTable
					var implicit_nodes_default = function implicitNodes(role) {
						var implicit = null,
							roles = lookup_table_default.role[role]
						return roles && roles.implicit && (implicit = clone_default(roles.implicit)), implicit
					}
					var is_accessible_ref_default = function isAccessibleRef(node) {
						return !!get_accessible_refs_default(node).length
					}
					var label_default2 = function label2(node) {
						return (node = get_node_from_tree_default(node)), label_virtual_default(node)
					}
					var required_attr_default = function requiredAttr(role) {
						var roleDef = standards_default.ariaRoles[role]
						return roleDef && Array.isArray(roleDef.requiredAttrs)
							? _toConsumableArray(roleDef.requiredAttrs)
							: []
					}
					var required_context_default = function requiredContext(role) {
						var roleDef = standards_default.ariaRoles[role]
						return roleDef && Array.isArray(roleDef.requiredContext)
							? _toConsumableArray(roleDef.requiredContext)
							: null
					}
					var required_owned_default = function requiredOwned(role) {
						var roleDef = standards_default.ariaRoles[role]
						return roleDef && Array.isArray(roleDef.requiredOwned)
							? _toConsumableArray(roleDef.requiredOwned)
							: null
					}
					var validate_attr_value_default = function validateAttrValue(vNode, attr) {
						var matches4,
							list,
							value = (vNode =
								vNode instanceof abstract_virtual_node_default
									? vNode
									: get_node_from_tree_default(vNode)).attr(attr),
							attrInfo = standards_default.ariaAttrs[attr]
						if (!attrInfo) return !0
						if (attrInfo.allowEmpty && (!value || '' === value.trim())) return !0
						switch (attrInfo.type) {
							case 'boolean':
								return ['true', 'false'].includes(value.toLowerCase())
							case 'nmtoken':
								return 'string' == typeof value && attrInfo.values.includes(value.toLowerCase())
							case 'nmtokens':
								return (list = token_list_default(value)).reduce(function (result, token) {
									return result && attrInfo.values.includes(token)
								}, 0 !== list.length)
							case 'idref':
								try {
									var doc = get_root_node_default2(vNode.actualNode)
									return !(!value || !doc.getElementById(value))
								} catch (e) {
									throw new TypeError('Cannot resolve id references for partial DOM')
								}
							case 'idrefs':
								return idrefs_default(vNode, attr).some(function (node) {
									return !!node
								})
							case 'string':
								return '' !== value.trim()
							case 'decimal':
								return !(
									!(matches4 = value.match(/^[-+]?([0-9]*)\.?([0-9]*)$/)) ||
									(!matches4[1] && !matches4[2])
								)
							case 'int':
								var minValue = void 0 !== attrInfo.minValue ? attrInfo.minValue : -1 / 0
								return /^[-+]?[0-9]+$/.test(value) && parseInt(value) >= minValue
						}
					}
					var validate_attr_default = function validateAttr(att) {
						return !!standards_default.ariaAttrs[att]
					}
					var abstractrole_evaluate_default = function abstractroleEvaluate(
						node,
						options,
						virtualNode,
					) {
						var abstractRoles = token_list_default(virtualNode.attr('role')).filter(function (
							role,
						) {
							return 'abstract' === get_role_type_default(role)
						})
						return abstractRoles.length > 0 && (this.data(abstractRoles), !0)
					}
					var aria_allowed_role_evaluate_default = function ariaAllowedRoleEvaluate(node) {
						var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
							virtualNode = arguments.length > 2 ? arguments[2] : void 0,
							_options$allowImplici = options.allowImplicit,
							allowImplicit = void 0 === _options$allowImplici || _options$allowImplici,
							_options$ignoredTags = options.ignoredTags,
							ignoredTags = void 0 === _options$ignoredTags ? [] : _options$ignoredTags,
							nodeName2 = virtualNode.props.nodeName
						if (
							ignoredTags
								.map(function (tag) {
									return tag.toLowerCase()
								})
								.includes(nodeName2)
						)
							return !0
						var unallowedRoles = get_element_unallowed_roles_default(virtualNode, allowImplicit)
						if (unallowedRoles.length) {
							if ((this.data(unallowedRoles), !_isVisibleToScreenReaders(virtualNode))) return
							return !1
						}
						return !0
					}
					var aria_errormessage_evaluate_default = function ariaErrormessageEvaluate(
						node,
						options,
						virtualNode,
					) {
						options = Array.isArray(options) ? options : []
						var attr = virtualNode.attr('aria-errormessage'),
							hasAttr = virtualNode.hasAttr('aria-errormessage'),
							invaid = virtualNode.attr('aria-invalid')
						return (
							!virtualNode.hasAttr('aria-invalid') ||
							'false' === invaid ||
							-1 !== options.indexOf(attr) ||
							!hasAttr ||
							(this.data(token_list_default(attr)),
							function validateAttrValue2(attr2) {
								if ('' === attr2.trim())
									return standards_default.ariaAttrs['aria-errormessage'].allowEmpty
								var idref
								try {
									idref = attr2 && idrefs_default(virtualNode, 'aria-errormessage')[0]
								} catch (e) {
									return void this.data({ messageKey: 'idrefs', values: token_list_default(attr2) })
								}
								return idref
									? _isVisibleToScreenReaders(idref)
										? 'alert' === idref.getAttribute('role') ||
										  'assertive' === idref.getAttribute('aria-live') ||
										  'polite' === idref.getAttribute('aria-live') ||
										  token_list_default(virtualNode.attr('aria-describedby')).indexOf(attr2) > -1
										: (this.data({ messageKey: 'hidden', values: token_list_default(attr2) }), !1)
									: void 0
							}.call(this, attr))
						)
					}
					var aria_hidden_body_evaluate_default = function ariaHiddenBodyEvaluate(
						node,
						options,
						virtualNode,
					) {
						return 'true' !== virtualNode.attr('aria-hidden')
					}
					var aria_level_evaluate_default = function ariaLevelEvaluate(node, options, virtualNode) {
						var ariaHeadingLevel = virtualNode.attr('aria-level')
						if (!(parseInt(ariaHeadingLevel, 10) > 6)) return !0
					}
					function listProhibitedAttrs(role, nodeName2, elementsAllowedAriaLabel) {
						var roleSpec = standards_default.ariaRoles[role]
						return roleSpec
							? roleSpec.prohibitedAttrs || []
							: role || elementsAllowedAriaLabel.includes(nodeName2)
							? []
							: ['aria-label', 'aria-labelledby']
					}
					var standards_exports = {}
					__export(standards_exports, {
						getAriaRolesByType: function getAriaRolesByType() {
							return get_aria_roles_by_type_default
						},
						getAriaRolesSupportingNameFromContent:
							function getAriaRolesSupportingNameFromContent() {
								return get_aria_roles_supporting_name_from_content_default
							},
						getElementSpec: function getElementSpec() {
							return get_element_spec_default
						},
						getElementsByContentType: function getElementsByContentType() {
							return get_elements_by_content_type_default
						},
						getGlobalAriaAttrs: function getGlobalAriaAttrs() {
							return get_global_aria_attrs_default
						},
						implicitHtmlRoles: function implicitHtmlRoles() {
							return implicit_html_roles_default
						},
					})
					var aria_required_attr_evaluate_default = function ariaRequiredAttrEvaluate(node) {
						var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
							virtualNode = arguments.length > 2 ? arguments[2] : void 0,
							missing = [],
							attrs = virtualNode.attrNames,
							role = get_explicit_role_default(virtualNode)
						if (attrs.length) {
							var required = required_attr_default(role),
								elmSpec = get_element_spec_default(virtualNode)
							if (
								(Array.isArray(options[role]) &&
									(required = unique_array_default(options[role], required)),
								role && required)
							)
								for (var _i19 = 0, l = required.length; _i19 < l; _i19++) {
									var attr = required[_i19]
									virtualNode.attr(attr) ||
										(elmSpec.implicitAttrs && void 0 !== elmSpec.implicitAttrs[attr]) ||
										missing.push(attr)
								}
						}
						var comboboxMissingControls = 'combobox' === role && missing.includes('aria-controls')
						return (
							comboboxMissingControls &&
								(virtualNode.hasAttr('aria-owns') ||
									'true' !== virtualNode.attr('aria-expanded')) &&
								missing.splice(missing.indexOf('aria-controls', 1)),
							!missing.length || (this.data(missing), !1)
						)
					}
					var aria_required_children_evaluate_default = function ariaRequiredChildrenEvaluate(
						node,
						options,
						virtualNode,
					) {
						var reviewEmpty =
								options && Array.isArray(options.reviewEmpty) ? options.reviewEmpty : [],
							role = get_explicit_role_default(virtualNode, { dpub: !0 }),
							required = required_owned_default(role)
						if (null === required) return !0
						var ownedRoles = (function getOwnedRoles(virtualNode, required) {
								for (
									var ownedRoles = [],
										ownedElements = get_owned_virtual_default(virtualNode),
										_loop5 = function _loop5(_i20) {
											var ownedElement = ownedElements[_i20],
												role = get_role_default(ownedElement, { noPresentational: !0 }),
												hasGlobalAriaOrFocusable =
													get_global_aria_attrs_default().some(function (attr) {
														return ownedElement.hasAttr(attr)
													}) || _isFocusable(ownedElement)
											;(!role && !hasGlobalAriaOrFocusable) ||
											(['group', 'rowgroup'].includes(role) &&
												required.some(function (requiredRole) {
													return requiredRole === role
												}))
												? ownedElements.push.apply(
														ownedElements,
														_toConsumableArray(ownedElement.children),
												  )
												: (role || hasGlobalAriaOrFocusable) &&
												  ownedRoles.push({ role, ownedElement })
										},
										_i20 = 0;
									_i20 < ownedElements.length;
									_i20++
								)
									_loop5(_i20)
								return ownedRoles
							})(virtualNode, required),
							unallowed = ownedRoles.filter(function (_ref69) {
								var role2 = _ref69.role
								return !required.includes(role2)
							})
						if (unallowed.length)
							return (
								this.relatedNodes(
									unallowed.map(function (_ref70) {
										return _ref70.ownedElement
									}),
								),
								this.data({ messageKey: 'unallowed' }),
								!1
							)
						var missing = (function missingRequiredChildren(
							virtualNode,
							role,
							required,
							ownedRoles,
						) {
							for (
								var _loop6 = function _loop6(_i21) {
										var role2 = ownedRoles[_i21].role
										if (required.includes(role2))
											return (
												(required = required.filter(function (requiredRole) {
													return requiredRole !== role2
												})),
												{ v: null }
											)
									},
									_i21 = 0;
								_i21 < ownedRoles.length;
								_i21++
							) {
								var _ret2 = _loop6(_i21)
								if ('object' === _typeof(_ret2)) return _ret2.v
							}
							return required.length ? required : null
						})(0, 0, required, ownedRoles)
						return (
							!missing ||
							(this.data(missing),
							!(
								!reviewEmpty.includes(role) ||
								has_content_virtual_default(virtualNode, !1, !0) ||
								ownedRoles.length ||
								(virtualNode.hasAttr('aria-owns') && idrefs_default(node, 'aria-owns').length)
							) && void 0)
						)
					}
					function getMissingContext(virtualNode, ownGroupRoles, reqContext, includeElement) {
						var explicitRole2 = get_explicit_role_default(virtualNode)
						if ((reqContext || (reqContext = required_context_default(explicitRole2)), !reqContext))
							return null
						for (
							var allowsGroup = reqContext.includes('group'),
								vNode = includeElement ? virtualNode : virtualNode.parent;
							vNode;

						) {
							var role = get_role_default(vNode, { noPresentational: !0 })
							if (role) {
								if ('group' !== role || !allowsGroup)
									return reqContext.includes(role) ? null : reqContext
								ownGroupRoles.includes(explicitRole2) && reqContext.push(explicitRole2),
									(reqContext = reqContext.filter(function (r) {
										return 'group' !== r
									})),
									(vNode = vNode.parent)
							} else vNode = vNode.parent
						}
						return reqContext
					}
					var aria_required_parent_evaluate_default = function ariaRequiredParentEvaluate(
						node,
						options,
						virtualNode,
					) {
						var ownGroupRoles =
								options && Array.isArray(options.ownGroupRoles) ? options.ownGroupRoles : [],
							missingParents = getMissingContext(virtualNode, ownGroupRoles)
						if (!missingParents) return !0
						var owners = (function getAriaOwners(element) {
							for (var owners = [], o = null; element; ) {
								if (element.getAttribute('id')) {
									var id = escape_selector_default(element.getAttribute('id'))
									;(o = get_root_node_default2(element).querySelector(
										'[aria-owns~='.concat(id, ']'),
									)) && owners.push(o)
								}
								element = element.parentElement
							}
							return owners.length ? owners : null
						})(node)
						if (owners)
							for (var _i22 = 0, l = owners.length; _i22 < l; _i22++)
								if (
									!(missingParents = getMissingContext(
										get_node_from_tree_default(owners[_i22]),
										ownGroupRoles,
										missingParents,
										!0,
									))
								)
									return !0
						return this.data(missingParents), !1
					}
					var aria_roledescription_evaluate_default = function ariaRoledescriptionEvaluate(node) {
						var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
							virtualNode = arguments.length > 2 ? arguments[2] : void 0,
							role = get_role_default(virtualNode),
							supportedRoles = options.supportedRoles || []
						return (
							!!supportedRoles.includes(role) ||
							(!(!role || 'presentation' === role || 'none' === role) && void 0)
						)
					}
					var aria_unsupported_attr_evaluate_default = function ariaUnsupportedAttrEvaluate(
						node,
						options,
						virtualNode,
					) {
						var unsupportedAttrs = virtualNode.attrNames.filter(function (name) {
							var attribute = standards_default.ariaAttrs[name]
							if (!validate_attr_default(name)) return !1
							var unsupported2 = attribute.unsupported
							return 'object' !== _typeof(unsupported2)
								? !!unsupported2
								: !matches_default3(node, unsupported2.exceptions)
						})
						return !!unsupportedAttrs.length && (this.data(unsupportedAttrs), !0)
					}
					var aria_valid_attr_evaluate_default = function ariaValidAttrEvaluate(
						node,
						options,
						virtualNode,
					) {
						options = Array.isArray(options.value) ? options.value : []
						var invalid = [],
							aria = /^aria-/
						return (
							virtualNode.attrNames.forEach(function (attr) {
								;-1 === options.indexOf(attr) &&
									aria.test(attr) &&
									!validate_attr_default(attr) &&
									invalid.push(attr)
							}),
							!invalid.length || (this.data(invalid), !1)
						)
					}
					var fallbackrole_evaluate_default = function fallbackroleEvaluate(
						node,
						options,
						virtualNode,
					) {
						var explicitRoles = token_list_default(virtualNode.attr('role'))
						return (
							!(explicitRoles.length <= 1) &&
							(!(function nonePresentationOnElementWithNoImplicitRole(virtualNode, explicitRoles) {
								return (
									!implicit_role_default(virtualNode) &&
									2 === explicitRoles.length &&
									explicitRoles.includes('none') &&
									explicitRoles.includes('presentation')
								)
							})(virtualNode, explicitRoles) ||
								void 0)
						)
					}
					var has_global_aria_attribute_evaluate_default = function hasGlobalAriaAttributeEvaluate(
						node,
						options,
						virtualNode,
					) {
						var globalAttrs = get_global_aria_attrs_default().filter(function (attr) {
							return virtualNode.hasAttr(attr)
						})
						return this.data(globalAttrs), globalAttrs.length > 0
					}
					var has_widget_role_evaluate_default = function hasWidgetRoleEvaluate(node) {
						var role = node.getAttribute('role')
						if (null === role) return !1
						var roleType = get_role_type_default(role)
						return 'widget' === roleType || 'composite' === roleType
					}
					var invalidrole_evaluate_default = function invalidroleEvaluate(
						node,
						options,
						virtualNode,
					) {
						var allRoles = token_list_default(virtualNode.attr('role'))
						return (
							!!allRoles.every(function (role) {
								return !is_valid_role_default(role, { allowAbstract: !0 })
							}) && (this.data(allRoles), !0)
						)
					}
					var is_element_focusable_evaluate_default = function isElementFocusableEvaluate(
						node,
						options,
						virtualNode,
					) {
						return _isFocusable(virtualNode)
					}
					var no_implicit_explicit_label_evaluate_default =
						function noImplicitExplicitLabelEvaluate(node, options, virtualNode) {
							var label3,
								accText,
								role = get_role_default(virtualNode, { noImplicit: !0 })
							this.data(role)
							try {
								;(label3 = sanitize_default(label_text_default(virtualNode)).toLowerCase()),
									(accText = sanitize_default(
										accessible_text_virtual_default(virtualNode),
									).toLowerCase())
							} catch (e) {
								return
							}
							return (
								!(!accText && !label3) &&
								!((accText || !label3) && accText.includes(label3)) &&
								void 0
							)
						}
					var unsupportedrole_evaluate_default = function unsupportedroleEvaluate(
							node,
							options,
							virtualNode,
						) {
							var role = get_role_default(virtualNode, { dpub: !0, fallback: !0 }),
								isUnsupported = is_unsupported_role_default(role)
							return isUnsupported && this.data(role), isUnsupported
						},
						VALID_TAG_NAMES_FOR_SCROLLABLE_REGIONS = {
							ARTICLE: !0,
							ASIDE: !0,
							NAV: !0,
							SECTION: !0,
						},
						VALID_ROLES_FOR_SCROLLABLE_REGIONS = {
							application: !0,
							banner: !1,
							complementary: !0,
							contentinfo: !0,
							form: !0,
							main: !0,
							navigation: !0,
							region: !0,
							search: !1,
						}
					var valid_scrollable_semantics_evaluate_default =
							function validScrollableSemanticsEvaluate(node, options) {
								return (
									(function validScrollableRole(node, options) {
										var role = get_explicit_role_default(node)
										return (
											(role &&
												(VALID_ROLES_FOR_SCROLLABLE_REGIONS[role] ||
													options.roles.includes(role))) ||
											!1
										)
									})(node, options) ||
									(function validScrollableTagName(node) {
										var nodeName2 = node.nodeName.toUpperCase()
										return VALID_TAG_NAMES_FOR_SCROLLABLE_REGIONS[nodeName2] || !1
									})(node)
								)
							},
						color_exports = {}
					__export(color_exports, {
						Color: function Color() {
							return color_default
						},
						centerPointOfRect: function centerPointOfRect() {
							return center_point_of_rect_default
						},
						elementHasImage: function elementHasImage() {
							return element_has_image_default
						},
						elementIsDistinct: function elementIsDistinct() {
							return element_is_distinct_default
						},
						filteredRectStack: function filteredRectStack() {
							return filtered_rect_stack_default
						},
						flattenColors: function flattenColors() {
							return flatten_colors_default
						},
						flattenShadowColors: function flattenShadowColors() {
							return flatten_shadow_colors_default
						},
						getBackgroundColor: function getBackgroundColor() {
							return _getBackgroundColor2
						},
						getBackgroundStack: function getBackgroundStack() {
							return get_background_stack_default
						},
						getContrast: function getContrast() {
							return get_contrast_default
						},
						getForegroundColor: function getForegroundColor() {
							return get_foreground_color_default
						},
						getOwnBackgroundColor: function getOwnBackgroundColor() {
							return get_own_background_color_default
						},
						getRectStack: function getRectStack() {
							return get_rect_stack_default
						},
						getTextShadowColors: function getTextShadowColors() {
							return get_text_shadow_colors_default
						},
						hasValidContrastRatio: function hasValidContrastRatio() {
							return has_valid_contrast_ratio_default
						},
						incompleteData: function incompleteData() {
							return incomplete_data_default
						},
					})
					var center_point_of_rect_default = function centerPointOfRect(rect) {
						if (!(rect.left > window.innerWidth || rect.top > window.innerHeight))
							return {
								x: Math.min(Math.ceil(rect.left + rect.width / 2), window.innerWidth - 1),
								y: Math.min(Math.ceil(rect.top + rect.height / 2), window.innerHeight - 1),
							}
					}
					function _getFonts(style) {
						return style
							.getPropertyValue('font-family')
							.split(/[,;]/g)
							.map(function (font) {
								return font.trim().toLowerCase()
							})
					}
					var element_is_distinct_default = function elementIsDistinct(node, ancestorNode) {
						var nodeStyle = window.getComputedStyle(node)
						if ('none' !== nodeStyle.getPropertyValue('background-image')) return !0
						if (
							['border-bottom', 'border-top', 'outline'].reduce(function (result, edge) {
								var borderClr = new color_default()
								return (
									borderClr.parseString(nodeStyle.getPropertyValue(edge + '-color')),
									result ||
										('none' !== nodeStyle.getPropertyValue(edge + '-style') &&
											parseFloat(nodeStyle.getPropertyValue(edge + '-width')) > 0 &&
											0 !== borderClr.alpha)
								)
							}, !1)
						)
							return !0
						var parentStyle = window.getComputedStyle(ancestorNode)
						if (_getFonts(nodeStyle)[0] !== _getFonts(parentStyle)[0]) return !0
						var hasStyle = [
								'text-decoration-line',
								'text-decoration-style',
								'font-weight',
								'font-style',
								'font-size',
							].reduce(function (result, cssProp) {
								return (
									result ||
									nodeStyle.getPropertyValue(cssProp) !== parentStyle.getPropertyValue(cssProp)
								)
							}, !1),
							tDec = nodeStyle.getPropertyValue('text-decoration')
						return (
							tDec.split(' ').length < 3 &&
								(hasStyle = hasStyle || tDec !== parentStyle.getPropertyValue('text-decoration')),
							hasStyle
						)
					}
					var get_rect_stack_default = function getRectStack2(elm) {
						var boundingStack = get_element_stack_default(elm),
							filteredArr = get_text_element_stack_default(elm)
						return !filteredArr || filteredArr.length <= 1
							? [boundingStack]
							: filteredArr.some(function (stack) {
									return void 0 === stack
							  })
							? null
							: (filteredArr.splice(0, 0, boundingStack), filteredArr)
					}
					var filtered_rect_stack_default = function filteredRectStack(elm) {
						var rectStack = get_rect_stack_default(elm)
						if (rectStack && 1 === rectStack.length) return rectStack[0]
						if (rectStack && rectStack.length > 1) {
							var isSame,
								boundingStack = rectStack.shift()
							return (
								rectStack.forEach(function (rectList, index) {
									if (0 !== index) {
										var rectA = rectStack[index - 1],
											rectB = rectStack[index]
										isSame =
											rectA.every(function (element, elementIndex) {
												return element === rectB[elementIndex]
											}) || boundingStack.includes(elm)
									}
								}),
								isSame
									? rectStack[0]
									: (incomplete_data_default.set('bgColor', 'elmPartiallyObscuring'), null)
							)
						}
						return incomplete_data_default.set('bgColor', 'outsideViewport'), null
					}
					function clamp(value, min, max) {
						return Math.min(Math.max(min, value), max)
					}
					var blendFunctions = {
						normal: function normal(Cb, Cs) {
							return Cs
						},
						multiply: function multiply(Cb, Cs) {
							return Cs * Cb
						},
						screen: function screen(Cb, Cs) {
							return Cb + Cs - Cb * Cs
						},
						overlay: function overlay(Cb, Cs) {
							return this['hard-light'](Cs, Cb)
						},
						darken: function darken(Cb, Cs) {
							return Math.min(Cb, Cs)
						},
						lighten: function lighten(Cb, Cs) {
							return Math.max(Cb, Cs)
						},
						'color-dodge': function colorDodge(Cb, Cs) {
							return 0 === Cb ? 0 : 1 === Cs ? 1 : Math.min(1, Cb / (1 - Cs))
						},
						'color-burn': function colorBurn(Cb, Cs) {
							return 1 === Cb ? 1 : 0 === Cs ? 0 : 1 - Math.min(1, (1 - Cb) / Cs)
						},
						'hard-light': function hardLight(Cb, Cs) {
							return Cs <= 0.5 ? this.multiply(Cb, 2 * Cs) : this.screen(Cb, 2 * Cs - 1)
						},
						'soft-light': function softLight(Cb, Cs) {
							return Cs <= 0.5
								? Cb - (1 - 2 * Cs) * Cb * (1 - Cb)
								: Cb +
										(2 * Cs - 1) *
											((Cb <= 0.25 ? ((16 * Cb - 12) * Cb + 4) * Cb : Math.sqrt(Cb)) - Cb)
						},
						difference: function difference(Cb, Cs) {
							return Math.abs(Cb - Cs)
						},
						exclusion: function exclusion(Cb, Cs) {
							return Cb + Cs - 2 * Cb * Cs
						},
					}
					function simpleAlphaCompositing(Cs, αs, Cb, αb, blendMode) {
						return (
							αs * (1 - αb) * Cs +
							αs * αb * blendFunctions[blendMode](Cb / 255, Cs / 255) * 255 +
							(1 - αs) * αb * Cb
						)
					}
					var flatten_colors_default = function flattenColors(fgColor, bgColor) {
						var blendMode =
								arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'normal',
							r = simpleAlphaCompositing(
								fgColor.red,
								fgColor.alpha,
								bgColor.red,
								bgColor.alpha,
								blendMode,
							),
							g = simpleAlphaCompositing(
								fgColor.green,
								fgColor.alpha,
								bgColor.green,
								bgColor.alpha,
								blendMode,
							),
							b = simpleAlphaCompositing(
								fgColor.blue,
								fgColor.alpha,
								bgColor.blue,
								bgColor.alpha,
								blendMode,
							),
							αo = clamp(fgColor.alpha + bgColor.alpha * (1 - fgColor.alpha), 0, 1),
							Cr = Math.round(r / αo),
							Cg = Math.round(g / αo),
							Cb = Math.round(b / αo)
						return new color_default(Cr, Cg, Cb, αo)
					}
					var flatten_shadow_colors_default = function flattenColors2(fgColor, bgColor) {
						var alpha = fgColor.alpha,
							r = (1 - alpha) * bgColor.red + alpha * fgColor.red,
							g = (1 - alpha) * bgColor.green + alpha * fgColor.green,
							b = (1 - alpha) * bgColor.blue + alpha * fgColor.blue,
							a = fgColor.alpha + bgColor.alpha * (1 - fgColor.alpha)
						return new color_default(r, g, b, a)
					}
					function isInlineDescendant(node, descendant) {
						var CONTAINED_BY = window.Node.DOCUMENT_POSITION_CONTAINED_BY
						if (!(node.compareDocumentPosition(descendant) & CONTAINED_BY)) return !1
						var style = window.getComputedStyle(descendant)
						return (
							!!style.getPropertyValue('display').includes('inline') &&
							'static' === style.getPropertyValue('position')
						)
					}
					var get_background_stack_default = function getBackgroundStack(elm) {
						var elmStack = filtered_rect_stack_default(elm)
						if (null === elmStack) return null
						var elmIndex = (elmStack = (function sortPageBackground(elmStack) {
							var bodyIndex = elmStack.indexOf(document.body),
								bgNodes = elmStack,
								htmlBgColor = get_own_background_color_default(
									window.getComputedStyle(document.documentElement),
								)
							if (
								bodyIndex > 1 &&
								0 === htmlBgColor.alpha &&
								!element_has_image_default(document.documentElement)
							) {
								bodyIndex > 1 && (bgNodes.splice(bodyIndex, 1), bgNodes.push(document.body))
								var htmlIndex = bgNodes.indexOf(document.documentElement)
								htmlIndex > 0 &&
									(bgNodes.splice(htmlIndex, 1), bgNodes.push(document.documentElement))
							}
							return bgNodes
						})((elmStack = reduce_to_elements_below_floating_default(elmStack, elm)))).indexOf(elm)
						return (function calculateObscuringElement(elmIndex, elmStack, originalElm) {
							for (var _i23 = elmIndex - 1; _i23 >= 0; _i23--) {
								if (!isInlineDescendant(originalElm, elmStack[_i23])) return !0
								elmStack.splice(_i23, 1)
							}
							return !1
						})(elmIndex, elmStack, elm)
							? (incomplete_data_default.set('bgColor', 'bgOverlap'), null)
							: -1 !== elmIndex
							? elmStack
							: null
					}
					function parseTextShadows(textShadow) {
						var current = { pixels: [] },
							str = textShadow.trim(),
							shadows = [current]
						if (!str) return []
						for (; str; ) {
							var colorMatch =
									str.match(/^rgba?\([0-9,.\s]+\)/i) ||
									str.match(/^[a-z]+/i) ||
									str.match(/^#[0-9a-f]+/i),
								pixelMatch = str.match(/^([0-9.-]+)px/i) || str.match(/^(0)/)
							if (colorMatch)
								assert_default(
									!current.colorStr,
									'Multiple colors identified in text-shadow: '.concat(textShadow),
								),
									(str = str.replace(colorMatch[0], '').trim()),
									(current.colorStr = colorMatch[0])
							else if (pixelMatch) {
								assert_default(
									current.pixels.length < 3,
									'Too many pixel units in text-shadow: '.concat(textShadow),
								),
									(str = str.replace(pixelMatch[0], '').trim())
								var pixelUnit = parseFloat(('.' === pixelMatch[1][0] ? '0' : '') + pixelMatch[1])
								current.pixels.push(pixelUnit)
							} else {
								if (',' !== str[0])
									throw new Error('Unable to process text-shadows: '.concat(textShadow))
								assert_default(
									current.pixels.length >= 2,
									'Missing pixel value in text-shadow: '.concat(textShadow),
								),
									(current = { pixels: [] }),
									shadows.push(current),
									(str = str.substr(1).trim())
							}
						}
						return shadows
					}
					function textShadowColor(_ref73) {
						var colorStr = _ref73.colorStr,
							offsetX = _ref73.offsetX,
							offsetY = _ref73.offsetY,
							blurRadius = _ref73.blurRadius,
							fontSize = _ref73.fontSize
						if (offsetX > blurRadius || offsetY > blurRadius) return new color_default(0, 0, 0, 0)
						var shadowColor = new color_default()
						return (
							shadowColor.parseString(colorStr),
							(shadowColor.alpha *= (function blurRadiusToAlpha(blurRadius, fontSize) {
								if (0 === blurRadius) return 1
								var relativeBlur = blurRadius / fontSize
								return 0.185 / (relativeBlur + 0.4)
							})(blurRadius, fontSize)),
							shadowColor
						)
					}
					var get_text_shadow_colors_default = function getTextShadowColors(node) {
						var _ref71 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
							minRatio = _ref71.minRatio,
							maxRatio = _ref71.maxRatio,
							style = window.getComputedStyle(node),
							textShadow = style.getPropertyValue('text-shadow')
						if ('none' === textShadow) return []
						var fontSizeStr = style.getPropertyValue('font-size'),
							fontSize = parseInt(fontSizeStr)
						assert_default(
							!1 === isNaN(fontSize),
							'Unable to determine font-size value '.concat(fontSizeStr),
						)
						var shadowColors = [],
							shadows = parseTextShadows(textShadow)
						return (
							shadows.forEach(function (_ref72) {
								var colorStr = _ref72.colorStr,
									pixels = _ref72.pixels
								colorStr = colorStr || style.getPropertyValue('color')
								var _pixels = _slicedToArray(pixels, 3),
									offsetY = _pixels[0],
									offsetX = _pixels[1],
									_pixels$ = _pixels[2],
									blurRadius = void 0 === _pixels$ ? 0 : _pixels$
								if (
									(!minRatio || blurRadius >= fontSize * minRatio) &&
									(!maxRatio || blurRadius < fontSize * maxRatio)
								) {
									var color = textShadowColor({ colorStr, offsetY, offsetX, blurRadius, fontSize })
									shadowColors.push(color)
								}
							}),
							shadowColors
						)
					}
					function _getBackgroundColor2(elm) {
						var bgElms = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
							shadowOutlineEmMax =
								arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0.1,
							vNode = get_node_from_tree_default(elm),
							bgColorCache = vNode._cache.getBackgroundColor
						if (bgColorCache)
							return (
								bgElms.push.apply(bgElms, _toConsumableArray(bgColorCache.bgElms)),
								incomplete_data_default.set('bgColor', bgColorCache.incompleteData),
								bgColorCache.bgColor
							)
						var bgColor = _getBackgroundColor(elm, bgElms, shadowOutlineEmMax)
						return (
							(vNode._cache.getBackgroundColor = {
								bgColor,
								bgElms,
								incompleteData: incomplete_data_default.get('bgColor'),
							}),
							bgColor
						)
					}
					function _getBackgroundColor(elm, bgElms, shadowOutlineEmMax) {
						var _bgColors,
							bgColors = get_text_shadow_colors_default(elm, { minRatio: shadowOutlineEmMax })
						bgColors.length &&
							(bgColors = [{ color: bgColors.reduce(flatten_shadow_colors_default) }])
						var elmStack = get_background_stack_default(elm)
						if (
							((elmStack || []).some(function (bgElm) {
								var bgElmStyle = window.getComputedStyle(bgElm),
									bgColor = get_own_background_color_default(bgElmStyle)
								if (
									(function elmPartiallyObscured(elm, bgElm, bgColor) {
										var obscured =
											elm !== bgElm && !_visuallyContains(elm, bgElm) && 0 !== bgColor.alpha
										obscured && incomplete_data_default.set('bgColor', 'elmPartiallyObscured')
										return obscured
									})(elm, bgElm, bgColor) ||
									element_has_image_default(bgElm, bgElmStyle)
								)
									return (bgColors = null), bgElms.push(bgElm), !0
								if (0 !== bgColor.alpha) {
									bgElms.push(bgElm)
									var blendMode = bgElmStyle.getPropertyValue('mix-blend-mode')
									return (
										bgColors.unshift({ color: bgColor, blendMode: normalizeBlendMode(blendMode) }),
										1 === bgColor.alpha
									)
								}
								return !1
							}),
							null === bgColors || null === elmStack)
						)
							return null
						var pageBgs = (function getPageBackgroundColors(elm, stackContainsBody) {
							var pageColors = []
							if (!stackContainsBody) {
								var html = document.documentElement,
									body = document.body,
									htmlStyle = window.getComputedStyle(html),
									bodyStyle = window.getComputedStyle(body),
									htmlBgColor = get_own_background_color_default(htmlStyle),
									bodyBgColor = get_own_background_color_default(bodyStyle),
									bodyBgColorApplies = 0 !== bodyBgColor.alpha && _visuallyContains(elm, body)
								;((0 !== bodyBgColor.alpha && 0 === htmlBgColor.alpha) ||
									(bodyBgColorApplies && 1 !== bodyBgColor.alpha)) &&
									pageColors.unshift({
										color: bodyBgColor,
										blendMode: normalizeBlendMode(bodyStyle.getPropertyValue('mix-blend-mode')),
									}),
									0 !== htmlBgColor.alpha &&
										(!bodyBgColorApplies || (bodyBgColorApplies && 1 !== bodyBgColor.alpha)) &&
										pageColors.unshift({
											color: htmlBgColor,
											blendMode: normalizeBlendMode(htmlStyle.getPropertyValue('mix-blend-mode')),
										})
							}
							return pageColors
						})(elm, elmStack.includes(document.body))
						if (
							((_bgColors = bgColors).unshift.apply(_bgColors, _toConsumableArray(pageBgs)),
							0 === bgColors.length)
						)
							return new color_default(255, 255, 255, 1)
						var blendedColor = bgColors.reduce(function (bgColor, fgColor) {
							return flatten_colors_default(
								fgColor.color,
								bgColor.color instanceof color_default ? bgColor.color : bgColor,
								fgColor.blendMode,
							)
						})
						return flatten_colors_default(
							blendedColor.color instanceof color_default ? blendedColor.color : blendedColor,
							new color_default(255, 255, 255, 1),
						)
					}
					function normalizeBlendMode(blendmode) {
						return blendmode || void 0
					}
					var get_contrast_default = function getContrast(bgColor, fgColor) {
						if (!fgColor || !bgColor) return null
						fgColor.alpha < 1 && (fgColor = flatten_colors_default(fgColor, bgColor))
						var bL = bgColor.getRelativeLuminance(),
							fL = fgColor.getRelativeLuminance()
						return (Math.max(fL, bL) + 0.05) / (Math.min(fL, bL) + 0.05)
					}
					function getOpacity(node) {
						if (!node) return 1
						var vNode = get_node_from_tree_default(node)
						if (vNode && void 0 !== vNode._opacity && null !== vNode._opacity) return vNode._opacity
						var finalOpacity =
							window.getComputedStyle(node).getPropertyValue('opacity') *
							getOpacity(node.parentElement)
						return vNode && (vNode._opacity = finalOpacity), finalOpacity
					}
					var get_foreground_color_default = function getForegroundColor(node, _, bgColor) {
						var nodeStyle = window.getComputedStyle(node),
							fgColor = new color_default()
						fgColor.parseString(nodeStyle.getPropertyValue('color'))
						var opacity = getOpacity(node)
						if (((fgColor.alpha = fgColor.alpha * opacity), 1 === fgColor.alpha)) return fgColor
						if ((bgColor || (bgColor = _getBackgroundColor2(node, [])), null === bgColor)) {
							var reason = incomplete_data_default.get('bgColor')
							return incomplete_data_default.set('fgColor', reason), null
						}
						if (fgColor.alpha < 1) {
							var textShadowColors = get_text_shadow_colors_default(node, { minRatio: 0 })
							return [fgColor]
								.concat(_toConsumableArray(textShadowColors), [bgColor])
								.reduce(flatten_shadow_colors_default)
						}
						return flatten_colors_default(fgColor, bgColor)
					}
					var has_valid_contrast_ratio_default = function hasValidContrastRatio(
						bg,
						fg,
						fontSize,
						isBold,
					) {
						var contrast = get_contrast_default(bg, fg),
							expectedContrastRatio =
								(isBold && Math.ceil(72 * fontSize) / 96 < 14) ||
								(!isBold && Math.ceil(72 * fontSize) / 96 < 18)
									? 4.5
									: 3
						return {
							isValid: contrast > expectedContrastRatio,
							contrastRatio: contrast,
							expectedContrastRatio,
						}
					}
					var getPseudoElementArea = memoize_default(function getPseudoElementArea2(node, pseudo) {
						var style = window.getComputedStyle(node, pseudo),
							matchPseudoStyle = function matchPseudoStyle(prop, value) {
								return style.getPropertyValue(prop) === value
							}
						if (
							matchPseudoStyle('content', 'none') ||
							matchPseudoStyle('display', 'none') ||
							matchPseudoStyle('visibility', 'hidden') ||
							!1 === matchPseudoStyle('position', 'absolute')
						)
							return 0
						if (
							0 === get_own_background_color_default(style).alpha &&
							matchPseudoStyle('background-image', 'none')
						)
							return 0
						var pseudoWidth = parseUnit(style.getPropertyValue('width')),
							pseudoHeight = parseUnit(style.getPropertyValue('height'))
						return 'px' !== pseudoWidth.unit || 'px' !== pseudoHeight.unit
							? 0 === pseudoWidth.value || 0 === pseudoHeight.value
								? 0
								: 1 / 0
							: pseudoWidth.value * pseudoHeight.value
					})
					function parseUnit(str) {
						var _ref77 = _slicedToArray(str.match(/^([0-9.]+)([a-z]+)$/i) || [], 3),
							_ref77$ = _ref77[1],
							value = void 0 === _ref77$ ? '' : _ref77$,
							_ref77$2 = _ref77[2],
							unit = void 0 === _ref77$2 ? '' : _ref77$2
						return { value: parseFloat(value), unit: unit.toLowerCase() }
					}
					function getContrast2(color1, color2) {
						var c1lum = color1.getRelativeLuminance(),
							c2lum = color2.getRelativeLuminance()
						return (Math.max(c1lum, c2lum) + 0.05) / (Math.min(c1lum, c2lum) + 0.05)
					}
					var blockLike2 = ['block', 'list-item', 'table', 'flex', 'grid', 'inline-block']
					function isBlock2(elm) {
						var display = window.getComputedStyle(elm).getPropertyValue('display')
						return -1 !== blockLike2.indexOf(display) || 'table-' === display.substr(0, 6)
					}
					var link_in_text_block_evaluate_default = function linkInTextBlockEvaluate(
							node,
							options,
						) {
							var requiredContrastRatio = options.requiredContrastRatio
							if (isBlock2(node)) return !1
							for (
								var parentBlock = get_composed_parent_default(node);
								parentBlock && 1 === parentBlock.nodeType && !isBlock2(parentBlock);

							)
								parentBlock = get_composed_parent_default(parentBlock)
							if (parentBlock) {
								this.relatedNodes([parentBlock])
								var nodeColor = get_foreground_color_default(node),
									parentColor = get_foreground_color_default(parentBlock),
									nodeBackgroundColor = _getBackgroundColor2(node),
									parentBackgroundColor = _getBackgroundColor2(parentBlock),
									textContrast =
										nodeColor && parentColor ? getContrast2(nodeColor, parentColor) : void 0
								if (
									(textContrast && (textContrast = Math.floor(100 * textContrast) / 100),
									textContrast && textContrast >= requiredContrastRatio)
								)
									return !0
								var backgroundContrast =
									nodeBackgroundColor && parentBackgroundColor
										? getContrast2(nodeBackgroundColor, parentBackgroundColor)
										: void 0
								if (
									(backgroundContrast &&
										(backgroundContrast = Math.floor(100 * backgroundContrast) / 100),
									backgroundContrast && backgroundContrast >= requiredContrastRatio)
								)
									return !0
								if (!backgroundContrast) {
									var _incomplete_data_defa,
										reason =
											null !== (_incomplete_data_defa = incomplete_data_default.get('bgColor')) &&
											void 0 !== _incomplete_data_defa
												? _incomplete_data_defa
												: 'bgContrast'
									return this.data({ messageKey: reason }), void incomplete_data_default.clear()
								}
								if (textContrast)
									return 1 === textContrast && backgroundContrast > 1
										? (this.data({
												messageKey: 'bgContrast',
												contrastRatio: backgroundContrast,
												requiredContrastRatio,
												nodeBackgroundColor: nodeBackgroundColor
													? nodeBackgroundColor.toHexString()
													: void 0,
												parentBackgroundColor: parentBackgroundColor
													? parentBackgroundColor.toHexString()
													: void 0,
										  }),
										  !1)
										: (this.data({
												messageKey: 'fgContrast',
												contrastRatio: textContrast,
												requiredContrastRatio,
												nodeColor: nodeColor ? nodeColor.toHexString() : void 0,
												parentColor: parentColor ? parentColor.toHexString() : void 0,
										  }),
										  !1)
							}
						},
						blockLike3 = ['block', 'list-item', 'table', 'flex', 'grid', 'inline-block']
					function isBlock3(elm) {
						var display = window.getComputedStyle(elm).getPropertyValue('display')
						return -1 !== blockLike3.indexOf(display) || 'table-' === display.substr(0, 6)
					}
					var link_in_text_block_style_evaluate_default = function linkInTextBlockStyleEvaluate(
						node,
					) {
						if (isBlock3(node)) return !1
						for (
							var parentBlock = get_composed_parent_default(node);
							parentBlock && 1 === parentBlock.nodeType && !isBlock3(parentBlock);

						)
							parentBlock = get_composed_parent_default(parentBlock)
						return parentBlock
							? (this.relatedNodes([parentBlock]), element_is_distinct_default(node, parentBlock))
							: void 0
					}
					var autocomplete_appropriate_evaluate_default = function autocompleteAppropriateEvaluate(
						node,
						options,
						virtualNode,
					) {
						if ('input' !== virtualNode.props.nodeName) return !0
						var number = ['text', 'search', 'number', 'tel'],
							url = ['text', 'search', 'url'],
							allowedTypesMap = {
								bday: ['text', 'search', 'date'],
								email: ['text', 'search', 'email'],
								username: ['text', 'search', 'email'],
								'street-address': ['text'],
								tel: ['text', 'search', 'tel'],
								'tel-country-code': ['text', 'search', 'tel'],
								'tel-national': ['text', 'search', 'tel'],
								'tel-area-code': ['text', 'search', 'tel'],
								'tel-local': ['text', 'search', 'tel'],
								'tel-local-prefix': ['text', 'search', 'tel'],
								'tel-local-suffix': ['text', 'search', 'tel'],
								'tel-extension': ['text', 'search', 'tel'],
								'cc-number': number,
								'cc-exp': ['text', 'search', 'month', 'tel'],
								'cc-exp-month': number,
								'cc-exp-year': number,
								'cc-csc': number,
								'transaction-amount': number,
								'bday-day': number,
								'bday-month': number,
								'bday-year': number,
								'new-password': ['text', 'search', 'password'],
								'current-password': ['text', 'search', 'password'],
								url,
								photo: url,
								impp: url,
							}
						'object' === _typeof(options) &&
							Object.keys(options).forEach(function (key) {
								allowedTypesMap[key] || (allowedTypesMap[key] = []),
									(allowedTypesMap[key] = allowedTypesMap[key].concat(options[key]))
							})
						var autocompleteTerms = virtualNode
								.attr('autocomplete')
								.split(/\s+/g)
								.map(function (term) {
									return term.toLowerCase()
								}),
							purposeTerm = autocompleteTerms[autocompleteTerms.length - 1]
						if (_autocomplete.stateTerms.includes(purposeTerm)) return !0
						var allowedTypes = allowedTypesMap[purposeTerm],
							type = virtualNode.hasAttr('type')
								? sanitize_default(virtualNode.attr('type')).toLowerCase()
								: 'text'
						return (
							(type = valid_input_type_default().includes(type) ? type : 'text'),
							void 0 === allowedTypes ? 'text' === type : allowedTypes.includes(type)
						)
					}
					var autocomplete_valid_evaluate_default = function autocompleteValidEvaluate(
						node,
						options,
						virtualNode,
					) {
						var autocomplete2 = virtualNode.attr('autocomplete') || ''
						return is_valid_autocomplete_default(autocomplete2, options)
					}
					var attr_non_space_content_evaluate_default = function attrNonSpaceContentEvaluate(node) {
						var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
							vNode = arguments.length > 2 ? arguments[2] : void 0
						if (!options.attribute || 'string' != typeof options.attribute)
							throw new TypeError(
								'attr-non-space-content requires options.attribute to be a string',
							)
						if (!vNode.hasAttr(options.attribute)) return this.data({ messageKey: 'noAttr' }), !1
						var attribute = vNode.attr(options.attribute),
							attributeIsEmpty = !sanitize_default(attribute)
						return !attributeIsEmpty || (this.data({ messageKey: 'emptyAttr' }), !1)
					}
					var has_descendant_after_default = function pageHasElmAfter(results) {
						return (
							results.some(function (frameResult) {
								return !0 === frameResult.result
							}) &&
								results.forEach(function (result) {
									result.result = !0
								}),
							results
						)
					}
					var has_descendant_evaluate_default = function hasDescendant(node, options, virtualNode) {
						if (!options || !options.selector || 'string' != typeof options.selector)
							throw new TypeError('has-descendant requires options.selector to be a string')
						if (options.passForModal && is_modal_open_default()) return !0
						var matchingElms = query_selector_all_filter_default(
							virtualNode,
							options.selector,
							function (vNode) {
								return _isVisibleToScreenReaders(vNode)
							},
						)
						return (
							this.relatedNodes(
								matchingElms.map(function (vNode) {
									return vNode.actualNode
								}),
							),
							matchingElms.length > 0
						)
					}
					var matches_definition_evaluate_default = function matchesDefinitionEvaluate(
						_,
						options,
						virtualNode,
					) {
						return matches_default3(virtualNode, options.matcher)
					}
					var page_no_duplicate_after_default = function pageNoDuplicateAfter(results) {
						return results.filter(function (checkResult) {
							return 'ignored' !== checkResult.data
						})
					}
					var page_no_duplicate_evaluate_default = function pageNoDuplicateEvaluate(
						node,
						options,
						virtualNode,
					) {
						if (!options || !options.selector || 'string' != typeof options.selector)
							throw new TypeError('page-no-duplicate requires options.selector to be a string')
						var key = 'page-no-duplicate;' + options.selector
						if (!cache_default.get(key)) {
							cache_default.set(key, !0)
							var elms = query_selector_all_filter_default(
								axe._tree[0],
								options.selector,
								function (elm) {
									return _isVisibleToScreenReaders(elm)
								},
							)
							return (
								'string' == typeof options.nativeScopeFilter &&
									(elms = elms.filter(function (elm) {
										return (
											elm.actualNode.hasAttribute('role') ||
											!find_up_virtual_default(elm, options.nativeScopeFilter)
										)
									})),
								this.relatedNodes(
									elms
										.filter(function (elm) {
											return elm !== virtualNode
										})
										.map(function (elm) {
											return elm.actualNode
										}),
								),
								elms.length <= 1
							)
						}
						this.data('ignored')
					}
					var accesskeys_after_default = function accesskeysAfter(results) {
						var seen = {}
						return results
							.filter(function (r) {
								if (!r.data) return !1
								var key = r.data.toUpperCase()
								return seen[key]
									? (seen[key].relatedNodes.push(r.relatedNodes[0]), !1)
									: ((seen[key] = r), (r.relatedNodes = []), !0)
							})
							.map(function (r) {
								return (r.result = !!r.relatedNodes.length), r
							})
					}
					var accesskeys_evaluate_default = function accesskeysEvaluate(node, options, vNode) {
						return (
							_isHiddenForEveryone(vNode) ||
								(this.data(vNode.attr('accesskey')), this.relatedNodes([node])),
							!0
						)
					}
					var focusable_content_evaluate_default = function focusableContentEvaluate(
						node,
						options,
						virtualNode,
					) {
						var tabbableElements = virtualNode.tabbableElements
						return (
							!!tabbableElements &&
							tabbableElements.filter(function (el) {
								return el !== virtualNode
							}).length > 0
						)
					}
					var focusable_disabled_evaluate_default = function focusableDisabledEvaluate(
						node,
						options,
						virtualNode,
					) {
						var elementsThatCanBeDisabled = ['button', 'fieldset', 'input', 'select', 'textarea'],
							tabbableElements = virtualNode.tabbableElements
						if (!tabbableElements || !tabbableElements.length) return !0
						var relatedNodes = tabbableElements.filter(function (vNode) {
							return elementsThatCanBeDisabled.includes(vNode.props.nodeName)
						})
						return (
							this.relatedNodes(
								relatedNodes.map(function (vNode) {
									return vNode.actualNode
								}),
							),
							!(0 !== relatedNodes.length && !is_modal_open_default()) ||
								(!!relatedNodes.every(function (vNode) {
									var pointerEvents = vNode.getComputedStylePropertyValue('pointer-events'),
										width = parseInt(vNode.getComputedStylePropertyValue('width')),
										height = parseInt(vNode.getComputedStylePropertyValue('height'))
									return (
										vNode.actualNode.onfocus ||
										((0 === width || 0 === height) && 'none' === pointerEvents)
									)
								}) &&
									void 0)
						)
					}
					var focusable_element_evaluate_default = function focusableElementEvaluate(
						node,
						options,
						virtualNode,
					) {
						return (
							!(
								!virtualNode.hasAttr('contenteditable') ||
								!(function isContenteditable(vNode) {
									var contenteditable = vNode.attr('contenteditable')
									if ('true' === contenteditable || '' === contenteditable) return !0
									if ('false' === contenteditable) return !1
									var ancestor = closest_default(virtualNode.parent, '[contenteditable]')
									if (!ancestor) return !1
									return isContenteditable(ancestor)
								})(virtualNode)
							) || _isInTabOrder(virtualNode)
						)
					}
					var focusable_modal_open_evaluate_default = function focusableModalOpenEvaluate(
						node,
						options,
						virtualNode,
					) {
						var tabbableElements = virtualNode.tabbableElements.map(function (_ref78) {
							return _ref78.actualNode
						})
						return (
							!tabbableElements ||
							!tabbableElements.length ||
							!is_modal_open_default() ||
							void this.relatedNodes(tabbableElements)
						)
					}
					var focusable_no_name_evaluate_default = function focusableNoNameEvaluate(
						node,
						options,
						virtualNode,
					) {
						var tabIndex = virtualNode.attr('tabindex')
						if (!(_isFocusable(virtualNode) && tabIndex > -1)) return !1
						try {
							return !accessible_text_virtual_default(virtualNode)
						} catch (e) {
							return
						}
					}
					var focusable_not_tabbable_evaluate_default = function focusableNotTabbableEvaluate(
						node,
						options,
						virtualNode,
					) {
						var elementsThatCanBeDisabled = ['button', 'fieldset', 'input', 'select', 'textarea'],
							tabbableElements = virtualNode.tabbableElements
						if (!tabbableElements || !tabbableElements.length) return !0
						var relatedNodes = tabbableElements.filter(function (vNode) {
							return !elementsThatCanBeDisabled.includes(vNode.props.nodeName)
						})
						return (
							this.relatedNodes(
								relatedNodes.map(function (vNode) {
									return vNode.actualNode
								}),
							),
							!(0 !== relatedNodes.length && !is_modal_open_default()) ||
								(!!relatedNodes.every(function (vNode) {
									var pointerEvents = vNode.getComputedStylePropertyValue('pointer-events'),
										width = parseInt(vNode.getComputedStylePropertyValue('width')),
										height = parseInt(vNode.getComputedStylePropertyValue('height'))
									return (
										vNode.actualNode.onfocus ||
										((0 === width || 0 === height) && 'none' === pointerEvents)
									)
								}) &&
									void 0)
						)
					}
					function focusableDescendants(vNode) {
						if (_isInTabOrder(vNode)) return !0
						if (!vNode.children) {
							if (1 === vNode.props.nodeType) throw new Error('Cannot determine children')
							return !1
						}
						return vNode.children.some(function (child) {
							return focusableDescendants(child)
						})
					}
					var landmark_is_top_level_evaluate_default = function landmarkIsTopLevelEvaluate(node) {
						var landmarks = get_aria_roles_by_type_default('landmark'),
							parent = get_composed_parent_default(node),
							nodeRole = get_role_default(node)
						for (this.data({ role: nodeRole }); parent; ) {
							var role = parent.getAttribute('role')
							if (
								(role ||
									'FORM' === parent.nodeName.toUpperCase() ||
									(role = implicit_role_default(parent)),
								role &&
									landmarks.includes(role) &&
									('main' !== role || 'complementary' !== nodeRole))
							)
								return !1
							parent = get_composed_parent_default(parent)
						}
						return !0
					}
					function getFocusableDescendants(vNode) {
						if (!vNode.children) {
							if (1 === vNode.props.nodeType) throw new Error('Cannot determine children')
							return []
						}
						var retVal = []
						return (
							vNode.children.forEach(function (child) {
								'widget' === get_role_type_default(child) && _isFocusable(child)
									? retVal.push(child)
									: retVal.push.apply(retVal, _toConsumableArray(getFocusableDescendants(child)))
							}),
							retVal
						)
					}
					function usesUnreliableHidingStrategy(vNode) {
						var tabIndex = parseInt(vNode.attr('tabindex'), 10)
						return !isNaN(tabIndex) && tabIndex < 0
					}
					var tabindex_evaluate_default = function tabindexEvaluate(node, options, virtualNode) {
						var tabIndex = parseInt(virtualNode.attr('tabindex'), 10)
						return !!isNaN(tabIndex) || tabIndex <= 0
					}
					var alt_space_value_evaluate_default = function altSpaceValueEvaluate(
						node,
						options,
						virtualNode,
					) {
						var alt = virtualNode.attr('alt')
						return 'string' == typeof alt && /^\s+$/.test(alt)
					}
					var duplicate_img_label_evaluate_default = function duplicateImgLabelEvaluate(
						node,
						options,
						virtualNode,
					) {
						if (['none', 'presentation'].includes(get_role_default(virtualNode))) return !1
						var parentVNode = closest_default(virtualNode, options.parentSelector)
						if (!parentVNode) return !1
						var visibleText = visible_virtual_default(parentVNode, !0).toLowerCase()
						return (
							'' !== visibleText &&
							visibleText === accessible_text_virtual_default(virtualNode).toLowerCase()
						)
					}
					var explicit_evaluate_default = function explicitEvaluate(node, options, virtualNode) {
						var _this4 = this
						if (!virtualNode.attr('id')) return !1
						if (virtualNode.actualNode) {
							var root = get_root_node_default2(virtualNode.actualNode),
								id = escape_selector_default(virtualNode.attr('id')),
								labels = Array.from(root.querySelectorAll('label[for="'.concat(id, '"]')))
							if ((this.relatedNodes(labels), !labels.length)) return !1
							try {
								return labels.some(function (label3) {
									if (_isVisibleOnScreen(label3)) {
										var explicitLabel = sanitize_default(
											accessible_text_default(label3, {
												inControlContext: !0,
												startNode: virtualNode,
											}),
										)
										return _this4.data({ explicitLabel }), !!explicitLabel
									}
									return !0
								})
							} catch (e) {
								return
							}
						}
					}
					var help_same_as_label_evaluate_default = function helpSameAsLabelEvaluate(
						node,
						options,
						virtualNode,
					) {
						var labelText2 = label_virtual_default2(virtualNode),
							check = node.getAttribute('title')
						return (
							!!labelText2 &&
							(check ||
								((check = ''),
								node.getAttribute('aria-describedby') &&
									(check = idrefs_default(node, 'aria-describedby')
										.map(function (thing) {
											return thing ? accessible_text_default(thing) : ''
										})
										.join(''))),
							sanitize_default(check) === sanitize_default(labelText2))
						)
					}
					var hidden_explicit_label_evaluate_default = function hiddenExplicitLabelEvaluate(
						node,
						options,
						virtualNode,
					) {
						if (virtualNode.hasAttr('id')) {
							if (!virtualNode.actualNode) return
							var root = get_root_node_default2(node),
								id = escape_selector_default(node.getAttribute('id')),
								label3 = root.querySelector('label[for="'.concat(id, '"]'))
							if (label3 && !_isVisibleToScreenReaders(label3)) {
								var name
								try {
									name = accessible_text_virtual_default(virtualNode).trim()
								} catch (e) {
									return
								}
								return '' === name
							}
						}
						return !1
					}
					var implicit_evaluate_default = function implicitEvaluate(node, options, virtualNode) {
						try {
							var label3 = closest_default(virtualNode, 'label')
							if (label3) {
								var implicitLabel = sanitize_default(
									accessible_text_virtual_default(label3, {
										inControlContext: !0,
										startNode: virtualNode,
									}),
								)
								return (
									label3.actualNode && this.relatedNodes([label3.actualNode]),
									this.data({ implicitLabel }),
									!!implicitLabel
								)
							}
							return !1
						} catch (e) {
							return
						}
					}
					function isStringContained(compare, compareWith) {
						var curatedCompareWith = curateString(compareWith),
							curatedCompare = curateString(compare)
						return (
							!(!curatedCompareWith || !curatedCompare) &&
							curatedCompareWith.includes(curatedCompare)
						)
					}
					function curateString(str) {
						var noUnicodeStr = remove_unicode_default(str, {
							emoji: !0,
							nonBmp: !0,
							punctuations: !0,
						})
						return sanitize_default(noUnicodeStr)
					}
					var label_content_name_mismatch_evaluate_default =
						function labelContentNameMismatchEvaluate(node, options, virtualNode) {
							var _ref79 = options || {},
								pixelThreshold = _ref79.pixelThreshold,
								occuranceThreshold = _ref79.occuranceThreshold,
								accText = accessible_text_default(node).toLowerCase()
							if (!(is_human_interpretable_default(accText) < 1)) {
								var visibleText = sanitize_default(
									subtree_text_default(virtualNode, {
										subtreeDescendant: !0,
										ignoreIconLigature: !0,
										pixelThreshold,
										occuranceThreshold,
									}),
								).toLowerCase()
								return (
									!visibleText ||
									(is_human_interpretable_default(visibleText) < 1
										? !!isStringContained(visibleText, accText) || void 0
										: isStringContained(visibleText, accText))
								)
							}
						}
					var multiple_label_evaluate_default = function multipleLabelEvaluate(node) {
						var id = escape_selector_default(node.getAttribute('id')),
							parent = node.parentNode,
							root = get_root_node_default2(node)
						root = root.documentElement || root
						var labels = Array.from(root.querySelectorAll('label[for="'.concat(id, '"]')))
						for (
							labels.length &&
							(labels = labels.filter(function (label3) {
								return !_isHiddenForEveryone(label3)
							}));
							parent;

						)
							'LABEL' === parent.nodeName.toUpperCase() &&
								-1 === labels.indexOf(parent) &&
								labels.push(parent),
								(parent = parent.parentNode)
						if ((this.relatedNodes(labels), labels.length > 1)) {
							var ATVisibleLabels = labels.filter(function (label3) {
								return _isVisibleToScreenReaders(label3)
							})
							if (ATVisibleLabels.length > 1) return
							return !idrefs_default(node, 'aria-labelledby').includes(ATVisibleLabels[0]) && void 0
						}
						return !1
					}
					var title_only_evaluate_default = function titleOnlyEvaluate(node, options, virtualNode) {
						var labelText2 = label_virtual_default2(virtualNode),
							title = title_text_default(virtualNode),
							ariaDescribedBy = virtualNode.attr('aria-describedby')
						return !(labelText2 || (!title && !ariaDescribedBy))
					}
					var landmark_is_unique_after_default = function landmarkIsUniqueAfter(results) {
						var uniqueLandmarks = []
						return results.filter(function (currentResult) {
							var matchedResult = uniqueLandmarks.find(function findMatch(someResult) {
								return (
									currentResult.data.role === someResult.data.role &&
									currentResult.data.accessibleText === someResult.data.accessibleText
								)
							})
							return matchedResult
								? ((matchedResult.result = !1),
								  matchedResult.relatedNodes.push(currentResult.relatedNodes[0]),
								  !1)
								: (uniqueLandmarks.push(currentResult), (currentResult.relatedNodes = []), !0)
						})
					}
					var landmark_is_unique_evaluate_default = function landmarkIsUniqueEvaluate(
						node,
						options,
						virtualNode,
					) {
						var role = get_role_default(node),
							accessibleText2 = accessible_text_virtual_default(virtualNode)
						return (
							(accessibleText2 = accessibleText2 ? accessibleText2.toLowerCase() : null),
							this.data({ role, accessibleText: accessibleText2 }),
							this.relatedNodes([node]),
							!0
						)
					}
					function hasValue(value) {
						return '' !== (value || '').trim()
					}
					var has_lang_evaluate_default = function hasLangEvaluate(node, options, virtualNode) {
						var xhtml2 = void 0 !== document && is_xhtml_default(document)
						return options.attributes.includes('xml:lang') &&
							options.attributes.includes('lang') &&
							hasValue(virtualNode.attr('xml:lang')) &&
							!hasValue(virtualNode.attr('lang')) &&
							!xhtml2
							? (this.data({ messageKey: 'noXHTML' }), !1)
							: !!options.attributes.some(function (name) {
									return hasValue(virtualNode.attr(name))
							  }) || (this.data({ messageKey: 'noLang' }), !1)
					}
					var valid_lang_evaluate_default = function validLangEvaluate(node, options, virtualNode) {
						var invalid = []
						return (
							options.attributes.forEach(function (langAttr) {
								var langVal = virtualNode.attr(langAttr)
								if ('string' == typeof langVal) {
									var baselangVal = get_base_lang_default(langVal),
										invalidLang = options.value
											? !options.value.map(get_base_lang_default).includes(baselangVal)
											: !valid_langs_default(baselangVal)
									;(('' !== baselangVal && invalidLang) ||
										('' !== langVal && !sanitize_default(langVal))) &&
										invalid.push(langAttr + '="' + virtualNode.attr(langAttr) + '"')
								}
							}),
							!!invalid.length &&
								!('html' !== virtualNode.props.nodeName && !_hasLangText(virtualNode)) &&
								(this.data(invalid), !0)
						)
					}
					var xml_lang_mismatch_evaluate_default = function xmlLangMismatchEvaluate(
						node,
						options,
						vNode,
					) {
						return (
							get_base_lang_default(vNode.attr('lang')) ===
							get_base_lang_default(vNode.attr('xml:lang'))
						)
					}
					var dlitem_evaluate_default = function dlitemEvaluate(node) {
						var parent = get_composed_parent_default(node),
							parentTagName = parent.nodeName.toUpperCase(),
							parentRole = get_explicit_role_default(parent)
						return (
							'DIV' === parentTagName &&
								['presentation', 'none', null].includes(parentRole) &&
								((parentTagName = (parent =
									get_composed_parent_default(parent)).nodeName.toUpperCase()),
								(parentRole = get_explicit_role_default(parent))),
							'DL' === parentTagName &&
								!(parentRole && !['presentation', 'none', 'list'].includes(parentRole))
						)
					}
					function getInvalidSelector(vChild, nested, _ref80) {
						var _ref80$validRoles = _ref80.validRoles,
							validRoles = void 0 === _ref80$validRoles ? [] : _ref80$validRoles,
							_ref80$validNodeNames = _ref80.validNodeNames,
							validNodeNames = void 0 === _ref80$validNodeNames ? [] : _ref80$validNodeNames,
							_vChild$props = vChild.props,
							nodeName2 = _vChild$props.nodeName,
							nodeType = _vChild$props.nodeType,
							nodeValue = _vChild$props.nodeValue,
							selector = nested ? 'div > ' : ''
						if (3 === nodeType && '' !== nodeValue.trim()) return selector + '#text'
						if (1 !== nodeType || !_isVisibleToScreenReaders(vChild)) return !1
						var role = get_explicit_role_default(vChild)
						return role
							? !validRoles.includes(role) && selector + '[role='.concat(role, ']')
							: !validNodeNames.includes(nodeName2) && selector + nodeName2
					}
					function isDivGroup(vNode) {
						return 'div' === vNode.props.nodeName && null === get_explicit_role_default(vNode)
					}
					function mapWithNested(vNodes) {
						var nested = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
						return vNodes.map(function (vChild) {
							return { vChild, nested }
						})
					}
					var only_dlitems_evaluate_default = function onlyDlitemsEvaluate(
						node,
						options,
						virtualNode,
					) {
						var ALLOWED_ROLES = ['definition', 'term', 'list'],
							result = virtualNode.children
								.reduce(function (content2, child) {
									var actualNode = child.actualNode
									return 'DIV' === actualNode.nodeName.toUpperCase() &&
										null === get_role_default(actualNode)
										? content2.concat(child.children)
										: content2.concat(child)
								}, [])
								.reduce(
									function (out, childNode) {
										var actualNode = childNode.actualNode,
											tagName = actualNode.nodeName.toUpperCase()
										if (1 === actualNode.nodeType && _isVisibleToScreenReaders(actualNode)) {
											var explicitRole2 = get_explicit_role_default(actualNode)
											;(('DT' !== tagName && 'DD' !== tagName) || explicitRole2) &&
												(ALLOWED_ROLES.includes(explicitRole2) || out.badNodes.push(actualNode))
										} else
											3 === actualNode.nodeType &&
												'' !== actualNode.nodeValue.trim() &&
												(out.hasNonEmptyTextNode = !0)
										return out
									},
									{ badNodes: [], hasNonEmptyTextNode: !1 },
								)
						return (
							result.badNodes.length && this.relatedNodes(result.badNodes),
							!!result.badNodes.length || result.hasNonEmptyTextNode
						)
					}
					var only_listitems_evaluate_default = function onlyListitemsEvaluate(
						node,
						options,
						virtualNode,
					) {
						var hasNonEmptyTextNode = !1,
							atLeastOneListitem = !1,
							isEmpty = !0,
							badNodes = [],
							badRoleNodes = [],
							badRoles = []
						return (
							virtualNode.children.forEach(function (vNode) {
								var actualNode = vNode.actualNode
								if (3 !== actualNode.nodeType || '' === actualNode.nodeValue.trim()) {
									if (1 === actualNode.nodeType && _isVisibleToScreenReaders(actualNode)) {
										isEmpty = !1
										var isLi = 'LI' === actualNode.nodeName.toUpperCase(),
											role = get_role_default(vNode),
											isListItemRole = 'listitem' === role
										isLi || isListItemRole || badNodes.push(actualNode),
											isLi &&
												!isListItemRole &&
												(badRoleNodes.push(actualNode),
												badRoles.includes(role) || badRoles.push(role)),
											isListItemRole && (atLeastOneListitem = !0)
									}
								} else hasNonEmptyTextNode = !0
							}),
							hasNonEmptyTextNode || badNodes.length
								? (this.relatedNodes(badNodes), !0)
								: !isEmpty &&
								  !atLeastOneListitem &&
								  (this.relatedNodes(badRoleNodes),
								  this.data({ messageKey: 'roleNotValid', roles: badRoles.join(', ') }),
								  !0)
						)
					}
					var structured_dlitems_evaluate_default = function structuredDlitemsEvaluate(
						node,
						options,
						virtualNode,
					) {
						var children = virtualNode.children
						if (!children || !children.length) return !1
						for (var nodeName2, hasDt = !1, hasDd = !1, i = 0; i < children.length; i++) {
							if (
								('DT' === (nodeName2 = children[i].props.nodeName.toUpperCase()) && (hasDt = !0),
								hasDt && 'DD' === nodeName2)
							)
								return !1
							'DD' === nodeName2 && (hasDd = !0)
						}
						return hasDt || hasDd
					}
					var caption_evaluate_default = function captionEvaluate(node, options, virtualNode) {
						return (
							!query_selector_all_default(virtualNode, 'track').some(function (vNode) {
								return 'captions' === (vNode.attr('kind') || '').toLowerCase()
							}) && void 0
						)
					}
					var frame_tested_after_default = function frameTestedAfter(results) {
						var iframes = {}
						return results.filter(function (result) {
							if ('html' !== result.node.ancestry[result.node.ancestry.length - 1]) {
								var ancestry2 = result.node.ancestry.flat(1 / 0).join(' > ')
								return (iframes[ancestry2] = result), !0
							}
							var ancestry = result.node.ancestry
								.slice(0, result.node.ancestry.length - 1)
								.flat(1 / 0)
								.join(' > ')
							return iframes[ancestry] && (iframes[ancestry].result = !0), !1
						})
					}
					var frame_tested_evaluate_default = function frameTestedEvaluate(node, options) {
						return !options.isViolation && void 0
					}
					var no_autoplay_audio_evaluate_default = function noAutoplayAudioEvaluate(node, options) {
						if (node.duration) {
							var _options$allowedDurat = options.allowedDuration,
								allowedDuration = void 0 === _options$allowedDurat ? 3 : _options$allowedDurat
							return (
								((function getPlayableDuration(elm) {
									if (!elm.currentSrc) return 0
									var playbackRange = (function getPlaybackRange(src) {
										var match = src.match(/#t=(.*)/)
										if (!match) return
										return _slicedToArray(match, 2)[1]
											.split(',')
											.map(function (range) {
												return /:/.test(range)
													? (function convertHourMinSecToSeconds(hhMmSs) {
															var parts = hhMmSs.split(':'),
																secs = 0,
																mins = 1
															for (; parts.length > 0; )
																(secs += mins * parseInt(parts.pop(), 10)), (mins *= 60)
															return parseFloat(secs)
													  })(range)
													: parseFloat(range)
											})
									})(elm.currentSrc)
									if (!playbackRange) return Math.abs(elm.duration - (elm.currentTime || 0))
									if (1 === playbackRange.length) return Math.abs(elm.duration - playbackRange[0])
									return Math.abs(playbackRange[1] - playbackRange[0])
								})(node) <= allowedDuration &&
									!node.hasAttribute('loop')) ||
								!!node.hasAttribute('controls')
							)
						}
						console.warn('axe.utils.preloadMedia did not load metadata')
					}
					var css_orientation_lock_evaluate_default = function cssOrientationLockEvaluate(
						node,
						options,
						virtualNode,
						context,
					) {
						var _ref81$cssom = (context || {}).cssom,
							cssom = void 0 === _ref81$cssom ? void 0 : _ref81$cssom,
							_ref82$degreeThreshol = (options || {}).degreeThreshold,
							degreeThreshold = void 0 === _ref82$degreeThreshol ? 0 : _ref82$degreeThreshol
						if (cssom && cssom.length) {
							for (
								var isLocked = !1,
									relatedElements = [],
									rulesGroupByDocumentFragment = (function groupCssomByDocument(cssObjectModel) {
										return cssObjectModel.reduce(function (out, _ref84) {
											var sheet = _ref84.sheet,
												root = _ref84.root,
												shadowId = _ref84.shadowId,
												key = shadowId || 'topDocument'
											if ((out[key] || (out[key] = { root, rules: [] }), !sheet || !sheet.cssRules))
												return out
											var rules = Array.from(sheet.cssRules)
											return (out[key].rules = out[key].rules.concat(rules)), out
										}, {})
									})(cssom),
									_loop7 = function _loop7() {
										var key = _Object$keys2[_i24],
											_rulesGroupByDocument = rulesGroupByDocumentFragment[key],
											root = _rulesGroupByDocument.root,
											orientationRules = _rulesGroupByDocument.rules.filter(
												isMediaRuleWithOrientation,
											)
										if (!orientationRules.length) return 'continue'
										orientationRules.forEach(function (_ref83) {
											var cssRules = _ref83.cssRules
											Array.from(cssRules).forEach(function (cssRule) {
												var locked = (function getIsOrientationLocked(_ref86) {
													var selectorText = _ref86.selectorText,
														style = _ref86.style
													if (!selectorText || style.length <= 0) return !1
													var transformStyle =
														style.transform || style.webkitTransform || style.msTransform || !1
													if (!transformStyle) return !1
													var matches4 = transformStyle.match(
														/(rotate|rotateZ|rotate3d|matrix|matrix3d)\(([^)]+)\)(?!.*(rotate|rotateZ|rotate3d|matrix|matrix3d))/,
													)
													if (!matches4) return !1
													var _matches = _slicedToArray(matches4, 3),
														transformFn = _matches[1],
														transformFnValue = _matches[2],
														degrees = (function getRotationInDegrees(
															transformFunction,
															transformFnValue,
														) {
															switch (transformFunction) {
																case 'rotate':
																case 'rotateZ':
																	return getAngleInDegrees(transformFnValue)
																case 'rotate3d':
																	var _transformFnValue$spl2 = _slicedToArray(
																			transformFnValue.split(',').map(function (value) {
																				return value.trim()
																			}),
																			4,
																		),
																		z = _transformFnValue$spl2[2],
																		angleWithUnit = _transformFnValue$spl2[3]
																	if (0 === parseInt(z)) return
																	return getAngleInDegrees(angleWithUnit)
																case 'matrix':
																case 'matrix3d':
																	return (function getAngleInDegreesFromMatrixTransform(
																		transformFnValue,
																	) {
																		var values = transformFnValue.split(',')
																		if (values.length <= 6) {
																			var _values = _slicedToArray(values, 2),
																				a = _values[0],
																				b2 = _values[1]
																			return convertRadToDeg(
																				Math.atan2(parseFloat(b2), parseFloat(a)),
																			)
																		}
																		var sinB = parseFloat(values[8]),
																			b = Math.asin(sinB),
																			cosB = Math.cos(b)
																		return convertRadToDeg(Math.acos(parseFloat(values[0]) / cosB))
																	})(transformFnValue)
																default:
																	return
															}
														})(transformFn, transformFnValue)
													if (!degrees) return !1
													if (
														((degrees = Math.abs(degrees)),
														Math.abs(degrees - 180) % 180 <= degreeThreshold)
													)
														return !1
													return Math.abs(degrees - 90) % 90 <= degreeThreshold
												})(cssRule)
												if (locked && 'HTML' !== cssRule.selectorText.toUpperCase()) {
													var elms = Array.from(root.querySelectorAll(cssRule.selectorText)) || []
													relatedElements = relatedElements.concat(elms)
												}
												isLocked = isLocked || locked
											})
										})
									},
									_i24 = 0,
									_Object$keys2 = Object.keys(rulesGroupByDocumentFragment);
								_i24 < _Object$keys2.length;
								_i24++
							)
								_loop7()
							return !isLocked || (relatedElements.length && this.relatedNodes(relatedElements), !1)
						}
						function isMediaRuleWithOrientation(_ref85) {
							var type = _ref85.type,
								cssText = _ref85.cssText
							return (
								4 === type &&
								(/orientation:\s*landscape/i.test(cssText) ||
									/orientation:\s*portrait/i.test(cssText))
							)
						}
						function getAngleInDegrees(angleWithUnit) {
							var unit = _slicedToArray(angleWithUnit.match(/(deg|grad|rad|turn)/) || [], 1)[0]
							if (unit) {
								var angle = parseFloat(angleWithUnit.replace(unit, ''))
								switch (unit) {
									case 'rad':
										return convertRadToDeg(angle)
									case 'grad':
										return (function convertGradToDeg(grad) {
											;(grad %= 400) < 0 && (grad += 400)
											return Math.round((grad / 400) * 360)
										})(angle)
									case 'turn':
										return (function convertTurnToDeg(turn) {
											return Math.round(360 / (1 / turn))
										})(angle)
									default:
										return parseInt(angle)
								}
							}
						}
						function convertRadToDeg(radians) {
							return Math.round(radians * (180 / Math.PI))
						}
					}
					var meta_viewport_scale_evaluate_default = function metaViewportScaleEvaluate(
						node,
						options,
						virtualNode,
					) {
						var _ref89 = options || {},
							_ref89$scaleMinimum = _ref89.scaleMinimum,
							scaleMinimum = void 0 === _ref89$scaleMinimum ? 2 : _ref89$scaleMinimum,
							_ref89$lowerBound = _ref89.lowerBound,
							lowerBound = void 0 !== _ref89$lowerBound && _ref89$lowerBound,
							content = virtualNode.attr('content') || ''
						if (!content) return !0
						var result = content.split(/[;,]/).reduce(function (out, item) {
							var contentValue = item.trim()
							if (!contentValue) return out
							var _contentValue$split2 = _slicedToArray(contentValue.split('='), 2),
								key = _contentValue$split2[0],
								value = _contentValue$split2[1]
							if (!key || !value) return out
							var curatedKey = key.toLowerCase().trim(),
								curatedValue = value.toLowerCase().trim()
							return (
								'maximum-scale' === curatedKey && 'yes' === curatedValue && (curatedValue = 1),
								('maximum-scale' === curatedKey && parseFloat(curatedValue) < 0) ||
									(out[curatedKey] = curatedValue),
								out
							)
						}, {})
						if (
							lowerBound &&
							result['maximum-scale'] &&
							parseFloat(result['maximum-scale']) < lowerBound
						)
							return !0
						if (!lowerBound && 'no' === result['user-scalable'])
							return this.data('user-scalable=no'), !1
						var userScalableAsFloat = parseFloat(result['user-scalable'])
						return !lowerBound &&
							result['user-scalable'] &&
							(userScalableAsFloat || 0 === userScalableAsFloat) &&
							userScalableAsFloat > -1 &&
							userScalableAsFloat < 1
							? (this.data('user-scalable'), !1)
							: !(result['maximum-scale'] && parseFloat(result['maximum-scale']) < scaleMinimum) ||
									(this.data('maximum-scale'), !1)
					}
					function isEnclosedRect(vNodeA, vNodeB) {
						var rectA = vNodeA.boundingClientRect,
							rectB = vNodeB.boundingClientRect
						return (
							rectA.top >= rectB.top &&
							rectA.left >= rectB.left &&
							rectA.bottom <= rectB.bottom &&
							rectA.right <= rectB.right
						)
					}
					function getCssPointerEvents(vNode) {
						return vNode.getComputedStylePropertyValue('pointer-events')
					}
					function toDecimalSize(rect) {
						return {
							width: Math.round(10 * rect.width) / 10,
							height: Math.round(10 * rect.height) / 10,
						}
					}
					function isDescendantNotInTabOrder(vAncestor, vNode) {
						return vAncestor.actualNode.contains(vNode.actualNode) && !_isInTabOrder(vNode)
					}
					function rectHasMinimumSize(minSize, _ref92) {
						var width = _ref92.width,
							height = _ref92.height
						return width + 0.05 >= minSize && height + 0.05 >= minSize
					}
					function mapActualNodes(vNodes) {
						return vNodes.map(function (_ref93) {
							return _ref93.actualNode
						})
					}
					function mergeHeadingOrder(mergedHeadingOrder, result) {
						var _result$data,
							frameHeadingOrder =
								null === (_result$data = result.data) || void 0 === _result$data
									? void 0
									: _result$data.headingOrder,
							frameAncestry = shortenArray(result.node.ancestry, 1)
						if (!frameHeadingOrder) return mergedHeadingOrder
						var normalizedHeadingOrder = frameHeadingOrder.map(function (heading) {
								return (function addFrameToHeadingAncestry(heading, frameAncestry) {
									var ancestry = frameAncestry.concat(heading.ancestry)
									return _extends({}, heading, { ancestry })
								})(heading, frameAncestry)
							}),
							index = (function getFrameIndex(headingOrder, frameAncestry) {
								for (; frameAncestry.length; ) {
									var index = findHeadingOrderIndex(headingOrder, frameAncestry)
									if (-1 !== index) return index
									frameAncestry = shortenArray(frameAncestry, 1)
								}
								return -1
							})(mergedHeadingOrder, frameAncestry)
						return (
							-1 === index
								? mergedHeadingOrder.push.apply(
										mergedHeadingOrder,
										_toConsumableArray(normalizedHeadingOrder),
								  )
								: mergedHeadingOrder.splice.apply(
										mergedHeadingOrder,
										[index, 0].concat(_toConsumableArray(normalizedHeadingOrder)),
								  ),
							mergedHeadingOrder
						)
					}
					function findHeadingOrderIndex(headingOrder, ancestry) {
						return headingOrder.findIndex(function (heading) {
							return match_ancestry_default(heading.ancestry, ancestry)
						})
					}
					function shortenArray(arr, spliceLength) {
						return arr.slice(0, arr.length - spliceLength)
					}
					function getLevel(vNode) {
						var role = get_role_default(vNode),
							headingRole = role && role.includes('heading'),
							ariaHeadingLevel = vNode.attr('aria-level'),
							ariaLevel = parseInt(ariaHeadingLevel, 10),
							headingLevel = _slicedToArray(vNode.props.nodeName.match(/h(\d)/) || [], 2)[1]
						return headingRole
							? headingLevel && !ariaHeadingLevel
								? parseInt(headingLevel, 10)
								: isNaN(ariaLevel) || ariaLevel < 1
								? headingLevel
									? parseInt(headingLevel, 10)
									: 2
								: ariaLevel || -1
							: -1
					}
					var heading_order_evaluate_default = function headingOrderEvaluate() {
						var headingOrder = cache_default.get('headingOrder')
						if (headingOrder) return !0
						var vNodes = query_selector_all_filter_default(
							axe._tree[0],
							'h1, h2, h3, h4, h5, h6, [role=heading], iframe, frame',
							_isVisibleToScreenReaders,
						)
						return (
							(headingOrder = vNodes.map(function (vNode) {
								return { ancestry: [_getAncestry(vNode.actualNode)], level: getLevel(vNode) }
							})),
							this.data({ headingOrder }),
							cache_default.set('headingOrder', vNodes),
							!0
						)
					}
					function isIdenticalObject(a, b) {
						if (!a || !b) return !1
						var aProps = Object.getOwnPropertyNames(a),
							bProps = Object.getOwnPropertyNames(b)
						return (
							aProps.length === bProps.length &&
							aProps.every(function (propName) {
								var aValue = a[propName],
									bValue = b[propName]
								return (
									_typeof(aValue) === _typeof(bValue) &&
									('object' === _typeof(aValue) || 'object' === _typeof(bValue)
										? isIdenticalObject(aValue, bValue)
										: aValue === bValue)
								)
							})
						)
					}
					var identical_links_same_purpose_after_default = function identicalLinksSamePurposeAfter(
							results,
						) {
							if (results.length < 2) return results
							for (
								var incompleteResults = results.filter(function (_ref99) {
										return void 0 !== _ref99.result
									}),
									uniqueResults = [],
									nameMap = {},
									_loop8 = function _loop8(index) {
										var _currentResult$relate,
											currentResult = incompleteResults[index],
											_currentResult$data = currentResult.data,
											name = _currentResult$data.name,
											urlProps = _currentResult$data.urlProps
										if (nameMap[name]) return 'continue'
										var sameNameResults = incompleteResults.filter(function (_ref100, resultNum) {
												return _ref100.data.name === name && resultNum !== index
											}),
											isSameUrl = sameNameResults.every(function (_ref101) {
												return isIdenticalObject(_ref101.data.urlProps, urlProps)
											})
										sameNameResults.length && !isSameUrl && (currentResult.result = void 0),
											(currentResult.relatedNodes = []),
											(_currentResult$relate = currentResult.relatedNodes).push.apply(
												_currentResult$relate,
												_toConsumableArray(
													sameNameResults.map(function (node) {
														return node.relatedNodes[0]
													}),
												),
											),
											(nameMap[name] = sameNameResults),
											uniqueResults.push(currentResult)
									},
									index = 0;
								index < incompleteResults.length;
								index++
							)
								_loop8(index)
							return uniqueResults
						},
						commons_exports = {}
					__export(commons_exports, {
						aria: function aria() {
							return aria_exports
						},
						color: function color() {
							return color_exports
						},
						dom: function dom() {
							return dom_exports
						},
						forms: function forms() {
							return forms_exports
						},
						matches: function matches() {
							return matches_default3
						},
						math: function math() {
							return math_exports
						},
						standards: function standards() {
							return standards_exports
						},
						table: function table() {
							return table_exports
						},
						text: function text() {
							return text_exports
						},
						utils: function utils() {
							return utils_exports
						},
					})
					var forms_exports = {}
					__export(forms_exports, {
						isAriaCombobox: function isAriaCombobox() {
							return is_aria_combobox_default
						},
						isAriaListbox: function isAriaListbox() {
							return is_aria_listbox_default
						},
						isAriaRange: function isAriaRange() {
							return is_aria_range_default
						},
						isAriaTextbox: function isAriaTextbox() {
							return is_aria_textbox_default
						},
						isDisabled: function isDisabled() {
							return is_disabled_default
						},
						isNativeSelect: function isNativeSelect() {
							return is_native_select_default
						},
						isNativeTextbox: function isNativeTextbox() {
							return is_native_textbox_default
						},
					})
					var disabledNodeNames = ['fieldset', 'button', 'select', 'input', 'textarea']
					var is_disabled_default = function isDisabled(virtualNode) {
							var disabledState = virtualNode._isDisabled
							if ('boolean' == typeof disabledState) return disabledState
							var nodeName2 = virtualNode.props.nodeName,
								ariaDisabled = virtualNode.attr('aria-disabled')
							return (
								(disabledState =
									!(!disabledNodeNames.includes(nodeName2) || !virtualNode.hasAttr('disabled')) ||
									(ariaDisabled
										? 'true' === ariaDisabled.toLowerCase()
										: !!virtualNode.parent && isDisabled(virtualNode.parent))),
								(virtualNode._isDisabled = disabledState),
								disabledState
							)
						},
						table_exports = {}
					__export(table_exports, {
						getAllCells: function getAllCells() {
							return get_all_cells_default
						},
						getCellPosition: function getCellPosition() {
							return get_cell_position_default
						},
						getHeaders: function getHeaders() {
							return get_headers_default
						},
						getScope: function getScope() {
							return get_scope_default
						},
						isColumnHeader: function isColumnHeader() {
							return is_column_header_default
						},
						isDataCell: function isDataCell() {
							return is_data_cell_default
						},
						isDataTable: function isDataTable() {
							return is_data_table_default
						},
						isHeader: function isHeader() {
							return is_header_default
						},
						isRowHeader: function isRowHeader() {
							return is_row_header_default
						},
						toArray: function toArray() {
							return to_grid_default
						},
						toGrid: function toGrid() {
							return to_grid_default
						},
						traverse: function traverse() {
							return traverse_default
						},
					})
					var get_all_cells_default = function getAllCells(tableElm) {
						var rowIndex,
							cellIndex,
							rowLength,
							cellLength,
							cells = []
						for (rowIndex = 0, rowLength = tableElm.rows.length; rowIndex < rowLength; rowIndex++)
							for (
								cellIndex = 0, cellLength = tableElm.rows[rowIndex].cells.length;
								cellIndex < cellLength;
								cellIndex++
							)
								cells.push(tableElm.rows[rowIndex].cells[cellIndex])
						return cells
					}
					function traverseForHeaders(headerType, position, tableGrid) {
						for (
							var headers,
								property = 'row' === headerType ? '_rowHeaders' : '_colHeaders',
								predicate = 'row' === headerType ? is_row_header_default : is_column_header_default,
								startCell = tableGrid[position.y][position.x],
								colspan = startCell.colSpan - 1,
								rowspanAttr = startCell.getAttribute('rowspan'),
								rowspan =
									(0 === parseInt(rowspanAttr) || 0 === startCell.rowspan
										? tableGrid.length
										: startCell.rowSpan) - 1,
								rowStart = position.y + rowspan,
								colStart = position.x + colspan,
								rowEnd = 'row' === headerType ? position.y : 0,
								colEnd = 'row' === headerType ? 0 : position.x,
								cells = [],
								row = rowStart;
							row >= rowEnd && !headers;
							row--
						)
							for (var col = colStart; col >= colEnd; col--) {
								var cell = tableGrid[row] ? tableGrid[row][col] : void 0
								if (cell) {
									var vNode = axe.utils.getNodeFromTree(cell)
									if (vNode[property]) {
										headers = vNode[property]
										break
									}
									cells.push(cell)
								}
							}
						return (
							(headers = (headers || []).concat(cells.filter(predicate))),
							cells.forEach(function (tableCell) {
								axe.utils.getNodeFromTree(tableCell)[property] = headers
							}),
							headers
						)
					}
					var get_headers_default = function getHeaders(cell, tableGrid) {
						if (cell.getAttribute('headers')) {
							var headers = idrefs_default(cell, 'headers')
							if (
								headers.filter(function (header) {
									return header
								}).length
							)
								return headers
						}
						tableGrid || (tableGrid = to_grid_default(find_up_default(cell, 'table')))
						var position = get_cell_position_default(cell, tableGrid),
							rowHeaders = traverseForHeaders('row', position, tableGrid),
							colHeaders = traverseForHeaders('col', position, tableGrid)
						return [].concat(rowHeaders, colHeaders).reverse()
					}
					var is_data_cell_default = function isDataCell(cell) {
						if (!cell.children.length && !cell.textContent.trim()) return !1
						var role = cell.getAttribute('role')
						return is_valid_role_default(role)
							? ['cell', 'gridcell'].includes(role)
							: 'TD' === cell.nodeName.toUpperCase()
					}
					var is_data_table_default = function isDataTable(node) {
						var role = (node.getAttribute('role') || '').toLowerCase()
						if (('presentation' === role || 'none' === role) && !_isFocusable(node)) return !1
						if (
							'true' === node.getAttribute('contenteditable') ||
							find_up_default(node, '[contenteditable="true"]')
						)
							return !0
						if ('grid' === role || 'treegrid' === role || 'table' === role) return !0
						if ('landmark' === get_role_type_default(role)) return !0
						if ('0' === node.getAttribute('datatable')) return !1
						if (node.getAttribute('summary')) return !0
						if (node.tHead || node.tFoot || node.caption) return !0
						for (
							var childIndex = 0, childLength = node.children.length;
							childIndex < childLength;
							childIndex++
						)
							if ('COLGROUP' === node.children[childIndex].nodeName.toUpperCase()) return !0
						for (
							var row, cell, cells = 0, rowLength = node.rows.length, hasBorder = !1, rowIndex = 0;
							rowIndex < rowLength;
							rowIndex++
						)
							for (
								var cellIndex = 0, cellLength = (row = node.rows[rowIndex]).cells.length;
								cellIndex < cellLength;
								cellIndex++
							) {
								if ('TH' === (cell = row.cells[cellIndex]).nodeName.toUpperCase()) return !0
								if (
									(hasBorder ||
										(cell.offsetWidth === cell.clientWidth &&
											cell.offsetHeight === cell.clientHeight) ||
										(hasBorder = !0),
									cell.getAttribute('scope') ||
										cell.getAttribute('headers') ||
										cell.getAttribute('abbr'))
								)
									return !0
								if (
									['columnheader', 'rowheader'].includes(
										(cell.getAttribute('role') || '').toLowerCase(),
									)
								)
									return !0
								if (
									1 === cell.children.length &&
									'ABBR' === cell.children[0].nodeName.toUpperCase()
								)
									return !0
								cells++
							}
						if (node.getElementsByTagName('table').length) return !1
						if (rowLength < 2) return !1
						var bgColor,
							bgImage,
							sampleRow = node.rows[Math.ceil(rowLength / 2)]
						if (1 === sampleRow.cells.length && 1 === sampleRow.cells[0].colSpan) return !1
						if (sampleRow.cells.length >= 5) return !0
						if (hasBorder) return !0
						for (rowIndex = 0; rowIndex < rowLength; rowIndex++) {
							if (
								((row = node.rows[rowIndex]),
								bgColor &&
									bgColor !== window.getComputedStyle(row).getPropertyValue('background-color'))
							)
								return !0
							if (
								((bgColor = window.getComputedStyle(row).getPropertyValue('background-color')),
								bgImage &&
									bgImage !== window.getComputedStyle(row).getPropertyValue('background-image'))
							)
								return !0
							bgImage = window.getComputedStyle(row).getPropertyValue('background-image')
						}
						return (
							rowLength >= 20 ||
							(!(
								get_element_coordinates_default(node).width >
								0.95 * get_viewport_size_default(window).width
							) &&
								!(cells < 10) &&
								!node.querySelector('object, embed, iframe, applet'))
						)
					}
					var is_header_default = function isHeader(cell) {
						if (is_column_header_default(cell) || is_row_header_default(cell)) return !0
						if (cell.getAttribute('id')) {
							var id = escape_selector_default(cell.getAttribute('id'))
							return !!document.querySelector('[headers~="'.concat(id, '"]'))
						}
						return !1
					}
					function traverseTable(dir, position, tableGrid, callback) {
						var result,
							cell = tableGrid[position.y] ? tableGrid[position.y][position.x] : void 0
						return cell
							? 'function' == typeof callback &&
							  !0 === (result = callback(cell, position, tableGrid))
								? [cell]
								: ((result = traverseTable(
										dir,
										{ x: position.x + dir.x, y: position.y + dir.y },
										tableGrid,
										callback,
								  )).unshift(cell),
								  result)
							: []
					}
					var traverse_default = function traverse(dir, startPos, tableGrid, callback) {
						if (
							(Array.isArray(startPos) &&
								((callback = tableGrid), (tableGrid = startPos), (startPos = { x: 0, y: 0 })),
							'string' == typeof dir)
						)
							switch (dir) {
								case 'left':
									dir = { x: -1, y: 0 }
									break
								case 'up':
									dir = { x: 0, y: -1 }
									break
								case 'right':
									dir = { x: 1, y: 0 }
									break
								case 'down':
									dir = { x: 0, y: 1 }
							}
						return traverseTable(
							dir,
							{ x: startPos.x + dir.x, y: startPos.y + dir.y },
							tableGrid,
							callback,
						)
					}
					var identical_links_same_purpose_evaluate_default =
						function identicalLinksSamePurposeEvaluate(node, options, virtualNode) {
							var accText = text_exports.accessibleTextVirtual(virtualNode),
								name = text_exports
									.sanitize(
										text_exports.removeUnicode(accText, {
											emoji: !0,
											nonBmp: !0,
											punctuations: !0,
										}),
									)
									.toLowerCase()
							if (name) {
								var afterData = { name, urlProps: dom_exports.urlPropsFromAttribute(node, 'href') }
								return this.data(afterData), this.relatedNodes([node]), !0
							}
						}
					var internal_link_present_evaluate_default = function internalLinkPresentEvaluate(
							node,
							options,
							virtualNode,
						) {
							return query_selector_all_default(virtualNode, 'a[href]').some(function (vLink) {
								return /^#[^/!]/.test(vLink.attr('href'))
							})
						},
						separatorRegex = /[;,\s]/,
						validRedirectNumRegex = /^[0-9.]+$/
					function normalizeFontWeight(weight) {
						switch (weight) {
							case 'lighter':
								return 100
							case 'normal':
								return 400
							case 'bold':
								return 700
							case 'bolder':
								return 900
						}
						return (weight = parseInt(weight)), isNaN(weight) ? 400 : weight
					}
					function getStyleValues(node) {
						var style = window.getComputedStyle(
							(function getTextContainer(elm) {
								for (
									var nextNode = elm, outerText = elm.textContent.trim(), innerText = outerText;
									innerText === outerText && void 0 !== nextNode;

								) {
									var _i25 = -1
									if (0 === (elm = nextNode).children.length) return elm
									do {
										_i25++, (innerText = elm.children[_i25].textContent.trim())
									} while ('' === innerText && _i25 + 1 < elm.children.length)
									nextNode = elm.children[_i25]
								}
								return elm
							})(node),
						)
						return {
							fontWeight: normalizeFontWeight(style.getPropertyValue('font-weight')),
							fontSize: parseInt(style.getPropertyValue('font-size')),
							isItalic: 'italic' === style.getPropertyValue('font-style'),
						}
					}
					function isHeaderStyle(styleA, styleB, margins) {
						return margins.reduce(function (out, margin) {
							return (
								out ||
								((!margin.size || styleA.fontSize / margin.size > styleB.fontSize) &&
									(!margin.weight || styleA.fontWeight - margin.weight > styleB.fontWeight) &&
									(!margin.italic || (styleA.isItalic && !styleB.isItalic)))
							)
						}, !1)
					}
					var p_as_heading_evaluate_default = function pAsHeadingEvaluate(
						node,
						options,
						virtualNode,
					) {
						var siblings = Array.from(node.parentNode.children),
							currentIndex = siblings.indexOf(node),
							margins = (options = options || {}).margins || [],
							nextSibling = siblings.slice(currentIndex + 1).find(function (elm) {
								return 'P' === elm.nodeName.toUpperCase()
							}),
							prevSibling = siblings
								.slice(0, currentIndex)
								.reverse()
								.find(function (elm) {
									return 'P' === elm.nodeName.toUpperCase()
								}),
							currStyle = getStyleValues(node),
							nextStyle = nextSibling ? getStyleValues(nextSibling) : null,
							prevStyle = prevSibling ? getStyleValues(prevSibling) : null,
							optionsPassLength = options.passLength,
							optionsFailLength = options.failLength,
							headingLength = node.textContent.trim().length,
							paragraphLength = null == nextSibling ? void 0 : nextSibling.textContent.trim().length
						if (headingLength > paragraphLength * optionsPassLength) return !0
						if (!nextStyle || !isHeaderStyle(currStyle, nextStyle, margins)) return !0
						var blockquote = find_up_virtual_default(virtualNode, 'blockquote')
						return (
							!!(
								(blockquote && 'BLOCKQUOTE' === blockquote.nodeName.toUpperCase()) ||
								(prevStyle && !isHeaderStyle(currStyle, prevStyle, margins)) ||
								headingLength > paragraphLength * optionsFailLength
							) && void 0
						)
					}
					var region_after_default = function regionAfter(results) {
							var iframeResults = results.filter(function (r) {
								return r.data.isIframe
							})
							return (
								results.forEach(function (r) {
									if (!r.result && 1 !== r.node.ancestry.length) {
										var _step7,
											frameAncestry = r.node.ancestry.slice(0, -1),
											_iterator7 = _createForOfIteratorHelper(iframeResults)
										try {
											for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
												var iframeResult = _step7.value
												if (match_ancestry_default(frameAncestry, iframeResult.node.ancestry)) {
													r.result = iframeResult.result
													break
												}
											}
										} catch (err) {
											_iterator7.e(err)
										} finally {
											_iterator7.f()
										}
									}
								}),
								iframeResults.forEach(function (r) {
									r.result || (r.result = !0)
								}),
								results
							)
						},
						landmarkRoles2 = get_aria_roles_by_type_default('landmark'),
						implicitAriaLiveRoles = ['alert', 'log', 'status']
					function findRegionlessElms(virtualNode, options) {
						var node = virtualNode.actualNode
						if (
							'button' === get_role_default(virtualNode) ||
							(function isRegion(virtualNode, options) {
								var node = virtualNode.actualNode,
									role = get_role_default(virtualNode),
									ariaLive = (node.getAttribute('aria-live') || '').toLowerCase().trim()
								if (
									['assertive', 'polite'].includes(ariaLive) ||
									implicitAriaLiveRoles.includes(role)
								)
									return !0
								if (landmarkRoles2.includes(role)) return !0
								if (options.regionMatcher && matches_default3(virtualNode, options.regionMatcher))
									return !0
								return !1
							})(virtualNode, options) ||
							['iframe', 'frame'].includes(virtualNode.props.nodeName) ||
							(_isSkipLink(virtualNode.actualNode) &&
								get_element_by_reference_default(virtualNode.actualNode, 'href')) ||
							!_isVisibleToScreenReaders(node)
						) {
							for (var vNode = virtualNode; vNode; )
								(vNode._hasRegionDescendant = !0), (vNode = vNode.parent)
							return ['iframe', 'frame'].includes(virtualNode.props.nodeName) ? [virtualNode] : []
						}
						return node !== document.body && has_content_default(node, !0)
							? [virtualNode]
							: virtualNode.children
									.filter(function (_ref103) {
										return 1 === _ref103.actualNode.nodeType
									})
									.map(function (vNode) {
										return findRegionlessElms(vNode, options)
									})
									.reduce(function (a, b) {
										return a.concat(b)
									}, [])
					}
					var skip_link_evaluate_default = function skipLinkEvaluate(node) {
						var target = get_element_by_reference_default(node, 'href')
						return !!target && (_isVisibleToScreenReaders(target) || void 0)
					}
					var unique_frame_title_after_default = function uniqueFrameTitleAfter(results) {
						var titles = {}
						return (
							results.forEach(function (r) {
								titles[r.data] = void 0 !== titles[r.data] ? ++titles[r.data] : 0
							}),
							results.forEach(function (r) {
								r.result = !!titles[r.data]
							}),
							results
						)
					}
					var unique_frame_title_evaluate_default = function uniqueFrameTitleEvaluate(
						node,
						options,
						vNode,
					) {
						var title = sanitize_default(vNode.attr('title')).toLowerCase()
						return this.data(title), !0
					}
					var duplicate_id_after_default = function duplicateIdAfter(results) {
						var uniqueIds = []
						return results.filter(function (r) {
							return -1 === uniqueIds.indexOf(r.data) && (uniqueIds.push(r.data), !0)
						})
					}
					var duplicate_id_evaluate_default = function duplicateIdEvaluate(node) {
						var id = node.getAttribute('id').trim()
						if (!id) return !0
						var root = get_root_node_default2(node),
							matchingNodes = Array.from(
								root.querySelectorAll('[id="'.concat(escape_selector_default(id), '"]')),
							).filter(function (foundNode) {
								return foundNode !== node
							})
						return (
							matchingNodes.length && this.relatedNodes(matchingNodes),
							this.data(id),
							0 === matchingNodes.length
						)
					}
					var aria_label_evaluate_default = function ariaLabelEvaluate(node, options, virtualNode) {
						return !!sanitize_default(arialabel_text_default(virtualNode))
					}
					var aria_labelledby_evaluate_default = function ariaLabelledbyEvaluate(
						node,
						options,
						virtualNode,
					) {
						try {
							return !!sanitize_default(arialabelledby_text_default(virtualNode))
						} catch (e) {
							return
						}
					}
					var avoid_inline_spacing_evaluate_default = function avoidInlineSpacingEvaluate(
						node,
						options,
					) {
						var overriddenProperties = options.cssProperties.filter(function (property) {
							if ('important' === node.style.getPropertyPriority(property)) return property
						})
						return !(overriddenProperties.length > 0) || (this.data(overriddenProperties), !1)
					}
					var doc_has_title_evaluate_default = function docHasTitleEvaluate() {
						var title = document.title
						return !!sanitize_default(title)
					}
					var exists_evaluate_default = function existsEvaluate() {}
					var has_alt_evaluate_default = function hasAltEvaluate(node, options, virtualNode) {
						var nodeName2 = virtualNode.props.nodeName
						return !!['img', 'input', 'area'].includes(nodeName2) && virtualNode.hasAttr('alt')
					}
					var is_on_screen_evaluate_default = function isOnScreenEvaluate(node) {
						return _isVisibleOnScreen(node)
					}
					var non_empty_if_present_evaluate_default = function nonEmptyIfPresentEvaluate(
						node,
						options,
						virtualNode,
					) {
						var nodeName2 = virtualNode.props.nodeName,
							type = (virtualNode.attr('type') || '').toLowerCase(),
							label3 = virtualNode.attr('value')
						return (
							label3 && this.data({ messageKey: 'has-label' }),
							!('input' !== nodeName2 || !['submit', 'reset'].includes(type)) && null === label3
						)
					}
					var svg_non_empty_title_evaluate_default = function svgNonEmptyTitleEvaluate(
						node,
						options,
						virtualNode,
					) {
						if (virtualNode.children) {
							var titleNode = virtualNode.children.find(function (_ref105) {
								return 'title' === _ref105.props.nodeName
							})
							if (!titleNode) return this.data({ messageKey: 'noTitle' }), !1
							try {
								if ('' === subtree_text_default(titleNode, { includeHidden: !0 }).trim())
									return this.data({ messageKey: 'emptyTitle' }), !1
							} catch (e) {
								return
							}
							return !0
						}
					}
					var caption_faked_evaluate_default = function captionFakedEvaluate(node) {
						var table = to_grid_default(node),
							firstRow = table[0]
						return (
							table.length <= 1 ||
							firstRow.length <= 1 ||
							node.rows.length <= 1 ||
							firstRow.reduce(function (out, curr, i) {
								return out || (curr !== firstRow[i + 1] && void 0 !== firstRow[i + 1])
							}, !1)
						)
					}
					var html5_scope_evaluate_default = function html5ScopeEvaluate(node) {
							return !is_html5_default(document) || 'TH' === node.nodeName.toUpperCase()
						},
						same_caption_summary_evaluate_default = function sameCaptionSummaryEvaluate(
							node,
							options,
							virtualNode,
						) {
							if (void 0 === virtualNode.children) return
							var summary = virtualNode.attr('summary'),
								captionNode = virtualNode.children.find(isCaptionNode),
								caption = !!captionNode && sanitize_default(subtree_text_default(captionNode))
							if (!caption || !summary) return !1
							return (
								sanitize_default(summary).toLowerCase() === sanitize_default(caption).toLowerCase()
							)
						}
					function isCaptionNode(virtualNode) {
						return 'caption' === virtualNode.props.nodeName
					}
					var scope_value_evaluate_default = function scopeValueEvaluate(node, options) {
						var value = node.getAttribute('scope').toLowerCase()
						return -1 !== options.values.indexOf(value)
					}
					var td_has_header_evaluate_default = function tdHasHeaderEvaluate(node) {
						var badCells = [],
							cells = get_all_cells_default(node),
							tableGrid = to_grid_default(node)
						return (
							cells.forEach(function (cell) {
								has_content_default(cell) &&
									is_data_cell_default(cell) &&
									!label_default2(cell) &&
									(get_headers_default(cell, tableGrid).some(function (header) {
										return null !== header && !!has_content_default(header)
									}) ||
										badCells.push(cell))
							}),
							!badCells.length || (this.relatedNodes(badCells), !1)
						)
					}
					var td_headers_attr_evaluate_default = function tdHeadersAttrEvaluate(node) {
						for (
							var cells = [], reviewCells = [], badCells = [], rowIndex = 0;
							rowIndex < node.rows.length;
							rowIndex++
						)
							for (
								var row = node.rows[rowIndex], cellIndex = 0;
								cellIndex < row.cells.length;
								cellIndex++
							)
								cells.push(row.cells[cellIndex])
						var ids = cells.reduce(function (ids2, cell) {
							return cell.getAttribute('id') && ids2.push(cell.getAttribute('id')), ids2
						}, [])
						return (
							cells.forEach(function (cell) {
								var isSelf = !1,
									notOfTable = !1
								if (cell.hasAttribute('headers') && _isVisibleToScreenReaders(cell)) {
									var headersAttr = cell.getAttribute('headers').trim()
									if (!headersAttr) return reviewCells.push(cell)
									var headers = token_list_default(headersAttr)
									0 !== headers.length &&
										(cell.getAttribute('id') &&
											(isSelf = -1 !== headers.indexOf(cell.getAttribute('id').trim())),
										(notOfTable = headers.some(function (header) {
											return !ids.includes(header)
										})),
										(isSelf || notOfTable) && badCells.push(cell))
								}
							}),
							badCells.length > 0
								? (this.relatedNodes(badCells), !1)
								: !reviewCells.length || void this.relatedNodes(reviewCells)
						)
					}
					var th_has_data_cells_evaluate_default = function thHasDataCellsEvaluate(node) {
						var cells = get_all_cells_default(node),
							checkResult = this,
							reffedHeaders = []
						cells.forEach(function (cell) {
							var headers2 = cell.getAttribute('headers')
							headers2 && (reffedHeaders = reffedHeaders.concat(headers2.split(/\s+/)))
							var ariaLabel = cell.getAttribute('aria-labelledby')
							ariaLabel && (reffedHeaders = reffedHeaders.concat(ariaLabel.split(/\s+/)))
						})
						var headers = cells.filter(function (cell) {
								return (
									'' !== sanitize_default(cell.textContent) &&
									('TH' === cell.nodeName.toUpperCase() ||
										-1 !== ['rowheader', 'columnheader'].indexOf(cell.getAttribute('role')))
								)
							}),
							tableGrid = to_grid_default(node),
							out = !0
						return (
							headers.forEach(function (header) {
								if (
									!header.getAttribute('id') ||
									!reffedHeaders.includes(header.getAttribute('id'))
								) {
									var pos = get_cell_position_default(header, tableGrid),
										hasCell = !1
									is_column_header_default(header) &&
										(hasCell = traverse_default('down', pos, tableGrid).find(function (cell) {
											return (
												!is_column_header_default(cell) &&
												get_headers_default(cell, tableGrid).includes(header)
											)
										})),
										!hasCell &&
											is_row_header_default(header) &&
											(hasCell = traverse_default('right', pos, tableGrid).find(function (cell) {
												return (
													!is_row_header_default(cell) &&
													get_headers_default(cell, tableGrid).includes(header)
												)
											})),
										hasCell || checkResult.relatedNodes(header),
										(out = out && hasCell)
								}
							}),
							!!out || void 0
						)
					}
					var hidden_content_evaluate_default = function hiddenContentEvaluate(
						node,
						options,
						virtualNode,
					) {
						if (
							!['SCRIPT', 'HEAD', 'TITLE', 'NOSCRIPT', 'STYLE', 'TEMPLATE'].includes(
								node.nodeName.toUpperCase(),
							) &&
							has_content_virtual_default(virtualNode)
						) {
							var styles = window.getComputedStyle(node)
							if ('none' === styles.getPropertyValue('display')) return
							if ('hidden' === styles.getPropertyValue('visibility')) {
								var parent = get_composed_parent_default(node),
									parentStyle = parent && window.getComputedStyle(parent)
								if (!parentStyle || 'hidden' !== parentStyle.getPropertyValue('visibility')) return
							}
						}
						return !0
					}
					var aria_allowed_attr_matches_default = function ariaAllowedAttrMatches(
						node,
						virtualNode,
					) {
						var aria = /^aria-/,
							attrs = virtualNode.attrNames
						if (attrs.length)
							for (var _i26 = 0, l = attrs.length; _i26 < l; _i26++)
								if (aria.test(attrs[_i26])) return !0
						return !1
					}
					var aria_allowed_role_matches_default = function ariaAllowedRoleMatches(
						node,
						virtualNode,
					) {
						return null !== get_explicit_role_default(virtualNode, { dpub: !0, fallback: !0 })
					}
					var aria_has_attr_matches_default = function ariaHasAttrMatches(node, virtualNode) {
						var aria = /^aria-/
						return virtualNode.attrNames.some(function (attr) {
							return aria.test(attr)
						})
					}
					function shouldMatchElement(el) {
						return (
							!el ||
							('true' !== el.getAttribute('aria-hidden') &&
								shouldMatchElement(get_composed_parent_default(el)))
						)
					}
					var aria_hidden_focus_matches_default = function ariaHiddenFocusMatches(node) {
						return shouldMatchElement(get_composed_parent_default(node))
					}
					var aria_required_children_matches_default = function ariaRequiredChildrenMatches(
						node,
						virtualNode,
					) {
						var role = get_explicit_role_default(virtualNode, { dpub: !0 })
						return !!required_owned_default(role)
					}
					var aria_required_parent_matches_default = function ariaRequiredParentMatches(
						node,
						virtualNode,
					) {
						var role = get_explicit_role_default(virtualNode)
						return !!required_context_default(role)
					}
					var autocomplete_matches_default = function autocompleteMatches(node, virtualNode) {
						var autocomplete2 = virtualNode.attr('autocomplete')
						if (!autocomplete2 || '' === sanitize_default(autocomplete2)) return !1
						var nodeName2 = virtualNode.props.nodeName
						if (!1 === ['textarea', 'input', 'select'].includes(nodeName2)) return !1
						if (
							'input' === nodeName2 &&
							['submit', 'reset', 'button', 'hidden'].includes(virtualNode.props.type)
						)
							return !1
						var ariaDisabled = virtualNode.attr('aria-disabled') || 'false'
						if (virtualNode.hasAttr('disabled') || 'true' === ariaDisabled.toLowerCase()) return !1
						var role = virtualNode.attr('role'),
							tabIndex = virtualNode.attr('tabindex')
						if ('-1' === tabIndex && role) {
							var roleDef = standards_default.ariaRoles[role]
							if (void 0 === roleDef || 'widget' !== roleDef.type) return !1
						}
						return !(
							'-1' === tabIndex &&
							virtualNode.actualNode &&
							!_isVisibleOnScreen(virtualNode) &&
							!_isVisibleToScreenReaders(virtualNode)
						)
					}
					var is_initiator_matches_default = function isInitiatorMatches(
						node,
						virtualNode,
						context,
					) {
						return context.initiator
					}
					var bypass_matches_default = function bypassMatches(node, virtualNode, context) {
						return (
							!is_initiator_matches_default(node, virtualNode, context) ||
							!!node.querySelector('a[href]')
						)
					}
					var color_contrast_matches_default = function colorContrastMatches(node, virtualNode) {
						var _virtualNode$props = virtualNode.props,
							nodeName2 = _virtualNode$props.nodeName,
							inputType = _virtualNode$props.type
						if ('option' === nodeName2) return !1
						if ('select' === nodeName2 && !node.options.length) return !1
						if (
							'input' === nodeName2 &&
							['hidden', 'range', 'color', 'checkbox', 'radio', 'image'].includes(inputType)
						)
							return !1
						if (is_disabled_default(virtualNode)) return !1
						if (['input', 'select', 'textarea'].includes(nodeName2)) {
							var style = window.getComputedStyle(node),
								textIndent = parseInt(style.getPropertyValue('text-indent'), 10)
							if (textIndent) {
								var rect = node.getBoundingClientRect()
								if (
									((rect = {
										top: rect.top,
										bottom: rect.bottom,
										left: rect.left + textIndent,
										right: rect.right + textIndent,
									}),
									!visually_overlaps_default(rect, node))
								)
									return !1
							}
							return !0
						}
						var nodeParentLabel = find_up_virtual_default(virtualNode, 'label')
						if ('label' === nodeName2 || nodeParentLabel) {
							var labelNode = nodeParentLabel || node,
								labelVirtual3 = nodeParentLabel
									? get_node_from_tree_default(nodeParentLabel)
									: virtualNode
							if (labelNode.htmlFor) {
								var explicitControl = get_root_node_default2(labelNode).getElementById(
										labelNode.htmlFor,
									),
									explicitControlVirtual =
										explicitControl && get_node_from_tree_default(explicitControl)
								if (explicitControlVirtual && is_disabled_default(explicitControlVirtual)) return !1
							}
							var implicitControl = query_selector_all_default(
								labelVirtual3,
								'input:not([type="hidden"],[type="image"],[type="button"],[type="submit"],[type="reset"]), select, textarea',
							)[0]
							if (implicitControl && is_disabled_default(implicitControl)) return !1
						}
						for (var ariaLabelledbyControls = [], ancestorNode = virtualNode; ancestorNode; ) {
							if (ancestorNode.props.id) {
								var virtualControls = get_accessible_refs_default(ancestorNode)
									.filter(function (control) {
										return token_list_default(
											control.getAttribute('aria-labelledby') || '',
										).includes(ancestorNode.props.id)
									})
									.map(function (control) {
										return get_node_from_tree_default(control)
									})
								ariaLabelledbyControls.push.apply(
									ariaLabelledbyControls,
									_toConsumableArray(virtualControls),
								)
							}
							ancestorNode = ancestorNode.parent
						}
						if (
							ariaLabelledbyControls.length > 0 &&
							ariaLabelledbyControls.every(is_disabled_default)
						)
							return !1
						var visibleText = visible_virtual_default(virtualNode, !1, !0)
						if (
							!visibleText ||
							!remove_unicode_default(visibleText, { emoji: !0, nonBmp: !1, punctuations: !0 })
						)
							return !1
						for (
							var range = document.createRange(), childNodes = virtualNode.children, index = 0;
							index < childNodes.length;
							index++
						) {
							var child = childNodes[index]
							3 === child.actualNode.nodeType &&
								'' !== sanitize_default(child.actualNode.nodeValue) &&
								range.selectNodeContents(child.actualNode)
						}
						for (var rects = range.getClientRects(), _index2 = 0; _index2 < rects.length; _index2++)
							if (visually_overlaps_default(rects[_index2], node)) return !0
						return !1
					}
					var data_table_large_matches_default = function dataTableLargeMatches(node) {
						if (is_data_table_default(node)) {
							var tableArray = to_grid_default(node)
							return (
								tableArray.length >= 3 &&
								tableArray[0].length >= 3 &&
								tableArray[1].length >= 3 &&
								tableArray[2].length >= 3
							)
						}
						return !1
					}
					var data_table_matches_default = function dataTableMatches(node) {
						return is_data_table_default(node)
					}
					var duplicate_id_active_matches_default = function duplicateIdActiveMatches(node) {
						var id = node.getAttribute('id').trim(),
							idSelector = '*[id="'.concat(escape_selector_default(id), '"]'),
							idMatchingElms = Array.from(get_root_node_default2(node).querySelectorAll(idSelector))
						return !is_accessible_ref_default(node) && idMatchingElms.some(_isFocusable)
					}
					var duplicate_id_aria_matches_default = function duplicateIdAriaMatches(node) {
						return is_accessible_ref_default(node)
					}
					var duplicate_id_misc_matches_default = function duplicateIdMiscMatches(node) {
						var id = node.getAttribute('id').trim(),
							idSelector = '*[id="'.concat(escape_selector_default(id), '"]'),
							idMatchingElms = Array.from(get_root_node_default2(node).querySelectorAll(idSelector))
						return (
							!is_accessible_ref_default(node) &&
							idMatchingElms.every(function (elm) {
								return !_isFocusable(elm)
							})
						)
					}
					var frame_focusable_content_matches_default = function frameFocusableContentMatches(
						node,
						virtualNode,
						context,
					) {
						var _context$size, _context$size2
						return (
							!context.initiator &&
							!context.focusable &&
							(null === (_context$size = context.size) || void 0 === _context$size
								? void 0
								: _context$size.width) *
								(null === (_context$size2 = context.size) || void 0 === _context$size2
									? void 0
									: _context$size2.height) >
								1
						)
					}
					var frame_title_has_text_matches_default = function frameTitleHasTextMatches(node) {
						var title = node.getAttribute('title')
						return !!sanitize_default(title)
					}
					var has_implicit_chromium_role_matches_default = function hasImplicitChromiumRoleMatches(
						node,
						virtualNode,
					) {
						return null !== implicit_role_default(virtualNode, { chromium: !0 })
					}
					var svg_namespace_matches_default = function svgNamespaceMatches(node, virtualNode) {
						try {
							return 'svg' === virtualNode.props.nodeName || !!closest_default(virtualNode, 'svg')
						} catch (e) {
							return !1
						}
					}
					var html_namespace_matches_default = function htmlNamespaceMatches(node, virtualNode) {
						return !svg_namespace_matches_default(node, virtualNode)
					}
					var identical_links_same_purpose_matches_default =
						function identicalLinksSamePurposeMatches(node, virtualNode) {
							if (!!!accessible_text_virtual_default(virtualNode)) return !1
							var role = get_role_default(node)
							return !role || 'link' === role
						}
					var inserted_into_focus_order_matches_default = function insertedIntoFocusOrderMatches(
						node,
					) {
						return inserted_into_focus_order_default(node)
					}
					var label_content_name_mismatch_matches_default =
						function labelContentNameMismatchMatches(node, virtualNode) {
							var role = get_role_default(node)
							return (
								!!role &&
								!!get_aria_roles_by_type_default('widget').includes(role) &&
								!!get_aria_roles_supporting_name_from_content_default().includes(role) &&
								!(
									!sanitize_default(arialabel_text_default(virtualNode)) &&
									!sanitize_default(arialabelledby_text_default(node))
								) &&
								!!sanitize_default(visible_virtual_default(virtualNode))
							)
						}
					var label_matches_default = function labelMatches(node, virtualNode) {
						if ('input' !== virtualNode.props.nodeName || !1 === virtualNode.hasAttr('type'))
							return !0
						var type = virtualNode.attr('type').toLowerCase()
						return !1 === ['hidden', 'image', 'button', 'submit', 'reset'].includes(type)
					}
					var landmark_has_body_context_matches_default = function landmarkHasBodyContextMatches(
						node,
						virtualNode,
					) {
						return (
							node.hasAttribute('role') ||
							!find_up_virtual_default(virtualNode, 'article, aside, main, nav, section')
						)
					}
					var landmark_unique_matches_default = function landmarkUniqueMatches(node, virtualNode) {
						var excludedParentsForHeaderFooterLandmarks = [
							'article',
							'aside',
							'main',
							'nav',
							'section',
						].join(',')
						return (
							(function isLandmarkVirtual(virtualNode2) {
								var actualNode = virtualNode2.actualNode,
									landmarkRoles3 = get_aria_roles_by_type_default('landmark'),
									role = get_role_default(actualNode)
								if (!role) return !1
								var nodeName2 = actualNode.nodeName.toUpperCase()
								return 'HEADER' === nodeName2 || 'FOOTER' === nodeName2
									? (function isHeaderFooterLandmark(headerFooterElement) {
											return !closest_default(
												headerFooterElement,
												excludedParentsForHeaderFooterLandmarks,
											)
									  })(virtualNode2)
									: 'SECTION' === nodeName2 || 'FORM' === nodeName2
									? !!accessible_text_virtual_default(virtualNode2)
									: landmarkRoles3.indexOf(role) >= 0 || 'region' === role
							})(virtualNode) && _isVisibleToScreenReaders(node)
						)
					}
					var layout_table_matches_default = function dataTableMatches2(node) {
						return !is_data_table_default(node) && !_isFocusable(node)
					}
					var link_in_text_block_matches_default = function linkInTextBlockMatches(node) {
						var text = sanitize_default(node.innerText),
							role = node.getAttribute('role')
						return (
							(!role || 'link' === role) &&
							!!text &&
							!!_isVisibleOnScreen(node) &&
							is_in_text_block_default(node)
						)
					}
					var nested_interactive_matches_default = function nestedInteractiveMatches(
						node,
						virtualNode,
					) {
						var role = get_role_default(virtualNode)
						return !!role && !!standards_default.ariaRoles[role].childrenPresentational
					}
					var no_autoplay_audio_matches_default = function noAutoplayAudioMatches(node) {
						return !!node.currentSrc && !node.hasAttribute('paused') && !node.hasAttribute('muted')
					}
					var no_empty_role_matches_default = function noEmptyRoleMatches(node, virtualNode) {
						return !!virtualNode.hasAttr('role') && !!virtualNode.attr('role').trim()
					}
					var no_explicit_name_required_matches_default = function noExplicitNameRequired(
						node,
						virtualNode,
					) {
						var role = get_explicit_role_default(virtualNode)
						return (
							!(role && !['none', 'presentation'].includes(role)) ||
							!(
								!(aria_roles_default[role] || {}).accessibleNameRequired &&
								!_isFocusable(virtualNode)
							)
						)
					}
					var no_naming_method_matches_default = function noNamingMethodMatches(node, virtualNode) {
						var namingMethods = get_element_spec_default(virtualNode).namingMethods
						return (
							(!namingMethods || 0 === namingMethods.length) &&
							('combobox' !== get_explicit_role_default(virtualNode) ||
								!query_selector_all_default(virtualNode, 'input:not([type="hidden"])').length)
						)
					}
					var no_negative_tabindex_matches_default = function noNegativeTabindexMatches(
						node,
						virtualNode,
					) {
						var tabindex = parseInt(virtualNode.attr('tabindex'), 10)
						return isNaN(tabindex) || tabindex >= 0
					}
					var no_role_matches_default = function noRoleMatches(node, vNode) {
						return !vNode.attr('role')
					}
					var not_html_matches_default = function notHtmlMatches(node, virtualNode) {
						return 'html' !== virtualNode.props.nodeName
					}
					function objectHasLoaded(node) {
						var _node$ownerDocument
						if (
							null == node ||
							null === (_node$ownerDocument = node.ownerDocument) ||
							void 0 === _node$ownerDocument ||
							!_node$ownerDocument.createRange
						)
							return !0
						var range = node.ownerDocument.createRange()
						return (
							range.setStart(node, 0),
							range.setEnd(node, node.childNodes.length),
							0 === range.getClientRects().length
						)
					}
					var p_as_heading_matches_default = function pAsHeadingMatches(node) {
						var children = Array.from(node.parentNode.childNodes),
							nodeText = node.textContent.trim()
						return (
							!(
								0 === nodeText.length || (nodeText.match(/[.!?:;](?![.!?:;])/g) || []).length >= 2
							) &&
							0 !==
								children.slice(children.indexOf(node) + 1).filter(function (elm) {
									return 'P' === elm.nodeName.toUpperCase() && '' !== elm.textContent.trim()
								}).length
						)
					}
					var presentation_role_conflict_matches_default = function presentationRoleConflictMatches(
						node,
						virtualNode,
					) {
						return null !== implicit_role_default(virtualNode, { chromiumRoles: !0 })
					}
					var scrollable_region_focusable_matches_default =
						function scrollableRegionFocusableMatches(node, virtualNode) {
							if (!1 == !!_getScroll(node, 13)) return !1
							var role = get_explicit_role_default(virtualNode)
							if (aria_attrs_default['aria-haspopup'].values.includes(role)) {
								if (closest_default(virtualNode, '[role~="combobox"]')) return !1
								var id = virtualNode.attr('id')
								if (id) {
									var doc = get_root_node_default(node)
									if (
										Array.from(
											doc.querySelectorAll(
												'[aria-owns~="'.concat(id, '"], [aria-controls~="').concat(id, '"]'),
											),
										).some(function (el) {
											return token_list_default(el.getAttribute('role')).includes('combobox')
										})
									)
										return !1
								}
							}
							return !!query_selector_all_default(virtualNode, '*').some(function (elm) {
								return has_content_virtual_default(elm, !0, !0)
							})
						}
					var skip_link_matches_default = function skipLinkMatches(node) {
						return _isSkipLink(node) && is_offscreen_default(node)
					}
					var matchesFns = [
						function (node, vNode) {
							return isWidgetType(vNode)
						},
						function (node, vNode) {
							return (function isNotAreaElement(vNode) {
								return 'area' !== vNode.props.nodeName
							})(vNode)
						},
						function (node, vNode) {
							return !svg_namespace_matches_default(node, vNode)
						},
						function (node, vNode) {
							return _isFocusable(vNode)
						},
						function (node, vNode) {
							return _isInTabOrder(vNode) || !hasWidgetAncestorInTabOrder(vNode)
						},
						function (node) {
							return !is_in_text_block_default(node, { noLengthCompare: !0 })
						},
					]
					function isWidgetType(vNode) {
						return 'widget' === get_role_type_default(vNode)
					}
					var hasWidgetAncestorInTabOrder = memoize_default(
						function hasWidgetAncestorInTabOrderMemoized(vNode) {
							return (
								!(null == vNode || !vNode.parent) &&
								(!(!isWidgetType(vNode.parent) || !_isInTabOrder(vNode.parent)) ||
									hasWidgetAncestorInTabOrderMemoized(vNode.parent))
							)
						},
					)
					var metadataFunctionMap = {
							'abstractrole-evaluate': abstractrole_evaluate_default,
							'accesskeys-after': accesskeys_after_default,
							'accesskeys-evaluate': accesskeys_evaluate_default,
							'alt-space-value-evaluate': alt_space_value_evaluate_default,
							'aria-allowed-attr-evaluate': function ariaAllowedAttrEvaluate(
								node,
								options,
								virtualNode,
							) {
								var invalid = [],
									role = get_role_default(virtualNode),
									attrs = virtualNode.attrNames,
									allowed = allowed_attr_default(role)
								Array.isArray(options[role]) &&
									(allowed = unique_array_default(options[role].concat(allowed)))
								var tableMap = cache_default.get('aria-allowed-attr-table', function () {
									return new WeakMap()
								})
								function validateRowAttrs() {
									if (virtualNode.parent && 'row' === role) {
										var table = closest_default(
												virtualNode,
												'table, [role="treegrid"], [role="table"], [role="grid"]',
											),
											tableRole = tableMap.get(table)
										if (
											(table &&
												!tableRole &&
												((tableRole = get_role_default(table)), tableMap.set(table, tableRole)),
											['table', 'grid'].includes(tableRole) && 'row' === role)
										)
											return !0
									}
								}
								var ariaAttr = Array.isArray(options.validTreeRowAttrs)
										? options.validTreeRowAttrs
										: [],
									preChecks = {}
								if (
									(ariaAttr.forEach(function (attr) {
										preChecks[attr] = validateRowAttrs
									}),
									allowed)
								)
									for (var _i18 = 0; _i18 < attrs.length; _i18++) {
										var _preChecks$attrName,
											attrName = attrs[_i18]
										;((validate_attr_default(attrName) &&
											null !== (_preChecks$attrName = preChecks[attrName]) &&
											void 0 !== _preChecks$attrName &&
											_preChecks$attrName.call(preChecks)) ||
											(validate_attr_default(attrName) && !allowed.includes(attrName))) &&
											invalid.push(attrName + '="' + virtualNode.attr(attrName) + '"')
									}
								if (invalid.length) {
									if (
										(this.data(invalid),
										!is_html_element_default(virtualNode) && !role && !_isFocusable(virtualNode))
									)
										return
									return !1
								}
								return !0
							},
							'aria-allowed-attr-matches': aria_allowed_attr_matches_default,
							'aria-allowed-role-evaluate': aria_allowed_role_evaluate_default,
							'aria-allowed-role-matches': aria_allowed_role_matches_default,
							'aria-busy-evaluate': function ariaBusyEvaluate(node, options, virtualNode) {
								return 'true' === virtualNode.attr('aria-busy')
							},
							'aria-errormessage-evaluate': aria_errormessage_evaluate_default,
							'aria-has-attr-matches': aria_has_attr_matches_default,
							'aria-hidden-body-evaluate': aria_hidden_body_evaluate_default,
							'aria-hidden-focus-matches': aria_hidden_focus_matches_default,
							'aria-label-evaluate': aria_label_evaluate_default,
							'aria-labelledby-evaluate': aria_labelledby_evaluate_default,
							'aria-level-evaluate': aria_level_evaluate_default,
							'aria-prohibited-attr-evaluate': function ariaProhibitedAttrEvaluate(node) {
								var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
									virtualNode = arguments.length > 2 ? arguments[2] : void 0,
									elementsAllowedAriaLabel =
										(null == options ? void 0 : options.elementsAllowedAriaLabel) || [],
									nodeName2 = virtualNode.props.nodeName,
									role = get_role_default(virtualNode, { chromium: !0 }),
									prohibitedList = listProhibitedAttrs(role, nodeName2, elementsAllowedAriaLabel),
									prohibited = prohibitedList.filter(function (attrName) {
										return (
											!!virtualNode.attrNames.includes(attrName) &&
											'' !== sanitize_default(virtualNode.attr(attrName))
										)
									})
								if (0 === prohibited.length) return !1
								var messageKey = virtualNode.hasAttr('role') ? 'hasRole' : 'noRole'
								;(messageKey += prohibited.length > 1 ? 'Plural' : 'Singular'),
									this.data({ role, nodeName: nodeName2, messageKey, prohibited })
								var textContent = subtree_text_default(virtualNode, { subtreeDescendant: !0 })
								return '' === sanitize_default(textContent) || void 0
							},
							'aria-required-attr-evaluate': aria_required_attr_evaluate_default,
							'aria-required-children-evaluate': aria_required_children_evaluate_default,
							'aria-required-children-matches': aria_required_children_matches_default,
							'aria-required-parent-evaluate': aria_required_parent_evaluate_default,
							'aria-required-parent-matches': aria_required_parent_matches_default,
							'aria-roledescription-evaluate': aria_roledescription_evaluate_default,
							'aria-unsupported-attr-evaluate': aria_unsupported_attr_evaluate_default,
							'aria-valid-attr-evaluate': aria_valid_attr_evaluate_default,
							'aria-valid-attr-value-evaluate': function ariaValidAttrValueEvaluate(
								node,
								options,
								virtualNode,
							) {
								options = Array.isArray(options.value) ? options.value : []
								var needsReview = '',
									messageKey = '',
									invalid = [],
									aria = /^aria-/,
									skipAttrs = ['aria-errormessage'],
									preChecks = {
										'aria-controls': function ariaControls() {
											return (
												'false' !== virtualNode.attr('aria-expanded') &&
												'false' !== virtualNode.attr('aria-selected')
											)
										},
										'aria-current': function ariaCurrent(validValue) {
											validValue ||
												((needsReview = 'aria-current="'.concat(
													virtualNode.attr('aria-current'),
													'"',
												)),
												(messageKey = 'ariaCurrent'))
										},
										'aria-owns': function ariaOwns() {
											return 'false' !== virtualNode.attr('aria-expanded')
										},
										'aria-describedby': function ariaDescribedby(validValue) {
											validValue ||
												((needsReview = 'aria-describedby="'.concat(
													virtualNode.attr('aria-describedby'),
													'"',
												)),
												(messageKey =
													axe._tree && axe._tree[0]._hasShadowRoot ? 'noIdShadow' : 'noId'))
										},
										'aria-labelledby': function ariaLabelledby(validValue) {
											validValue ||
												((needsReview = 'aria-labelledby="'.concat(
													virtualNode.attr('aria-labelledby'),
													'"',
												)),
												(messageKey =
													axe._tree && axe._tree[0]._hasShadowRoot ? 'noIdShadow' : 'noId'))
										},
									}
								return (
									virtualNode.attrNames.forEach(function (attrName) {
										if (
											!skipAttrs.includes(attrName) &&
											!options.includes(attrName) &&
											aria.test(attrName)
										) {
											var validValue,
												attrValue = virtualNode.attr(attrName)
											try {
												validValue = validate_attr_value_default(virtualNode, attrName)
											} catch (e) {
												return (
													(needsReview = ''.concat(attrName, '="').concat(attrValue, '"')),
													void (messageKey = 'idrefs')
												)
											}
											;(preChecks[attrName] && !preChecks[attrName](validValue)) ||
												validValue ||
												('' !== attrValue ||
												(function isStringType(attrName) {
													var _standards_default$ar
													return (
														'string' ===
														(null ===
															(_standards_default$ar = standards_default.ariaAttrs[attrName]) ||
														void 0 === _standards_default$ar
															? void 0
															: _standards_default$ar.type)
													)
												})(attrName)
													? invalid.push(''.concat(attrName, '="').concat(attrValue, '"'))
													: ((needsReview = attrName), (messageKey = 'empty')))
										}
									}),
									invalid.length
										? (this.data(invalid), !1)
										: !needsReview || void this.data({ messageKey, needsReview })
								)
							},
							'attr-non-space-content-evaluate': attr_non_space_content_evaluate_default,
							'autocomplete-appropriate-evaluate': autocomplete_appropriate_evaluate_default,
							'autocomplete-matches': autocomplete_matches_default,
							'autocomplete-valid-evaluate': autocomplete_valid_evaluate_default,
							'avoid-inline-spacing-evaluate': avoid_inline_spacing_evaluate_default,
							'bypass-matches': bypass_matches_default,
							'caption-evaluate': caption_evaluate_default,
							'caption-faked-evaluate': caption_faked_evaluate_default,
							'color-contrast-evaluate': function colorContrastEvaluate(
								node,
								options,
								virtualNode,
							) {
								var ignoreUnicode = options.ignoreUnicode,
									ignoreLength = options.ignoreLength,
									ignorePseudo = options.ignorePseudo,
									boldValue = options.boldValue,
									boldTextPt = options.boldTextPt,
									largeTextPt = options.largeTextPt,
									contrastRatio = options.contrastRatio,
									shadowOutlineEmMax = options.shadowOutlineEmMax,
									pseudoSizeThreshold = options.pseudoSizeThreshold
								if (!_isVisibleOnScreen(node)) return this.data({ messageKey: 'hidden' }), !0
								var visibleText = visible_virtual_default(virtualNode, !1, !0)
								if (
									!ignoreUnicode ||
									!(function textIsEmojis(visibleText) {
										var options = { nonBmp: !0 },
											hasUnicodeChars = has_unicode_default(visibleText, options),
											hasNonUnicodeChars =
												'' === sanitize_default(remove_unicode_default(visibleText, options))
										return hasUnicodeChars && hasNonUnicodeChars
									})(visibleText)
								) {
									var nodeStyle = window.getComputedStyle(node),
										fontSize = parseFloat(nodeStyle.getPropertyValue('font-size')),
										fontWeight = nodeStyle.getPropertyValue('font-weight'),
										bold = parseFloat(fontWeight) >= boldValue || 'bold' === fontWeight,
										ptSize = Math.ceil(72 * fontSize) / 96,
										_ref74 =
											(bold && ptSize < boldTextPt) || (!bold && ptSize < largeTextPt)
												? contrastRatio.normal
												: contrastRatio.large,
										expected = _ref74.expected,
										minThreshold = _ref74.minThreshold,
										maxThreshold = _ref74.maxThreshold,
										pseudoElm = (function findPseudoElement(vNode, _ref75) {
											var _ref75$pseudoSizeThre = _ref75.pseudoSizeThreshold,
												pseudoSizeThreshold =
													void 0 === _ref75$pseudoSizeThre ? 0.25 : _ref75$pseudoSizeThre,
												_ref75$ignorePseudo = _ref75.ignorePseudo,
												ignorePseudo = void 0 !== _ref75$ignorePseudo && _ref75$ignorePseudo
											if (ignorePseudo) return
											var rect = vNode.boundingClientRect,
												minimumSize = rect.width * rect.height * pseudoSizeThreshold
											do {
												if (
													getPseudoElementArea(vNode.actualNode, ':before') +
														getPseudoElementArea(vNode.actualNode, ':after') >
													minimumSize
												)
													return vNode
											} while ((vNode = vNode.parent))
										})(virtualNode, { ignorePseudo, pseudoSizeThreshold })
									if (pseudoElm)
										return (
											this.data({
												fontSize: ''
													.concat(((72 * fontSize) / 96).toFixed(1), 'pt (')
													.concat(fontSize, 'px)'),
												fontWeight: bold ? 'bold' : 'normal',
												messageKey: 'pseudoContent',
												expectedContrastRatio: expected + ':1',
											}),
											void this.relatedNodes(pseudoElm.actualNode)
										)
									var bgNodes = [],
										bgColor = _getBackgroundColor2(node, bgNodes, shadowOutlineEmMax),
										fgColor = get_foreground_color_default(node, !1, bgColor),
										shadowColors = get_text_shadow_colors_default(node, {
											minRatio: 0.001,
											maxRatio: shadowOutlineEmMax,
										}),
										contrast = null,
										contrastContributor = null,
										shadowColor = null
									if (0 === shadowColors.length) contrast = get_contrast_default(bgColor, fgColor)
									else if (fgColor && bgColor) {
										shadowColor = []
											.concat(_toConsumableArray(shadowColors), [bgColor])
											.reduce(flatten_shadow_colors_default)
										var fgBgContrast = get_contrast_default(bgColor, fgColor),
											bgShContrast = get_contrast_default(bgColor, shadowColor),
											fgShContrast = get_contrast_default(shadowColor, fgColor)
										;(contrast = Math.max(fgBgContrast, bgShContrast, fgShContrast)) !==
											fgBgContrast &&
											(contrastContributor =
												bgShContrast > fgShContrast ? 'shadowOnBgColor' : 'fgOnShadowColor')
									}
									var isValid = contrast > expected
									if (
										('number' == typeof minThreshold &&
											('number' != typeof contrast || contrast < minThreshold)) ||
										('number' == typeof maxThreshold &&
											('number' != typeof contrast || contrast > maxThreshold))
									)
										return this.data({ contrastRatio: contrast }), !0
									var missing,
										truncatedResult = Math.floor(100 * contrast) / 100
									null === bgColor
										? (missing = incomplete_data_default.get('bgColor'))
										: isValid || (missing = contrastContributor)
									var equalRatio = 1 === truncatedResult,
										shortTextContent = 1 === visibleText.length
									return (
										equalRatio
											? (missing = incomplete_data_default.set('bgColor', 'equalRatio'))
											: isValid ||
											  !shortTextContent ||
											  ignoreLength ||
											  (missing = 'shortTextContent'),
										this.data({
											fgColor: fgColor ? fgColor.toHexString() : void 0,
											bgColor: bgColor ? bgColor.toHexString() : void 0,
											contrastRatio: truncatedResult,
											fontSize: ''
												.concat(((72 * fontSize) / 96).toFixed(1), 'pt (')
												.concat(fontSize, 'px)'),
											fontWeight: bold ? 'bold' : 'normal',
											messageKey: missing,
											expectedContrastRatio: expected + ':1',
											shadowColor: shadowColor ? shadowColor.toHexString() : void 0,
										}),
										null === fgColor ||
										null === bgColor ||
										equalRatio ||
										(shortTextContent && !ignoreLength && !isValid)
											? ((missing = null),
											  incomplete_data_default.clear(),
											  void this.relatedNodes(bgNodes))
											: (isValid || this.relatedNodes(bgNodes), isValid)
									)
								}
								this.data({ messageKey: 'nonBmp' })
							},
							'color-contrast-matches': color_contrast_matches_default,
							'css-orientation-lock-evaluate': css_orientation_lock_evaluate_default,
							'data-table-large-matches': data_table_large_matches_default,
							'data-table-matches': data_table_matches_default,
							'deprecatedrole-evaluate': function deprecatedroleEvaluate(
								node,
								options,
								virtualNode,
							) {
								var role = get_role_default(virtualNode, { dpub: !0, fallback: !0 }),
									roleDefinition = standards_default.ariaRoles[role]
								return (
									!(null == roleDefinition || !roleDefinition.deprecated) && (this.data(role), !0)
								)
							},
							'dlitem-evaluate': dlitem_evaluate_default,
							'doc-has-title-evaluate': doc_has_title_evaluate_default,
							'duplicate-id-active-matches': duplicate_id_active_matches_default,
							'duplicate-id-after': duplicate_id_after_default,
							'duplicate-id-aria-matches': duplicate_id_aria_matches_default,
							'duplicate-id-evaluate': duplicate_id_evaluate_default,
							'duplicate-id-misc-matches': duplicate_id_misc_matches_default,
							'duplicate-img-label-evaluate': duplicate_img_label_evaluate_default,
							'exists-evaluate': exists_evaluate_default,
							'explicit-evaluate': explicit_evaluate_default,
							'fallbackrole-evaluate': fallbackrole_evaluate_default,
							'focusable-content-evaluate': focusable_content_evaluate_default,
							'focusable-disabled-evaluate': focusable_disabled_evaluate_default,
							'focusable-element-evaluate': focusable_element_evaluate_default,
							'focusable-modal-open-evaluate': focusable_modal_open_evaluate_default,
							'focusable-no-name-evaluate': focusable_no_name_evaluate_default,
							'focusable-not-tabbable-evaluate': focusable_not_tabbable_evaluate_default,
							'frame-focusable-content-evaluate': function frameFocusableContentEvaluate(
								node,
								options,
								virtualNode,
							) {
								if (virtualNode.children)
									try {
										return !virtualNode.children.some(function (child) {
											return focusableDescendants(child)
										})
									} catch (e) {
										return
									}
							},
							'frame-focusable-content-matches': frame_focusable_content_matches_default,
							'frame-tested-after': frame_tested_after_default,
							'frame-tested-evaluate': frame_tested_evaluate_default,
							'frame-title-has-text-matches': frame_title_has_text_matches_default,
							'has-alt-evaluate': has_alt_evaluate_default,
							'has-descendant-after': has_descendant_after_default,
							'has-descendant-evaluate': has_descendant_evaluate_default,
							'has-global-aria-attribute-evaluate': has_global_aria_attribute_evaluate_default,
							'has-implicit-chromium-role-matches': has_implicit_chromium_role_matches_default,
							'has-lang-evaluate': has_lang_evaluate_default,
							'has-text-content-evaluate': function hasTextContentEvaluate(
								node,
								options,
								virtualNode,
							) {
								try {
									return '' !== sanitize_default(subtree_text_default(virtualNode))
								} catch (e) {
									return
								}
							},
							'has-widget-role-evaluate': has_widget_role_evaluate_default,
							'heading-matches': function headingMatches(node, virtualNode) {
								return 'heading' === get_role_default(virtualNode)
							},
							'heading-order-after': function headingOrderAfter(results) {
								var headingOrder = (function getHeadingOrder(results) {
									;(results = _toConsumableArray(results)),
										results.sort(function (_ref94, _ref95) {
											var nodeA = _ref94.node,
												nodeB = _ref95.node
											return nodeA.ancestry.length - nodeB.ancestry.length
										})
									var headingOrder = results.reduce(mergeHeadingOrder, [])
									return headingOrder.filter(function (_ref96) {
										return -1 !== _ref96.level
									})
								})(results)
								return (
									results.forEach(function (result) {
										result.result = (function getHeadingOrderOutcome(result, headingOrder) {
											var _headingOrder$index$l,
												_headingOrder$index,
												_headingOrder$level,
												_headingOrder,
												index = findHeadingOrderIndex(headingOrder, result.node.ancestry),
												currLevel =
													null !==
														(_headingOrder$index$l =
															null === (_headingOrder$index = headingOrder[index]) ||
															void 0 === _headingOrder$index
																? void 0
																: _headingOrder$index.level) && void 0 !== _headingOrder$index$l
														? _headingOrder$index$l
														: -1,
												prevLevel =
													null !==
														(_headingOrder$level =
															null === (_headingOrder = headingOrder[index - 1]) ||
															void 0 === _headingOrder
																? void 0
																: _headingOrder.level) && void 0 !== _headingOrder$level
														? _headingOrder$level
														: -1
											if (0 === index) return !0
											if (-1 === currLevel) return
											return currLevel - prevLevel <= 1
										})(result, headingOrder)
									}),
									results
								)
							},
							'heading-order-evaluate': heading_order_evaluate_default,
							'help-same-as-label-evaluate': help_same_as_label_evaluate_default,
							'hidden-content-evaluate': hidden_content_evaluate_default,
							'hidden-explicit-label-evaluate': hidden_explicit_label_evaluate_default,
							'html-namespace-matches': html_namespace_matches_default,
							'html5-scope-evaluate': html5_scope_evaluate_default,
							'identical-links-same-purpose-after': identical_links_same_purpose_after_default,
							'identical-links-same-purpose-evaluate':
								identical_links_same_purpose_evaluate_default,
							'identical-links-same-purpose-matches': identical_links_same_purpose_matches_default,
							'implicit-evaluate': implicit_evaluate_default,
							'inline-style-property-evaluate': function inlineStyleProperty(node, options) {
								var cssProperty = options.cssProperty,
									absoluteValues = options.absoluteValues,
									minValue = options.minValue,
									maxValue = options.maxValue,
									_options$normalValue = options.normalValue,
									normalValue = void 0 === _options$normalValue ? 0 : _options$normalValue,
									noImportant = options.noImportant,
									multiLineOnly = options.multiLineOnly
								if (
									(!noImportant && 'important' !== node.style.getPropertyPriority(cssProperty)) ||
									(multiLineOnly && !_isMultiline(node))
								)
									return !0
								var data2 = {}
								'number' == typeof minValue && (data2.minValue = minValue),
									'number' == typeof maxValue && (data2.maxValue = maxValue)
								var declaredPropValue = node.style.getPropertyValue(cssProperty)
								if (['inherit', 'unset', 'revert', 'revert-layer'].includes(declaredPropValue))
									return this.data(_extends({ value: declaredPropValue }, data2)), !0
								var value = (function getNumberValue(domNode, _ref104) {
									var cssProperty = _ref104.cssProperty,
										absoluteValues = _ref104.absoluteValues,
										normalValue = _ref104.normalValue,
										computedStyle = window.getComputedStyle(domNode),
										cssPropValue = computedStyle.getPropertyValue(cssProperty)
									if ('normal' === cssPropValue) return normalValue
									var parsedValue = parseFloat(cssPropValue)
									if (absoluteValues) return parsedValue
									var fontSize = parseFloat(computedStyle.getPropertyValue('font-size')),
										value = Math.round((parsedValue / fontSize) * 100) / 100
									if (isNaN(value)) return cssPropValue
									return value
								})(node, { absoluteValues, cssProperty, normalValue })
								return (
									this.data(_extends({ value }, data2)),
									'number' == typeof value
										? ('number' != typeof minValue || value >= minValue) &&
										  ('number' != typeof maxValue || value <= maxValue)
										: void 0
								)
							},
							'inserted-into-focus-order-matches': inserted_into_focus_order_matches_default,
							'internal-link-present-evaluate': internal_link_present_evaluate_default,
							'invalid-children-evaluate': function invalidChildrenEvaluate(node) {
								var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
									virtualNode = arguments.length > 2 ? arguments[2] : void 0,
									relatedNodes = [],
									issues = []
								if (virtualNode.children) {
									for (var vChildren = mapWithNested(virtualNode.children); vChildren.length; ) {
										var _vChild$actualNode,
											_vChildren$shift = vChildren.shift(),
											vChild = _vChildren$shift.vChild,
											nested = _vChildren$shift.nested
										if (options.divGroups && !nested && isDivGroup(vChild)) {
											if (!vChild.children) return
											var vGrandChildren = mapWithNested(vChild.children, !0)
											vChildren.push.apply(vChildren, _toConsumableArray(vGrandChildren))
										} else {
											var issue = getInvalidSelector(vChild, nested, options)
											issue &&
												(issues.includes(issue) || issues.push(issue),
												1 ===
													(null == vChild ||
													null === (_vChild$actualNode = vChild.actualNode) ||
													void 0 === _vChild$actualNode
														? void 0
														: _vChild$actualNode.nodeType) && relatedNodes.push(vChild.actualNode))
										}
									}
									return (
										0 !== issues.length &&
										(this.data({ values: issues.join(', ') }), this.relatedNodes(relatedNodes), !0)
									)
								}
							},
							'invalidrole-evaluate': invalidrole_evaluate_default,
							'is-element-focusable-evaluate': is_element_focusable_evaluate_default,
							'is-initiator-matches': is_initiator_matches_default,
							'is-on-screen-evaluate': is_on_screen_evaluate_default,
							'is-visible-matches': function hasVisibleTextMatches(node) {
								return _isVisibleOnScreen(node)
							},
							'is-visible-on-screen-matches': function isVisibleOnScreenMatches(node, virtualNode) {
								return _isVisibleOnScreen(virtualNode)
							},
							'label-content-name-mismatch-evaluate': label_content_name_mismatch_evaluate_default,
							'label-content-name-mismatch-matches': label_content_name_mismatch_matches_default,
							'label-matches': label_matches_default,
							'landmark-has-body-context-matches': landmark_has_body_context_matches_default,
							'landmark-is-top-level-evaluate': landmark_is_top_level_evaluate_default,
							'landmark-is-unique-after': landmark_is_unique_after_default,
							'landmark-is-unique-evaluate': landmark_is_unique_evaluate_default,
							'landmark-unique-matches': landmark_unique_matches_default,
							'layout-table-matches': layout_table_matches_default,
							'link-in-text-block-evaluate': link_in_text_block_evaluate_default,
							'link-in-text-block-matches': link_in_text_block_matches_default,
							'link-in-text-block-style-evaluate': link_in_text_block_style_evaluate_default,
							'listitem-evaluate': function listitemEvaluate(node, options, virtualNode) {
								var parent = virtualNode.parent
								if (parent) {
									var parentNodeName = parent.props.nodeName,
										parentRole = get_explicit_role_default(parent)
									return (
										!!['presentation', 'none', 'list'].includes(parentRole) ||
										(parentRole && is_valid_role_default(parentRole)
											? (this.data({ messageKey: 'roleNotValid' }), !1)
											: ['ul', 'ol', 'menu'].includes(parentNodeName))
									)
								}
							},
							'matches-definition-evaluate': matches_definition_evaluate_default,
							'meta-refresh-evaluate': function metaRefreshEvaluate(node, options, virtualNode) {
								var _ref102 = options || {},
									minDelay = _ref102.minDelay,
									maxDelay = _ref102.maxDelay,
									redirectStr = _slicedToArray(
										(virtualNode.attr('content') || '').trim().split(separatorRegex),
										1,
									)[0]
								if (!redirectStr.match(validRedirectNumRegex)) return !0
								var redirectDelay = parseFloat(redirectStr)
								return (
									this.data({ redirectDelay }),
									('number' == typeof minDelay && redirectDelay <= options.minDelay) ||
										('number' == typeof maxDelay && redirectDelay > options.maxDelay)
								)
							},
							'meta-viewport-scale-evaluate': meta_viewport_scale_evaluate_default,
							'multiple-label-evaluate': multiple_label_evaluate_default,
							'nested-interactive-matches': nested_interactive_matches_default,
							'no-autoplay-audio-evaluate': no_autoplay_audio_evaluate_default,
							'no-autoplay-audio-matches': no_autoplay_audio_matches_default,
							'no-empty-role-matches': no_empty_role_matches_default,
							'no-explicit-name-required-matches': no_explicit_name_required_matches_default,
							'no-focusable-content-evaluate': function noFocusableContentEvaluate(
								node,
								options,
								virtualNode,
							) {
								if (virtualNode.children)
									try {
										var focusableDescendants2 = getFocusableDescendants(virtualNode)
										if (!focusableDescendants2.length) return !0
										var notHiddenElements = focusableDescendants2.filter(
											usesUnreliableHidingStrategy,
										)
										return (
											notHiddenElements.length > 0
												? (this.data({ messageKey: 'notHidden' }),
												  this.relatedNodes(notHiddenElements))
												: this.relatedNodes(focusableDescendants2),
											!1
										)
									} catch (e) {
										return
									}
							},
							'no-implicit-explicit-label-evaluate': no_implicit_explicit_label_evaluate_default,
							'no-naming-method-matches': no_naming_method_matches_default,
							'no-negative-tabindex-matches': no_negative_tabindex_matches_default,
							'no-role-matches': no_role_matches_default,
							'non-empty-if-present-evaluate': non_empty_if_present_evaluate_default,
							'not-html-matches': not_html_matches_default,
							'object-is-loaded-matches': function object_is_loaded_matches_default(node, vNode) {
								return [no_explicit_name_required_matches_default, objectHasLoaded].every(function (
									fn,
								) {
									return fn(node, vNode)
								})
							},
							'only-dlitems-evaluate': only_dlitems_evaluate_default,
							'only-listitems-evaluate': only_listitems_evaluate_default,
							'p-as-heading-evaluate': p_as_heading_evaluate_default,
							'p-as-heading-matches': p_as_heading_matches_default,
							'page-no-duplicate-after': page_no_duplicate_after_default,
							'page-no-duplicate-evaluate': page_no_duplicate_evaluate_default,
							'presentation-role-conflict-matches': presentation_role_conflict_matches_default,
							'presentational-role-evaluate': function presentationalRoleEvaluate(
								node,
								options,
								virtualNode,
							) {
								var explicitRole2 = get_explicit_role_default(virtualNode)
								if (
									['presentation', 'none'].includes(explicitRole2) &&
									['iframe', 'frame'].includes(virtualNode.props.nodeName) &&
									virtualNode.hasAttr('title')
								)
									return (
										this.data({ messageKey: 'iframe', nodeName: virtualNode.props.nodeName }), !1
									)
								var role = get_role_default(virtualNode)
								if (['presentation', 'none'].includes(role)) return this.data({ role }), !0
								if (!['presentation', 'none'].includes(explicitRole2)) return !1
								var messageKey,
									hasGlobalAria = get_global_aria_attrs_default().some(function (attr) {
										return virtualNode.hasAttr(attr)
									}),
									focusable = _isFocusable(virtualNode)
								return (
									(messageKey =
										hasGlobalAria && !focusable
											? 'globalAria'
											: !hasGlobalAria && focusable
											? 'focusable'
											: 'both'),
									this.data({ messageKey, role }),
									!1
								)
							},
							'region-after': region_after_default,
							'region-evaluate': function regionEvaluate(node, options, virtualNode) {
								return (
									this.data({ isIframe: ['iframe', 'frame'].includes(virtualNode.props.nodeName) }),
									!cache_default
										.get('regionlessNodes', function () {
											return (function getRegionlessNodes(options) {
												var regionlessNodes = findRegionlessElms(axe._tree[0], options)
													.map(function (vNode) {
														for (
															;
															vNode.parent &&
															!vNode.parent._hasRegionDescendant &&
															vNode.parent.actualNode !== document.body;

														)
															vNode = vNode.parent
														return vNode
													})
													.filter(function (vNode, index, array) {
														return array.indexOf(vNode) === index
													})
												return regionlessNodes
											})(options)
										})
										.includes(virtualNode)
								)
							},
							'same-caption-summary-evaluate': same_caption_summary_evaluate_default,
							'scope-value-evaluate': scope_value_evaluate_default,
							'scrollable-region-focusable-matches': scrollable_region_focusable_matches_default,
							'skip-link-evaluate': skip_link_evaluate_default,
							'skip-link-matches': skip_link_matches_default,
							'structured-dlitems-evaluate': structured_dlitems_evaluate_default,
							'svg-namespace-matches': svg_namespace_matches_default,
							'svg-non-empty-title-evaluate': svg_non_empty_title_evaluate_default,
							'tabindex-evaluate': tabindex_evaluate_default,
							'table-or-grid-role-matches': function tableOrGridRoleMatches(_, vNode) {
								var role = get_role_default(vNode)
								return ['treegrid', 'grid', 'table'].includes(role)
							},
							'target-offset-evaluate': function targetOffsetEvaluate(node, options, vNode) {
								var _step5,
									num,
									minOffset = (null == options ? void 0 : options.minOffset) || 24,
									closeNeighbors = [],
									closestOffset = minOffset,
									_iterator5 = _createForOfIteratorHelper(_findNearbyElms(vNode, minOffset))
								try {
									for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
										var vNeighbor = _step5.value
										if ('widget' === get_role_type_default(vNeighbor) && _isFocusable(vNeighbor)) {
											var offset = ((num = _getOffset(vNode, vNeighbor)), Math.round(10 * num) / 10)
											offset + 0.05 >= minOffset ||
												((closestOffset = Math.min(closestOffset, offset)),
												closeNeighbors.push(vNeighbor))
										}
									}
								} catch (err) {
									_iterator5.e(err)
								} finally {
									_iterator5.f()
								}
								return 0 === closeNeighbors.length
									? (this.data({ closestOffset, minOffset }), !0)
									: (this.relatedNodes(
											closeNeighbors.map(function (_ref90) {
												return _ref90.actualNode
											}),
									  ),
									  closeNeighbors.some(_isInTabOrder)
											? (this.data({ closestOffset, minOffset }), !_isInTabOrder(vNode) && void 0)
											: void this.data({
													messageKey: 'nonTabbableNeighbor',
													closestOffset,
													minOffset,
											  }))
							},
							'target-size-evaluate': function targetSize(node, options, vNode) {
								var minSize = (null == options ? void 0 : options.minSize) || 24,
									nodeRect = vNode.boundingClientRect,
									hasMinimumSize = rectHasMinimumSize.bind(null, minSize),
									nearbyElms = _findNearbyElms(vNode),
									overflowingContent = (function filterOverflowingContent(vNode, nearbyElms) {
										return nearbyElms.filter(function (nearbyElm) {
											return (
												!isEnclosedRect(nearbyElm, vNode) &&
												isDescendantNotInTabOrder(vNode, nearbyElm)
											)
										})
									})(vNode, nearbyElms),
									_filterByElmsOverlap = (function filterByElmsOverlap(vNode, nearbyElms) {
										var _step6,
											fullyObscuringElms = [],
											partialObscuringElms = [],
											_iterator6 = _createForOfIteratorHelper(nearbyElms)
										try {
											for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
												var vNeighbor = _step6.value
												!isDescendantNotInTabOrder(vNode, vNeighbor) &&
													_hasVisualOverlap(vNode, vNeighbor) &&
													'none' !== getCssPointerEvents(vNeighbor) &&
													(isEnclosedRect(vNode, vNeighbor)
														? fullyObscuringElms.push(vNeighbor)
														: partialObscuringElms.push(vNeighbor))
											}
										} catch (err) {
											_iterator6.e(err)
										} finally {
											_iterator6.f()
										}
										return { fullyObscuringElms, partialObscuringElms }
									})(vNode, nearbyElms),
									fullyObscuringElms = _filterByElmsOverlap.fullyObscuringElms,
									partialObscuringElms = _filterByElmsOverlap.partialObscuringElms
								if (fullyObscuringElms.length && !overflowingContent.length)
									return (
										this.relatedNodes(mapActualNodes(fullyObscuringElms)),
										this.data({ messageKey: 'obscured' }),
										!0
									)
								var negativeOutcome = !_isInTabOrder(vNode) && void 0
								if (!hasMinimumSize(nodeRect) && !overflowingContent.length)
									return this.data(_extends({ minSize }, toDecimalSize(nodeRect))), negativeOutcome
								var obscuredWidgets = (function filterFocusableWidgets(vNodes) {
										return vNodes.filter(function (vNode) {
											return 'widget' === get_role_type_default(vNode) && _isFocusable(vNode)
										})
									})(partialObscuringElms),
									largestInnerRect = (function getLargestUnobscuredArea(vNode, obscuredNodes) {
										var nodeRect = vNode.boundingClientRect
										if (0 === obscuredNodes.length) return null
										var obscuringRects = obscuredNodes.map(function (_ref91) {
												return _ref91.boundingClientRect
											}),
											unobscuredRects = _splitRects(nodeRect, obscuringRects)
										return (function getLargestRect(rects, minSize) {
											return rects.reduce(function (rectA, rectB) {
												var rectAisMinimum = rectHasMinimumSize(minSize, rectA)
												return rectAisMinimum !== rectHasMinimumSize(minSize, rectB)
													? rectAisMinimum
														? rectA
														: rectB
													: rectA.width * rectA.height > rectB.width * rectB.height
													? rectA
													: rectB
											})
										})(unobscuredRects)
									})(vNode, obscuredWidgets)
								if (
									overflowingContent.length &&
									(fullyObscuringElms.length || !hasMinimumSize(largestInnerRect || nodeRect))
								)
									return (
										this.data({ minSize, messageKey: 'contentOverflow' }),
										void this.relatedNodes(mapActualNodes(overflowingContent))
									)
								if (0 !== obscuredWidgets.length && !hasMinimumSize(largestInnerRect)) {
									var allTabbable = obscuredWidgets.every(_isInTabOrder),
										messageKey = 'partiallyObscured'.concat(allTabbable ? '' : 'NonTabbable')
									return (
										this.data(_extends({ messageKey, minSize }, toDecimalSize(largestInnerRect))),
										this.relatedNodes(mapActualNodes(obscuredWidgets)),
										allTabbable ? negativeOutcome : void 0
									)
								}
								return (
									this.data(_extends({ minSize }, toDecimalSize(largestInnerRect || nodeRect))),
									this.relatedNodes(mapActualNodes(obscuredWidgets)),
									!0
								)
							},
							'td-has-header-evaluate': td_has_header_evaluate_default,
							'td-headers-attr-evaluate': td_headers_attr_evaluate_default,
							'th-has-data-cells-evaluate': th_has_data_cells_evaluate_default,
							'title-only-evaluate': title_only_evaluate_default,
							'unique-frame-title-after': unique_frame_title_after_default,
							'unique-frame-title-evaluate': unique_frame_title_evaluate_default,
							'unsupportedrole-evaluate': unsupportedrole_evaluate_default,
							'valid-lang-evaluate': valid_lang_evaluate_default,
							'valid-scrollable-semantics-evaluate': valid_scrollable_semantics_evaluate_default,
							'widget-not-inline-matches': function widgetNotInline(node, vNode) {
								return matchesFns.every(function (fn) {
									return fn(node, vNode)
								})
							},
							'window-is-top-matches': function windowIsTopMatches(node) {
								return node.ownerDocument.defaultView.self === node.ownerDocument.defaultView.top
							},
							'xml-lang-mismatch-evaluate': xml_lang_mismatch_evaluate_default,
							'xml-lang-mismatch-matches': function xmlLangMismatchMatches(node) {
								var primaryLangValue = get_base_lang_default(node.getAttribute('lang')),
									primaryXmlLangValue = get_base_lang_default(node.getAttribute('xml:lang'))
								return (
									valid_langs_default(primaryLangValue) && valid_langs_default(primaryXmlLangValue)
								)
							},
						},
						metadata_function_map_default = metadataFunctionMap
					var check_result_default = function CheckResult(check) {
						;(this.id = check.id),
							(this.data = null),
							(this.relatedNodes = []),
							(this.result = null)
					}
					function createExecutionContext(spec) {
						if ('string' == typeof spec) {
							if (metadata_function_map_default[spec]) return metadata_function_map_default[spec]
							if (/^\s*function[\s\w]*\(/.test(spec)) return new Function('return ' + spec + ';')()
							throw new ReferenceError(
								'Function ID does not exist in the metadata-function-map: '.concat(spec),
							)
						}
						return spec
					}
					function normalizeOptions() {
						var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
						return (
							(Array.isArray(options) || 'object' !== _typeof(options)) &&
								(options = { value: options }),
							options
						)
					}
					function Check(spec) {
						spec && ((this.id = spec.id), this.configure(spec))
					}
					;(Check.prototype.enabled = !0),
						(Check.prototype.run = function run(node, options, context, resolve, reject) {
							var enabled = (options = options || {}).hasOwnProperty('enabled')
									? options.enabled
									: this.enabled,
								checkOptions = this.getOptions(options.options)
							if (enabled) {
								var result,
									checkResult = new check_result_default(this),
									helper = check_helper_default(checkResult, options, resolve, reject)
								try {
									result = this.evaluate.call(helper, node.actualNode, checkOptions, node, context)
								} catch (e) {
									return (
										node &&
											node.actualNode &&
											(e.errorNode = new dq_element_default(node).toJSON()),
										void reject(e)
									)
								}
								helper.isAsync || ((checkResult.result = result), resolve(checkResult))
							} else resolve(null)
						}),
						(Check.prototype.runSync = function runSync(node, options, context) {
							var _options$enabled = (options = options || {}).enabled
							if (!(void 0 === _options$enabled ? this.enabled : _options$enabled)) return null
							var result,
								checkOptions = this.getOptions(options.options),
								checkResult = new check_result_default(this),
								helper = check_helper_default(checkResult, options)
							helper.async = function async() {
								throw new Error('Cannot run async check while in a synchronous run')
							}
							try {
								result = this.evaluate.call(helper, node.actualNode, checkOptions, node, context)
							} catch (e) {
								throw (
									(node && node.actualNode && (e.errorNode = new dq_element_default(node).toJSON()),
									e)
								)
							}
							return (checkResult.result = result), checkResult
						}),
						(Check.prototype.configure = function configure2(spec) {
							var _this5 = this
							;(spec.evaluate && !metadata_function_map_default[spec.evaluate]) ||
								(this._internalCheck = !0),
								spec.hasOwnProperty('enabled') && (this.enabled = spec.enabled),
								spec.hasOwnProperty('options') &&
									(this._internalCheck
										? (this.options = normalizeOptions(spec.options))
										: (this.options = spec.options)),
								['evaluate', 'after']
									.filter(function (prop) {
										return spec.hasOwnProperty(prop)
									})
									.forEach(function (prop) {
										return (_this5[prop] = createExecutionContext(spec[prop]))
									})
						}),
						(Check.prototype.getOptions = function getOptions(options) {
							return this._internalCheck
								? deep_merge_default(this.options, normalizeOptions(options || {}))
								: options || this.options
						})
					var check_default = Check
					var rule_result_default = function RuleResult(rule) {
						;(this.id = rule.id),
							(this.result = constants_default.NA),
							(this.pageLevel = rule.pageLevel),
							(this.impact = null),
							(this.nodes = [])
					}
					function Rule(spec, parentAudit) {
						;(this._audit = parentAudit),
							(this.id = spec.id),
							(this.selector = spec.selector || '*'),
							spec.impact &&
								(assert_default(
									constants_default.impact.includes(spec.impact),
									'Impact '.concat(spec.impact, ' is not a valid impact'),
								),
								(this.impact = spec.impact)),
							(this.excludeHidden = 'boolean' != typeof spec.excludeHidden || spec.excludeHidden),
							(this.enabled = 'boolean' != typeof spec.enabled || spec.enabled),
							(this.pageLevel = 'boolean' == typeof spec.pageLevel && spec.pageLevel),
							(this.reviewOnFail = 'boolean' == typeof spec.reviewOnFail && spec.reviewOnFail),
							(this.any = spec.any || []),
							(this.all = spec.all || []),
							(this.none = spec.none || []),
							(this.tags = spec.tags || []),
							(this.preload = !!spec.preload),
							(this.actIds = spec.actIds),
							spec.matches && (this.matches = createExecutionContext(spec.matches))
					}
					function getResult(results) {
						if (results.length) {
							var hasResults = !1,
								result = {}
							return (
								results.forEach(function (r) {
									var res = r.results.filter(function (result2) {
										return result2
									})
									;(result[r.type] = res), res.length && (hasResults = !0)
								}),
								hasResults ? result : null
							)
						}
					}
					;(Rule.prototype.matches = function matches3() {
						return !0
					}),
						(Rule.prototype.gather = function gather(context) {
							var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
								markStart = 'mark_gather_start_' + this.id,
								markEnd = 'mark_gather_end_' + this.id,
								markHiddenStart = 'mark_isVisibleToScreenReaders_start_' + this.id,
								markHiddenEnd = 'mark_isVisibleToScreenReaders_end_' + this.id
							options.performanceTimer && performance_timer_default.mark(markStart)
							var elements = select_default(this.selector, context)
							return (
								this.excludeHidden &&
									(options.performanceTimer && performance_timer_default.mark(markHiddenStart),
									(elements = elements.filter(function (element) {
										return _isVisibleToScreenReaders(element)
									})),
									options.performanceTimer &&
										(performance_timer_default.mark(markHiddenEnd),
										performance_timer_default.measure(
											'rule_' + this.id + '#gather_axe.utils.isVisibleToScreenReaders',
											markHiddenStart,
											markHiddenEnd,
										))),
								options.performanceTimer &&
									(performance_timer_default.mark(markEnd),
									performance_timer_default.measure(
										'rule_' + this.id + '#gather',
										markStart,
										markEnd,
									)),
								elements
							)
						}),
						(Rule.prototype.runChecks = function runChecks(
							type,
							node,
							options,
							context,
							resolve,
							reject,
						) {
							var self2 = this,
								checkQueue = queue_default()
							this[type].forEach(function (c) {
								var check = self2._audit.checks[c.id || c],
									option = get_check_option_default(check, self2.id, options)
								checkQueue.defer(function (res, rej) {
									check.run(node, option, context, res, rej)
								})
							}),
								checkQueue
									.then(function (results) {
										;(results = results.filter(function (check) {
											return check
										})),
											resolve({ type, results })
									})
									.catch(reject)
						}),
						(Rule.prototype.runChecksSync = function runChecksSync(type, node, options, context) {
							var self2 = this,
								results = []
							return (
								this[type].forEach(function (c) {
									var check = self2._audit.checks[c.id || c],
										option = get_check_option_default(check, self2.id, options)
									results.push(check.runSync(node, option, context))
								}),
								{
									type,
									results: (results = results.filter(function (check) {
										return check
									})),
								}
							)
						}),
						(Rule.prototype.run = function run2(context) {
							var _this6 = this,
								options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
								resolve = arguments.length > 2 ? arguments[2] : void 0,
								reject = arguments.length > 3 ? arguments[3] : void 0
							options.performanceTimer && this._trackPerformance()
							var nodes,
								q = queue_default(),
								ruleResult = new rule_result_default(this)
							try {
								nodes = this.gatherAndMatchNodes(context, options)
							} catch (error) {
								return void reject(new SupportError({ cause: error, ruleId: this.id }))
							}
							options.performanceTimer && this._logGatherPerformance(nodes),
								nodes.forEach(function (node) {
									q.defer(function (resolveNode, rejectNode) {
										var checkQueue = queue_default()
										;['any', 'all', 'none'].forEach(function (type) {
											checkQueue.defer(function (res, rej) {
												_this6.runChecks(type, node, options, context, res, rej)
											})
										}),
											checkQueue
												.then(function (results) {
													var result = getResult(results)
													result &&
														((result.node = new dq_element_default(node, options)),
														ruleResult.nodes.push(result),
														_this6.reviewOnFail &&
															(['any', 'all'].forEach(function (type) {
																result[type].forEach(function (checkResult) {
																	!1 === checkResult.result && (checkResult.result = void 0)
																})
															}),
															result.none.forEach(function (checkResult) {
																!0 === checkResult.result && (checkResult.result = void 0)
															}))),
														resolveNode()
												})
												.catch(function (err2) {
													return rejectNode(err2)
												})
									})
								}),
								q.defer(function (resolve2) {
									return setTimeout(resolve2, 0)
								}),
								options.performanceTimer && this._logRulePerformance(),
								q
									.then(function () {
										return resolve(ruleResult)
									})
									.catch(function (error) {
										return reject(error)
									})
						}),
						(Rule.prototype.runSync = function runSync2(context) {
							var _this7 = this,
								options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
							options.performanceTimer && this._trackPerformance()
							var nodes,
								ruleResult = new rule_result_default(this)
							try {
								nodes = this.gatherAndMatchNodes(context, options)
							} catch (error) {
								throw new SupportError({ cause: error, ruleId: this.id })
							}
							return (
								options.performanceTimer && this._logGatherPerformance(nodes),
								nodes.forEach(function (node) {
									var results = []
									;['any', 'all', 'none'].forEach(function (type) {
										results.push(_this7.runChecksSync(type, node, options, context))
									})
									var result = getResult(results)
									result &&
										((result.node = node.actualNode ? new dq_element_default(node, options) : null),
										ruleResult.nodes.push(result),
										_this7.reviewOnFail &&
											(['any', 'all'].forEach(function (type) {
												result[type].forEach(function (checkResult) {
													!1 === checkResult.result && (checkResult.result = void 0)
												})
											}),
											result.none.forEach(function (checkResult) {
												!0 === checkResult.result && (checkResult.result = void 0)
											})))
								}),
								options.performanceTimer && this._logRulePerformance(),
								ruleResult
							)
						}),
						(Rule.prototype._trackPerformance = function _trackPerformance() {
							;(this._markStart = 'mark_rule_start_' + this.id),
								(this._markEnd = 'mark_rule_end_' + this.id),
								(this._markChecksStart = 'mark_runchecks_start_' + this.id),
								(this._markChecksEnd = 'mark_runchecks_end_' + this.id)
						}),
						(Rule.prototype._logGatherPerformance = function _logGatherPerformance(nodes) {
							log_default(
								'gather (',
								nodes.length,
								'):',
								performance_timer_default.timeElapsed() + 'ms',
							),
								performance_timer_default.mark(this._markChecksStart)
						}),
						(Rule.prototype._logRulePerformance = function _logRulePerformance() {
							performance_timer_default.mark(this._markChecksEnd),
								performance_timer_default.mark(this._markEnd),
								performance_timer_default.measure(
									'runchecks_' + this.id,
									this._markChecksStart,
									this._markChecksEnd,
								),
								performance_timer_default.measure('rule_' + this.id, this._markStart, this._markEnd)
						}),
						(Rule.prototype.gatherAndMatchNodes = function gatherAndMatchNodes(context, options) {
							var _this8 = this,
								markMatchesStart = 'mark_matches_start_' + this.id,
								markMatchesEnd = 'mark_matches_end_' + this.id,
								nodes = this.gather(context, options)
							return (
								options.performanceTimer && performance_timer_default.mark(markMatchesStart),
								(nodes = nodes.filter(function (node) {
									return _this8.matches(node.actualNode, node, context)
								})),
								options.performanceTimer &&
									(performance_timer_default.mark(markMatchesEnd),
									performance_timer_default.measure(
										'rule_' + this.id + '#matches',
										markMatchesStart,
										markMatchesEnd,
									)),
								nodes
							)
						}),
						(Rule.prototype.after = function after(result, options) {
							var _this9 = this,
								afterChecks = (function findAfterChecks(rule) {
									return get_all_checks_default(rule)
										.map(function (c) {
											var check = rule._audit.checks[c.id || c]
											return check && 'function' == typeof check.after ? check : null
										})
										.filter(Boolean)
								})(this),
								ruleID = this.id
							return (
								afterChecks.forEach(function (check) {
									var beforeResults = (function findCheckResults(nodes, checkID) {
											var checkResults = []
											return (
												nodes.forEach(function (nodeResult) {
													get_all_checks_default(nodeResult).forEach(function (checkResult) {
														checkResult.id === checkID &&
															((checkResult.node = nodeResult.node), checkResults.push(checkResult))
													})
												}),
												checkResults
											)
										})(result.nodes, check.id),
										option = get_check_option_default(check, ruleID, options),
										afterResults = check.after(beforeResults, option)
									_this9.reviewOnFail &&
										afterResults.forEach(function (checkResult) {
											var changeAnyAllResults =
													(_this9.any.includes(checkResult.id) ||
														_this9.all.includes(checkResult.id)) &&
													!1 === checkResult.result,
												changeNoneResult =
													_this9.none.includes(checkResult.id) && !0 === checkResult.result
											;(changeAnyAllResults || changeNoneResult) && (checkResult.result = void 0)
										}),
										beforeResults.forEach(function (item) {
											delete item.node, -1 === afterResults.indexOf(item) && (item.filtered = !0)
										})
								}),
								(result.nodes = (function sanitizeNodes(result) {
									var checkTypes2 = ['any', 'all', 'none'],
										nodes = result.nodes.filter(function (detail) {
											var length = 0
											return (
												checkTypes2.forEach(function (type) {
													;(detail[type] = (function filterChecks(checks) {
														return checks.filter(function (check) {
															return !0 !== check.filtered
														})
													})(detail[type])),
														(length += detail[type].length)
												}),
												length > 0
											)
										})
									return (
										result.pageLevel &&
											nodes.length &&
											(nodes = [
												nodes.reduce(function (a, b) {
													if (a)
														return (
															checkTypes2.forEach(function (type) {
																a[type].push.apply(a[type], b[type])
															}),
															a
														)
												}),
											]),
										nodes
									)
								})(result)),
								result
							)
						}),
						(Rule.prototype.configure = function configure3(spec) {
							spec.hasOwnProperty('selector') && (this.selector = spec.selector),
								spec.hasOwnProperty('excludeHidden') &&
									(this.excludeHidden =
										'boolean' != typeof spec.excludeHidden || spec.excludeHidden),
								spec.hasOwnProperty('enabled') &&
									(this.enabled = 'boolean' != typeof spec.enabled || spec.enabled),
								spec.hasOwnProperty('pageLevel') &&
									(this.pageLevel = 'boolean' == typeof spec.pageLevel && spec.pageLevel),
								spec.hasOwnProperty('reviewOnFail') &&
									(this.reviewOnFail = 'boolean' == typeof spec.reviewOnFail && spec.reviewOnFail),
								spec.hasOwnProperty('any') && (this.any = spec.any),
								spec.hasOwnProperty('all') && (this.all = spec.all),
								spec.hasOwnProperty('none') && (this.none = spec.none),
								spec.hasOwnProperty('tags') && (this.tags = spec.tags),
								spec.hasOwnProperty('actIds') && (this.actIds = spec.actIds),
								spec.hasOwnProperty('matches') &&
									(this.matches = createExecutionContext(spec.matches)),
								spec.impact &&
									(assert_default(
										constants_default.impact.includes(spec.impact),
										'Impact '.concat(spec.impact, ' is not a valid impact'),
									),
									(this.impact = spec.impact))
						})
					var rule_default = Rule,
						import_dot2 = __toModule(require_doT()),
						dotRegex = /\{\{.+?\}\}/g
					function getDefaultOrigin() {
						return window.origin
							? window.origin
							: window.location && window.location.origin
							? window.location.origin
							: void 0
					}
					function unpackToObject(collection, audit, method) {
						var i, l
						for (i = 0, l = collection.length; i < l; i++) audit[method](collection[i])
					}
					var mergeCheckLocale = function mergeCheckLocale(a, b) {
							var pass = b.pass,
								fail = b.fail
							return (
								'string' == typeof pass &&
									dotRegex.test(pass) &&
									(pass = import_dot2.default.compile(pass)),
								'string' == typeof fail &&
									dotRegex.test(fail) &&
									(fail = import_dot2.default.compile(fail)),
								_extends({}, a, {
									messages: {
										pass: pass || a.messages.pass,
										fail: fail || a.messages.fail,
										incomplete:
											'object' === _typeof(a.messages.incomplete)
												? _extends({}, a.messages.incomplete, b.incomplete)
												: b.incomplete,
									},
								})
							)
						},
						mergeRuleLocale = function mergeRuleLocale(a, b) {
							var help = b.help,
								description = b.description
							return (
								'string' == typeof help &&
									dotRegex.test(help) &&
									(help = import_dot2.default.compile(help)),
								'string' == typeof description &&
									dotRegex.test(description) &&
									(description = import_dot2.default.compile(description)),
								_extends({}, a, { help: help || a.help, description: description || a.description })
							)
						},
						mergeFailureMessage = function mergeFailureMessage(a, b) {
							var failureMessage = b.failureMessage
							return (
								'string' == typeof failureMessage &&
									dotRegex.test(failureMessage) &&
									(failureMessage = import_dot2.default.compile(failureMessage)),
								_extends({}, a, { failureMessage: failureMessage || a.failureMessage })
							)
						},
						Audit = (function () {
							function Audit(audit) {
								_classCallCheck(this, Audit),
									(this.lang = 'en'),
									(this.defaultConfig = audit),
									(this.standards = standards_default),
									this._init(),
									(this._defaultLocale = null)
							}
							return (
								_createClass(Audit, [
									{
										key: '_setDefaultLocale',
										value: function _setDefaultLocale() {
											if (!this._defaultLocale) {
												for (
													var locale = {
															checks: {},
															rules: {},
															failureSummaries: {},
															incompleteFallbackMessage: '',
															lang: this.lang,
														},
														checkIDs = Object.keys(this.data.checks),
														_i27 = 0;
													_i27 < checkIDs.length;
													_i27++
												) {
													var id = checkIDs[_i27],
														_check$messages = this.data.checks[id].messages,
														pass = _check$messages.pass,
														fail = _check$messages.fail,
														incomplete = _check$messages.incomplete
													locale.checks[id] = { pass, fail, incomplete }
												}
												for (
													var ruleIDs = Object.keys(this.data.rules), _i28 = 0;
													_i28 < ruleIDs.length;
													_i28++
												) {
													var _id = ruleIDs[_i28],
														rule = this.data.rules[_id],
														description = rule.description,
														help = rule.help
													locale.rules[_id] = { description, help }
												}
												for (
													var failureSummaries = Object.keys(this.data.failureSummaries), _i29 = 0;
													_i29 < failureSummaries.length;
													_i29++
												) {
													var type = failureSummaries[_i29],
														failureMessage = this.data.failureSummaries[type].failureMessage
													locale.failureSummaries[type] = { failureMessage }
												}
												;(locale.incompleteFallbackMessage = this.data.incompleteFallbackMessage),
													(this._defaultLocale = locale)
											}
										},
									},
									{
										key: '_resetLocale',
										value: function _resetLocale() {
											var defaultLocale = this._defaultLocale
											defaultLocale && this.applyLocale(defaultLocale)
										},
									},
									{
										key: '_applyCheckLocale',
										value: function _applyCheckLocale(checks) {
											for (var keys = Object.keys(checks), _i30 = 0; _i30 < keys.length; _i30++) {
												var id = keys[_i30]
												if (!this.data.checks[id])
													throw new Error('Locale provided for unknown check: "'.concat(id, '"'))
												this.data.checks[id] = mergeCheckLocale(this.data.checks[id], checks[id])
											}
										},
									},
									{
										key: '_applyRuleLocale',
										value: function _applyRuleLocale(rules) {
											for (var keys = Object.keys(rules), _i31 = 0; _i31 < keys.length; _i31++) {
												var id = keys[_i31]
												if (!this.data.rules[id])
													throw new Error('Locale provided for unknown rule: "'.concat(id, '"'))
												this.data.rules[id] = mergeRuleLocale(this.data.rules[id], rules[id])
											}
										},
									},
									{
										key: '_applyFailureSummaries',
										value: function _applyFailureSummaries(messages) {
											for (var keys = Object.keys(messages), _i32 = 0; _i32 < keys.length; _i32++) {
												var key = keys[_i32]
												if (!this.data.failureSummaries[key])
													throw new Error(
														'Locale provided for unknown failureMessage: "'.concat(key, '"'),
													)
												this.data.failureSummaries[key] = mergeFailureMessage(
													this.data.failureSummaries[key],
													messages[key],
												)
											}
										},
									},
									{
										key: 'applyLocale',
										value: function applyLocale(locale) {
											this._setDefaultLocale(),
												locale.checks && this._applyCheckLocale(locale.checks),
												locale.rules && this._applyRuleLocale(locale.rules),
												locale.failureSummaries &&
													this._applyFailureSummaries(locale.failureSummaries, 'failureSummaries'),
												locale.incompleteFallbackMessage &&
													(this.data.incompleteFallbackMessage = (function mergeFallbackMessage(
														a,
														b,
													) {
														return (
															'string' == typeof b &&
																dotRegex.test(b) &&
																(b = import_dot2.default.compile(b)),
															b || a
														)
													})(
														this.data.incompleteFallbackMessage,
														locale.incompleteFallbackMessage,
													)),
												locale.lang && (this.lang = locale.lang)
										},
									},
									{
										key: 'setAllowedOrigins',
										value: function setAllowedOrigins(allowedOrigins) {
											var defaultOrigin = getDefaultOrigin()
											this.allowedOrigins = []
											var _step8,
												_iterator8 = _createForOfIteratorHelper(allowedOrigins)
											try {
												for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
													var origin = _step8.value
													if (origin === constants_default.allOrigins)
														return void (this.allowedOrigins = ['*'])
													origin !== constants_default.sameOrigin
														? this.allowedOrigins.push(origin)
														: defaultOrigin && this.allowedOrigins.push(defaultOrigin)
												}
											} catch (err) {
												_iterator8.e(err)
											} finally {
												_iterator8.f()
											}
										},
									},
									{
										key: '_init',
										value: function _init() {
											var audit = (function getDefaultConfiguration(audit) {
												var config
												if (
													(audit
														? ((config = clone_default(audit)).commons = audit.commons)
														: (config = {}),
													(config.reporter = config.reporter || null),
													(config.noHtml = config.noHtml || !1),
													!config.allowedOrigins)
												) {
													var defaultOrigin = getDefaultOrigin()
													config.allowedOrigins = defaultOrigin ? [defaultOrigin] : []
												}
												return (
													(config.rules = config.rules || []),
													(config.checks = config.checks || []),
													(config.data = _extends({ checks: {}, rules: {} }, config.data)),
													config
												)
											})(this.defaultConfig)
											;(this.lang = audit.lang || 'en'),
												(this.reporter = audit.reporter),
												(this.commands = {}),
												(this.rules = []),
												(this.checks = {}),
												(this.brand = 'axe'),
												(this.application = 'axeAPI'),
												(this.tagExclude = ['experimental']),
												(this.noHtml = audit.noHtml),
												(this.allowedOrigins = audit.allowedOrigins),
												unpackToObject(audit.rules, this, 'addRule'),
												unpackToObject(audit.checks, this, 'addCheck'),
												(this.data = {}),
												(this.data.checks = (audit.data && audit.data.checks) || {}),
												(this.data.rules = (audit.data && audit.data.rules) || {}),
												(this.data.failureSummaries =
													(audit.data && audit.data.failureSummaries) || {}),
												(this.data.incompleteFallbackMessage =
													(audit.data && audit.data.incompleteFallbackMessage) || ''),
												this._constructHelpUrls()
										},
									},
									{
										key: 'registerCommand',
										value: function registerCommand(command) {
											this.commands[command.id] = command.callback
										},
									},
									{
										key: 'addRule',
										value: function addRule(spec) {
											spec.metadata && (this.data.rules[spec.id] = spec.metadata)
											var rule = this.getRule(spec.id)
											rule ? rule.configure(spec) : this.rules.push(new rule_default(spec, this))
										},
									},
									{
										key: 'addCheck',
										value: function addCheck(spec) {
											var metadata = spec.metadata
											'object' === _typeof(metadata) &&
												((this.data.checks[spec.id] = metadata),
												'object' === _typeof(metadata.messages) &&
													Object.keys(metadata.messages)
														.filter(function (prop) {
															return (
																metadata.messages.hasOwnProperty(prop) &&
																'string' == typeof metadata.messages[prop]
															)
														})
														.forEach(function (prop) {
															0 === metadata.messages[prop].indexOf('function') &&
																(metadata.messages[prop] = new Function(
																	'return ' + metadata.messages[prop] + ';',
																)())
														})),
												this.checks[spec.id]
													? this.checks[spec.id].configure(spec)
													: (this.checks[spec.id] = new check_default(spec))
										},
									},
									{
										key: 'run',
										value: function run(context, options, resolve, reject) {
											this.normalizeOptions(options), (axe._selectCache = [])
											var allRulesToRun = (function getRulesToRun(rules, context, options) {
													var base = { now: [], later: [] },
														splitRules = rules.reduce(function (out, rule) {
															return rule_should_run_default(rule, context, options)
																? rule.preload
																	? (out.later.push(rule), out)
																	: (out.now.push(rule), out)
																: out
														}, base)
													return splitRules
												})(this.rules, context, options),
												runNowRules = allRulesToRun.now,
												runLaterRules = allRulesToRun.later,
												nowRulesQueue = queue_default()
											runNowRules.forEach(function (rule) {
												nowRulesQueue.defer(getDefferedRule(rule, context, options))
											})
											var preloaderQueue = queue_default()
											runLaterRules.length &&
												preloaderQueue.defer(function (resolve2) {
													preload_default(options)
														.then(function (assets) {
															return resolve2(assets)
														})
														.catch(function (err2) {
															console.warn("Couldn't load preload assets: ", err2), resolve2(void 0)
														})
												})
											var queueForNowRulesAndPreloader = queue_default()
											queueForNowRulesAndPreloader.defer(nowRulesQueue),
												queueForNowRulesAndPreloader.defer(preloaderQueue),
												queueForNowRulesAndPreloader
													.then(function (nowRulesAndPreloaderResults) {
														var assetsFromQueue = nowRulesAndPreloaderResults.pop()
														if (assetsFromQueue && assetsFromQueue.length) {
															var assets = assetsFromQueue[0]
															assets && (context = _extends({}, context, assets))
														}
														var nowRulesResults = nowRulesAndPreloaderResults[0]
														if (!runLaterRules.length)
															return (
																(axe._selectCache = void 0),
																void resolve(
																	nowRulesResults.filter(function (result) {
																		return !!result
																	}),
																)
															)
														var laterRulesQueue = queue_default()
														runLaterRules.forEach(function (rule) {
															var deferredRule = getDefferedRule(rule, context, options)
															laterRulesQueue.defer(deferredRule)
														}),
															laterRulesQueue
																.then(function (laterRuleResults) {
																	;(axe._selectCache = void 0),
																		resolve(
																			nowRulesResults
																				.concat(laterRuleResults)
																				.filter(function (result) {
																					return !!result
																				}),
																		)
																})
																.catch(reject)
													})
													.catch(reject)
										},
									},
									{
										key: 'after',
										value: function after(results, options) {
											var rules = this.rules
											return results.map(function (ruleResult) {
												var rule = find_by_default(rules, 'id', ruleResult.id)
												if (!rule)
													throw new Error(
														'Result for unknown rule. You may be running mismatch axe-core versions',
													)
												return rule.after(ruleResult, options)
											})
										},
									},
									{
										key: 'getRule',
										value: function getRule(ruleId) {
											return this.rules.find(function (rule) {
												return rule.id === ruleId
											})
										},
									},
									{
										key: 'normalizeOptions',
										value: function normalizeOptions(options) {
											var tags = [],
												ruleIds = []
											if (
												(this.rules.forEach(function (rule) {
													ruleIds.push(rule.id),
														rule.tags.forEach(function (tag) {
															tags.includes(tag) || tags.push(tag)
														})
												}),
												['object', 'string'].includes(_typeof(options.runOnly)))
											) {
												if (
													('string' == typeof options.runOnly &&
														(options.runOnly = [options.runOnly]),
													Array.isArray(options.runOnly))
												) {
													var hasTag = options.runOnly.find(function (value) {
															return tags.includes(value)
														}),
														hasRule = options.runOnly.find(function (value) {
															return ruleIds.includes(value)
														})
													if (hasTag && hasRule)
														throw new Error('runOnly cannot be both rules and tags')
													options.runOnly = hasRule
														? { type: 'rule', values: options.runOnly }
														: { type: 'tag', values: options.runOnly }
												}
												var only = options.runOnly
												if (
													(only.value &&
														!only.values &&
														((only.values = only.value), delete only.value),
													!Array.isArray(only.values) || 0 === only.values.length)
												)
													throw new Error('runOnly.values must be a non-empty array')
												if (['rule', 'rules'].includes(only.type))
													(only.type = 'rule'),
														only.values.forEach(function (ruleId) {
															if (!ruleIds.includes(ruleId))
																throw new Error('unknown rule `' + ruleId + '` in options.runOnly')
														})
												else {
													if (!['tag', 'tags', void 0].includes(only.type))
														throw new Error("Unknown runOnly type '".concat(only.type, "'"))
													only.type = 'tag'
													var unmatchedTags = only.values.filter(function (tag) {
														return !tags.includes(tag) && !/wcag2[1-3]a{1,3}/.test(tag)
													})
													0 !== unmatchedTags.length &&
														axe.log('Could not find tags `' + unmatchedTags.join('`, `') + '`')
												}
											}
											return (
												'object' === _typeof(options.rules) &&
													Object.keys(options.rules).forEach(function (ruleId) {
														if (!ruleIds.includes(ruleId))
															throw new Error('unknown rule `' + ruleId + '` in options.rules')
													}),
												options
											)
										},
									},
									{
										key: 'setBranding',
										value: function setBranding(branding) {
											var previous = { brand: this.brand, application: this.application }
											'string' == typeof branding && (this.application = branding),
												branding &&
													branding.hasOwnProperty('brand') &&
													branding.brand &&
													'string' == typeof branding.brand &&
													(this.brand = branding.brand),
												branding &&
													branding.hasOwnProperty('application') &&
													branding.application &&
													'string' == typeof branding.application &&
													(this.application = branding.application),
												this._constructHelpUrls(previous)
										},
									},
									{
										key: '_constructHelpUrls',
										value: function _constructHelpUrls() {
											var _this10 = this,
												previous =
													arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
												version = (axe.version.match(/^[1-9][0-9]*\.[0-9]+/) || ['x.y'])[0]
											this.rules.forEach(function (rule) {
												_this10.data.rules[rule.id] || (_this10.data.rules[rule.id] = {})
												var metaData = _this10.data.rules[rule.id]
												;('string' != typeof metaData.helpUrl ||
													(previous &&
														metaData.helpUrl === getHelpUrl(previous, rule.id, version))) &&
													(metaData.helpUrl = getHelpUrl(_this10, rule.id, version))
											})
										},
									},
									{
										key: 'resetRulesAndChecks',
										value: function resetRulesAndChecks() {
											this._init(), this._resetLocale()
										},
									},
								]),
								Audit
							)
						})()
					function getDefferedRule(rule, context, options) {
						return (
							options.performanceTimer &&
								performance_timer_default.mark('mark_rule_start_' + rule.id),
							function (resolve, reject) {
								rule.run(
									context,
									options,
									function (ruleResult) {
										resolve(ruleResult)
									},
									function (err2) {
										if (options.debug) reject(err2)
										else {
											var errResult = Object.assign(new rule_result_default(rule), {
												result: constants_default.CANTTELL,
												description: 'An error occured while running this rule',
												message: err2.message,
												stack: err2.stack,
												error: err2,
												errorNode: err2.errorNode,
											})
											resolve(errResult)
										}
									},
								)
							}
						)
					}
					function getHelpUrl(_ref107, ruleId, version) {
						var brand = _ref107.brand,
							application = _ref107.application,
							lang = _ref107.lang
						return (
							constants_default.helpUrlBase +
							brand +
							'/' +
							(version || axe.version.substring(0, axe.version.lastIndexOf('.'))) +
							'/' +
							ruleId +
							'?application=' +
							encodeURIComponent(application) +
							(lang && 'en' !== lang ? '&lang=' + encodeURIComponent(lang) : '')
						)
					}
					var audit_default = Audit
					function setupGlobals(context) {
						var hasWindow = window && 'Node' in window && 'NodeList' in window,
							hasDoc = !!document
						if (!hasWindow || !hasDoc) {
							if (!context || !context.ownerDocument)
								throw new Error(
									'Required "window" or "document" globals not defined and cannot be deduced from the context. Either set the globals before running or pass in a valid Element.',
								)
							hasDoc ||
								(cache_default.set('globalDocumentSet', !0), (document = context.ownerDocument)),
								hasWindow ||
									(cache_default.set('globalWindowSet', !0), (window = document.defaultView))
						}
					}
					function resetGlobals() {
						cache_default.get('globalDocumentSet') &&
							(cache_default.set('globalDocumentSet', !1), (document = null)),
							cache_default.get('globalWindowSet') &&
								(cache_default.set('globalWindowSet', !1), (window = null))
					}
					var teardown_default = function teardown() {
						resetGlobals(),
							axe._memoizedFns.forEach(function (fn) {
								return fn.clear()
							}),
							cache_default.clear(),
							(axe._tree = void 0),
							(axe._selectorData = void 0),
							(axe._selectCache = void 0)
					}
					var run_rules_default = function runRules(context, options, resolve, reject) {
						try {
							;(context = new Context(context)),
								(axe._tree = context.flatTree),
								(axe._selectorData = _getSelectorData(context.flatTree))
						} catch (e) {
							return teardown_default(), reject(e)
						}
						var q = queue_default(),
							audit = axe._audit
						options.performanceTimer && performance_timer_default.auditStart(),
							context.frames.length &&
								!1 !== options.iframes &&
								q.defer(function (res, rej) {
									_collectResultsFromFrames(context, options, 'rules', null, res, rej)
								}),
							q.defer(function (res, rej) {
								audit.run(context, options, res, rej)
							}),
							q
								.then(function (data2) {
									try {
										options.performanceTimer && performance_timer_default.auditEnd()
										var results = merge_results_default(
											data2.map(function (results2) {
												return { results: results2 }
											}),
										)
										context.initiator &&
											((results = audit.after(results, options)).forEach(publish_metadata_default),
											(results = results.map(finalize_result_default)))
										try {
											resolve(results, teardown_default)
										} catch (e) {
											teardown_default(), log_default(e)
										}
									} catch (e) {
										teardown_default(), reject(e)
									}
								})
								.catch(function (e) {
									teardown_default(), reject(e)
								})
					}
					window.top !== window &&
						(_respondable.subscribe('axe.start', function runCommand(data2, keepalive, callback) {
							var resolve = callback,
								reject = function reject2(err2) {
									err2 instanceof Error == 0 && (err2 = new Error(err2)), callback(err2)
								},
								context = (data2 && data2.context) || {}
							context.hasOwnProperty('include') &&
								!context.include.length &&
								(context.include = [document])
							var options = (data2 && data2.options) || {}
							switch (data2.command) {
								case 'rules':
									return run_rules_default(
										context,
										options,
										function (results, cleanup3) {
											resolve(results), cleanup3()
										},
										reject,
									)
								case 'cleanup-plugin':
									return cleanup_default(resolve, reject)
								default:
									if (axe._audit && axe._audit.commands && axe._audit.commands[data2.command])
										return axe._audit.commands[data2.command](data2, callback)
							}
						}),
						_respondable.subscribe('axe.ping', function (data2, keepalive, respond) {
							respond({ axe: !0 })
						}))
					var load_default = function load(audit) {
						axe._audit = new audit_default(audit)
					}
					function Plugin(spec) {
						;(this._run = spec.run),
							(this._collect = spec.collect),
							(this._registry = {}),
							spec.commands.forEach(function (command) {
								axe._audit.registerCommand(command)
							})
					}
					;(Plugin.prototype.run = function run3() {
						return this._run.apply(this, arguments)
					}),
						(Plugin.prototype.collect = function collect() {
							return this._collect.apply(this, arguments)
						}),
						(Plugin.prototype.cleanup = function cleanup2(done) {
							var q = axe.utils.queue(),
								that = this
							Object.keys(this._registry).forEach(function (key) {
								q.defer(function (_done) {
									that._registry[key].cleanup(_done)
								})
							}),
								q.then(done)
						}),
						(Plugin.prototype.add = function add(impl) {
							this._registry[impl.id] = impl
						})
					var plugins_default = function registerPlugin(plugin) {
						axe.plugins[plugin.id] = new Plugin(plugin)
					}
					var reset_default = function reset() {
						var audit = axe._audit
						if (!audit) throw new Error('No audit configured')
						audit.resetRulesAndChecks(),
							(function resetStandards() {
								Object.keys(standards).forEach(function (propName) {
									standards[propName] = originals[propName]
								})
							})()
					}
					var run_virtual_rule_default = function runVirtualRule(ruleId, vNode) {
						var options = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
						;(options.reporter = options.reporter || axe._audit.reporter || 'v1'),
							(axe._selectorData = {}),
							vNode instanceof abstract_virtual_node_default ||
								(vNode = new serial_virtual_node_default(vNode))
						var rule = get_rule_default(ruleId)
						if (!rule) throw new Error('unknown rule `' + ruleId + '`')
						var context = { initiator: !0, include: [vNode] },
							rawResults = (rule = Object.create(rule, { excludeHidden: { value: !1 } })).runSync(
								context,
								options,
							)
						publish_metadata_default(rawResults), finalize_result_default(rawResults)
						var results = aggregate_result_default([rawResults])
						return (
							results.violations.forEach(function (result) {
								return result.nodes.forEach(function (nodeResult) {
									nodeResult.failureSummary = failure_summary_default(nodeResult)
								})
							}),
							_extends({}, _getEnvironmentData(), results, { toolOptions: options })
						)
					}
					function normalizeRunParams(_ref108) {
						var _ref110,
							_options$reporter,
							_axe$_audit,
							_ref109 = _slicedToArray(_ref108, 3),
							context = _ref109[0],
							options = _ref109[1],
							callback = _ref109[2],
							typeErr = new TypeError('axe.run arguments are invalid')
						if (
							!(function isContext(potential) {
								switch (!0) {
									case 'string' == typeof potential:
									case Array.isArray(potential):
									case window.Node && potential instanceof window.Node:
									case window.NodeList && potential instanceof window.NodeList:
										return !0
									case 'object' !== _typeof(potential):
										return !1
									case void 0 !== potential.include:
									case void 0 !== potential.exclude:
									case 'number' == typeof potential.length:
										return !0
									default:
										return !1
								}
							})(context)
						) {
							if (void 0 !== callback) throw typeErr
							;(callback = options), (options = context), (context = document)
						}
						if ('object' !== _typeof(options)) {
							if (void 0 !== callback) throw typeErr
							;(callback = options), (options = {})
						}
						if ('function' != typeof callback && void 0 !== callback) throw typeErr
						return (
							((options = clone_default(options)).reporter =
								null !==
									(_ref110 =
										null !== (_options$reporter = options.reporter) && void 0 !== _options$reporter
											? _options$reporter
											: null === (_axe$_audit = axe._audit) || void 0 === _axe$_audit
											? void 0
											: _axe$_audit.reporter) && void 0 !== _ref110
									? _ref110
									: 'v1'),
							{ context, options, callback }
						)
					}
					var noop2 = function noop2() {}
					function getPromiseHandlers(callback) {
						var thenable, reject, resolve
						return (
							'function' == typeof Promise && callback === noop2
								? (thenable = new Promise(function (_resolve, _reject) {
										;(reject = _reject), (resolve = _resolve)
								  }))
								: (resolve = reject = noop2),
							{ thenable, reject, resolve }
						)
					}
					function createReport(rawResults, options, respond) {
						var results = getReporter(options.reporter)(rawResults, options, respond)
						void 0 !== results && respond(results)
					}
					function handleError(err2, callback) {
						if ((resetGlobals(), 'function' != typeof callback || callback === noop2)) throw err2
						callback(err2.message)
					}
					function serializeNode(_ref113) {
						var node = _ref113.node,
							nodeResult = _objectWithoutProperties(_ref113, _excluded9)
						nodeResult.node = node.toJSON()
						for (var _i33 = 0, _arr2 = ['any', 'all', 'none']; _i33 < _arr2.length; _i33++) {
							var type = _arr2[_i33]
							nodeResult[type] = nodeResult[type].map(function (_ref114) {
								var relatedNodes = _ref114.relatedNodes
								return _extends({}, _objectWithoutProperties(_ref114, _excluded10), {
									relatedNodes: relatedNodes.map(function (node2) {
										return node2.toJSON()
									}),
								})
							})
						}
						return nodeResult
					}
					function setFrameSpec(partialResults) {
						var _step9,
							frameStack = [],
							_iterator9 = _createForOfIteratorHelper(partialResults)
						try {
							for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
								var partialResult = _step9.value,
									frameSpec = frameStack.shift()
								if (partialResult) {
									partialResult.frameSpec = null != frameSpec ? frameSpec : null
									var frameSpecs = getMergedFrameSpecs(partialResult)
									frameStack.unshift.apply(frameStack, _toConsumableArray(frameSpecs))
								}
							}
						} catch (err) {
							_iterator9.e(err)
						} finally {
							_iterator9.f()
						}
					}
					function getMergedFrameSpecs(_ref117) {
						var childFrameSpecs = _ref117.frames,
							parentFrameSpec = _ref117.frameSpec
						return parentFrameSpec
							? childFrameSpecs.map(function (childFrameSpec) {
									return dq_element_default.mergeSpecs(childFrameSpec, parentFrameSpec)
							  })
							: childFrameSpecs
					}
					function createReport2(results, options) {
						return new Promise(function (resolve) {
							getReporter(options.reporter)(results, options, resolve)
						})
					}
					var setup_default = function setup(node) {
							if (axe._tree)
								throw new Error(
									'Axe is already setup. Call `axe.teardown()` before calling `axe.setup` again.',
								)
							return (
								(axe._tree = get_flattened_tree_default(node)),
								(axe._selectorData = _getSelectorData(axe._tree)),
								axe._tree[0]
							)
						},
						na_default = function naReporter(results, options, callback) {
							console.warn(
								'"na" reporter will be deprecated in axe v4.0. Use the "v2" reporter instead.',
							),
								'function' == typeof options && ((callback = options), (options = {}))
							var _options2 = options,
								environmentData = _options2.environmentData,
								toolOptions = _objectWithoutProperties(_options2, _excluded11)
							callback(
								_extends(
									{},
									_getEnvironmentData(environmentData),
									{ toolOptions },
									process_aggregate_default(results, options),
								),
							)
						},
						no_passes_default = function noPassesReporter(results, options, callback) {
							'function' == typeof options && ((callback = options), (options = {}))
							var _options3 = options,
								environmentData = _options3.environmentData,
								toolOptions = _objectWithoutProperties(_options3, _excluded12)
							options.resultTypes = ['violations']
							var violations = process_aggregate_default(results, options).violations
							callback(
								_extends({}, _getEnvironmentData(environmentData), { toolOptions, violations }),
							)
						},
						raw_default = function rawReporter(results, options, callback) {
							if (
								('function' == typeof options && ((callback = options), (options = {})),
								!results || !Array.isArray(results))
							)
								return callback(results)
							callback(
								results.map(function (result) {
									for (
										var transformedResult = _extends({}, result),
											_i34 = 0,
											_types = ['passes', 'violations', 'incomplete', 'inapplicable'];
										_i34 < _types.length;
										_i34++
									) {
										var type = _types[_i34]
										transformedResult[type] &&
											Array.isArray(transformedResult[type]) &&
											(transformedResult[type] = transformedResult[type].map(function (_ref118) {
												var _node,
													node = _ref118.node,
													typeResult = _objectWithoutProperties(_ref118, _excluded13)
												return _extends(
													{
														node: (node =
															'function' ==
															typeof (null === (_node = node) || void 0 === _node
																? void 0
																: _node.toJSON)
																? node.toJSON()
																: node),
													},
													typeResult,
												)
											}))
									}
									return transformedResult
								}),
							)
						},
						raw_env_default = function rawEnvReporter(results, options, callback) {
							'function' == typeof options && ((callback = options), (options = {}))
							var _options4 = options,
								environmentData = _options4.environmentData,
								toolOptions = _objectWithoutProperties(_options4, _excluded14)
							raw_default(results, toolOptions, function (raw) {
								var env = _getEnvironmentData(environmentData)
								callback({ raw, env })
							})
						},
						v1_default = function v1Reporter(results, options, callback) {
							'function' == typeof options && ((callback = options), (options = {}))
							var _options5 = options,
								environmentData = _options5.environmentData,
								toolOptions = _objectWithoutProperties(_options5, _excluded15),
								out = process_aggregate_default(results, options),
								addFailureSummaries = function addFailureSummaries(result) {
									result.nodes.forEach(function (nodeResult) {
										nodeResult.failureSummary = failure_summary_default(nodeResult)
									})
								}
							out.incomplete.forEach(addFailureSummaries),
								out.violations.forEach(addFailureSummaries),
								callback(_extends({}, _getEnvironmentData(environmentData), { toolOptions }, out))
						},
						v2_default = function v2Reporter(results, options, callback) {
							'function' == typeof options && ((callback = options), (options = {}))
							var _options6 = options,
								environmentData = _options6.environmentData,
								toolOptions = _objectWithoutProperties(_options6, _excluded16),
								out = process_aggregate_default(results, options)
							callback(_extends({}, _getEnvironmentData(environmentData), { toolOptions }, out))
						},
						exposed_for_testing_default = {
							base: {
								Audit: audit_default,
								CheckResult: check_result_default,
								Check: check_default,
								Context,
								RuleResult: rule_result_default,
								Rule: rule_default,
								metadataFunctionMap: metadata_function_map_default,
							},
							public: { reporters },
							helpers: {
								failureSummary: failure_summary_default,
								incompleteFallbackMessage,
								processAggregate: process_aggregate_default,
							},
							utils: {
								setDefaultFrameMessenger,
								cacheNodeSelectors,
								getNodesMatchingExpression,
								convertSelector: _convertSelector,
							},
							commons: {
								dom: {
									nativelyHidden,
									displayHidden,
									visibilityHidden,
									contentVisibiltyHidden,
									ariaHidden,
									opacityHidden,
									scrollHidden,
									overflowHidden,
									clipHidden,
									areaHidden,
									detailsHidden,
								},
							},
						}
					;(axe._thisWillBeDeletedDoNotUse = exposed_for_testing_default),
						(axe.constants = constants_default),
						(axe.log = log_default),
						(axe.AbstractVirtualNode = abstract_virtual_node_default),
						(axe.SerialVirtualNode = serial_virtual_node_default),
						(axe.VirtualNode = virtual_node_default),
						(axe._cache = cache_default),
						(axe.imports = imports_exports),
						(axe.cleanup = cleanup_default),
						(axe.configure = configure_default),
						(axe.frameMessenger = function frameMessenger2(frameHandler) {
							_respondable.updateMessenger(frameHandler)
						}),
						(axe.getRules = get_rules_default),
						(axe._load = load_default),
						(axe.plugins = {}),
						(axe.registerPlugin = plugins_default),
						(axe.hasReporter = hasReporter),
						(axe.getReporter = getReporter),
						(axe.addReporter = function addReporter(name, cb, isDefault) {
							;(reporters[name] = cb), isDefault && (defaultReporter = cb)
						}),
						(axe.reset = reset_default),
						(axe._runRules = run_rules_default),
						(axe.runVirtualRule = run_virtual_rule_default),
						(axe.run = function run4() {
							for (
								var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
								_key2 < _len2;
								_key2++
							)
								args[_key2] = arguments[_key2]
							setupGlobals(args[0])
							var _normalizeRunParams = normalizeRunParams(args),
								context = _normalizeRunParams.context,
								options = _normalizeRunParams.options,
								_normalizeRunParams$c = _normalizeRunParams.callback,
								callback = void 0 === _normalizeRunParams$c ? noop2 : _normalizeRunParams$c,
								_getPromiseHandlers = getPromiseHandlers(callback),
								thenable = _getPromiseHandlers.thenable,
								resolve = _getPromiseHandlers.resolve,
								reject = _getPromiseHandlers.reject
							try {
								assert_default(axe._audit, 'No audit configured'),
									assert_default(
										!axe._running,
										'Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.',
									)
							} catch (e) {
								return handleError(e, callback)
							}
							function handleRunRules(rawResults, cleanup3) {
								options.performanceTimer && axe.utils.performanceTimer.end()
								try {
									createReport(rawResults, options, function respond(results) {
										;(axe._running = !1), cleanup3()
										try {
											callback(null, results)
										} catch (e) {
											axe.log(e)
										}
										resolve(results)
									})
								} catch (err2) {
									;(axe._running = !1), cleanup3(), callback(err2), reject(err2)
								}
							}
							function errorRunRules(err2) {
								options.performanceTimer && axe.utils.performanceTimer.end(),
									(axe._running = !1),
									resetGlobals(),
									callback(err2),
									reject(err2)
							}
							return (
								(axe._running = !0),
								options.performanceTimer && axe.utils.performanceTimer.start(),
								axe._runRules(context, options, handleRunRules, errorRunRules),
								thenable
							)
						}),
						(axe.setup = setup_default),
						(axe.teardown = teardown_default),
						(axe.runPartial = function runPartial() {
							for (
								var _len3 = arguments.length, args = new Array(_len3), _key3 = 0;
								_key3 < _len3;
								_key3++
							)
								args[_key3] = arguments[_key3]
							var _normalizeRunParams2 = normalizeRunParams(args),
								options = _normalizeRunParams2.options,
								context = _normalizeRunParams2.context
							assert_default(axe._audit, 'Axe is not configured. Audit is missing.'),
								assert_default(
									!axe._running,
									'Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.',
								)
							var contextObj = new Context(context, axe._tree)
							return (
								(axe._tree = contextObj.flatTree),
								(axe._selectorData = _getSelectorData(contextObj.flatTree)),
								(axe._running = !0),
								new Promise(function (res, rej) {
									axe._audit.run(contextObj, options, res, rej)
								})
									.then(function (results) {
										results = results.map(function (_ref111) {
											var nodes = _ref111.nodes,
												result = _objectWithoutProperties(_ref111, _excluded8)
											return _extends({ nodes: nodes.map(serializeNode) }, result)
										})
										var environmentData,
											frames = contextObj.frames.map(function (_ref112) {
												var node = _ref112.node
												return new dq_element_default(node, options).toJSON()
											})
										return (
											contextObj.initiator && (environmentData = _getEnvironmentData()),
											(axe._running = !1),
											teardown_default(),
											{ results, frames, environmentData }
										)
									})
									.catch(function (err2) {
										return (axe._running = !1), teardown_default(), Promise.reject(err2)
									})
							)
						}),
						(axe.finishRun = function finishRun(partialResults) {
							var _ref116,
								_options$reporter2,
								_axe$_audit2,
								options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
							options = clone_default(options)
							var _ref115 =
									partialResults.find(function (r) {
										return r.environmentData
									}) || {},
								environmentData = _ref115.environmentData
							axe._audit.normalizeOptions(options),
								(options.reporter =
									null !==
										(_ref116 =
											null !== (_options$reporter2 = options.reporter) &&
											void 0 !== _options$reporter2
												? _options$reporter2
												: null === (_axe$_audit2 = axe._audit) || void 0 === _axe$_audit2
												? void 0
												: _axe$_audit2.reporter) && void 0 !== _ref116
										? _ref116
										: 'v1'),
								setFrameSpec(partialResults)
							var results = merge_results_default(partialResults)
							return (
								(results = axe._audit.after(results, options)).forEach(publish_metadata_default),
								createReport2(
									(results = results.map(finalize_result_default)),
									_extends({ environmentData }, options),
								)
							)
						}),
						(axe.commons = commons_exports),
						(axe.utils = utils_exports),
						axe.addReporter('na', na_default),
						axe.addReporter('no-passes', no_passes_default),
						axe.addReporter('rawEnv', raw_env_default),
						axe.addReporter('raw', raw_default),
						axe.addReporter('v1', v1_default),
						axe.addReporter('v2', v2_default, !0)
				})(),
					axe._load({
						lang: 'en',
						data: {
							rules: {
								accesskeys: {
									description: 'Ensures every accesskey attribute value is unique',
									help: 'accesskey attribute value should be unique',
								},
								'area-alt': {
									description: 'Ensures <area> elements of image maps have alternate text',
									help: 'Active <area> elements must have alternate text',
								},
								'aria-allowed-attr': {
									description: "Ensures ARIA attributes are allowed for an element's role",
									help: 'Elements must only use allowed ARIA attributes',
								},
								'aria-allowed-role': {
									description: 'Ensures role attribute has an appropriate value for the element',
									help: 'ARIA role should be appropriate for the element',
								},
								'aria-command-name': {
									description:
										'Ensures every ARIA button, link and menuitem has an accessible name',
									help: 'ARIA commands must have an accessible name',
								},
								'aria-dialog-name': {
									description:
										'Ensures every ARIA dialog and alertdialog node has an accessible name',
									help: 'ARIA dialog and alertdialog nodes should have an accessible name',
								},
								'aria-hidden-body': {
									description: "Ensures aria-hidden='true' is not present on the document body.",
									help: "aria-hidden='true' must not be present on the document body",
								},
								'aria-hidden-focus': {
									description:
										'Ensures aria-hidden elements are not focusable nor contain focusable elements',
									help: 'ARIA hidden element must not be focusable or contain focusable elements',
								},
								'aria-input-field-name': {
									description: 'Ensures every ARIA input field has an accessible name',
									help: 'ARIA input fields must have an accessible name',
								},
								'aria-meter-name': {
									description: 'Ensures every ARIA meter node has an accessible name',
									help: 'ARIA meter nodes must have an accessible name',
								},
								'aria-progressbar-name': {
									description: 'Ensures every ARIA progressbar node has an accessible name',
									help: 'ARIA progressbar nodes must have an accessible name',
								},
								'aria-required-attr': {
									description: 'Ensures elements with ARIA roles have all required ARIA attributes',
									help: 'Required ARIA attributes must be provided',
								},
								'aria-required-children': {
									description:
										'Ensures elements with an ARIA role that require child roles contain them',
									help: 'Certain ARIA roles must contain particular children',
								},
								'aria-required-parent': {
									description:
										'Ensures elements with an ARIA role that require parent roles are contained by them',
									help: 'Certain ARIA roles must be contained by particular parents',
								},
								'aria-roledescription': {
									description:
										'Ensure aria-roledescription is only used on elements with an implicit or explicit role',
									help: 'aria-roledescription must be on elements with a semantic role',
								},
								'aria-roles': {
									description: 'Ensures all elements with a role attribute use a valid value',
									help: 'ARIA roles used must conform to valid values',
								},
								'aria-text': {
									description:
										'Ensures "role=text" is used on elements with no focusable descendants',
									help: '"role=text" should have no focusable descendants',
								},
								'aria-toggle-field-name': {
									description: 'Ensures every ARIA toggle field has an accessible name',
									help: 'ARIA toggle fields must have an accessible name',
								},
								'aria-tooltip-name': {
									description: 'Ensures every ARIA tooltip node has an accessible name',
									help: 'ARIA tooltip nodes must have an accessible name',
								},
								'aria-treeitem-name': {
									description: 'Ensures every ARIA treeitem node has an accessible name',
									help: 'ARIA treeitem nodes should have an accessible name',
								},
								'aria-valid-attr-value': {
									description: 'Ensures all ARIA attributes have valid values',
									help: 'ARIA attributes must conform to valid values',
								},
								'aria-valid-attr': {
									description: 'Ensures attributes that begin with aria- are valid ARIA attributes',
									help: 'ARIA attributes must conform to valid names',
								},
								'audio-caption': {
									description: 'Ensures <audio> elements have captions',
									help: '<audio> elements must have a captions track',
								},
								'autocomplete-valid': {
									description:
										'Ensure the autocomplete attribute is correct and suitable for the form field',
									help: 'autocomplete attribute must be used correctly',
								},
								'avoid-inline-spacing': {
									description:
										'Ensure that text spacing set through style attributes can be adjusted with custom stylesheets',
									help: 'Inline text spacing must be adjustable with custom stylesheets',
								},
								blink: {
									description: 'Ensures <blink> elements are not used',
									help: '<blink> elements are deprecated and must not be used',
								},
								'button-name': {
									description: 'Ensures buttons have discernible text',
									help: 'Buttons must have discernible text',
								},
								bypass: {
									description:
										'Ensures each page has at least one mechanism for a user to bypass navigation and jump straight to the content',
									help: 'Page must have means to bypass repeated blocks',
								},
								'color-contrast-enhanced': {
									description:
										'Ensures the contrast between foreground and background colors meets WCAG 2 AAA contrast ratio thresholds',
									help: 'Elements must have sufficient color contrast',
								},
								'color-contrast': {
									description:
										'Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds',
									help: 'Elements must have sufficient color contrast',
								},
								'css-orientation-lock': {
									description:
										'Ensures content is not locked to any specific display orientation, and the content is operable in all display orientations',
									help: 'CSS Media queries must not lock display orientation',
								},
								'definition-list': {
									description: 'Ensures <dl> elements are structured correctly',
									help: '<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements',
								},
								dlitem: {
									description: 'Ensures <dt> and <dd> elements are contained by a <dl>',
									help: '<dt> and <dd> elements must be contained by a <dl>',
								},
								'document-title': {
									description: 'Ensures each HTML document contains a non-empty <title> element',
									help: 'Documents must have <title> element to aid in navigation',
								},
								'duplicate-id-active': {
									description: 'Ensures every id attribute value of active elements is unique',
									help: 'IDs of active elements must be unique',
								},
								'duplicate-id-aria': {
									description:
										'Ensures every id attribute value used in ARIA and in labels is unique',
									help: 'IDs used in ARIA and labels must be unique',
								},
								'duplicate-id': {
									description: 'Ensures every id attribute value is unique',
									help: 'id attribute value must be unique',
								},
								'empty-heading': {
									description: 'Ensures headings have discernible text',
									help: 'Headings should not be empty',
								},
								'empty-table-header': {
									description: 'Ensures table headers have discernible text',
									help: 'Table header text should not be empty',
								},
								'focus-order-semantics': {
									description:
										'Ensures elements in the focus order have a role appropriate for interactive content',
									help: 'Elements in the focus order should have an appropriate role',
								},
								'form-field-multiple-labels': {
									description: 'Ensures form field does not have multiple label elements',
									help: 'Form field must not have multiple label elements',
								},
								'frame-focusable-content': {
									description:
										'Ensures <frame> and <iframe> elements with focusable content do not have tabindex=-1',
									help: 'Frames with focusable content must not have tabindex=-1',
								},
								'frame-tested': {
									description: 'Ensures <iframe> and <frame> elements contain the axe-core script',
									help: 'Frames should be tested with axe-core',
								},
								'frame-title-unique': {
									description:
										'Ensures <iframe> and <frame> elements contain a unique title attribute',
									help: 'Frames must have a unique title attribute',
								},
								'frame-title': {
									description: 'Ensures <iframe> and <frame> elements have an accessible name',
									help: 'Frames must have an accessible name',
								},
								'heading-order': {
									description: 'Ensures the order of headings is semantically correct',
									help: 'Heading levels should only increase by one',
								},
								'hidden-content': {
									description: 'Informs users about hidden content.',
									help: 'Hidden content on the page should be analyzed',
								},
								'html-has-lang': {
									description: 'Ensures every HTML document has a lang attribute',
									help: '<html> element must have a lang attribute',
								},
								'html-lang-valid': {
									description: 'Ensures the lang attribute of the <html> element has a valid value',
									help: '<html> element must have a valid value for the lang attribute',
								},
								'html-xml-lang-mismatch': {
									description:
										'Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page',
									help: 'HTML elements with lang and xml:lang must have the same base language',
								},
								'identical-links-same-purpose': {
									description:
										'Ensure that links with the same accessible name serve a similar purpose',
									help: 'Links with the same name must have a similar purpose',
								},
								'image-alt': {
									description:
										'Ensures <img> elements have alternate text or a role of none or presentation',
									help: 'Images must have alternate text',
								},
								'image-redundant-alt': {
									description: 'Ensure image alternative is not repeated as text',
									help: 'Alternative text of images should not be repeated as text',
								},
								'input-button-name': {
									description: 'Ensures input buttons have discernible text',
									help: 'Input buttons must have discernible text',
								},
								'input-image-alt': {
									description: 'Ensures <input type="image"> elements have alternate text',
									help: 'Image buttons must have alternate text',
								},
								'label-content-name-mismatch': {
									description:
										'Ensures that elements labelled through their content must have their visible text as part of their accessible name',
									help: 'Elements must have their visible text as part of their accessible name',
								},
								'label-title-only': {
									description:
										'Ensures that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes',
									help: 'Form elements should have a visible label',
								},
								label: {
									description: 'Ensures every form element has a label',
									help: 'Form elements must have labels',
								},
								'landmark-banner-is-top-level': {
									description: 'Ensures the banner landmark is at top level',
									help: 'Banner landmark should not be contained in another landmark',
								},
								'landmark-complementary-is-top-level': {
									description: 'Ensures the complementary landmark or aside is at top level',
									help: 'Aside should not be contained in another landmark',
								},
								'landmark-contentinfo-is-top-level': {
									description: 'Ensures the contentinfo landmark is at top level',
									help: 'Contentinfo landmark should not be contained in another landmark',
								},
								'landmark-main-is-top-level': {
									description: 'Ensures the main landmark is at top level',
									help: 'Main landmark should not be contained in another landmark',
								},
								'landmark-no-duplicate-banner': {
									description: 'Ensures the document has at most one banner landmark',
									help: 'Document should not have more than one banner landmark',
								},
								'landmark-no-duplicate-contentinfo': {
									description: 'Ensures the document has at most one contentinfo landmark',
									help: 'Document should not have more than one contentinfo landmark',
								},
								'landmark-no-duplicate-main': {
									description: 'Ensures the document has at most one main landmark',
									help: 'Document should not have more than one main landmark',
								},
								'landmark-one-main': {
									description: 'Ensures the document has a main landmark',
									help: 'Document should have one main landmark',
								},
								'landmark-unique': {
									help: 'Ensures landmarks are unique',
									description:
										'Landmarks should have a unique role or role/label/title (i.e. accessible name) combination',
								},
								'link-in-text-block': {
									description:
										'Ensure links are distinguished from surrounding text in a way that does not rely on color',
									help: 'Links must be distinguishable without relying on color',
								},
								'link-name': {
									description: 'Ensures links have discernible text',
									help: 'Links must have discernible text',
								},
								list: {
									description: 'Ensures that lists are structured correctly',
									help: '<ul> and <ol> must only directly contain <li>, <script> or <template> elements',
								},
								listitem: {
									description: 'Ensures <li> elements are used semantically',
									help: '<li> elements must be contained in a <ul> or <ol>',
								},
								marquee: {
									description: 'Ensures <marquee> elements are not used',
									help: '<marquee> elements are deprecated and must not be used',
								},
								'meta-refresh-no-exceptions': {
									description:
										'Ensures <meta http-equiv="refresh"> is not used for delayed refresh',
									help: 'Delayed refresh must not be used',
								},
								'meta-refresh': {
									description:
										'Ensures <meta http-equiv="refresh"> is not used for delayed refresh',
									help: 'Delayed refresh under 20 hours must not be used',
								},
								'meta-viewport-large': {
									description: 'Ensures <meta name="viewport"> can scale a significant amount',
									help: 'Users should be able to zoom and scale the text up to 500%',
								},
								'meta-viewport': {
									description:
										'Ensures <meta name="viewport"> does not disable text scaling and zooming',
									help: 'Zooming and scaling must not be disabled',
								},
								'nested-interactive': {
									description:
										'Ensures interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies',
									help: 'Interactive controls must not be nested',
								},
								'no-autoplay-audio': {
									description:
										'Ensures <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio',
									help: '<video> or <audio> elements must not play automatically',
								},
								'object-alt': {
									description: 'Ensures <object> elements have alternate text',
									help: '<object> elements must have alternate text',
								},
								'p-as-heading': {
									description:
										'Ensure bold, italic text and font-size is not used to style <p> elements as a heading',
									help: 'Styled <p> elements must not be used as headings',
								},
								'page-has-heading-one': {
									description:
										'Ensure that the page, or at least one of its frames contains a level-one heading',
									help: 'Page should contain a level-one heading',
								},
								'presentation-role-conflict': {
									description:
										'Elements marked as presentational should not have global ARIA or tabindex to ensure all screen readers ignore them',
									help: 'Ensure elements marked as presentational are consistently ignored',
								},
								region: {
									description: 'Ensures all page content is contained by landmarks',
									help: 'All page content should be contained by landmarks',
								},
								'role-img-alt': {
									description: "Ensures [role='img'] elements have alternate text",
									help: "[role='img'] elements must have an alternative text",
								},
								'scope-attr-valid': {
									description: 'Ensures the scope attribute is used correctly on tables',
									help: 'scope attribute should be used correctly',
								},
								'scrollable-region-focusable': {
									description:
										'Ensure elements that have scrollable content are accessible by keyboard',
									help: 'Scrollable region must have keyboard access',
								},
								'select-name': {
									description: 'Ensures select element has an accessible name',
									help: 'Select element must have an accessible name',
								},
								'server-side-image-map': {
									description: 'Ensures that server-side image maps are not used',
									help: 'Server-side image maps must not be used',
								},
								'skip-link': {
									description: 'Ensure all skip links have a focusable target',
									help: 'The skip-link target should exist and be focusable',
								},
								'svg-img-alt': {
									description:
										'Ensures <svg> elements with an img, graphics-document or graphics-symbol role have an accessible text',
									help: '<svg> elements with an img role must have an alternative text',
								},
								tabindex: {
									description: 'Ensures tabindex attribute values are not greater than 0',
									help: 'Elements should not have tabindex greater than zero',
								},
								'table-duplicate-name': {
									description:
										'Ensure the <caption> element does not contain the same text as the summary attribute',
									help: 'tables should not have the same summary and caption',
								},
								'table-fake-caption': {
									description: 'Ensure that tables with a caption use the <caption> element.',
									help: 'Data or header cells must not be used to give caption to a data table.',
								},
								'target-size': {
									description: 'Ensure touch target have sufficient size and space',
									help: 'All touch targets must be 24px large, or leave sufficient space',
								},
								'td-has-header': {
									description:
										'Ensure that each non-empty data cell in a <table> larger than 3 by 3  has one or more table headers',
									help: 'Non-empty <td> elements in larger <table> must have an associated table header',
								},
								'td-headers-attr': {
									description:
										'Ensure that each cell in a table that uses the headers attribute refers only to other cells in that table',
									help: 'Table cells that use the headers attribute must only refer to cells in the same table',
								},
								'th-has-data-cells': {
									description:
										'Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe',
									help: 'Table headers in a data table must refer to data cells',
								},
								'valid-lang': {
									description: 'Ensures lang attributes have valid values',
									help: 'lang attribute must have a valid value',
								},
								'video-caption': {
									description: 'Ensures <video> elements have captions',
									help: '<video> elements must have captions',
								},
							},
							checks: {
								abstractrole: {
									impact: 'serious',
									messages: {
										pass: 'Abstract roles are not used',
										fail: {
											singular: 'Abstract role cannot be directly used: ${data.values}',
											plural: 'Abstract roles cannot be directly used: ${data.values}',
										},
									},
								},
								'aria-allowed-attr': {
									impact: 'critical',
									messages: {
										pass: 'ARIA attributes are used correctly for the defined role',
										fail: {
											singular: 'ARIA attribute is not allowed: ${data.values}',
											plural: 'ARIA attributes are not allowed: ${data.values}',
										},
										incomplete:
											'Check that there is no problem if the ARIA attribute is ignored on this element: ${data.values}',
									},
								},
								'aria-allowed-role': {
									impact: 'minor',
									messages: {
										pass: 'ARIA role is allowed for given element',
										fail: {
											singular: 'ARIA role ${data.values} is not allowed for given element',
											plural: 'ARIA roles ${data.values} are not allowed for given element',
										},
										incomplete: {
											singular:
												'ARIA role ${data.values} must be removed when the element is made visible, as it is not allowed for the element',
											plural:
												'ARIA roles ${data.values} must be removed when the element is made visible, as they are not allowed for the element',
										},
									},
								},
								'aria-busy': {
									impact: 'serious',
									messages: {
										pass: 'Element has an aria-busy attribute',
										fail: 'Element has no aria-busy="true" attribute',
									},
								},
								'aria-errormessage': {
									impact: 'critical',
									messages: {
										pass: 'aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique',
										fail: {
											singular:
												'aria-errormessage value `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)',
											plural:
												'aria-errormessage values `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)',
											hidden:
												'aria-errormessage value `${data.values}` cannot reference a hidden element',
										},
										incomplete: {
											singular:
												'ensure aria-errormessage value `${data.values}` references an existing element',
											plural:
												'ensure aria-errormessage values `${data.values}` reference existing elements',
											idrefs:
												'unable to determine if aria-errormessage element exists on the page: ${data.values}',
										},
									},
								},
								'aria-hidden-body': {
									impact: 'critical',
									messages: {
										pass: 'No aria-hidden attribute is present on document body',
										fail: 'aria-hidden=true should not be present on the document body',
									},
								},
								'aria-level': {
									impact: 'serious',
									messages: {
										pass: 'aria-level values are valid',
										incomplete:
											'aria-level values greater than 6 are not supported in all screenreader and browser combinations',
									},
								},
								'aria-prohibited-attr': {
									impact: 'serious',
									messages: {
										pass: 'ARIA attribute is allowed',
										fail: {
											hasRolePlural:
												'${data.prohibited} attributes cannot be used with role "${data.role}".',
											hasRoleSingular:
												'${data.prohibited} attribute cannot be used with role "${data.role}".',
											noRolePlural:
												'${data.prohibited} attributes cannot be used on a ${data.nodeName} with no valid role attribute.',
											noRoleSingular:
												'${data.prohibited} attribute cannot be used on a ${data.nodeName} with no valid role attribute.',
										},
										incomplete: {
											hasRoleSingular:
												'${data.prohibited} attribute is not well supported with role "${data.role}".',
											hasRolePlural:
												'${data.prohibited} attributes are not well supported with role "${data.role}".',
											noRoleSingular:
												'${data.prohibited} attribute is not well supported on a ${data.nodeName} with no valid role attribute.',
											noRolePlural:
												'${data.prohibited} attributes are not well supported on a ${data.nodeName} with no valid role attribute.',
										},
									},
								},
								'aria-required-attr': {
									impact: 'critical',
									messages: {
										pass: 'All required ARIA attributes are present',
										fail: {
											singular: 'Required ARIA attribute not present: ${data.values}',
											plural: 'Required ARIA attributes not present: ${data.values}',
										},
									},
								},
								'aria-required-children': {
									impact: 'critical',
									messages: {
										pass: 'Required ARIA children are present',
										fail: {
											singular: 'Required ARIA child role not present: ${data.values}',
											plural: 'Required ARIA children role not present: ${data.values}',
											unallowed: 'Element has children which are not allowed (see related nodes)',
										},
										incomplete: {
											singular: 'Expecting ARIA child role to be added: ${data.values}',
											plural: 'Expecting ARIA children role to be added: ${data.values}',
										},
									},
								},
								'aria-required-parent': {
									impact: 'critical',
									messages: {
										pass: 'Required ARIA parent role present',
										fail: {
											singular: 'Required ARIA parent role not present: ${data.values}',
											plural: 'Required ARIA parents role not present: ${data.values}',
										},
									},
								},
								'aria-roledescription': {
									impact: 'serious',
									messages: {
										pass: 'aria-roledescription used on a supported semantic role',
										incomplete:
											'Check that the aria-roledescription is announced by supported screen readers',
										fail: 'Give the element a role that supports aria-roledescription',
									},
								},
								'aria-unsupported-attr': {
									impact: 'critical',
									messages: {
										pass: 'ARIA attribute is supported',
										fail: 'ARIA attribute is not widely supported in screen readers and assistive technologies: ${data.values}',
									},
								},
								'aria-valid-attr-value': {
									impact: 'critical',
									messages: {
										pass: 'ARIA attribute values are valid',
										fail: {
											singular: 'Invalid ARIA attribute value: ${data.values}',
											plural: 'Invalid ARIA attribute values: ${data.values}',
										},
										incomplete: {
											noId: 'ARIA attribute element ID does not exist on the page: ${data.needsReview}',
											noIdShadow:
												'ARIA attribute element ID does not exist on the page or is a descendant of a different shadow DOM tree: ${data.needsReview}',
											ariaCurrent:
												'ARIA attribute value is invalid and will be treated as "aria-current=true": ${data.needsReview}',
											idrefs:
												'Unable to determine if ARIA attribute element ID exists on the page: ${data.needsReview}',
											empty: 'ARIA attribute value is ignored while empty: ${data.needsReview}',
										},
									},
								},
								'aria-valid-attr': {
									impact: 'critical',
									messages: {
										pass: 'ARIA attribute name is valid',
										fail: {
											singular: 'Invalid ARIA attribute name: ${data.values}',
											plural: 'Invalid ARIA attribute names: ${data.values}',
										},
									},
								},
								deprecatedrole: {
									impact: 'minor',
									messages: {
										pass: 'ARIA role is not deprecated',
										fail: 'The role used is deprecated: ${data}',
									},
								},
								fallbackrole: {
									impact: 'serious',
									messages: {
										pass: 'Only one role value used',
										fail: 'Use only one role value, since fallback roles are not supported in older browsers',
										incomplete: "Use only role 'presentation' or 'none' since they are synonymous.",
									},
								},
								'has-global-aria-attribute': {
									impact: 'minor',
									messages: {
										pass: {
											singular: 'Element has global ARIA attribute: ${data.values}',
											plural: 'Element has global ARIA attributes: ${data.values}',
										},
										fail: 'Element does not have global ARIA attribute',
									},
								},
								'has-widget-role': {
									impact: 'minor',
									messages: {
										pass: 'Element has a widget role.',
										fail: 'Element does not have a widget role.',
									},
								},
								invalidrole: {
									impact: 'critical',
									messages: {
										pass: 'ARIA role is valid',
										fail: {
											singular: 'Role must be one of the valid ARIA roles: ${data.values}',
											plural: 'Roles must be one of the valid ARIA roles: ${data.values}',
										},
									},
								},
								'is-element-focusable': {
									impact: 'minor',
									messages: { pass: 'Element is focusable.', fail: 'Element is not focusable.' },
								},
								'no-implicit-explicit-label': {
									impact: 'moderate',
									messages: {
										pass: 'There is no mismatch between a <label> and accessible name',
										incomplete:
											"Check that the <label> does not need be part of the ARIA ${data} field's name",
									},
								},
								unsupportedrole: {
									impact: 'critical',
									messages: {
										pass: 'ARIA role is supported',
										fail: 'The role used is not widely supported in screen readers and assistive technologies: ${data}',
									},
								},
								'valid-scrollable-semantics': {
									impact: 'minor',
									messages: {
										pass: 'Element has valid semantics for an element in the focus order.',
										fail: 'Element has invalid semantics for an element in the focus order.',
									},
								},
								'color-contrast-enhanced': {
									impact: 'serious',
									messages: {
										pass: 'Element has sufficient color contrast of ${data.contrastRatio}',
										fail: {
											default:
												'Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}',
											fgOnShadowColor:
												'Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}',
											shadowOnBgColor:
												'Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}',
										},
										incomplete: {
											default: 'Unable to determine contrast ratio',
											bgImage:
												"Element's background color could not be determined due to a background image",
											bgGradient:
												"Element's background color could not be determined due to a background gradient",
											imgNode:
												"Element's background color could not be determined because element contains an image node",
											bgOverlap:
												"Element's background color could not be determined because it is overlapped by another element",
											fgAlpha:
												"Element's foreground color could not be determined because of alpha transparency",
											elmPartiallyObscured:
												"Element's background color could not be determined because it's partially obscured by another element",
											elmPartiallyObscuring:
												"Element's background color could not be determined because it partially overlaps other elements",
											outsideViewport:
												"Element's background color could not be determined because it's outside the viewport",
											equalRatio: 'Element has a 1:1 contrast ratio with the background',
											shortTextContent:
												'Element content is too short to determine if it is actual text content',
											nonBmp: 'Element content contains only non-text characters',
											pseudoContent:
												"Element's background color could not be determined due to a pseudo element",
										},
									},
								},
								'color-contrast': {
									impact: 'serious',
									messages: {
										pass: {
											default: 'Element has sufficient color contrast of ${data.contrastRatio}',
											hidden: 'Element is hidden',
										},
										fail: {
											default:
												'Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}',
											fgOnShadowColor:
												'Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}',
											shadowOnBgColor:
												'Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}',
										},
										incomplete: {
											default: 'Unable to determine contrast ratio',
											bgImage:
												"Element's background color could not be determined due to a background image",
											bgGradient:
												"Element's background color could not be determined due to a background gradient",
											imgNode:
												"Element's background color could not be determined because element contains an image node",
											bgOverlap:
												"Element's background color could not be determined because it is overlapped by another element",
											fgAlpha:
												"Element's foreground color could not be determined because of alpha transparency",
											elmPartiallyObscured:
												"Element's background color could not be determined because it's partially obscured by another element",
											elmPartiallyObscuring:
												"Element's background color could not be determined because it partially overlaps other elements",
											outsideViewport:
												"Element's background color could not be determined because it's outside the viewport",
											equalRatio: 'Element has a 1:1 contrast ratio with the background',
											shortTextContent:
												'Element content is too short to determine if it is actual text content',
											nonBmp: 'Element content contains only non-text characters',
											pseudoContent:
												"Element's background color could not be determined due to a pseudo element",
										},
									},
								},
								'link-in-text-block-style': {
									impact: 'serious',
									messages: {
										pass: 'Links can be distinguished from surrounding text by visual styling',
										fail: 'The link has no styling (such as underline) to distinguish it from the surrounding text',
									},
								},
								'link-in-text-block': {
									impact: 'serious',
									messages: {
										pass: 'Links can be distinguished from surrounding text in some way other than by color',
										fail: {
											fgContrast:
												'The link has insufficient color contrast of ${data.contrastRatio}:1 with the surrounding text. (Minimum contrast is ${data.requiredContrastRatio}:1, link text: ${data.nodeColor}, surrounding text: ${data.parentColor})',
											bgContrast:
												'The link background has insufficient color contrast of ${data.contrastRatio} (Minimum contrast is ${data.requiredContrastRatio}:1, link background color: ${data.nodeBackgroundColor}, surrounding background color: ${data.parentBackgroundColor})',
										},
										incomplete: {
											default: "Element's foreground contrast ratio could not be determined",
											bgContrast: "Element's background contrast ratio could not be determined",
											bgImage:
												"Element's contrast ratio could not be determined due to a background image",
											bgGradient:
												"Element's contrast ratio could not be determined due to a background gradient",
											imgNode:
												"Element's contrast ratio could not be determined because element contains an image node",
											bgOverlap:
												"Element's contrast ratio could not be determined because of element overlap",
										},
									},
								},
								'autocomplete-appropriate': {
									impact: 'serious',
									messages: {
										pass: 'the autocomplete value is on an appropriate element',
										fail: 'the autocomplete value is inappropriate for this type of input',
									},
								},
								'autocomplete-valid': {
									impact: 'serious',
									messages: {
										pass: 'the autocomplete attribute is correctly formatted',
										fail: 'the autocomplete attribute is incorrectly formatted',
									},
								},
								accesskeys: {
									impact: 'serious',
									messages: {
										pass: 'Accesskey attribute value is unique',
										fail: 'Document has multiple elements with the same accesskey',
									},
								},
								'focusable-content': {
									impact: 'moderate',
									messages: {
										pass: 'Element contains focusable elements',
										fail: 'Element should have focusable content',
									},
								},
								'focusable-disabled': {
									impact: 'serious',
									messages: {
										pass: 'No focusable elements contained within element',
										incomplete:
											'Check if the focusable elements immediately move the focus indicator',
										fail: 'Focusable content should be disabled or be removed from the DOM',
									},
								},
								'focusable-element': {
									impact: 'moderate',
									messages: { pass: 'Element is focusable', fail: 'Element should be focusable' },
								},
								'focusable-modal-open': {
									impact: 'serious',
									messages: {
										pass: 'No focusable elements while a modal is open',
										incomplete:
											'Check that focusable elements are not tabbable in the current state',
									},
								},
								'focusable-no-name': {
									impact: 'serious',
									messages: {
										pass: 'Element is not in tab order or has accessible text',
										fail: 'Element is in tab order and does not have accessible text',
										incomplete: 'Unable to determine if element has an accessible name',
									},
								},
								'focusable-not-tabbable': {
									impact: 'serious',
									messages: {
										pass: 'No focusable elements contained within element',
										incomplete:
											'Check if the focusable elements immediately move the focus indicator',
										fail: "Focusable content should have tabindex='-1' or be removed from the DOM",
									},
								},
								'frame-focusable-content': {
									impact: 'serious',
									messages: {
										pass: 'Element does not have focusable descendants',
										fail: 'Element has focusable descendants',
										incomplete: 'Could not determine if element has descendants',
									},
								},
								'landmark-is-top-level': {
									impact: 'moderate',
									messages: {
										pass: 'The ${data.role} landmark is at the top level.',
										fail: 'The ${data.role} landmark is contained in another landmark.',
									},
								},
								'no-focusable-content': {
									impact: 'serious',
									messages: {
										pass: 'Element does not have focusable descendants',
										fail: {
											default: 'Element has focusable descendants',
											notHidden:
												"Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with 'aria-hidden=true')",
										},
										incomplete: 'Could not determine if element has descendants',
									},
								},
								'page-has-heading-one': {
									impact: 'moderate',
									messages: {
										pass: 'Page has at least one level-one heading',
										fail: 'Page must have a level-one heading',
									},
								},
								'page-has-main': {
									impact: 'moderate',
									messages: {
										pass: 'Document has at least one main landmark',
										fail: 'Document does not have a main landmark',
									},
								},
								'page-no-duplicate-banner': {
									impact: 'moderate',
									messages: {
										pass: 'Document does not have more than one banner landmark',
										fail: 'Document has more than one banner landmark',
									},
								},
								'page-no-duplicate-contentinfo': {
									impact: 'moderate',
									messages: {
										pass: 'Document does not have more than one contentinfo landmark',
										fail: 'Document has more than one contentinfo landmark',
									},
								},
								'page-no-duplicate-main': {
									impact: 'moderate',
									messages: {
										pass: 'Document does not have more than one main landmark',
										fail: 'Document has more than one main landmark',
									},
								},
								tabindex: {
									impact: 'serious',
									messages: {
										pass: 'Element does not have a tabindex greater than 0',
										fail: 'Element has a tabindex greater than 0',
									},
								},
								'alt-space-value': {
									impact: 'critical',
									messages: {
										pass: 'Element has a valid alt attribute value',
										fail: 'Element has an alt attribute containing only a space character, which is not ignored by all screen readers',
									},
								},
								'duplicate-img-label': {
									impact: 'minor',
									messages: {
										pass: 'Element does not duplicate existing text in <img> alt text',
										fail: 'Element contains <img> element with alt text that duplicates existing text',
									},
								},
								'explicit-label': {
									impact: 'critical',
									messages: {
										pass: 'Form element has an explicit <label>',
										fail: 'Form element does not have an explicit <label>',
										incomplete: 'Unable to determine if form element has an explicit <label>',
									},
								},
								'help-same-as-label': {
									impact: 'minor',
									messages: {
										pass: 'Help text (title or aria-describedby) does not duplicate label text',
										fail: 'Help text (title or aria-describedby) text is the same as the label text',
									},
								},
								'hidden-explicit-label': {
									impact: 'critical',
									messages: {
										pass: 'Form element has a visible explicit <label>',
										fail: 'Form element has explicit <label> that is hidden',
										incomplete:
											'Unable to determine if form element has explicit <label> that is hidden',
									},
								},
								'implicit-label': {
									impact: 'critical',
									messages: {
										pass: 'Form element has an implicit (wrapped) <label>',
										fail: 'Form element does not have an implicit (wrapped) <label>',
										incomplete:
											'Unable to determine if form element has an implicit (wrapped} <label>',
									},
								},
								'label-content-name-mismatch': {
									impact: 'serious',
									messages: {
										pass: "Element contains visible text as part of it's accessible name",
										fail: 'Text inside the element is not included in the accessible name',
									},
								},
								'multiple-label': {
									impact: 'moderate',
									messages: {
										pass: 'Form field does not have multiple label elements',
										incomplete:
											'Multiple label elements is not widely supported in assistive technologies. Ensure the first label contains all necessary information.',
									},
								},
								'title-only': {
									impact: 'serious',
									messages: {
										pass: 'Form element does not solely use title attribute for its label',
										fail: 'Only title used to generate label for form element',
									},
								},
								'landmark-is-unique': {
									impact: 'moderate',
									messages: {
										pass: 'Landmarks must have a unique role or role/label/title (i.e. accessible name) combination',
										fail: 'The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable',
									},
								},
								'has-lang': {
									impact: 'serious',
									messages: {
										pass: 'The <html> element has a lang attribute',
										fail: {
											noXHTML:
												'The xml:lang attribute is not valid on HTML pages, use the lang attribute.',
											noLang: 'The <html> element does not have a lang attribute',
										},
									},
								},
								'valid-lang': {
									impact: 'serious',
									messages: {
										pass: 'Value of lang attribute is included in the list of valid languages',
										fail: 'Value of lang attribute not included in the list of valid languages',
									},
								},
								'xml-lang-mismatch': {
									impact: 'moderate',
									messages: {
										pass: 'Lang and xml:lang attributes have the same base language',
										fail: 'Lang and xml:lang attributes do not have the same base language',
									},
								},
								dlitem: {
									impact: 'serious',
									messages: {
										pass: 'Description list item has a <dl> parent element',
										fail: 'Description list item does not have a <dl> parent element',
									},
								},
								listitem: {
									impact: 'serious',
									messages: {
										pass: 'List item has a <ul>, <ol> or role="list" parent element',
										fail: {
											default: 'List item does not have a <ul>, <ol> parent element',
											roleNotValid:
												'List item does not have a <ul>, <ol> parent element without a role, or a role="list"',
										},
									},
								},
								'only-dlitems': {
									impact: 'serious',
									messages: {
										pass: 'dl element only has direct children that are allowed inside; <dt>, <dd>, or <div> elements',
										fail: 'dl element has direct children that are not allowed: ${data.values}',
									},
								},
								'only-listitems': {
									impact: 'serious',
									messages: {
										pass: 'List element only has direct children that are allowed inside <li> elements',
										fail: 'List element has direct children that are not allowed: ${data.values}',
									},
								},
								'structured-dlitems': {
									impact: 'serious',
									messages: {
										pass: 'When not empty, element has both <dt> and <dd> elements',
										fail: 'When not empty, element does not have at least one <dt> element followed by at least one <dd> element',
									},
								},
								caption: {
									impact: 'critical',
									messages: {
										pass: 'The multimedia element has a captions track',
										incomplete: 'Check that captions is available for the element',
									},
								},
								'frame-tested': {
									impact: 'critical',
									messages: {
										pass: 'The iframe was tested with axe-core',
										fail: 'The iframe could not be tested with axe-core',
										incomplete: 'The iframe still has to be tested with axe-core',
									},
								},
								'no-autoplay-audio': {
									impact: 'moderate',
									messages: {
										pass: '<video> or <audio> does not output audio for more than allowed duration or has controls mechanism',
										fail: '<video> or <audio> outputs audio for more than allowed duration and does not have a controls mechanism',
										incomplete:
											'Check that the <video> or <audio> does not output audio for more than allowed duration or provides a controls mechanism',
									},
								},
								'css-orientation-lock': {
									impact: 'serious',
									messages: {
										pass: 'Display is operable, and orientation lock does not exist',
										fail: 'CSS Orientation lock is applied, and makes display inoperable',
										incomplete: 'CSS Orientation lock cannot be determined',
									},
								},
								'meta-viewport-large': {
									impact: 'minor',
									messages: {
										pass: '<meta> tag does not prevent significant zooming on mobile devices',
										fail: '<meta> tag limits zooming on mobile devices',
									},
								},
								'meta-viewport': {
									impact: 'critical',
									messages: {
										pass: '<meta> tag does not disable zooming on mobile devices',
										fail: '${data} on <meta> tag disables zooming on mobile devices',
									},
								},
								'target-offset': {
									impact: 'serious',
									messages: {
										pass: 'Target has sufficient offset from its closest neighbor (${data.closestOffset}px should be at least ${data.minOffset}px)',
										fail: 'Target has insufficient offset from its closest neighbor (${data.closestOffset}px should be at least ${data.minOffset}px)',
										incomplete: {
											default:
												'Element with negative tabindex has insufficient offset from its closest neighbor (${data.closestOffset}px should be at least ${data.minOffset}px). Is this a target?',
											nonTabbableNeighbor:
												'Target has insufficient offset from a neighbor with negative tabindex (${data.closestOffset}px should be at least ${data.minOffset}px). Is the neighbor a target?',
										},
									},
								},
								'target-size': {
									impact: 'serious',
									messages: {
										pass: {
											default:
												'Control has sufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)',
											obscured:
												'Control is ignored because it is fully obscured and thus not clickable',
										},
										fail: {
											default:
												'Target has insufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)',
											partiallyObscured:
												'Target has insufficient size because it is partially obscured (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)',
										},
										incomplete: {
											default:
												'Element with negative tabindex has insufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is this a target?',
											contentOverflow:
												'Element size could not be accurately determined due to overflow content',
											partiallyObscured:
												'Element with negative tabindex has insufficient size because it is partially obscured (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is this a target?',
											partiallyObscuredNonTabbable:
												'Target has insufficient size because it is partially obscured by a neighbor with negative tabindex (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is the neighbor a target?',
										},
									},
								},
								'header-present': {
									impact: 'serious',
									messages: { pass: 'Page has a heading', fail: 'Page does not have a heading' },
								},
								'heading-order': {
									impact: 'moderate',
									messages: {
										pass: 'Heading order valid',
										fail: 'Heading order invalid',
										incomplete: 'Unable to determine previous heading',
									},
								},
								'identical-links-same-purpose': {
									impact: 'minor',
									messages: {
										pass: 'There are no other links with the same name, that go to a different URL',
										incomplete:
											'Check that links have the same purpose, or are intentionally ambiguous.',
									},
								},
								'internal-link-present': {
									impact: 'serious',
									messages: { pass: 'Valid skip link found', fail: 'No valid skip link found' },
								},
								landmark: {
									impact: 'serious',
									messages: {
										pass: 'Page has a landmark region',
										fail: 'Page does not have a landmark region',
									},
								},
								'meta-refresh-no-exceptions': {
									impact: 'minor',
									messages: {
										pass: '<meta> tag does not immediately refresh the page',
										fail: '<meta> tag forces timed refresh of page',
									},
								},
								'meta-refresh': {
									impact: 'critical',
									messages: {
										pass: '<meta> tag does not immediately refresh the page',
										fail: '<meta> tag forces timed refresh of page (less than 20 hours)',
									},
								},
								'p-as-heading': {
									impact: 'serious',
									messages: {
										pass: '<p> elements are not styled as headings',
										fail: 'Heading elements should be used instead of styled <p> elements',
										incomplete: 'Unable to determine if <p> elements are styled as headings',
									},
								},
								region: {
									impact: 'moderate',
									messages: {
										pass: 'All page content is contained by landmarks',
										fail: 'Some page content is not contained by landmarks',
									},
								},
								'skip-link': {
									impact: 'moderate',
									messages: {
										pass: 'Skip link target exists',
										incomplete: 'Skip link target should become visible on activation',
										fail: 'No skip link target',
									},
								},
								'unique-frame-title': {
									impact: 'serious',
									messages: {
										pass: "Element's title attribute is unique",
										fail: "Element's title attribute is not unique",
									},
								},
								'duplicate-id-active': {
									impact: 'serious',
									messages: {
										pass: 'Document has no active elements that share the same id attribute',
										fail: 'Document has active elements with the same id attribute: ${data}',
									},
								},
								'duplicate-id-aria': {
									impact: 'critical',
									messages: {
										pass: 'Document has no elements referenced with ARIA or labels that share the same id attribute',
										fail: 'Document has multiple elements referenced with ARIA with the same id attribute: ${data}',
									},
								},
								'duplicate-id': {
									impact: 'minor',
									messages: {
										pass: 'Document has no static elements that share the same id attribute',
										fail: 'Document has multiple static elements with the same id attribute: ${data}',
									},
								},
								'aria-label': {
									impact: 'serious',
									messages: {
										pass: 'aria-label attribute exists and is not empty',
										fail: 'aria-label attribute does not exist or is empty',
									},
								},
								'aria-labelledby': {
									impact: 'serious',
									messages: {
										pass: 'aria-labelledby attribute exists and references elements that are visible to screen readers',
										fail: 'aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty',
										incomplete: 'ensure aria-labelledby references an existing element',
									},
								},
								'avoid-inline-spacing': {
									impact: 'serious',
									messages: {
										pass: "No inline styles with '!important' that affect text spacing has been specified",
										fail: {
											singular:
												"Remove '!important' from inline style ${data.values}, as overriding this is not supported by most browsers",
											plural:
												"Remove '!important' from inline styles ${data.values}, as overriding this is not supported by most browsers",
										},
									},
								},
								'button-has-visible-text': {
									impact: 'critical',
									messages: {
										pass: 'Element has inner text that is visible to screen readers',
										fail: 'Element does not have inner text that is visible to screen readers',
										incomplete: 'Unable to determine if element has children',
									},
								},
								'doc-has-title': {
									impact: 'serious',
									messages: {
										pass: 'Document has a non-empty <title> element',
										fail: 'Document does not have a non-empty <title> element',
									},
								},
								exists: {
									impact: 'minor',
									messages: { pass: 'Element does not exist', incomplete: 'Element exists' },
								},
								'has-alt': {
									impact: 'critical',
									messages: {
										pass: 'Element has an alt attribute',
										fail: 'Element does not have an alt attribute',
									},
								},
								'has-visible-text': {
									impact: 'minor',
									messages: {
										pass: 'Element has text that is visible to screen readers',
										fail: 'Element does not have text that is visible to screen readers',
										incomplete: 'Unable to determine if element has children',
									},
								},
								'important-letter-spacing': {
									impact: 'serious',
									messages: {
										pass: 'Letter-spacing in the style attribute is not set to !important, or meets the minimum',
										fail: 'letter-spacing in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)',
									},
								},
								'important-line-height': {
									impact: 'serious',
									messages: {
										pass: 'line-height in the style attribute is not set to !important, or meets the minimum',
										fail: 'line-height in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)',
									},
								},
								'important-word-spacing': {
									impact: 'serious',
									messages: {
										pass: 'word-spacing in the style attribute is not set to !important, or meets the minimum',
										fail: 'word-spacing in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)',
									},
								},
								'is-on-screen': {
									impact: 'serious',
									messages: { pass: 'Element is not visible', fail: 'Element is visible' },
								},
								'non-empty-alt': {
									impact: 'critical',
									messages: {
										pass: 'Element has a non-empty alt attribute',
										fail: {
											noAttr: 'Element has no alt attribute',
											emptyAttr: 'Element has an empty alt attribute',
										},
									},
								},
								'non-empty-if-present': {
									impact: 'critical',
									messages: {
										pass: {
											default: 'Element does not have a value attribute',
											'has-label': 'Element has a non-empty value attribute',
										},
										fail: 'Element has a value attribute and the value attribute is empty',
									},
								},
								'non-empty-placeholder': {
									impact: 'serious',
									messages: {
										pass: 'Element has a placeholder attribute',
										fail: {
											noAttr: 'Element has no placeholder attribute',
											emptyAttr: 'Element has an empty placeholder attribute',
										},
									},
								},
								'non-empty-title': {
									impact: 'serious',
									messages: {
										pass: 'Element has a title attribute',
										fail: {
											noAttr: 'Element has no title attribute',
											emptyAttr: 'Element has an empty title attribute',
										},
									},
								},
								'non-empty-value': {
									impact: 'critical',
									messages: {
										pass: 'Element has a non-empty value attribute',
										fail: {
											noAttr: 'Element has no value attribute',
											emptyAttr: 'Element has an empty value attribute',
										},
									},
								},
								'presentational-role': {
									impact: 'minor',
									messages: {
										pass: 'Element\'s default semantics were overriden with role="${data.role}"',
										fail: {
											default:
												'Element\'s default semantics were not overridden with role="none" or role="presentation"',
											globalAria:
												"Element's role is not presentational because it has a global ARIA attribute",
											focusable: "Element's role is not presentational because it is focusable",
											both: "Element's role is not presentational because it has a global ARIA attribute and is focusable",
											iframe:
												'Using the "title" attribute on an ${data.nodeName} element with a presentational role behaves inconsistently between screen readers',
										},
									},
								},
								'role-none': {
									impact: 'minor',
									messages: {
										pass: 'Element\'s default semantics were overriden with role="none"',
										fail: 'Element\'s default semantics were not overridden with role="none"',
									},
								},
								'role-presentation': {
									impact: 'minor',
									messages: {
										pass: 'Element\'s default semantics were overriden with role="presentation"',
										fail: 'Element\'s default semantics were not overridden with role="presentation"',
									},
								},
								'svg-non-empty-title': {
									impact: 'serious',
									messages: {
										pass: 'Element has a child that is a title',
										fail: {
											noTitle: 'Element has no child that is a title',
											emptyTitle: 'Element child title is empty',
										},
										incomplete: 'Unable to determine element has a child that is a title',
									},
								},
								'caption-faked': {
									impact: 'serious',
									messages: {
										pass: 'The first row of a table is not used as a caption',
										fail: 'The first child of the table should be a caption instead of a table cell',
									},
								},
								'html5-scope': {
									impact: 'moderate',
									messages: {
										pass: 'Scope attribute is only used on table header elements (<th>)',
										fail: 'In HTML 5, scope attributes may only be used on table header elements (<th>)',
									},
								},
								'same-caption-summary': {
									impact: 'minor',
									messages: {
										pass: 'Content of summary attribute and <caption> are not duplicated',
										fail: 'Content of summary attribute and <caption> element are identical',
										incomplete: 'Unable to determine if <table> element has a caption',
									},
								},
								'scope-value': {
									impact: 'critical',
									messages: {
										pass: 'Scope attribute is used correctly',
										fail: "The value of the scope attribute may only be 'row' or 'col'",
									},
								},
								'td-has-header': {
									impact: 'critical',
									messages: {
										pass: 'All non-empty data cells have table headers',
										fail: 'Some non-empty data cells do not have table headers',
									},
								},
								'td-headers-attr': {
									impact: 'serious',
									messages: {
										pass: 'The headers attribute is exclusively used to refer to other cells in the table',
										incomplete: 'The headers attribute is empty',
										fail: 'The headers attribute is not exclusively used to refer to other cells in the table',
									},
								},
								'th-has-data-cells': {
									impact: 'serious',
									messages: {
										pass: 'All table header cells refer to data cells',
										fail: 'Not all table header cells refer to data cells',
										incomplete: 'Table data cells are missing or empty',
									},
								},
								'hidden-content': {
									impact: 'minor',
									messages: {
										pass: 'All content on the page has been analyzed.',
										fail: 'There were problems analyzing the content on this page.',
										incomplete:
											'There is hidden content on the page that was not analyzed. You will need to trigger the display of this content in order to analyze it.',
									},
								},
							},
							failureSummaries: {
								any: {
									failureMessage: function anonymous(it) {
										var out = 'Fix any of the following:',
											arr1 = it
										if (arr1)
											for (var i1 = -1, l1 = arr1.length - 1; i1 < l1; )
												out += '\n  ' + arr1[(i1 += 1)].split('\n').join('\n  ')
										return out
									},
								},
								none: {
									failureMessage: function anonymous(it) {
										var out = 'Fix all of the following:',
											arr1 = it
										if (arr1)
											for (var i1 = -1, l1 = arr1.length - 1; i1 < l1; )
												out += '\n  ' + arr1[(i1 += 1)].split('\n').join('\n  ')
										return out
									},
								},
							},
							incompleteFallbackMessage:
								"axe couldn't tell the reason. Time to break out the element inspector!",
						},
						rules: [
							{
								id: 'accesskeys',
								selector: '[accesskey]',
								excludeHidden: !1,
								tags: ['cat.keyboard', 'best-practice'],
								all: [],
								any: [],
								none: ['accesskeys'],
							},
							{
								id: 'area-alt',
								selector: 'map area[href]',
								excludeHidden: !1,
								tags: [
									'cat.text-alternatives',
									'wcag2a',
									'wcag244',
									'wcag412',
									'section508',
									'section508.22.a',
									'ACT',
								],
								actIds: ['c487ae'],
								all: [],
								any: [
									{ options: { attribute: 'alt' }, id: 'non-empty-alt' },
									'aria-label',
									'aria-labelledby',
									{ options: { attribute: 'title' }, id: 'non-empty-title' },
								],
								none: [],
							},
							{
								id: 'aria-allowed-attr',
								matches: 'aria-allowed-attr-matches',
								tags: ['cat.aria', 'wcag2a', 'wcag412'],
								actIds: ['5c01ea'],
								all: [],
								any: [
									{
										options: {
											validTreeRowAttrs: [
												'aria-posinset',
												'aria-setsize',
												'aria-expanded',
												'aria-level',
											],
										},
										id: 'aria-allowed-attr',
									},
								],
								none: [
									'aria-unsupported-attr',
									{
										options: { elementsAllowedAriaLabel: ['applet', 'input'] },
										id: 'aria-prohibited-attr',
									},
								],
							},
							{
								id: 'aria-allowed-role',
								excludeHidden: !1,
								selector: '[role]',
								matches: 'aria-allowed-role-matches',
								tags: ['cat.aria', 'best-practice'],
								all: [],
								any: [{ options: { allowImplicit: !0, ignoredTags: [] }, id: 'aria-allowed-role' }],
								none: [],
							},
							{
								id: 'aria-command-name',
								selector: '[role="link"], [role="button"], [role="menuitem"]',
								matches: 'no-naming-method-matches',
								tags: ['cat.aria', 'wcag2a', 'wcag412', 'ACT'],
								actIds: ['97a4e1'],
								all: [],
								any: [
									'has-visible-text',
									'aria-label',
									'aria-labelledby',
									{ options: { attribute: 'title' }, id: 'non-empty-title' },
								],
								none: [],
							},
							{
								id: 'aria-dialog-name',
								selector: '[role="dialog"], [role="alertdialog"]',
								matches: 'no-naming-method-matches',
								tags: ['cat.aria', 'best-practice'],
								all: [],
								any: [
									'aria-label',
									'aria-labelledby',
									{ options: { attribute: 'title' }, id: 'non-empty-title' },
								],
								none: [],
							},
							{
								id: 'aria-hidden-body',
								selector: 'body',
								excludeHidden: !1,
								matches: 'is-initiator-matches',
								tags: ['cat.aria', 'wcag2a', 'wcag412'],
								all: [],
								any: ['aria-hidden-body'],
								none: [],
							},
							{
								id: 'aria-hidden-focus',
								selector: '[aria-hidden="true"]',
								matches: 'aria-hidden-focus-matches',
								excludeHidden: !1,
								tags: ['cat.name-role-value', 'wcag2a', 'wcag412'],
								actIds: ['6cfa84'],
								all: ['focusable-modal-open', 'focusable-disabled', 'focusable-not-tabbable'],
								any: [],
								none: [],
							},
							{
								id: 'aria-input-field-name',
								selector:
									'[role="combobox"], [role="listbox"], [role="searchbox"], [role="slider"], [role="spinbutton"], [role="textbox"]',
								matches: 'no-naming-method-matches',
								tags: ['cat.aria', 'wcag2a', 'wcag412', 'ACT'],
								actIds: ['e086e5'],
								all: [],
								any: [
									'aria-label',
									'aria-labelledby',
									{ options: { attribute: 'title' }, id: 'non-empty-title' },
								],
								none: ['no-implicit-explicit-label'],
							},
							{
								id: 'aria-meter-name',
								selector: '[role="meter"]',
								matches: 'no-naming-method-matches',
								tags: ['cat.aria', 'wcag2a', 'wcag111'],
								all: [],
								any: [
									'aria-label',
									'aria-labelledby',
									{ options: { attribute: 'title' }, id: 'non-empty-title' },
								],
								none: [],
							},
							{
								id: 'aria-progressbar-name',
								selector: '[role="progressbar"]',
								matches: 'no-naming-method-matches',
								tags: ['cat.aria', 'wcag2a', 'wcag111'],
								all: [],
								any: [
									'aria-label',
									'aria-labelledby',
									{ options: { attribute: 'title' }, id: 'non-empty-title' },
								],
								none: [],
							},
							{
								id: 'aria-required-attr',
								selector: '[role]',
								tags: ['cat.aria', 'wcag2a', 'wcag412'],
								actIds: ['4e8ab6'],
								all: [],
								any: ['aria-required-attr'],
								none: [],
							},
							{
								id: 'aria-required-children',
								selector: '[role]',
								matches: 'aria-required-children-matches',
								tags: ['cat.aria', 'wcag2a', 'wcag131'],
								actIds: ['bc4a75'],
								all: [],
								any: [
									{
										options: {
											reviewEmpty: [
												'doc-bibliography',
												'doc-endnotes',
												'grid',
												'list',
												'listbox',
												'menu',
												'menubar',
												'table',
												'tablist',
												'tree',
												'treegrid',
												'rowgroup',
											],
										},
										id: 'aria-required-children',
									},
									'aria-busy',
								],
								none: [],
							},
							{
								id: 'aria-required-parent',
								selector: '[role]',
								matches: 'aria-required-parent-matches',
								tags: ['cat.aria', 'wcag2a', 'wcag131'],
								actIds: ['ff89c9'],
								all: [],
								any: [
									{
										options: { ownGroupRoles: ['listitem', 'treeitem'] },
										id: 'aria-required-parent',
									},
								],
								none: [],
							},
							{
								id: 'aria-roledescription',
								selector: '[aria-roledescription]',
								tags: ['cat.aria', 'wcag2a', 'wcag412'],
								all: [],
								any: [
									{
										options: {
											supportedRoles: [
												'button',
												'img',
												'checkbox',
												'radio',
												'combobox',
												'menuitemcheckbox',
												'menuitemradio',
											],
										},
										id: 'aria-roledescription',
									},
								],
								none: [],
							},
							{
								id: 'aria-roles',
								selector: '[role]',
								matches: 'no-empty-role-matches',
								tags: ['cat.aria', 'wcag2a', 'wcag412'],
								actIds: ['674b10'],
								all: [],
								any: [],
								none: ['invalidrole', 'abstractrole', 'unsupportedrole', 'deprecatedrole'],
							},
							{
								id: 'aria-text',
								selector: '[role=text]',
								tags: ['cat.aria', 'best-practice'],
								all: [],
								any: ['no-focusable-content'],
								none: [],
							},
							{
								id: 'aria-toggle-field-name',
								selector:
									'[role="checkbox"], [role="menuitemcheckbox"], [role="menuitemradio"], [role="radio"], [role="switch"], [role="option"]',
								matches: 'no-naming-method-matches',
								tags: ['cat.aria', 'wcag2a', 'wcag412', 'ACT'],
								actIds: ['e086e5'],
								all: [],
								any: [
									'has-visible-text',
									'aria-label',
									'aria-labelledby',
									{ options: { attribute: 'title' }, id: 'non-empty-title' },
								],
								none: ['no-implicit-explicit-label'],
							},
							{
								id: 'aria-tooltip-name',
								selector: '[role="tooltip"]',
								matches: 'no-naming-method-matches',
								tags: ['cat.aria', 'wcag2a', 'wcag412'],
								all: [],
								any: [
									'has-visible-text',
									'aria-label',
									'aria-labelledby',
									{ options: { attribute: 'title' }, id: 'non-empty-title' },
								],
								none: [],
							},
							{
								id: 'aria-treeitem-name',
								selector: '[role="treeitem"]',
								matches: 'no-naming-method-matches',
								tags: ['cat.aria', 'best-practice'],
								all: [],
								any: [
									'has-visible-text',
									'aria-label',
									'aria-labelledby',
									{ options: { attribute: 'title' }, id: 'non-empty-title' },
								],
								none: [],
							},
							{
								id: 'aria-valid-attr-value',
								matches: 'aria-has-attr-matches',
								tags: ['cat.aria', 'wcag2a', 'wcag412'],
								actIds: ['6a7281'],
								all: [
									{ options: [], id: 'aria-valid-attr-value' },
									'aria-errormessage',
									'aria-level',
								],
								any: [],
								none: [],
							},
							{
								id: 'aria-valid-attr',
								matches: 'aria-has-attr-matches',
								tags: ['cat.aria', 'wcag2a', 'wcag412'],
								actIds: ['5f99a7'],
								all: [],
								any: [{ options: [], id: 'aria-valid-attr' }],
								none: [],
							},
							{
								id: 'audio-caption',
								selector: 'audio',
								enabled: !1,
								excludeHidden: !1,
								tags: ['cat.time-and-media', 'wcag2a', 'wcag121', 'section508', 'section508.22.a'],
								actIds: ['2eb176', 'afb423'],
								all: [],
								any: [],
								none: ['caption'],
							},
							{
								id: 'autocomplete-valid',
								matches: 'autocomplete-matches',
								tags: ['cat.forms', 'wcag21aa', 'wcag135', 'ACT'],
								actIds: ['73f2c2'],
								all: [
									{
										options: {
											stateTerms: [
												'none',
												'false',
												'true',
												'disabled',
												'enabled',
												'undefined',
												'null',
											],
										},
										id: 'autocomplete-valid',
									},
								],
								any: [],
								none: [],
							},
							{
								id: 'avoid-inline-spacing',
								selector: '[style]',
								matches: 'is-visible-on-screen-matches',
								tags: ['cat.structure', 'wcag21aa', 'wcag1412', 'ACT'],
								actIds: ['24afc2', '9e45ec', '78fd32'],
								all: [
									{
										options: { cssProperty: 'letter-spacing', minValue: 0.12 },
										id: 'important-letter-spacing',
									},
									{
										options: { cssProperty: 'word-spacing', minValue: 0.16 },
										id: 'important-word-spacing',
									},
									{
										options: {
											multiLineOnly: !0,
											cssProperty: 'line-height',
											minValue: 1.5,
											normalValue: 1,
										},
										id: 'important-line-height',
									},
								],
								any: [],
								none: [],
							},
							{
								id: 'blink',
								selector: 'blink',
								excludeHidden: !1,
								tags: ['cat.time-and-media', 'wcag2a', 'wcag222', 'section508', 'section508.22.j'],
								all: [],
								any: [],
								none: ['is-on-screen'],
							},
							{
								id: 'button-name',
								selector: 'button',
								matches: 'no-explicit-name-required-matches',
								tags: [
									'cat.name-role-value',
									'wcag2a',
									'wcag412',
									'section508',
									'section508.22.a',
									'ACT',
								],
								actIds: ['97a4e1', 'm6b1q3'],
								all: [],
								any: [
									'button-has-visible-text',
									'aria-label',
									'aria-labelledby',
									{ options: { attribute: 'title' }, id: 'non-empty-title' },
									'presentational-role',
								],
								none: [],
							},
							{
								id: 'bypass',
								selector: 'html',
								pageLevel: !0,
								matches: 'bypass-matches',
								reviewOnFail: !0,
								tags: ['cat.keyboard', 'wcag2a', 'wcag241', 'section508', 'section508.22.o'],
								actIds: ['cf77f2', '047fe0', 'b40fd1', '3e12e1', 'ye5d6e'],
								all: [],
								any: [
									'internal-link-present',
									{
										options: {
											selector: ':is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]',
										},
										id: 'header-present',
									},
									{ options: { selector: 'main, [role=main]' }, id: 'landmark' },
								],
								none: [],
							},
							{
								id: 'color-contrast-enhanced',
								matches: 'color-contrast-matches',
								excludeHidden: !1,
								enabled: !1,
								tags: ['cat.color', 'wcag2aaa', 'wcag146', 'ACT'],
								actIds: ['09o5cg'],
								all: [],
								any: [
									{
										options: {
											ignoreUnicode: !0,
											ignoreLength: !1,
											ignorePseudo: !1,
											boldValue: 700,
											boldTextPt: 14,
											largeTextPt: 18,
											contrastRatio: {
												normal: { expected: 7, minThreshold: 4.5 },
												large: { expected: 4.5, minThreshold: 3 },
											},
											pseudoSizeThreshold: 0.25,
											shadowOutlineEmMax: 0.1,
										},
										id: 'color-contrast-enhanced',
									},
								],
								none: [],
							},
							{
								id: 'color-contrast',
								matches: 'color-contrast-matches',
								excludeHidden: !1,
								tags: ['cat.color', 'wcag2aa', 'wcag143', 'ACT'],
								actIds: ['afw4f7', '09o5cg'],
								all: [],
								any: [
									{
										options: {
											ignoreUnicode: !0,
											ignoreLength: !1,
											ignorePseudo: !1,
											boldValue: 700,
											boldTextPt: 14,
											largeTextPt: 18,
											contrastRatio: { normal: { expected: 4.5 }, large: { expected: 3 } },
											pseudoSizeThreshold: 0.25,
											shadowOutlineEmMax: 0.2,
										},
										id: 'color-contrast',
									},
								],
								none: [],
							},
							{
								id: 'css-orientation-lock',
								selector: 'html',
								tags: ['cat.structure', 'wcag134', 'wcag21aa', 'experimental'],
								actIds: ['b33eff'],
								all: [{ options: { degreeThreshold: 2 }, id: 'css-orientation-lock' }],
								any: [],
								none: [],
								preload: !0,
							},
							{
								id: 'definition-list',
								selector: 'dl',
								matches: 'no-role-matches',
								tags: ['cat.structure', 'wcag2a', 'wcag131'],
								all: [],
								any: [],
								none: [
									'structured-dlitems',
									{
										options: {
											validRoles: ['definition', 'term', 'listitem'],
											validNodeNames: ['dt', 'dd'],
											divGroups: !0,
										},
										id: 'only-dlitems',
									},
								],
							},
							{
								id: 'dlitem',
								selector: 'dd, dt',
								matches: 'no-role-matches',
								tags: ['cat.structure', 'wcag2a', 'wcag131'],
								all: [],
								any: ['dlitem'],
								none: [],
							},
							{
								id: 'document-title',
								selector: 'html',
								matches: 'is-initiator-matches',
								tags: ['cat.text-alternatives', 'wcag2a', 'wcag242', 'ACT'],
								actIds: ['2779a5'],
								all: [],
								any: ['doc-has-title'],
								none: [],
							},
							{
								id: 'duplicate-id-active',
								selector: '[id]',
								matches: 'duplicate-id-active-matches',
								excludeHidden: !1,
								tags: ['cat.parsing', 'wcag2a', 'wcag411'],
								actIds: ['3ea0c8'],
								all: [],
								any: ['duplicate-id-active'],
								none: [],
							},
							{
								id: 'duplicate-id-aria',
								selector: '[id]',
								matches: 'duplicate-id-aria-matches',
								excludeHidden: !1,
								tags: ['cat.parsing', 'wcag2a', 'wcag411'],
								actIds: ['3ea0c8'],
								all: [],
								any: ['duplicate-id-aria'],
								none: [],
							},
							{
								id: 'duplicate-id',
								selector: '[id]',
								matches: 'duplicate-id-misc-matches',
								excludeHidden: !1,
								tags: ['cat.parsing', 'wcag2a', 'wcag411'],
								actIds: ['3ea0c8'],
								all: [],
								any: ['duplicate-id'],
								none: [],
							},
							{
								id: 'empty-heading',
								selector: 'h1, h2, h3, h4, h5, h6, [role="heading"]',
								matches: 'heading-matches',
								tags: ['cat.name-role-value', 'best-practice'],
								actIds: ['ffd0e9'],
								impact: 'minor',
								all: [],
								any: [
									'has-visible-text',
									'aria-label',
									'aria-labelledby',
									{ options: { attribute: 'title' }, id: 'non-empty-title' },
								],
								none: [],
							},
							{
								id: 'empty-table-header',
								selector: 'th, [role="rowheader"], [role="columnheader"]',
								tags: ['cat.name-role-value', 'best-practice'],
								all: [],
								any: ['has-visible-text'],
								none: [],
							},
							{
								id: 'focus-order-semantics',
								selector: 'div, h1, h2, h3, h4, h5, h6, [role=heading], p, span',
								matches: 'inserted-into-focus-order-matches',
								tags: ['cat.keyboard', 'best-practice', 'experimental'],
								all: [],
								any: [
									{ options: [], id: 'has-widget-role' },
									{ options: { roles: ['tooltip'] }, id: 'valid-scrollable-semantics' },
								],
								none: [],
							},
							{
								id: 'form-field-multiple-labels',
								selector: 'input, select, textarea',
								matches: 'label-matches',
								tags: ['cat.forms', 'wcag2a', 'wcag332'],
								all: [],
								any: [],
								none: ['multiple-label'],
							},
							{
								id: 'frame-focusable-content',
								selector: 'html',
								matches: 'frame-focusable-content-matches',
								tags: ['cat.keyboard', 'wcag2a', 'wcag211'],
								actIds: ['akn7bn'],
								all: [],
								any: ['frame-focusable-content'],
								none: [],
							},
							{
								id: 'frame-tested',
								selector: 'html, frame, iframe',
								tags: ['cat.structure', 'review-item', 'best-practice'],
								all: [{ options: { isViolation: !1 }, id: 'frame-tested' }],
								any: [],
								none: [],
							},
							{
								id: 'frame-title-unique',
								selector: 'frame[title], iframe[title]',
								matches: 'frame-title-has-text-matches',
								tags: ['cat.text-alternatives', 'wcag412', 'wcag2a'],
								actIds: ['4b1c6c'],
								all: [],
								any: [],
								none: ['unique-frame-title'],
								reviewOnFail: !0,
							},
							{
								id: 'frame-title',
								selector: 'frame, iframe',
								matches: 'no-negative-tabindex-matches',
								tags: [
									'cat.text-alternatives',
									'wcag2a',
									'wcag412',
									'section508',
									'section508.22.i',
								],
								actIds: ['cae760'],
								all: [],
								any: [
									{ options: { attribute: 'title' }, id: 'non-empty-title' },
									'aria-label',
									'aria-labelledby',
									'presentational-role',
								],
								none: [],
							},
							{
								id: 'heading-order',
								selector: 'h1, h2, h3, h4, h5, h6, [role=heading]',
								matches: 'heading-matches',
								tags: ['cat.semantics', 'best-practice'],
								all: [],
								any: ['heading-order'],
								none: [],
							},
							{
								id: 'hidden-content',
								selector: '*',
								excludeHidden: !1,
								tags: ['cat.structure', 'experimental', 'review-item', 'best-practice'],
								all: [],
								any: ['hidden-content'],
								none: [],
							},
							{
								id: 'html-has-lang',
								selector: 'html',
								matches: 'is-initiator-matches',
								tags: ['cat.language', 'wcag2a', 'wcag311', 'ACT'],
								actIds: ['b5c3f8'],
								all: [],
								any: [{ options: { attributes: ['lang', 'xml:lang'] }, id: 'has-lang' }],
								none: [],
							},
							{
								id: 'html-lang-valid',
								selector: 'html[lang], html[xml\\:lang]',
								tags: ['cat.language', 'wcag2a', 'wcag311', 'ACT'],
								actIds: ['bf051a'],
								all: [],
								any: [],
								none: [{ options: { attributes: ['lang', 'xml:lang'] }, id: 'valid-lang' }],
							},
							{
								id: 'html-xml-lang-mismatch',
								selector: 'html[lang][xml\\:lang]',
								matches: 'xml-lang-mismatch-matches',
								tags: ['cat.language', 'wcag2a', 'wcag311', 'ACT'],
								actIds: ['5b7ae0'],
								all: ['xml-lang-mismatch'],
								any: [],
								none: [],
							},
							{
								id: 'identical-links-same-purpose',
								selector: 'a[href], area[href], [role="link"]',
								excludeHidden: !1,
								enabled: !1,
								matches: 'identical-links-same-purpose-matches',
								tags: ['cat.semantics', 'wcag2aaa', 'wcag249'],
								actIds: ['b20e66'],
								all: ['identical-links-same-purpose'],
								any: [],
								none: [],
							},
							{
								id: 'image-alt',
								selector: 'img',
								matches: 'no-explicit-name-required-matches',
								tags: [
									'cat.text-alternatives',
									'wcag2a',
									'wcag111',
									'section508',
									'section508.22.a',
									'ACT',
								],
								actIds: ['23a2a8'],
								all: [],
								any: [
									'has-alt',
									'aria-label',
									'aria-labelledby',
									{ options: { attribute: 'title' }, id: 'non-empty-title' },
									'presentational-role',
								],
								none: ['alt-space-value'],
							},
							{
								id: 'image-redundant-alt',
								selector: 'img',
								tags: ['cat.text-alternatives', 'best-practice'],
								all: [],
								any: [],
								none: [
									{
										options: { parentSelector: 'button, [role=button], a[href], p, li, td, th' },
										id: 'duplicate-img-label',
									},
								],
							},
							{
								id: 'input-button-name',
								selector: 'input[type="button"], input[type="submit"], input[type="reset"]',
								matches: 'no-explicit-name-required-matches',
								tags: [
									'cat.name-role-value',
									'wcag2a',
									'wcag412',
									'section508',
									'section508.22.a',
									'ACT',
								],
								actIds: ['97a4e1'],
								all: [],
								any: [
									'non-empty-if-present',
									{ options: { attribute: 'value' }, id: 'non-empty-value' },
									'aria-label',
									'aria-labelledby',
									{ options: { attribute: 'title' }, id: 'non-empty-title' },
									'presentational-role',
								],
								none: [],
							},
							{
								id: 'input-image-alt',
								selector: 'input[type="image"]',
								matches: 'no-explicit-name-required-matches',
								tags: [
									'cat.text-alternatives',
									'wcag2a',
									'wcag111',
									'wcag412',
									'section508',
									'section508.22.a',
									'ACT',
								],
								actIds: ['59796f'],
								all: [],
								any: [
									{ options: { attribute: 'alt' }, id: 'non-empty-alt' },
									'aria-label',
									'aria-labelledby',
									{ options: { attribute: 'title' }, id: 'non-empty-title' },
								],
								none: [],
							},
							{
								id: 'label-content-name-mismatch',
								matches: 'label-content-name-mismatch-matches',
								tags: ['cat.semantics', 'wcag21a', 'wcag253', 'experimental'],
								actIds: ['2ee8b8'],
								all: [],
								any: [
									{
										options: { pixelThreshold: 0.1, occuranceThreshold: 3 },
										id: 'label-content-name-mismatch',
									},
								],
								none: [],
							},
							{
								id: 'label-title-only',
								selector: 'input, select, textarea',
								matches: 'label-matches',
								tags: ['cat.forms', 'best-practice'],
								all: [],
								any: [],
								none: ['title-only'],
							},
							{
								id: 'label',
								selector: 'input, textarea',
								matches: 'label-matches',
								tags: ['cat.forms', 'wcag2a', 'wcag412', 'section508', 'section508.22.n', 'ACT'],
								actIds: ['e086e5'],
								all: [],
								any: [
									'implicit-label',
									'explicit-label',
									'aria-label',
									'aria-labelledby',
									{ options: { attribute: 'title' }, id: 'non-empty-title' },
									{ options: { attribute: 'placeholder' }, id: 'non-empty-placeholder' },
									'presentational-role',
								],
								none: ['help-same-as-label', 'hidden-explicit-label'],
							},
							{
								id: 'landmark-banner-is-top-level',
								selector: 'header:not([role]), [role=banner]',
								matches: 'landmark-has-body-context-matches',
								tags: ['cat.semantics', 'best-practice'],
								all: [],
								any: ['landmark-is-top-level'],
								none: [],
							},
							{
								id: 'landmark-complementary-is-top-level',
								selector: 'aside:not([role]), [role=complementary]',
								tags: ['cat.semantics', 'best-practice'],
								all: [],
								any: ['landmark-is-top-level'],
								none: [],
							},
							{
								id: 'landmark-contentinfo-is-top-level',
								selector: 'footer:not([role]), [role=contentinfo]',
								matches: 'landmark-has-body-context-matches',
								tags: ['cat.semantics', 'best-practice'],
								all: [],
								any: ['landmark-is-top-level'],
								none: [],
							},
							{
								id: 'landmark-main-is-top-level',
								selector: 'main:not([role]), [role=main]',
								tags: ['cat.semantics', 'best-practice'],
								all: [],
								any: ['landmark-is-top-level'],
								none: [],
							},
							{
								id: 'landmark-no-duplicate-banner',
								selector: 'header:not([role]), [role=banner]',
								tags: ['cat.semantics', 'best-practice'],
								all: [],
								any: [
									{
										options: {
											selector: 'header:not([role]), [role=banner]',
											nativeScopeFilter: 'article, aside, main, nav, section',
										},
										id: 'page-no-duplicate-banner',
									},
								],
								none: [],
							},
							{
								id: 'landmark-no-duplicate-contentinfo',
								selector: 'footer:not([role]), [role=contentinfo]',
								tags: ['cat.semantics', 'best-practice'],
								all: [],
								any: [
									{
										options: {
											selector: 'footer:not([role]), [role=contentinfo]',
											nativeScopeFilter: 'article, aside, main, nav, section',
										},
										id: 'page-no-duplicate-contentinfo',
									},
								],
								none: [],
							},
							{
								id: 'landmark-no-duplicate-main',
								selector: 'main:not([role]), [role=main]',
								tags: ['cat.semantics', 'best-practice'],
								all: [],
								any: [
									{
										options: { selector: "main:not([role]), [role='main']" },
										id: 'page-no-duplicate-main',
									},
								],
								none: [],
							},
							{
								id: 'landmark-one-main',
								selector: 'html',
								tags: ['cat.semantics', 'best-practice'],
								all: [
									{
										options: { selector: "main:not([role]), [role='main']", passForModal: !0 },
										id: 'page-has-main',
									},
								],
								any: [],
								none: [],
							},
							{
								id: 'landmark-unique',
								selector:
									'[role=banner], [role=complementary], [role=contentinfo], [role=main], [role=navigation], [role=region], [role=search], [role=form], form, footer, header, aside, main, nav, section',
								tags: ['cat.semantics', 'best-practice'],
								matches: 'landmark-unique-matches',
								all: [],
								any: ['landmark-is-unique'],
								none: [],
							},
							{
								id: 'link-in-text-block',
								selector: 'a[href], [role=link]',
								matches: 'link-in-text-block-matches',
								excludeHidden: !1,
								tags: ['cat.color', 'wcag2a', 'wcag141'],
								all: [],
								any: [
									{ options: { requiredContrastRatio: 3 }, id: 'link-in-text-block' },
									'link-in-text-block-style',
								],
								none: [],
							},
							{
								id: 'link-name',
								selector: 'a[href]',
								tags: [
									'cat.name-role-value',
									'wcag2a',
									'wcag412',
									'wcag244',
									'section508',
									'section508.22.a',
									'ACT',
								],
								actIds: ['c487ae'],
								all: [],
								any: [
									'has-visible-text',
									'aria-label',
									'aria-labelledby',
									{ options: { attribute: 'title' }, id: 'non-empty-title' },
								],
								none: ['focusable-no-name'],
							},
							{
								id: 'list',
								selector: 'ul, ol',
								matches: 'no-role-matches',
								tags: ['cat.structure', 'wcag2a', 'wcag131'],
								all: [],
								any: [],
								none: [
									{
										options: { validRoles: ['listitem'], validNodeNames: ['li'] },
										id: 'only-listitems',
									},
								],
							},
							{
								id: 'listitem',
								selector: 'li',
								matches: 'no-role-matches',
								tags: ['cat.structure', 'wcag2a', 'wcag131'],
								all: [],
								any: ['listitem'],
								none: [],
							},
							{
								id: 'marquee',
								selector: 'marquee',
								excludeHidden: !1,
								tags: ['cat.parsing', 'wcag2a', 'wcag222'],
								all: [],
								any: [],
								none: ['is-on-screen'],
							},
							{
								id: 'meta-refresh-no-exceptions',
								selector: 'meta[http-equiv="refresh"][content]',
								excludeHidden: !1,
								enabled: !1,
								tags: ['cat.time-and-media', 'wcag2aaa', 'wcag224', 'wcag325'],
								actIds: ['bisz58'],
								all: [],
								any: [
									{ options: { minDelay: 72e3, maxDelay: !1 }, id: 'meta-refresh-no-exceptions' },
								],
								none: [],
							},
							{
								id: 'meta-refresh',
								selector: 'meta[http-equiv="refresh"][content]',
								excludeHidden: !1,
								tags: ['cat.time-and-media', 'wcag2a', 'wcag221'],
								actIds: ['bc659a', 'bisz58'],
								all: [],
								any: [{ options: { minDelay: 0, maxDelay: 72e3 }, id: 'meta-refresh' }],
								none: [],
							},
							{
								id: 'meta-viewport-large',
								selector: 'meta[name="viewport"]',
								matches: 'is-initiator-matches',
								excludeHidden: !1,
								tags: ['cat.sensory-and-visual-cues', 'best-practice'],
								all: [],
								any: [{ options: { scaleMinimum: 5, lowerBound: 2 }, id: 'meta-viewport-large' }],
								none: [],
							},
							{
								id: 'meta-viewport',
								selector: 'meta[name="viewport"]',
								matches: 'is-initiator-matches',
								excludeHidden: !1,
								tags: ['cat.sensory-and-visual-cues', 'wcag2aa', 'wcag144', 'ACT'],
								actIds: ['b4f0c3'],
								all: [],
								any: [{ options: { scaleMinimum: 2 }, id: 'meta-viewport' }],
								none: [],
							},
							{
								id: 'nested-interactive',
								matches: 'nested-interactive-matches',
								tags: ['cat.keyboard', 'wcag2a', 'wcag412'],
								actIds: ['307n5z'],
								all: [],
								any: ['no-focusable-content'],
								none: [],
							},
							{
								id: 'no-autoplay-audio',
								excludeHidden: !1,
								selector: 'audio[autoplay], video[autoplay]',
								matches: 'no-autoplay-audio-matches',
								reviewOnFail: !0,
								tags: ['cat.time-and-media', 'wcag2a', 'wcag142', 'ACT'],
								actIds: ['80f0bf'],
								preload: !0,
								all: [{ options: { allowedDuration: 3 }, id: 'no-autoplay-audio' }],
								any: [],
								none: [],
							},
							{
								id: 'object-alt',
								selector: 'object[data]',
								matches: 'object-is-loaded-matches',
								tags: [
									'cat.text-alternatives',
									'wcag2a',
									'wcag111',
									'section508',
									'section508.22.a',
								],
								actIds: ['8fc3b6'],
								all: [],
								any: [
									'aria-label',
									'aria-labelledby',
									{ options: { attribute: 'title' }, id: 'non-empty-title' },
									'presentational-role',
								],
								none: [],
							},
							{
								id: 'p-as-heading',
								selector: 'p',
								matches: 'p-as-heading-matches',
								tags: ['cat.semantics', 'wcag2a', 'wcag131', 'experimental'],
								all: [
									{
										options: {
											margins: [
												{ weight: 150, italic: !0 },
												{ weight: 150, size: 1.15 },
												{ italic: !0, size: 1.15 },
												{ size: 1.4 },
											],
											passLength: 1,
											failLength: 0.5,
										},
										id: 'p-as-heading',
									},
								],
								any: [],
								none: [],
							},
							{
								id: 'page-has-heading-one',
								selector: 'html',
								tags: ['cat.semantics', 'best-practice'],
								all: [
									{
										options: {
											selector:
												'h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]',
											passForModal: !0,
										},
										id: 'page-has-heading-one',
									},
								],
								any: [],
								none: [],
							},
							{
								id: 'presentation-role-conflict',
								selector: 'img[alt=\'\'], [role="none"], [role="presentation"]',
								matches: 'has-implicit-chromium-role-matches',
								tags: ['cat.aria', 'best-practice', 'ACT'],
								actIds: ['46ca7f'],
								all: [],
								any: [],
								none: ['is-element-focusable', 'has-global-aria-attribute'],
							},
							{
								id: 'region',
								selector: 'body *',
								tags: ['cat.keyboard', 'best-practice'],
								all: [],
								any: [
									{
										options: { regionMatcher: 'dialog, [role=dialog], [role=alertdialog], svg' },
										id: 'region',
									},
								],
								none: [],
							},
							{
								id: 'role-img-alt',
								selector: "[role='img']:not(img, area, input, object)",
								matches: 'html-namespace-matches',
								tags: [
									'cat.text-alternatives',
									'wcag2a',
									'wcag111',
									'section508',
									'section508.22.a',
									'ACT',
								],
								actIds: ['23a2a8'],
								all: [],
								any: [
									'aria-label',
									'aria-labelledby',
									{ options: { attribute: 'title' }, id: 'non-empty-title' },
								],
								none: [],
							},
							{
								id: 'scope-attr-valid',
								selector: 'td[scope], th[scope]',
								tags: ['cat.tables', 'best-practice'],
								all: [
									'html5-scope',
									{
										options: { values: ['row', 'col', 'rowgroup', 'colgroup'] },
										id: 'scope-value',
									},
								],
								any: [],
								none: [],
							},
							{
								id: 'scrollable-region-focusable',
								matches: 'scrollable-region-focusable-matches',
								tags: ['cat.keyboard', 'wcag2a', 'wcag211'],
								actIds: ['0ssw9k'],
								all: [],
								any: ['focusable-content', 'focusable-element'],
								none: [],
							},
							{
								id: 'select-name',
								selector: 'select',
								tags: ['cat.forms', 'wcag2a', 'wcag412', 'section508', 'section508.22.n', 'ACT'],
								actIds: ['e086e5'],
								all: [],
								any: [
									'implicit-label',
									'explicit-label',
									'aria-label',
									'aria-labelledby',
									{ options: { attribute: 'title' }, id: 'non-empty-title' },
									'presentational-role',
								],
								none: ['help-same-as-label', 'hidden-explicit-label'],
							},
							{
								id: 'server-side-image-map',
								selector: 'img[ismap]',
								tags: [
									'cat.text-alternatives',
									'wcag2a',
									'wcag211',
									'section508',
									'section508.22.f',
								],
								all: [],
								any: [],
								none: ['exists'],
							},
							{
								id: 'skip-link',
								selector: 'a[href^="#"], a[href^="/#"]',
								matches: 'skip-link-matches',
								tags: ['cat.keyboard', 'best-practice'],
								all: [],
								any: ['skip-link'],
								none: [],
							},
							{
								id: 'svg-img-alt',
								selector: '[role="img"], [role="graphics-symbol"], svg[role="graphics-document"]',
								matches: 'svg-namespace-matches',
								tags: [
									'cat.text-alternatives',
									'wcag2a',
									'wcag111',
									'section508',
									'section508.22.a',
									'ACT',
								],
								actIds: ['7d6734'],
								all: [],
								any: [
									'svg-non-empty-title',
									'aria-label',
									'aria-labelledby',
									{ options: { attribute: 'title' }, id: 'non-empty-title' },
								],
								none: [],
							},
							{
								id: 'tabindex',
								selector: '[tabindex]',
								tags: ['cat.keyboard', 'best-practice'],
								all: [],
								any: ['tabindex'],
								none: [],
							},
							{
								id: 'table-duplicate-name',
								selector: 'table',
								tags: ['cat.tables', 'best-practice'],
								all: [],
								any: [],
								none: ['same-caption-summary'],
							},
							{
								id: 'table-fake-caption',
								selector: 'table',
								matches: 'data-table-matches',
								tags: [
									'cat.tables',
									'experimental',
									'wcag2a',
									'wcag131',
									'section508',
									'section508.22.g',
								],
								all: ['caption-faked'],
								any: [],
								none: [],
							},
							{
								id: 'target-size',
								selector: '*',
								enabled: !1,
								matches: 'widget-not-inline-matches',
								tags: ['wcag22aa', 'wcag258', 'cat.sensory-and-visual-cues'],
								all: [],
								any: [
									{ options: { minSize: 24 }, id: 'target-size' },
									{ options: { minOffset: 24 }, id: 'target-offset' },
								],
								none: [],
							},
							{
								id: 'td-has-header',
								selector: 'table',
								matches: 'data-table-large-matches',
								tags: [
									'cat.tables',
									'experimental',
									'wcag2a',
									'wcag131',
									'section508',
									'section508.22.g',
								],
								all: ['td-has-header'],
								any: [],
								none: [],
							},
							{
								id: 'td-headers-attr',
								selector: 'table',
								matches: 'table-or-grid-role-matches',
								tags: ['cat.tables', 'wcag2a', 'wcag131', 'section508', 'section508.22.g'],
								actIds: ['a25f45'],
								all: ['td-headers-attr'],
								any: [],
								none: [],
							},
							{
								id: 'th-has-data-cells',
								selector: 'table',
								matches: 'data-table-matches',
								tags: ['cat.tables', 'wcag2a', 'wcag131', 'section508', 'section508.22.g'],
								actIds: ['d0f69e'],
								all: ['th-has-data-cells'],
								any: [],
								none: [],
							},
							{
								id: 'valid-lang',
								selector: '[lang]:not(html), [xml\\:lang]:not(html)',
								tags: ['cat.language', 'wcag2aa', 'wcag312', 'ACT'],
								actIds: ['de46e4'],
								all: [],
								any: [],
								none: [{ options: { attributes: ['lang', 'xml:lang'] }, id: 'valid-lang' }],
							},
							{
								id: 'video-caption',
								selector: 'video',
								tags: [
									'cat.text-alternatives',
									'wcag2a',
									'wcag122',
									'section508',
									'section508.22.a',
								],
								actIds: ['eac66b'],
								all: [],
								any: [],
								none: ['caption'],
							},
						],
						checks: [
							{ id: 'abstractrole', evaluate: 'abstractrole-evaluate' },
							{
								id: 'aria-allowed-attr',
								evaluate: 'aria-allowed-attr-evaluate',
								options: {
									validTreeRowAttrs: [
										'aria-posinset',
										'aria-setsize',
										'aria-expanded',
										'aria-level',
									],
								},
							},
							{
								id: 'aria-allowed-role',
								evaluate: 'aria-allowed-role-evaluate',
								options: { allowImplicit: !0, ignoredTags: [] },
							},
							{ id: 'aria-busy', evaluate: 'aria-busy-evaluate' },
							{ id: 'aria-errormessage', evaluate: 'aria-errormessage-evaluate' },
							{ id: 'aria-hidden-body', evaluate: 'aria-hidden-body-evaluate' },
							{ id: 'aria-level', evaluate: 'aria-level-evaluate' },
							{
								id: 'aria-prohibited-attr',
								evaluate: 'aria-prohibited-attr-evaluate',
								options: { elementsAllowedAriaLabel: ['applet', 'input'] },
							},
							{ id: 'aria-required-attr', evaluate: 'aria-required-attr-evaluate' },
							{
								id: 'aria-required-children',
								evaluate: 'aria-required-children-evaluate',
								options: {
									reviewEmpty: [
										'doc-bibliography',
										'doc-endnotes',
										'grid',
										'list',
										'listbox',
										'menu',
										'menubar',
										'table',
										'tablist',
										'tree',
										'treegrid',
										'rowgroup',
									],
								},
							},
							{
								id: 'aria-required-parent',
								evaluate: 'aria-required-parent-evaluate',
								options: { ownGroupRoles: ['listitem', 'treeitem'] },
							},
							{
								id: 'aria-roledescription',
								evaluate: 'aria-roledescription-evaluate',
								options: {
									supportedRoles: [
										'button',
										'img',
										'checkbox',
										'radio',
										'combobox',
										'menuitemcheckbox',
										'menuitemradio',
									],
								},
							},
							{ id: 'aria-unsupported-attr', evaluate: 'aria-unsupported-attr-evaluate' },
							{
								id: 'aria-valid-attr-value',
								evaluate: 'aria-valid-attr-value-evaluate',
								options: [],
							},
							{ id: 'aria-valid-attr', evaluate: 'aria-valid-attr-evaluate', options: [] },
							{ id: 'deprecatedrole', evaluate: 'deprecatedrole-evaluate' },
							{ id: 'fallbackrole', evaluate: 'fallbackrole-evaluate' },
							{ id: 'has-global-aria-attribute', evaluate: 'has-global-aria-attribute-evaluate' },
							{ id: 'has-widget-role', evaluate: 'has-widget-role-evaluate', options: [] },
							{ id: 'invalidrole', evaluate: 'invalidrole-evaluate' },
							{ id: 'is-element-focusable', evaluate: 'is-element-focusable-evaluate' },
							{ id: 'no-implicit-explicit-label', evaluate: 'no-implicit-explicit-label-evaluate' },
							{ id: 'unsupportedrole', evaluate: 'unsupportedrole-evaluate' },
							{
								id: 'valid-scrollable-semantics',
								evaluate: 'valid-scrollable-semantics-evaluate',
								options: { roles: ['tooltip'] },
							},
							{
								id: 'color-contrast-enhanced',
								evaluate: 'color-contrast-evaluate',
								options: {
									ignoreUnicode: !0,
									ignoreLength: !1,
									ignorePseudo: !1,
									boldValue: 700,
									boldTextPt: 14,
									largeTextPt: 18,
									contrastRatio: {
										normal: { expected: 7, minThreshold: 4.5 },
										large: { expected: 4.5, minThreshold: 3 },
									},
									pseudoSizeThreshold: 0.25,
									shadowOutlineEmMax: 0.1,
								},
							},
							{
								id: 'color-contrast',
								evaluate: 'color-contrast-evaluate',
								options: {
									ignoreUnicode: !0,
									ignoreLength: !1,
									ignorePseudo: !1,
									boldValue: 700,
									boldTextPt: 14,
									largeTextPt: 18,
									contrastRatio: { normal: { expected: 4.5 }, large: { expected: 3 } },
									pseudoSizeThreshold: 0.25,
									shadowOutlineEmMax: 0.2,
								},
							},
							{ id: 'link-in-text-block-style', evaluate: 'link-in-text-block-style-evaluate' },
							{
								id: 'link-in-text-block',
								evaluate: 'link-in-text-block-evaluate',
								options: { requiredContrastRatio: 3 },
							},
							{
								id: 'autocomplete-appropriate',
								evaluate: 'autocomplete-appropriate-evaluate',
								deprecated: !0,
							},
							{
								id: 'autocomplete-valid',
								evaluate: 'autocomplete-valid-evaluate',
								options: {
									stateTerms: ['none', 'false', 'true', 'disabled', 'enabled', 'undefined', 'null'],
								},
							},
							{ id: 'accesskeys', evaluate: 'accesskeys-evaluate', after: 'accesskeys-after' },
							{ id: 'focusable-content', evaluate: 'focusable-content-evaluate' },
							{ id: 'focusable-disabled', evaluate: 'focusable-disabled-evaluate' },
							{ id: 'focusable-element', evaluate: 'focusable-element-evaluate' },
							{ id: 'focusable-modal-open', evaluate: 'focusable-modal-open-evaluate' },
							{ id: 'focusable-no-name', evaluate: 'focusable-no-name-evaluate' },
							{ id: 'focusable-not-tabbable', evaluate: 'focusable-not-tabbable-evaluate' },
							{ id: 'frame-focusable-content', evaluate: 'frame-focusable-content-evaluate' },
							{ id: 'landmark-is-top-level', evaluate: 'landmark-is-top-level-evaluate' },
							{ id: 'no-focusable-content', evaluate: 'no-focusable-content-evaluate' },
							{
								id: 'page-has-heading-one',
								evaluate: 'has-descendant-evaluate',
								after: 'has-descendant-after',
								options: {
									selector:
										'h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]',
									passForModal: !0,
								},
							},
							{
								id: 'page-has-main',
								evaluate: 'has-descendant-evaluate',
								after: 'has-descendant-after',
								options: { selector: "main:not([role]), [role='main']", passForModal: !0 },
							},
							{
								id: 'page-no-duplicate-banner',
								evaluate: 'page-no-duplicate-evaluate',
								after: 'page-no-duplicate-after',
								options: {
									selector: 'header:not([role]), [role=banner]',
									nativeScopeFilter: 'article, aside, main, nav, section',
								},
							},
							{
								id: 'page-no-duplicate-contentinfo',
								evaluate: 'page-no-duplicate-evaluate',
								after: 'page-no-duplicate-after',
								options: {
									selector: 'footer:not([role]), [role=contentinfo]',
									nativeScopeFilter: 'article, aside, main, nav, section',
								},
							},
							{
								id: 'page-no-duplicate-main',
								evaluate: 'page-no-duplicate-evaluate',
								after: 'page-no-duplicate-after',
								options: { selector: "main:not([role]), [role='main']" },
							},
							{ id: 'tabindex', evaluate: 'tabindex-evaluate' },
							{ id: 'alt-space-value', evaluate: 'alt-space-value-evaluate' },
							{
								id: 'duplicate-img-label',
								evaluate: 'duplicate-img-label-evaluate',
								options: { parentSelector: 'button, [role=button], a[href], p, li, td, th' },
							},
							{ id: 'explicit-label', evaluate: 'explicit-evaluate' },
							{ id: 'help-same-as-label', evaluate: 'help-same-as-label-evaluate', enabled: !1 },
							{ id: 'hidden-explicit-label', evaluate: 'hidden-explicit-label-evaluate' },
							{ id: 'implicit-label', evaluate: 'implicit-evaluate' },
							{
								id: 'label-content-name-mismatch',
								evaluate: 'label-content-name-mismatch-evaluate',
								options: { pixelThreshold: 0.1, occuranceThreshold: 3 },
							},
							{ id: 'multiple-label', evaluate: 'multiple-label-evaluate' },
							{ id: 'title-only', evaluate: 'title-only-evaluate' },
							{
								id: 'landmark-is-unique',
								evaluate: 'landmark-is-unique-evaluate',
								after: 'landmark-is-unique-after',
							},
							{
								id: 'has-lang',
								evaluate: 'has-lang-evaluate',
								options: { attributes: ['lang', 'xml:lang'] },
							},
							{
								id: 'valid-lang',
								evaluate: 'valid-lang-evaluate',
								options: { attributes: ['lang', 'xml:lang'] },
							},
							{ id: 'xml-lang-mismatch', evaluate: 'xml-lang-mismatch-evaluate' },
							{ id: 'dlitem', evaluate: 'dlitem-evaluate' },
							{ id: 'listitem', evaluate: 'listitem-evaluate' },
							{
								id: 'only-dlitems',
								evaluate: 'invalid-children-evaluate',
								options: {
									validRoles: ['definition', 'term', 'listitem'],
									validNodeNames: ['dt', 'dd'],
									divGroups: !0,
								},
							},
							{
								id: 'only-listitems',
								evaluate: 'invalid-children-evaluate',
								options: { validRoles: ['listitem'], validNodeNames: ['li'] },
							},
							{ id: 'structured-dlitems', evaluate: 'structured-dlitems-evaluate' },
							{ id: 'caption', evaluate: 'caption-evaluate' },
							{
								id: 'frame-tested',
								evaluate: 'frame-tested-evaluate',
								after: 'frame-tested-after',
								options: { isViolation: !1 },
							},
							{
								id: 'no-autoplay-audio',
								evaluate: 'no-autoplay-audio-evaluate',
								options: { allowedDuration: 3 },
							},
							{
								id: 'css-orientation-lock',
								evaluate: 'css-orientation-lock-evaluate',
								options: { degreeThreshold: 2 },
							},
							{
								id: 'meta-viewport-large',
								evaluate: 'meta-viewport-scale-evaluate',
								options: { scaleMinimum: 5, lowerBound: 2 },
							},
							{
								id: 'meta-viewport',
								evaluate: 'meta-viewport-scale-evaluate',
								options: { scaleMinimum: 2 },
							},
							{
								id: 'target-offset',
								evaluate: 'target-offset-evaluate',
								options: { minOffset: 24 },
							},
							{ id: 'target-size', evaluate: 'target-size-evaluate', options: { minSize: 24 } },
							{
								id: 'header-present',
								evaluate: 'has-descendant-evaluate',
								after: 'has-descendant-after',
								options: { selector: ':is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]' },
							},
							{
								id: 'heading-order',
								evaluate: 'heading-order-evaluate',
								after: 'heading-order-after',
							},
							{
								id: 'identical-links-same-purpose',
								evaluate: 'identical-links-same-purpose-evaluate',
								after: 'identical-links-same-purpose-after',
							},
							{ id: 'internal-link-present', evaluate: 'internal-link-present-evaluate' },
							{
								id: 'landmark',
								evaluate: 'has-descendant-evaluate',
								options: { selector: 'main, [role=main]' },
							},
							{
								id: 'meta-refresh-no-exceptions',
								evaluate: 'meta-refresh-evaluate',
								options: { minDelay: 72e3, maxDelay: !1 },
							},
							{
								id: 'meta-refresh',
								evaluate: 'meta-refresh-evaluate',
								options: { minDelay: 0, maxDelay: 72e3 },
							},
							{
								id: 'p-as-heading',
								evaluate: 'p-as-heading-evaluate',
								options: {
									margins: [
										{ weight: 150, italic: !0 },
										{ weight: 150, size: 1.15 },
										{ italic: !0, size: 1.15 },
										{ size: 1.4 },
									],
									passLength: 1,
									failLength: 0.5,
								},
							},
							{
								id: 'region',
								evaluate: 'region-evaluate',
								after: 'region-after',
								options: { regionMatcher: 'dialog, [role=dialog], [role=alertdialog], svg' },
							},
							{ id: 'skip-link', evaluate: 'skip-link-evaluate' },
							{
								id: 'unique-frame-title',
								evaluate: 'unique-frame-title-evaluate',
								after: 'unique-frame-title-after',
							},
							{
								id: 'duplicate-id-active',
								evaluate: 'duplicate-id-evaluate',
								after: 'duplicate-id-after',
							},
							{
								id: 'duplicate-id-aria',
								evaluate: 'duplicate-id-evaluate',
								after: 'duplicate-id-after',
							},
							{
								id: 'duplicate-id',
								evaluate: 'duplicate-id-evaluate',
								after: 'duplicate-id-after',
							},
							{ id: 'aria-label', evaluate: 'aria-label-evaluate' },
							{ id: 'aria-labelledby', evaluate: 'aria-labelledby-evaluate' },
							{
								id: 'avoid-inline-spacing',
								evaluate: 'avoid-inline-spacing-evaluate',
								options: { cssProperties: ['line-height', 'letter-spacing', 'word-spacing'] },
							},
							{ id: 'button-has-visible-text', evaluate: 'has-text-content-evaluate' },
							{ id: 'doc-has-title', evaluate: 'doc-has-title-evaluate' },
							{ id: 'exists', evaluate: 'exists-evaluate' },
							{ id: 'has-alt', evaluate: 'has-alt-evaluate' },
							{ id: 'has-visible-text', evaluate: 'has-text-content-evaluate' },
							{
								id: 'important-letter-spacing',
								evaluate: 'inline-style-property-evaluate',
								options: { cssProperty: 'letter-spacing', minValue: 0.12 },
							},
							{
								id: 'important-line-height',
								evaluate: 'inline-style-property-evaluate',
								options: {
									multiLineOnly: !0,
									cssProperty: 'line-height',
									minValue: 1.5,
									normalValue: 1,
								},
							},
							{
								id: 'important-word-spacing',
								evaluate: 'inline-style-property-evaluate',
								options: { cssProperty: 'word-spacing', minValue: 0.16 },
							},
							{ id: 'is-on-screen', evaluate: 'is-on-screen-evaluate' },
							{
								id: 'non-empty-alt',
								evaluate: 'attr-non-space-content-evaluate',
								options: { attribute: 'alt' },
							},
							{ id: 'non-empty-if-present', evaluate: 'non-empty-if-present-evaluate' },
							{
								id: 'non-empty-placeholder',
								evaluate: 'attr-non-space-content-evaluate',
								options: { attribute: 'placeholder' },
							},
							{
								id: 'non-empty-title',
								evaluate: 'attr-non-space-content-evaluate',
								options: { attribute: 'title' },
							},
							{
								id: 'non-empty-value',
								evaluate: 'attr-non-space-content-evaluate',
								options: { attribute: 'value' },
							},
							{ id: 'presentational-role', evaluate: 'presentational-role-evaluate' },
							{
								id: 'role-none',
								evaluate: 'matches-definition-evaluate',
								deprecated: !0,
								options: { matcher: { attributes: { role: 'none' } } },
							},
							{
								id: 'role-presentation',
								evaluate: 'matches-definition-evaluate',
								deprecated: !0,
								options: { matcher: { attributes: { role: 'presentation' } } },
							},
							{ id: 'svg-non-empty-title', evaluate: 'svg-non-empty-title-evaluate' },
							{ id: 'caption-faked', evaluate: 'caption-faked-evaluate' },
							{ id: 'html5-scope', evaluate: 'html5-scope-evaluate' },
							{ id: 'same-caption-summary', evaluate: 'same-caption-summary-evaluate' },
							{
								id: 'scope-value',
								evaluate: 'scope-value-evaluate',
								options: { values: ['row', 'col', 'rowgroup', 'colgroup'] },
							},
							{ id: 'td-has-header', evaluate: 'td-has-header-evaluate' },
							{ id: 'td-headers-attr', evaluate: 'td-headers-attr-evaluate' },
							{ id: 'th-has-data-cells', evaluate: 'th-has-data-cells-evaluate' },
							{ id: 'hidden-content', evaluate: 'hidden-content-evaluate' },
						],
					})
			})('object' == typeof window ? window : this)
		},
	},
])

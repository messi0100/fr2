(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-home-module~pages-pages-module"],{

/***/ "./node_modules/angular-particle/index.js":
/*!************************************************!*\
  !*** ./node_modules/angular-particle/index.js ***!
  \************************************************/
/*! exports provided: ParticlesModule, ParticlesComponent, ParticlesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticlesModule", function() { return ParticlesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticlesComponent", function() { return ParticlesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticlesDirective", function() { return ParticlesDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var ParticlesComponent = (function () {
    function ParticlesComponent() {
        this.width = 100;
        this.height = 100;
        this.style = {};
    }
    return ParticlesComponent;
}());
ParticlesComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'particles',
                template: "\n        <div [ngStyle]=\"style\" class=\"particles-container\">\n            <canvas d-particles [params]=\"params\" [style.width.%]=\"width\" [style.height.%]=\"height\"></canvas>\n        </div>\n    "
            },] },
];
/**
 * @nocollapse
 */
ParticlesComponent.ctorParameters = function () { return []; };
ParticlesComponent.propDecorators = {
    'width': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'height': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'params': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'style': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};

var hexToRgb = function (hex) {
    var /** @type {?} */ shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var /** @type {?} */ result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};
var clamp = function (number, min, max) {
    return Math.min(Math.max(number, min), max);
};
var isInArray = function (value, array) {
    return array.indexOf(value) > -1;
};
var deepExtend = function (destination, source) {
    for (var /** @type {?} */ property in source) {
        if (source[property] &&
            source[property].constructor &&
            source[property].constructor === Object) {
            destination[property] = destination[property] || {};
            deepExtend(destination[property], source[property]);
        }
        else {
            destination[property] = source[property];
        }
    }
    return destination;
};
var getColor = function (colorObject) {
    var /** @type {?} */ color = {};
    if (typeof (colorObject) == 'object') {
        if (colorObject instanceof Array) {
            var /** @type {?} */ selectedColor = colorObject[Math.floor(Math.random() * colorObject.length)];
            color.rgb = hexToRgb(selectedColor);
        }
        else {
            var r = colorObject.r, g = colorObject.g, b = colorObject.b;
            if (r !== undefined && g !== undefined && b !== undefined) {
                color.rgb = { r: r, g: g, b: b };
            }
            else {
                var h = colorObject.h, s = colorObject.s, l = colorObject.l;
                if (h !== undefined && g !== undefined && b !== undefined) {
                    color.hsl = { h: h, s: s, l: l };
                }
            }
        }
    }
    else if (colorObject == 'random') {
        color.rgb = {
            r: (Math.floor(Math.random() * 255) + 1),
            g: (Math.floor(Math.random() * 255) + 1),
            b: (Math.floor(Math.random() * 255) + 1)
        };
    }
    else if (typeof (colorObject) == 'string') {
        color.rgb = hexToRgb(colorObject);
    }
    return color;
};
var getDefaultParams = function () {
    return {
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#FFF'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: '',
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#FFF',
                opacity: 0.6,
                width: 1,
                shadow: {
                    enable: false,
                    blur: 5,
                    color: 'lime'
                }
            },
            move: {
                enable: true,
                speed: 3,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: true,
                attract: {
                    enable: false,
                    rotateX: 3000,
                    rotateY: 3000
                }
            },
            array: []
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 200,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 200,
                    size: 80,
                    duration: 0.4
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            },
            mouse: {}
        },
        retina_detect: true
    };
};
/**
 * @param {?} params
 * @param {?} tmp
 * @return {?}
 */
function loadImg(params, tmp) {
    var particles = this.params.particles;
    tmp.img_error = undefined;
    if (particles.shape.type == 'image' && particles.shape.image.src != '') {
        if (tmp.img_type == 'svg') {
            var /** @type {?} */ xhr_1 = new XMLHttpRequest();
            xhr_1.open('GET', particles.shape.image.src);
            xhr_1.onreadystatechange = function (data) {
                if (xhr_1.readyState == 4) {
                    if (xhr_1.status == 200) {
                        tmp.source_svg = data.currentTarget.response;
                        if (tmp.source_svg == undefined) {
                            var /** @type {?} */ check = void 0;
                            tmp.checkAnimFrame = requestAnimationFrame(check);
                        }
                    }
                    else {
                        tmp.img_error = true;
                        throw "Error : image not found";
                    }
                }
            };
            xhr_1.send();
        }
        else {
            var /** @type {?} */ img_1 = new Image();
            img_1.addEventListener('load', function () {
                tmp.img_obj = img_1;
                cancelAnimationFrame(tmp.checkAnimFrame);
            });
            img_1.src = particles.shape.image.src;
        }
    }
    else {
        tmp.img_error = true;
        throw "Error : no image.src";
    }
}
/**
 * @param {?} particle
 * @param {?} tmp
 * @return {?}
 */
function createSvgImg(particle, tmp) {
    var /** @type {?} */ svgXml = tmp.source_svg;
    var /** @type {?} */ rgbHex = /#([0-9A-F]{3,6})/gi;
    var /** @type {?} */ coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
        var /** @type {?} */ color_value;
        if (particle.color.rgb) {
            var _a = particle.color.rgb, r_1 = _a.r, g_1 = _a.g, b_1 = _a.b;
            color_value = "rgba( " + r_1 + ", " + g_1 + ", " + b_1 + ", " + particle.opacity + " )";
        }
        else {
            var _b = particle.color.hsl, h = _b.h, s = _b.s, l = _b.l;
            color_value = "rgba( " + h + ", " + s + ", " + l + ", " + particle.opacity + " )";
        }
        return color_value;
    });
    var /** @type {?} */ svg = new Blob([coloredSvgXml], {
        type: 'image/svg+xml;charset=utf-8'
    });
    var /** @type {?} */ DOMURL = window.URL || window;
    var /** @type {?} */ url = DOMURL.createObjectURL(svg);
    var /** @type {?} */ img = new Image();
    img.addEventListener('load', function () {
        particle.img.obj = img;
        particle.img.loaded = true;
        DOMURL.revokeObjectURL(url);
        tmp.count_svg++;
    });
    img.src = url;
}

var CanvasManager$$1 = (function () {
    /**
     * @param {?} _canvasParams
     * @param {?} _params
     * @param {?} _tmpParams
     */
    function CanvasManager$$1(_canvasParams, _params, _tmpParams) {
        this._canvasParams = _canvasParams;
        this._params = _params;
        this._tmpParams = _tmpParams;
        this._onWindowResize = this._onWindowResize.bind(this);
        this._retinaInit();
        this._canvasSize();
        this.particlesManager = new ParticlesManager$$1(this._canvasParams, this._params, this._tmpParams);
        this.particlesManager.particlesCreate();
        this._densityAutoParticles();
        var particles = this._params.particles;
        particles.line_linked.color_rgb_line = hexToRgb(particles.line_linked.color);
    }
    /**
     * @return {?}
     */
    CanvasManager$$1.prototype.draw = function () {
        var particles = this._params.particles;
        if (particles.shape.type == 'image') {
            if (this._tmpParams.img_type == 'svg') {
                if (this._tmpParams.count_svg >= particles.number.value) {
                    this.particlesManager.particlesDraw();
                    if (!particles.move.enable) {
                        cancelAnimationFrame(this._tmpParams.drawAnimFrame);
                    }
                    else {
                        this._tmpParams.drawAnimFrame = requestAnimationFrame(this.draw.bind(this));
                    }
                }
                else {
                    if (!this._tmpParams.img_error) {
                        this._tmpParams.drawAnimFrame = requestAnimationFrame(this.draw.bind(this));
                    }
                }
            }
            else {
                if (this._tmpParams.img_obj != undefined) {
                    this.particlesManager.particlesDraw();
                    if (!particles.move.enable) {
                        cancelAnimationFrame(this._tmpParams.drawAnimFrame);
                    }
                    else {
                        this._tmpParams.drawAnimFrame = requestAnimationFrame(this.draw.bind(this));
                    }
                }
                else {
                    if (!this._tmpParams.img_error) {
                        this._tmpParams.drawAnimFrame = requestAnimationFrame(this.draw.bind(this));
                    }
                }
            }
        }
        else {
            this.particlesManager.particlesDraw();
            if (!particles.move.enable) {
                cancelAnimationFrame(this._tmpParams.drawAnimFrame);
            }
            else {
                this._tmpParams.drawAnimFrame = requestAnimationFrame(this.draw.bind(this));
            }
        }
    };
    /**
     * @return {?}
     */
    CanvasManager$$1.prototype._densityAutoParticles = function () {
        var particles = this._params.particles;
        if (particles.number.density.enable) {
            var /** @type {?} */ area = this._canvasParams.el.width * this._canvasParams.el.height / 1000;
            if (this._tmpParams.retina) {
                area = area / (this._canvasParams.pxratio * 2);
            }
            var /** @type {?} */ nb_particles = area * particles.number.value / particles.number.density.value_area;
            var /** @type {?} */ missing_particles = particles.array.length - nb_particles;
            if (missing_particles < 0) {
                this.particlesManager.pushParticles(Math.abs(missing_particles));
            }
            else {
                this.particlesManager.removeParticles(missing_particles);
            }
        }
    };
    /**
     * @return {?}
     */
    CanvasManager$$1.prototype._retinaInit = function () {
        if (this._params.retina_detect && window.devicePixelRatio > 1) {
            this._canvasParams.pxratio = window.devicePixelRatio;
            this._tmpParams.retina = true;
            this._canvasParams.width = this._canvasParams.el.offsetWidth * this._canvasParams.pxratio;
            this._canvasParams.height = this._canvasParams.el.offsetHeight * this._canvasParams.pxratio;
            this._params.particles.size.value = this._tmpParams.obj.size_value * this._canvasParams.pxratio;
            this._params.particles.size.anim.speed = this._tmpParams.obj.size_anim_speed * this._canvasParams.pxratio;
            this._params.particles.move.speed = this._tmpParams.obj.move_speed * this._canvasParams.pxratio;
            this._params.particles.line_linked.distance = this._tmpParams.obj.line_linked_distance * this._canvasParams.pxratio;
            this._params.interactivity.modes.grab.distance = this._tmpParams.obj.mode_grab_distance * this._canvasParams.pxratio;
            this._params.interactivity.modes.bubble.distance = this._tmpParams.obj.mode_bubble_distance * this._canvasParams.pxratio;
            this._params.particles.line_linked.width = this._tmpParams.obj.line_linked_width * this._canvasParams.pxratio;
            this._params.interactivity.modes.bubble.size = this._tmpParams.obj.mode_bubble_size * this._canvasParams.pxratio;
            this._params.interactivity.modes.repulse.distance = this._tmpParams.obj.mode_repulse_distance * this._canvasParams.pxratio;
        }
        else {
            this._canvasParams.pxratio = 1;
            this._tmpParams.retina = false;
        }
    };
    /**
     * @return {?}
     */
    CanvasManager$$1.prototype._canvasClear = function () {
        this._canvasParams.ctx.clearRect(0, 0, this._canvasParams.width, this._canvasParams.height);
    };
    /**
     * @return {?}
     */
    CanvasManager$$1.prototype._canvasPaint = function () {
        this._canvasParams.ctx.fillRect(0, 0, this._canvasParams.width, this._canvasParams.height);
    };
    /**
     * @return {?}
     */
    CanvasManager$$1.prototype._canvasSize = function () {
        this._canvasParams.el.width = this._canvasParams.width;
        this._canvasParams.el.height = this._canvasParams.height;
        if (this._params && this._params.interactivity.events.resize) {
            window.addEventListener('resize', this._onWindowResize);
        }
    };
    /**
     * @return {?}
     */
    CanvasManager$$1.prototype._onWindowResize = function () {
        this._canvasParams.width = this._canvasParams.el.offsetWidth;
        this._canvasParams.height = this._canvasParams.el.offsetHeight;
        if (this._tmpParams.retina) {
            this._canvasParams.width *= this._canvasParams.pxratio;
            this._canvasParams.height *= this._canvasParams.pxratio;
        }
        this._canvasParams.el.width = this._canvasParams.width;
        this._canvasParams.el.height = this._canvasParams.height;
        if (!this._params.particles.move.enable) {
            this.particlesManager.particlesEmpty();
            this.particlesManager.particlesCreate();
            this.particlesManager.particlesDraw();
            this._densityAutoParticles();
        }
        this._densityAutoParticles();
    };
    return CanvasManager$$1;
}());

var ParticlesManager$$1 = (function () {
    /**
     * @param {?} _canvasParams
     * @param {?} _params
     * @param {?} _tmpParams
     */
    function ParticlesManager$$1(_canvasParams, _params, _tmpParams) {
        this._canvasParams = _canvasParams;
        this._params = _params;
        this._tmpParams = _tmpParams;
        this._interaction = new ParticleInteraction();
    }
    /**
     * @return {?}
     */
    ParticlesManager$$1.prototype.particlesCreate = function () {
        var _a = this._params.particles, color = _a.color, opacity = _a.opacity;
        for (var /** @type {?} */ i = 0; i < this._params.particles.number.value; i++) {
            this._params.particles.array.push(new Particle$$1(this._canvasParams, this._params, this._tmpParams, color, opacity.value));
        }
    };
    /**
     * @return {?}
     */
    ParticlesManager$$1.prototype._particlesUpdate = function () {
        var _this = this;
        this._params.particles.array.forEach(function (particle, i) {
            if (_this._params.particles.move.enable) {
                var /** @type {?} */ ms = _this._params.particles.move.speed / 2;
                particle.x += particle.vx * ms;
                particle.y += particle.vy * ms;
            }
            if (_this._params.particles.opacity.anim.enable) {
                if (particle.opacity_status == true) {
                    if (particle.opacity >= _this._params.particles.opacity.value)
                        particle.opacity_status = false;
                    particle.opacity += particle.vo;
                }
                else {
                    if (particle.opacity <= _this._params.particles.opacity.anim.opacity_min)
                        particle.opacity_status = true;
                    particle.opacity -= particle.vo;
                }
                if (particle.opacity < 0)
                    particle.opacity = 0;
            }
            if (_this._params.particles.size.anim.enable) {
                if (particle.size_status == true) {
                    if (particle.radius >= _this._params.particles.size.value)
                        particle.size_status = false;
                    particle.radius += particle.vs;
                }
                else {
                    if (particle.radius <= _this._params.particles.size.anim.size_min)
                        particle.size_status = true;
                    particle.radius -= particle.vs;
                }
                if (particle.radius < 0)
                    particle.radius = 0;
            }
            var /** @type {?} */ new_pos;
            if (_this._params.particles.move.out_mode == 'bounce') {
                new_pos = {
                    x_left: particle.radius,
                    x_right: _this._canvasParams.width,
                    y_top: particle.radius,
                    y_bottom: _this._canvasParams.height
                };
            }
            else {
                new_pos = {
                    x_left: -particle.radius,
                    x_right: _this._canvasParams.width + particle.radius,
                    y_top: -particle.radius,
                    y_bottom: _this._canvasParams.height + particle.radius
                };
            }
            if (particle.x - particle.radius > _this._canvasParams.width) {
                particle.x = new_pos.x_left;
                particle.y = Math.random() * _this._canvasParams.height;
            }
            else if (particle.x + particle.radius < 0) {
                particle.x = new_pos.x_right;
                particle.y = Math.random() * _this._canvasParams.height;
            }
            if (particle.y - particle.radius > _this._canvasParams.height) {
                particle.y = new_pos.y_top;
                particle.x = Math.random() * _this._canvasParams.width;
            }
            else if (particle.y + particle.radius < 0) {
                particle.y = new_pos.y_bottom;
                particle.x = Math.random() * _this._canvasParams.width;
            }
            switch (_this._params.particles.move.out_mode) {
                case 'bounce':
                    if (particle.x + particle.radius > _this._canvasParams.width)
                        particle.vx = -particle.vx;
                    else if (particle.x - particle.radius < 0)
                        particle.vx = -particle.vx;
                    if (particle.y + particle.radius > _this._canvasParams.height)
                        particle.vy = -particle.vy;
                    else if (particle.y - particle.radius < 0)
                        particle.vy = -particle.vy;
                    break;
            }
            if (isInArray('grab', _this._params.interactivity.events.onhover.mode)) {
                _this._grabParticle(particle);
            }
            if (isInArray('bubble', _this._params.interactivity.events.onhover.mode) ||
                isInArray('bubble', _this._params.interactivity.events.onclick.mode)) {
                _this._bubbleParticle(particle);
            }
            if (isInArray('repulse', _this._params.interactivity.events.onhover.mode) ||
                isInArray('repulse', _this._params.interactivity.events.onclick.mode)) {
                _this._repulseParticle(particle);
            }
            if (_this._params.particles.line_linked.enable || _this._params.particles.move.attract.enable) {
                for (var /** @type {?} */ j = i + 1; j < _this._params.particles.array.length; j++) {
                    var /** @type {?} */ link = _this._params.particles.array[j];
                    if (_this._params.particles.line_linked.enable)
                        _this._interaction.linkParticles(particle, link, _this._params, _this._canvasParams);
                    if (_this._params.particles.move.attract.enable)
                        _this._interaction.attractParticles(particle, link, _this._params);
                    if (_this._params.particles.move.bounce)
                        _this._interaction.bounceParticles(particle, link);
                }
            }
        });
    };
    /**
     * @return {?}
     */
    ParticlesManager$$1.prototype.particlesDraw = function () {
        this._canvasParams.ctx.clearRect(0, 0, this._canvasParams.width, this._canvasParams.height);
        this._particlesUpdate();
        this._params.particles.array.forEach(function (particle) {
            particle.draw();
        });
    };
    /**
     * @return {?}
     */
    ParticlesManager$$1.prototype.particlesEmpty = function () {
        this._params.particles.array = [];
    };
    /**
     * @param {?} nb
     * @return {?}
     */
    ParticlesManager$$1.prototype.removeParticles = function (nb) {
        this._params.particles.array.splice(0, nb);
        if (!this._params.particles.move.enable) {
            this.particlesDraw();
        }
    };
    /**
     * @param {?} nb
     * @param {?=} pos
     * @return {?}
     */
    ParticlesManager$$1.prototype.pushParticles = function (nb, pos) {
        this._tmpParams.pushing = true;
        for (var /** @type {?} */ i = 0; i < nb; i++) {
            this._params.particles.array.push(new Particle$$1(this._canvasParams, this._params, this._tmpParams, this._params.particles.color, this._params.particles.opacity.value, {
                x: pos ? pos.pos_x : Math.random() * this._canvasParams.width,
                y: pos ? pos.pos_y : Math.random() * this._canvasParams.height
            }));
            if (i == nb - 1) {
                if (!this._params.particles.move.enable) {
                    this.particlesDraw();
                }
                this._tmpParams.pushing = false;
            }
        }
    };
    /**
     * @param {?} particle
     * @return {?}
     */
    ParticlesManager$$1.prototype._bubbleParticle = function (particle) {
        var _this = this;
        if (this._params.interactivity.events.onhover.enable &&
            isInArray('bubble', this._params.interactivity.events.onhover.mode)) {
            var /** @type {?} */ dx_mouse = particle.x - this._params.interactivity.mouse.pos_x;
            var /** @type {?} */ dy_mouse = particle.y - this._params.interactivity.mouse.pos_y;
            var /** @type {?} */ dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);
            var /** @type {?} */ ratio = 1 - dist_mouse / this._params.interactivity.modes.bubble.distance;
            var /** @type {?} */ init = function () {
                particle.opacity_bubble = particle.opacity;
                particle.radius_bubble = particle.radius;
            };
            if (dist_mouse <= this._params.interactivity.modes.bubble.distance) {
                if (ratio >= 0 && this._params.interactivity.status == 'mousemove') {
                    if (this._params.interactivity.modes.bubble.size != this._params.particles.size.value) {
                        if (this._params.interactivity.modes.bubble.size > this._params.particles.size.value) {
                            var /** @type {?} */ size = particle.radius + (this._params.interactivity.modes.bubble.size * ratio);
                            if (size >= 0) {
                                particle.radius_bubble = size;
                            }
                        }
                        else {
                            var /** @type {?} */ dif = particle.radius - this._params.interactivity.modes.bubble.size;
                            var /** @type {?} */ size = particle.radius - (dif * ratio);
                            if (size > 0) {
                                particle.radius_bubble = size;
                            }
                            else {
                                particle.radius_bubble = 0;
                            }
                        }
                    }
                    if (this._params.interactivity.modes.bubble.opacity != this._params.particles.opacity.value) {
                        if (this._params.interactivity.modes.bubble.opacity > this._params.particles.opacity.value) {
                            var /** @type {?} */ opacity = this._params.interactivity.modes.bubble.opacity * ratio;
                            if (opacity > particle.opacity && opacity <= this._params.interactivity.modes.bubble.opacity) {
                                particle.opacity_bubble = opacity;
                            }
                        }
                        else {
                            var /** @type {?} */ opacity = particle.opacity - (this._params.particles.opacity.value - this._params.interactivity.modes.bubble.opacity) * ratio;
                            if (opacity < particle.opacity && opacity >= this._params.interactivity.modes.bubble.opacity) {
                                particle.opacity_bubble = opacity;
                            }
                        }
                    }
                }
            }
            else {
                init();
            }
            if (this._params.interactivity.status == 'mouseleave') {
                init();
            }
        }
        else if (this._params.interactivity.events.onclick.enable &&
            isInArray('bubble', this._params.interactivity.events.onclick.mode)) {
            if (this._tmpParams.bubble_clicking) {
                var /** @type {?} */ dx_mouse = particle.x - this._params.interactivity.mouse.click_pos_x;
                var /** @type {?} */ dy_mouse = particle.y - this._params.interactivity.mouse.click_pos_y;
                var /** @type {?} */ dist_mouse_1 = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);
                var /** @type {?} */ time_spent_1 = (new Date().getTime() - this._params.interactivity.mouse.click_time) / 1000;
                if (time_spent_1 > this._params.interactivity.modes.bubble.duration) {
                    this._tmpParams.bubble_duration_end = true;
                }
                if (time_spent_1 > this._params.interactivity.modes.bubble.duration * 2) {
                    this._tmpParams.bubble_clicking = false;
                    this._tmpParams.bubble_duration_end = false;
                }
                var /** @type {?} */ process = function (bubble_param, particles_param, p_obj_bubble, p_obj, id) {
                    if (bubble_param != particles_param) {
                        if (!_this._tmpParams.bubble_duration_end) {
                            if (dist_mouse_1 <= _this._params.interactivity.modes.bubble.distance) {
                                var /** @type {?} */ obj = void 0;
                                if (p_obj_bubble != undefined) {
                                    obj = p_obj_bubble;
                                }
                                else {
                                    obj = p_obj;
                                }
                                if (obj != bubble_param) {
                                    var /** @type {?} */ value = p_obj - (time_spent_1 * (p_obj - bubble_param) / _this._params.interactivity.modes.bubble.duration);
                                    if (id == 'size')
                                        particle.radius_bubble = value;
                                    if (id == 'opacity')
                                        particle.opacity_bubble = value;
                                }
                            }
                            else {
                                if (id == 'size')
                                    particle.radius_bubble = undefined;
                                if (id == 'opacity')
                                    particle.opacity_bubble = undefined;
                            }
                        }
                        else {
                            if (p_obj_bubble != undefined) {
                                var /** @type {?} */ value_tmp = p_obj - (time_spent_1 * (p_obj - bubble_param) / _this._params.interactivity.modes.bubble.duration);
                                var /** @type {?} */ dif = bubble_param - value_tmp;
                                var /** @type {?} */ value = bubble_param + dif;
                                if (id == 'size')
                                    particle.radius_bubble = value;
                                if (id == 'opacity')
                                    particle.opacity_bubble = value;
                            }
                        }
                    }
                };
                if (this._tmpParams.bubble_clicking) {
                    process(this._params.interactivity.modes.bubble.size, this._params.particles.size.value, particle.radius_bubble, particle.radius, 'size');
                    process(this._params.interactivity.modes.bubble.opacity, this._params.particles.opacity.value, particle.opacity_bubble, particle.opacity, 'opacity');
                }
            }
        }
    };
    /**
     * @param {?} particle
     * @return {?}
     */
    ParticlesManager$$1.prototype._repulseParticle = function (particle) {
        var _this = this;
        if (this._params.interactivity.events.onhover.enable &&
            isInArray('repulse', this._params.interactivity.events.onhover.mode) &&
            this._params.interactivity.status == 'mousemove') {
            var /** @type {?} */ dx_mouse = particle.x - this._params.interactivity.mouse.pos_x;
            var /** @type {?} */ dy_mouse = particle.y - this._params.interactivity.mouse.pos_y;
            var /** @type {?} */ dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);
            var /** @type {?} */ normVec = { x: dx_mouse / dist_mouse, y: dy_mouse / dist_mouse };
            var /** @type {?} */ repulseRadius = this._params.interactivity.modes.repulse.distance;
            var /** @type {?} */ velocity = 100;
            var /** @type {?} */ repulseFactor = clamp((1 / repulseRadius) * (-1 * Math.pow(dist_mouse / repulseRadius, 2) + 1) * repulseRadius * velocity, 0, 50);
            var /** @type {?} */ pos = {
                x: particle.x + normVec.x * repulseFactor,
                y: particle.y + normVec.y * repulseFactor
            };
            if (this._params.particles.move.out_mode == 'bounce') {
                if (pos.x - particle.radius > 0 && pos.x + particle.radius < this._canvasParams.width)
                    particle.x = pos.x;
                if (pos.y - particle.radius > 0 && pos.y + particle.radius < this._canvasParams.height)
                    particle.y = pos.y;
            }
            else {
                particle.x = pos.x;
                particle.y = pos.y;
            }
        }
        else if (this._params.interactivity.events.onclick.enable &&
            isInArray('repulse', this._params.interactivity.events.onclick.mode)) {
            if (!this._tmpParams.repulse_finish) {
                this._tmpParams.repulse_count++;
                if (this._tmpParams.repulse_count == this._params.particles.array.length)
                    this._tmpParams.repulse_finish = true;
            }
            if (this._tmpParams.repulse_clicking) {
                var /** @type {?} */ repulseRadius = Math.pow(this._params.interactivity.modes.repulse.distance / 6, 3);
                var /** @type {?} */ dx_1 = this._params.interactivity.mouse.click_pos_x - particle.x;
                var /** @type {?} */ dy_1 = this._params.interactivity.mouse.click_pos_y - particle.y;
                var /** @type {?} */ d = dx_1 * dx_1 + dy_1 * dy_1;
                var /** @type {?} */ force_1 = -repulseRadius / d * 1;
                var /** @type {?} */ process = function () {
                    var /** @type {?} */ f = Math.atan2(dy_1, dx_1);
                    particle.vx = force_1 * Math.cos(f);
                    particle.vy = force_1 * Math.sin(f);
                    if (_this._params.particles.move.out_mode == 'bounce') {
                        var /** @type {?} */ pos = {
                            x: particle.x + particle.vx,
                            y: particle.y + particle.vy
                        };
                        if (pos.x + particle.radius > _this._canvasParams.width)
                            particle.vx = -particle.vx;
                        else if (pos.x - particle.radius < 0)
                            particle.vx = -particle.vx;
                        if (pos.y + particle.radius > _this._canvasParams.height)
                            particle.vy = -particle.vy;
                        else if (pos.y - particle.radius < 0)
                            particle.vy = -particle.vy;
                    }
                };
                if (d <= repulseRadius) {
                    process();
                }
            }
            else {
                if (this._tmpParams.repulse_clicking == false) {
                    particle.vx = particle.vx_i;
                    particle.vy = particle.vy_i;
                }
            }
        }
    };
    /**
     * @param {?} particle
     * @return {?}
     */
    ParticlesManager$$1.prototype._grabParticle = function (particle) {
        var _a = this._params, interactivity = _a.interactivity, particles = _a.particles;
        if (interactivity.events.onhover.enable &&
            interactivity.status == 'mousemove') {
            var /** @type {?} */ dx_mouse = particle.x - interactivity.mouse.pos_x;
            var /** @type {?} */ dy_mouse = particle.y - interactivity.mouse.pos_y;
            var /** @type {?} */ dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);
            if (dist_mouse <= interactivity.modes.grab.distance) {
                var grab = interactivity.modes.grab;
                var /** @type {?} */ opacity_line = grab.line_linked.opacity - (dist_mouse / (1 / grab.line_linked.opacity)) / grab.distance;
                if (opacity_line > 0) {
                    var /** @type {?} */ color_line = particles.line_linked.color_rgb_line;
                    var r = color_line.r, g = color_line.g, b = color_line.b;
                    this._canvasParams.ctx.strokeStyle = "rgba( " + r + ", " + g + ", " + b + ", " + opacity_line + " )";
                    this._canvasParams.ctx.lineWidth = particles.line_linked.width;
                    this._canvasParams.ctx.beginPath();
                    this._canvasParams.ctx.moveTo(particle.x, particle.y);
                    this._canvasParams.ctx.lineTo(interactivity.mouse.pos_x, interactivity.mouse.pos_y);
                    this._canvasParams.ctx.stroke();
                    this._canvasParams.ctx.closePath();
                }
            }
        }
    };
    return ParticlesManager$$1;
}());

var Particle$$1 = (function () {
    /**
     * @param {?} _canvasParams
     * @param {?} _params
     * @param {?} _tmpParams
     * @param {?=} color
     * @param {?=} opacity
     * @param {?=} position
     */
    function Particle$$1(_canvasParams, _params, _tmpParams, color, opacity, position) {
        this._canvasParams = _canvasParams;
        this._params = _params;
        this._tmpParams = _tmpParams;
        this._setupSize();
        this._setupPosition(position);
        this._setupColor(color);
        this._setupOpacity();
        this._setupAnimation();
    }
    /**
     * @return {?}
     */
    Particle$$1.prototype._setupSize = function () {
        this.radius = (this._params.particles.size.random ? Math.random() : 1) * this._params.particles.size.value;
        if (this._params.particles.size.anim.enable) {
            this.size_status = false;
            this.vs = this._params.particles.size.anim.speed / 100;
            if (!this._params.particles.size.anim.sync)
                this.vs = this.vs * Math.random();
        }
    };
    /**
     * @param {?=} position
     * @return {?}
     */
    Particle$$1.prototype._setupPosition = function (position) {
        this.x = position ? position.x : Math.random() * this._canvasParams.width;
        this.y = position ? position.y : Math.random() * this._canvasParams.height;
        if (this.x > this._canvasParams.width - this.radius * 2) {
            this.x = this.x - this.radius;
        }
        else if (this.x < this.radius * 2) {
            this.x = this.x + this.radius;
        }
        if (this.y > this._canvasParams.height - this.radius * 2) {
            this.y = this.y - this.radius;
        }
        else if (this.y < this.radius * 2) {
            this.y = this.y + this.radius;
        }
        if (this._params.particles.move.bounce) {
            this._checkOverlap(this, position);
        }
    };
    /**
     * @param {?} p1
     * @param {?=} position
     * @return {?}
     */
    Particle$$1.prototype._checkOverlap = function (p1, position) {
        var _this = this;
        var particles = this._params.particles;
        particles.array.forEach(function (particle) {
            var /** @type {?} */ p2 = particle;
            var /** @type {?} */ dx = p1.x - p2.x;
            var /** @type {?} */ dy = p1.y - p2.y;
            var /** @type {?} */ dist = Math.sqrt(dx * dx + dy * dy);
            if (dist <= p1.radius + p2.radius) {
                p1.x = position ? position.x : Math.random() * _this._canvasParams.width;
                p1.y = position ? position.y : Math.random() * _this._canvasParams.height;
                _this._checkOverlap(p1);
            }
        });
    };
    /**
     * @param {?=} color
     * @return {?}
     */
    Particle$$1.prototype._setupColor = function (color) {
        this.color = getColor(color.value);
    };
    /**
     * @return {?}
     */
    Particle$$1.prototype._setupOpacity = function () {
        this.opacity = (this._params.particles.opacity.random ? Math.random() : 1) * this._params.particles.opacity.value;
        if (this._params.particles.opacity.anim.enable) {
            this.opacity_status = false;
            this.vo = this._params.particles.opacity.anim.speed / 100;
            if (!this._params.particles.opacity.anim.sync) {
                this.vo = this.vo * Math.random();
            }
        }
    };
    /**
     * @return {?}
     */
    Particle$$1.prototype._setupAnimation = function () {
        var /** @type {?} */ velbase = null;
        switch (this._params.particles.move.direction) {
            case 'top':
                velbase = { x: 0, y: -1 };
                break;
            case 'top-right':
                velbase = { x: 0.5, y: -0.5 };
                break;
            case 'right':
                velbase = { x: 1, y: 0 };
                break;
            case 'bottom-right':
                velbase = { x: 0.5, y: 0.5 };
                break;
            case 'bottom':
                velbase = { x: 0, y: 1 };
                break;
            case 'bottom-left':
                velbase = { x: -0.5, y: 1 };
                break;
            case 'left':
                velbase = { x: -1, y: 0 };
                break;
            case 'top-left':
                velbase = { x: -0.5, y: -0.5 };
                break;
            default:
                velbase = { x: 0, y: 0 };
                break;
        }
        if (this._params.particles.move.straight) {
            this.vx = velbase.x;
            this.vy = velbase.y;
            if (this._params.particles.move.random) {
                this.vx = this.vx * (Math.random());
                this.vy = this.vy * (Math.random());
            }
        }
        else {
            this.vx = velbase.x + Math.random() - 0.5;
            this.vy = velbase.y + Math.random() - 0.5;
        }
        this.vx_i = this.vx;
        this.vy_i = this.vy;
        var /** @type {?} */ shape_type = this._params.particles.shape.type;
        if (typeof (shape_type) == 'object') {
            if (shape_type instanceof Array) {
                var /** @type {?} */ shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
                this.shape = shape_selected;
            }
        }
        else {
            this.shape = shape_type;
        }
        if (this.shape == 'image') {
            var /** @type {?} */ sh = this._params.particles.shape;
            this.img = {
                src: sh.image.src,
                ratio: sh.image.width / sh.image.height
            };
            if (!this.img.ratio)
                this.img.ratio = 1;
            if (this._tmpParams.img_type == 'svg' && this._tmpParams.source_svg != undefined) {
                createSvgImg(this, this._tmpParams);
                if (this._tmpParams.pushing) {
                    this.img.loaded = false;
                }
            }
        }
    };
    /**
     * @param {?} c
     * @param {?} startX
     * @param {?} startY
     * @param {?} sideLength
     * @param {?} sideCountNumerator
     * @param {?} sideCountDenominator
     * @return {?}
     */
    Particle$$1.prototype._drawShape = function (c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator) {
        var /** @type {?} */ sideCount = sideCountNumerator * sideCountDenominator;
        var /** @type {?} */ decimalSides = sideCountNumerator / sideCountDenominator;
        var /** @type {?} */ interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
        var /** @type {?} */ interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180;
        c.save();
        c.beginPath();
        c.translate(startX, startY);
        c.moveTo(0, 0);
        for (var /** @type {?} */ i = 0; i < sideCount; i++) {
            c.lineTo(sideLength, 0);
            c.translate(sideLength, 0);
            c.rotate(interiorAngle);
        }
        c.fill();
        c.restore();
    };
    /**
     * @return {?}
     */
    Particle$$1.prototype.draw = function () {
        var _this = this;
        var particles = this._params.particles;
        var /** @type {?} */ radius;
        if (this.radius_bubble != undefined) {
            radius = this.radius_bubble;
        }
        else {
            radius = this.radius;
        }
        var /** @type {?} */ opacity;
        if (this.opacity_bubble != undefined) {
            opacity = this.opacity_bubble;
        }
        else {
            opacity = this.opacity;
        }
        var /** @type {?} */ color_value;
        if (this.color.rgb) {
            var _a = this.color.rgb, r = _a.r, g = _a.g, b = _a.b;
            color_value = "rgba( " + r + ", " + g + ", " + b + ", " + opacity + " )";
        }
        else {
            var _b = this.color.hsl, h = _b.h, s = _b.s, l = _b.l;
            color_value = "hsla( " + h + ", " + s + ", " + l + ", " + opacity + " )";
        }
        this._canvasParams.ctx.fillStyle = color_value;
        this._canvasParams.ctx.beginPath();
        switch (this.shape) {
            case 'circle':
                this._canvasParams.ctx.arc(this.x, this.y, radius, 0, Math.PI * 2, false);
                break;
            case 'edge':
                this._canvasParams.ctx.rect(this.x - radius, this.y - radius, radius * 2, radius * 2);
                break;
            case 'triangle':
                this._drawShape(this._canvasParams.ctx, this.x - radius, this.y + radius / 1.66, radius * 2, 3, 2);
                break;
            case 'polygon':
                this._drawShape(this._canvasParams.ctx, this.x - radius / (this._params.particles.shape.polygon.nb_sides / 3.5), this.y - radius / (2.66 / 3.5), radius * 2.66 / (this._params.particles.shape.polygon.nb_sides / 3), this._params.particles.shape.polygon.nb_sides, 1);
                break;
            case 'star':
                this._drawShape(this._canvasParams.ctx, this.x - radius * 2 / (this._params.particles.shape.polygon.nb_sides / 4), this.y - radius / (2 * 2.66 / 3.5), radius * 2 * 2.66 / (this._params.particles.shape.polygon.nb_sides / 3), this._params.particles.shape.polygon.nb_sides, 2);
                break;
            case 'image':
                var /** @type {?} */ draw = function (img_obj) {
                    _this._canvasParams.ctx.drawImage(img_obj, _this.x - radius, _this.y - radius, radius * 2, radius * 2 / _this.img.ratio);
                };
                var /** @type {?} */ img_obj = void 0;
                if (this._tmpParams.img_type == 'svg') {
                    img_obj = this.img.obj;
                }
                else {
                    img_obj = this._tmpParams.img_obj;
                }
                if (img_obj)
                    draw(img_obj);
                break;
        }
        this._canvasParams.ctx.closePath();
        if (this._params.particles.shape.stroke.width > 0) {
            this._canvasParams.ctx.strokeStyle = this._params.particles.shape.stroke.color;
            this._canvasParams.ctx.lineWidth = this._params.particles.shape.stroke.width;
            this._canvasParams.ctx.stroke();
        }
        this._canvasParams.ctx.fill();
    };
    return Particle$$1;
}());

var ParticleInteraction = (function () {
    function ParticleInteraction() {
    }
    /**
     * @param {?} p1
     * @param {?} p2
     * @param {?} params
     * @param {?} canvasParams
     * @return {?}
     */
    ParticleInteraction.prototype.linkParticles = function (p1, p2, params, canvasParams) {
        var /** @type {?} */ dx = p1.x - p2.x;
        var /** @type {?} */ dy = p1.y - p2.y;
        var /** @type {?} */ dist = Math.sqrt(dx * dx + dy * dy);
        var line_linked = params.particles.line_linked;
        if (dist <= params.particles.line_linked.distance) {
            var /** @type {?} */ opacity_line = params.particles.line_linked.opacity - (dist / (1 / params.particles.line_linked.opacity)) / params.particles.line_linked.distance;
            if (opacity_line > 0) {
                var /** @type {?} */ color_line = params.particles.line_linked.color_rgb_line;
                var r = color_line.r, g = color_line.g, b = color_line.b;
                canvasParams.ctx.save();
                canvasParams.ctx.strokeStyle = "rgba( " + r + ", " + g + ", " + b + ", " + opacity_line + " )";
                canvasParams.ctx.lineWidth = params.particles.line_linked.width;
                canvasParams.ctx.beginPath();
                if (line_linked.shadow.enable) {
                    canvasParams.ctx.shadowBlur = line_linked.shadow.blur;
                    canvasParams.ctx.shadowColor = line_linked.shadow.color;
                }
                canvasParams.ctx.moveTo(p1.x, p1.y);
                canvasParams.ctx.lineTo(p2.x, p2.y);
                canvasParams.ctx.stroke();
                canvasParams.ctx.closePath();
                canvasParams.ctx.restore();
            }
        }
    };
    /**
     * @param {?} p1
     * @param {?} p2
     * @param {?} params
     * @return {?}
     */
    ParticleInteraction.prototype.attractParticles = function (p1, p2, params) {
        var /** @type {?} */ dx = p1.x - p2.x;
        var /** @type {?} */ dy = p1.y - p2.y;
        var /** @type {?} */ dist = Math.sqrt(dx * dx + dy * dy);
        if (dist <= params.particles.line_linked.distance) {
            var /** @type {?} */ ax = dx / (params.particles.move.attract.rotateX * 1000);
            var /** @type {?} */ ay = dy / (params.particles.move.attract.rotateY * 1000);
            p1.vx -= ax;
            p1.vy -= ay;
            p2.vx += ax;
            p2.vy += ay;
        }
    };
    /**
     * @param {?} p1
     * @param {?} p2
     * @return {?}
     */
    ParticleInteraction.prototype.bounceParticles = function (p1, p2) {
        var /** @type {?} */ dx = p1.x - p2.x;
        var /** @type {?} */ dy = p1.y - p2.y;
        var /** @type {?} */ dist = Math.sqrt(dx * dx + dy * dy);
        var /** @type {?} */ dist_p = p1.radius + p2.radius;
        if (dist <= dist_p) {
            p1.vx = -p1.vx;
            p1.vy = -p1.vy;
            p2.vx = -p2.vx;
            p2.vy = -p2.vy;
        }
    };
    return ParticleInteraction;
}());

var ParticlesDirective = (function () {
    /**
     * @param {?} el
     */
    function ParticlesDirective(el) {
        this.el = el;
        this._tmpParams = {};
    }
    Object.defineProperty(ParticlesDirective.prototype, "params", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            var /** @type {?} */ defaultParams = getDefaultParams();
            this._params = deepExtend(defaultParams, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ParticlesDirective.prototype.ngAfterViewInit = function () {
        this._canvasParams = {
            el: this.el.nativeElement,
            ctx: this.el.nativeElement.getContext('2d'),
            width: this.el.nativeElement.offsetWidth,
            height: this.el.nativeElement.offsetHeight
        };
        this._tmpParams.obj = {
            size_value: this._params.particles.size.value,
            size_anim_speed: this._params.particles.size.anim.speed,
            move_speed: this._params.particles.move.speed,
            line_linked_distance: this._params.particles.line_linked.distance,
            line_linked_width: this._params.particles.line_linked.width,
            mode_grab_distance: this._params.interactivity.modes.grab.distance,
            mode_bubble_distance: this._params.interactivity.modes.bubble.distance,
            mode_bubble_size: this._params.interactivity.modes.bubble.size,
            mode_repulse_distance: this._params.interactivity.modes.repulse.distance
        };
        this._params.interactivity.el = (this._params.interactivity.detect_on == 'window') ? window : this._canvasParams.el;
        if (isInArray('image', this._params.particles.shape.type)) {
            this._tmpParams.img_type = this._params.particles.shape.image.src.substr(this._params.particles.shape.image.src.length - 3);
            loadImg(this._params, this._tmpParams);
        }
        this._canvasManager = new CanvasManager$$1(this._canvasParams, this._params, this._tmpParams);
        this._canvasManager.draw();
    };
    /**
     * Mouse move event
    \@param event
     * @param {?} event
     * @return {?}
     */
    ParticlesDirective.prototype.onMouseMove = function (event) {
        var interactivity = this._params.interactivity;
        if (interactivity.events.onhover.enable ||
            interactivity.events.onclick.enable) {
            var /** @type {?} */ pos = void 0;
            if (interactivity.el == window) {
                pos = {
                    x: event.clientX,
                    y: event.clientY
                };
            }
            else {
                pos = {
                    x: event.offsetX || event.clientX,
                    y: event.offsetY || event.clientY
                };
            }
            interactivity.mouse.pos_x = pos.x;
            interactivity.mouse.pos_y = pos.y;
            if (this._tmpParams.retina) {
                interactivity.mouse.pos_x *= this._canvasParams.pxratio;
                interactivity.mouse.pos_y *= this._canvasParams.pxratio;
            }
            interactivity.status = 'mousemove';
        }
    };
    /**
     * Mouse leave event
     * @return {?}
     */
    ParticlesDirective.prototype.onMouseLeave = function () {
        var interactivity = this._params.interactivity;
        if (interactivity.events.onhover.enable ||
            interactivity.events.onclick.enable) {
            interactivity.mouse.pos_x = null;
            interactivity.mouse.pos_y = null;
            interactivity.status = 'mouseleave';
        }
    };
    /**
     * Click event
     * @return {?}
     */
    ParticlesDirective.prototype.onClick = function () {
        var _this = this;
        var _a = this._params, interactivity = _a.interactivity, particles = _a.particles;
        if (interactivity.events.onclick.enable) {
            interactivity.mouse.click_pos_x = interactivity.mouse.pos_x;
            interactivity.mouse.click_pos_y = interactivity.mouse.pos_y;
            interactivity.mouse.click_time = new Date().getTime();
            switch (interactivity.events.onclick.mode) {
                case 'push':
                    if (particles.move.enable) {
                        this._canvasManager.particlesManager.pushParticles(interactivity.modes.push.particles_nb, interactivity.mouse);
                    }
                    else {
                        if (interactivity.modes.push.particles_nb == 1) {
                            this._canvasManager.particlesManager.pushParticles(interactivity.modes.push.particles_nb, interactivity.mouse);
                        }
                        else if (interactivity.modes.push.particles_nb > 1) {
                            this._canvasManager.particlesManager.pushParticles(interactivity.modes.push.particles_nb);
                        }
                    }
                    break;
                case 'remove':
                    this._canvasManager.particlesManager.removeParticles(interactivity.modes.remove.particles_nb);
                    break;
                case 'bubble':
                    this._tmpParams.bubble_clicking = true;
                    break;
                case 'repulse':
                    this._tmpParams.repulse_clicking = true;
                    this._tmpParams.repulse_count = 0;
                    this._tmpParams.repulse_finish = false;
                    setTimeout(function () {
                        _this._tmpParams.repulse_clicking = false;
                    }, interactivity.modes.repulse.duration * 1000);
                    break;
            }
        }
    };
    return ParticlesDirective;
}());
ParticlesDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[d-particles]'
            },] },
];
/**
 * @nocollapse
 */
ParticlesDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
]; };
ParticlesDirective.propDecorators = {
    'params': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'onMouseMove': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousemove', ['$event'],] },],
    'onMouseLeave': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseleave',] },],
    'onClick': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] },],
};

var ParticlesModule = (function () {
    function ParticlesModule() {
    }
    return ParticlesModule;
}());
ParticlesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [
                    ParticlesComponent,
                    ParticlesDirective
                ],
                exports: [
                    ParticlesComponent,
                    ParticlesDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
ParticlesModule.ctorParameters = function () { return []; };




/***/ }),

/***/ "./node_modules/ngx-youtube-player/fesm5/ngx-youtube-player.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-youtube-player/fesm5/ngx-youtube-player.js ***!
  \*********************************************************************/
/*! exports provided: win, YouTubeRef, YouTubePlayerRef, defaultSizes, YoutubePlayerService, YoutubePlayerComponent, NgxYoutubePlayerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "win", function() { return win; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YouTubeRef", function() { return YouTubeRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YouTubePlayerRef", function() { return YouTubePlayerRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSizes", function() { return defaultSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubePlayerService", function() { return YoutubePlayerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubePlayerComponent", function() { return YoutubePlayerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxYoutubePlayerModule", function() { return NgxYoutubePlayerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function win() {
    return window;
}
/**
 * @return {?}
 */
function YouTubeRef() {
    return win()['YT'];
}
/**
 * @return {?}
 */
function YouTubePlayerRef() {
    return YouTubeRef().Player;
}
/** @type {?} */
var defaultSizes = {
    height: 270,
    width: 367
};
var YoutubePlayerService = /** @class */ (function () {
    function YoutubePlayerService(zone) {
        this.zone = zone;
        this.ytApiLoaded = false;
        this.api = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.createApi();
    }
    /**
     * @param {?} options
     * @return {?}
     */
    YoutubePlayerService.prototype.loadPlayerApi = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var doc = win().document;
        if (!this.ytApiLoaded) {
            this.ytApiLoaded = true;
            /** @type {?} */
            var playerApiScript = doc.createElement('script');
            playerApiScript.type = 'text/javascript';
            playerApiScript.src = options.protocol + "://www.youtube.com/iframe_api";
            doc.body.appendChild(playerApiScript);
        }
    };
    /**
     * @param {?} elementId
     * @param {?} outputs
     * @param {?} sizes
     * @param {?=} videoId
     * @param {?=} playerVars
     * @return {?}
     */
    YoutubePlayerService.prototype.setupPlayer = /**
     * @param {?} elementId
     * @param {?} outputs
     * @param {?} sizes
     * @param {?=} videoId
     * @param {?=} playerVars
     * @return {?}
     */
    function (elementId, outputs, sizes, videoId, playerVars) {
        var _this = this;
        if (videoId === void 0) { videoId = ''; }
        /** @type {?} */
        var createPlayer = (/**
         * @return {?}
         */
        function () {
            if (YouTubePlayerRef) {
                _this.createPlayer(elementId, outputs, sizes, videoId, playerVars);
            }
        });
        this.api.subscribe(createPlayer);
    };
    /**
     * @param {?} player
     * @return {?}
     */
    YoutubePlayerService.prototype.play = /**
     * @param {?} player
     * @return {?}
     */
    function (player) {
        player.playVideo();
    };
    /**
     * @param {?} player
     * @return {?}
     */
    YoutubePlayerService.prototype.pause = /**
     * @param {?} player
     * @return {?}
     */
    function (player) {
        player.pauseVideo();
    };
    /**
     * @param {?} media
     * @param {?} player
     * @return {?}
     */
    YoutubePlayerService.prototype.playVideo = /**
     * @param {?} media
     * @param {?} player
     * @return {?}
     */
    function (media, player) {
        /** @type {?} */
        var id = media.id.videoId ? media.id.videoId : media.id;
        player.loadVideoById(id);
        this.play(player);
    };
    /**
     * @param {?} player
     * @return {?}
     */
    YoutubePlayerService.prototype.isPlaying = /**
     * @param {?} player
     * @return {?}
     */
    function (player) {
        // because YT is not loaded yet 1 is used - YT.PlayerState.PLAYING
        /** @type {?} */
        var isPlayerReady = player && player.getPlayerState;
        /** @type {?} */
        var playerState = isPlayerReady ? player.getPlayerState() : {};
        /** @type {?} */
        var isPlayerPlaying = isPlayerReady
            ? playerState !== YouTubeRef().PlayerState.ENDED &&
                playerState !== YouTubeRef().PlayerState.PAUSED
            : false;
        return isPlayerPlaying;
    };
    /**
     * @param {?} elementId
     * @param {?} outputs
     * @param {?} sizes
     * @param {?=} videoId
     * @param {?=} playerVars
     * @return {?}
     */
    YoutubePlayerService.prototype.createPlayer = /**
     * @param {?} elementId
     * @param {?} outputs
     * @param {?} sizes
     * @param {?=} videoId
     * @param {?=} playerVars
     * @return {?}
     */
    function (elementId, outputs, sizes, videoId, playerVars) {
        var _this = this;
        if (videoId === void 0) { videoId = ''; }
        if (playerVars === void 0) { playerVars = {}; }
        /** @type {?} */
        var playerSize = {
            height: sizes.height || defaultSizes.height,
            width: sizes.width || defaultSizes.width
        };
        /** @type {?} */
        var ytPlayer = YouTubePlayerRef();
        return new ytPlayer(elementId, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, playerSize, { events: {
                onReady: (/**
                 * @param {?} ev
                 * @return {?}
                 */
                function (ev) {
                    _this.zone.run((/**
                     * @return {?}
                     */
                    function () { return outputs.ready && outputs.ready.next(ev.target); }));
                }),
                onStateChange: (/**
                 * @param {?} ev
                 * @return {?}
                 */
                function (ev) {
                    _this.zone.run((/**
                     * @return {?}
                     */
                    function () { return outputs.change && outputs.change.next(ev); }));
                })
            }, playerVars: playerVars,
            videoId: videoId }));
    };
    /**
     * @param {?} player
     * @param {?} isFullScreen
     * @return {?}
     */
    YoutubePlayerService.prototype.toggleFullScreen = /**
     * @param {?} player
     * @param {?} isFullScreen
     * @return {?}
     */
    function (player, isFullScreen) {
        var height = defaultSizes.height, width = defaultSizes.width;
        if (!isFullScreen) {
            height = window.innerHeight;
            width = window.innerWidth;
        }
        player.setSize(width, height);
    };
    // adpoted from uid
    // adpoted from uid
    /**
     * @return {?}
     */
    YoutubePlayerService.prototype.generateUniqueId = 
    // adpoted from uid
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var len = 7;
        return Math.random()
            .toString(35)
            .substr(2, len);
    };
    /**
     * @private
     * @return {?}
     */
    YoutubePlayerService.prototype.createApi = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var onYouTubeIframeAPIReady = (/**
         * @return {?}
         */
        function () {
            if (win()) {
                _this.api.next(YouTubeRef());
            }
        });
        win()['onYouTubeIframeAPIReady'] = onYouTubeIframeAPIReady;
    };
    YoutubePlayerService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    YoutubePlayerService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }
    ]; };
    /** @nocollapse */ YoutubePlayerService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"])({ factory: function YoutubePlayerService_Factory() { return new YoutubePlayerService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"])); }, token: YoutubePlayerService, providedIn: "root" });
    return YoutubePlayerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var YoutubePlayerComponent = /** @class */ (function () {
    function YoutubePlayerComponent(playerService, elementRef, renderer) {
        this.playerService = playerService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.videoId = '';
        this.height = defaultSizes.height;
        this.width = defaultSizes.width;
        /**
         * \@description sets the protocol by the navigator object
         * if there is no window, it sets a default http protocol
         * unless the protocol is set from outside
         */
        this.protocol = this.getProtocol();
        this.playerVars = {};
        // player created and initialized - sends instance of the player
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        // state change: send the YT event with its state
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    YoutubePlayerComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var htmlId = this.playerService.generateUniqueId();
        /** @type {?} */
        var playerSize = { height: this.height, width: this.width };
        /** @type {?} */
        var container = this.renderer.selectRootElement('#yt-player-ngx-component');
        this.renderer.setAttribute(container, 'id', htmlId);
        this.playerService.loadPlayerApi({
            protocol: this.protocol
        });
        this.playerService.setupPlayer(htmlId, {
            change: this.change,
            ready: this.ready
        }, playerSize, this.videoId, this.playerVars);
    };
    /**
     * @return {?}
     */
    YoutubePlayerComponent.prototype.getProtocol = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var hasWindow = window && window.location;
        /** @type {?} */
        var protocol = hasWindow
            ? window.location.protocol.replace(':', '')
            : 'http';
        return protocol;
    };
    YoutubePlayerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                    selector: 'youtube-player',
                    template: "\n    <div id=\"yt-player-ngx-component\"></div>\n  "
                }] }
    ];
    /** @nocollapse */
    YoutubePlayerComponent.ctorParameters = function () { return [
        { type: YoutubePlayerService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }
    ]; };
    YoutubePlayerComponent.propDecorators = {
        videoId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        protocol: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        playerVars: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
    };
    return YoutubePlayerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxYoutubePlayerModule = /** @class */ (function () {
    function NgxYoutubePlayerModule() {
    }
    /**
     * @return {?}
     */
    NgxYoutubePlayerModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: NgxYoutubePlayerModule,
            providers: [YoutubePlayerService]
        };
    };
    NgxYoutubePlayerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    declarations: [YoutubePlayerComponent],
                    imports: [],
                    providers: [YoutubePlayerService],
                    exports: [YoutubePlayerComponent]
                },] }
    ];
    return NgxYoutubePlayerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-youtube-player.js.map

/***/ }),

/***/ "./src/app/pages/about/about.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/about/about.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section bg-light\" id=\"features\" scrollSpyElement=\"about\">\r\n  <div class=\"container\">\r\n      <div class=\"row vertical-content\">\r\n          <div class=\"col-lg-5\">\r\n              <div class=\"features-box\">\r\n                  <h3>A digital web design studio creating modern & engaging online experiences</h3>\r\n                  <p class=\"text-muted web-desc\">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\r\n                  <ul class=\"text-muted list-unstyled margin-t-30 features-item-list\">\r\n                      <li class=\"\">We put a lot of effort in design.</li>\r\n                      <li class=\"\">The most important ingredient of successful website.</li>\r\n                      <li class=\"\">Sed ut perspiciatis unde omnis iste natus error sit.</li>\r\n                      <li class=\"\">Submit Your Orgnization.</li>\r\n                  </ul>\r\n                  <a href=\"#\" class=\"btn btn-custom margin-t-30 waves-effect waves-light\">Learn More <i class=\"mdi mdi-arrow-right\"></i></a>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-lg-7\">\r\n              <div class=\"features-img features-right text-right\">\r\n                  <img src=\"assets/images/online-world.svg\" alt=\"macbook image\" class=\"img-fluid\">\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/pages/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/blog/blog.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/blog/blog.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/blog/blog.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/blog/blog.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section bg-light pt-5\" id=\"blog\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-lg-8 offset-lg-2\">\r\n              <h1 class=\"section-title text-center\">Blog</h1>\r\n              <div class=\"section-title-border margin-t-20\"></div>\r\n              <p class=\"section-subtitle text-muted text-center font-secondary padding-t-30\">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean class at a euismod mus luctus quam.</p>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"row margin-t-30\">\r\n          <div class=\"col-lg-4\">\r\n              <div class=\"blog-box margin-t-30 hover-effect\">\r\n                  <img src=\"assets/images/blog/img-1.jpg\" class=\"img-fluid\" alt=\"\">\r\n                  <div>\r\n                      <h5 class=\"mt-4 text-muted\">UI & UX Design</h5>\r\n                      <h4 class=\"mt-3\"><a href=\"\" class=\"blog-title\"> Doing a cross country road trip </a></h4>\r\n                      <p class=\"text-muted\">She packed her seven versalia, put her initial into the belt and made herself on the way..</p>\r\n                      <div class=\"mt-3\">\r\n                          <a href=\"\" class=\"read-btn\">Read More <i class=\"mdi mdi-arrow-right\"></i></a>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-4\">\r\n              <div class=\"blog-box margin-t-30 hover-effect\">\r\n                  <img src=\"assets/images/blog/img-2.jpg\" class=\"img-fluid\" alt=\"\">\r\n                  <div>\r\n                      <h5 class=\"mt-4 text-muted\">Digital Marketing</h5>\r\n                      <h4 class=\"mt-3\"><a href=\"\" class=\"blog-title\">New exhibition at our Museum</a></h4>\r\n                      <p class=\"text-muted\">Pityful a rethoric question ran over her cheek, then she continued her way.</p>\r\n                      <div class=\"mt-3\">\r\n                          <a href=\"\" class=\"read-btn\">Read More <i  class=\"mdi mdi-arrow-right\"></i></a>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-4\">\r\n              <div class=\"blog-box margin-t-30 hover-effect\">\r\n                  <img src=\"assets/images/blog/img-3.jpg\" class=\"img-fluid\" alt=\"\">\r\n                  <div>\r\n                      <h5 class=\"mt-4 text-muted\">Travelling</h5>\r\n                      <h4 class=\"mt-3\"><a href=\"\"  class=\"blog-title\">Why are so many people..</a></h4>\r\n                      <p class=\"text-muted\">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\r\n                      <div class=\"mt-3\">\r\n                          <a href=\"\" class=\"read-btn\">Read More <i   class=\"mdi mdi-arrow-right\"></i></a>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n\r\n      </div>\r\n\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/pages/blog/blog.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/blog/blog.component.ts ***!
  \**********************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/pages/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/pages/blog/blog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact/contact.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section \" id=\"contact\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-lg-8 offset-lg-2\">\r\n              <h1 class=\"section-title text-center\">Get In Touch</h1>\r\n              <div class=\"section-title-border margin-t-20\"></div>\r\n              <p class=\"section-subtitle text-muted text-center font-secondary padding-t-30\">We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with measurable results.</p>\r\n          </div>\r\n      </div>\r\n      <div class=\"row\">\r\n          <div class=\"col-lg-4\">\r\n              <div class=\"mt-4 pt-4\">\r\n                  <p class=\"mt-4\"><span class=\"h5\">Office Address 1:</span><br> <span class=\"text-muted d-block mt-2\">4461 Cedar Street Moro, AR 72368</span></p>\r\n                  <p class=\"mt-4\"><span class=\"h5\">Office Address 2:</span><br> <span class=\"text-muted d-block mt-2\">2467 Swick Hill Street <br/>New Orleans, LA 70171</span></p>\r\n                  <p class=\"mt-4\"><span class=\"h5\">Working Hours:</span><br> <span class=\"text-muted d-block mt-2\">9:00AM To 6:00PM</span></p>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-lg-8\">\r\n              <div class=\"custom-form mt-4 pt-4\">\r\n                  <div id=\"message\"></div>\r\n                  <form method=\"post\" action=\"/\" name=\"contact-form\" id=\"contact-form\">\r\n                      <div class=\"row\">\r\n                          <div class=\"col-lg-6\">\r\n                              <div class=\"form-group mt-2\">\r\n                                  <input name=\"name\" id=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Your name*\" >\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"col-lg-6\">\r\n                              <div class=\"form-group mt-2\">\r\n                                  <input name=\"email\" id=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Your email*\" >\r\n                              </div>\r\n                          </div>                                \r\n                      </div>\r\n                      <div class=\"row\">\r\n                          <div class=\"col-lg-12\">\r\n                              <div class=\"form-group mt-2\">\r\n                                  <input type=\"text\" class=\"form-control\" id=\"subject\" placeholder=\"Your Subject..\" />\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                          <div class=\"col-lg-12\">\r\n                              <div class=\"form-group mt-2\">\r\n                                  <textarea name=\"comments\" id=\"comments\" rows=\"4\" class=\"form-control\" placeholder=\"Your message...\"></textarea>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                          <div class=\"col-lg-12 text-right\">\r\n                              <input type=\"submit\" id=\"submit\" name=\"send\" class=\"submitBnt btn btn-custom\" value=\"Send Message\">\r\n                              <div id=\"simple-msg\"></div>\r\n                          </div>\r\n                      </div>\r\n                  </form>\r\n              </div>  \r\n          </div>\r\n      </div>\r\n  </div>\r\n</section> "

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/pages/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/description/description.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/description/description.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/description/description.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/description/description.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section section-lg bg-web-desc\">\r\n  <div class=\"bg-overlay\"></div>\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-lg-12 text-center\">\r\n              <h2 class=\"text-white\">Build your dream website today</h2>\r\n              <p class=\"padding-t-15 home-desc\">But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her.</p>\r\n              <a href=\"#\" class=\"btn btn-bg-white margin-t-30 waves-effect waves-light mb-5\">View Plan & Pricing</a>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"bg-pattern-effect\">\r\n      <img src=\"assets/images/bg-pattern.png\" alt=\"\">\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/pages/description/description.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/description/description.component.ts ***!
  \************************************************************/
/*! exports provided: DescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionComponent", function() { return DescriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DescriptionComponent = /** @class */ (function () {
    function DescriptionComponent() {
    }
    DescriptionComponent.prototype.ngOnInit = function () {
    };
    DescriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-description  ',
            template: __webpack_require__(/*! ./description.component.html */ "./src/app/pages/description/description.component.html"),
            styles: [__webpack_require__(/*! ./description.component.css */ "./src/app/pages/description/description.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DescriptionComponent);
    return DescriptionComponent;
}());



/***/ }),

/***/ "./src/app/pages/getstart/getstart.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/getstart/getstart.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dldHN0YXJ0L2dldHN0YXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/getstart/getstart.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/getstart/getstart.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section section-lg bg-get-start\">\r\n    <div class=\"bg-overlay\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8 offset-lg-2 text-center\">\r\n                <h1 class=\"get-started-title text-white\">quantum finance</h1>\r\n                <div class=\"section-title-border margin-t-20 bg-white\"></div>\r\n                <p class=\"section-subtitle font-secondary text-white text-center padding-t-30\">this will help you learn about finance and will learn the secret behind finance. </p>\r\n                <a href=\"#\" class=\"btn btn-bg-white waves-effect margin-t-20 mb-4\">Get Started and go into the mysterious world of finance!<i class=\"mdi mdi-arrow-right\"></i> </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"bg-pattern-effect\">\r\n        <img src=\"assets/images/bg-pattern-light.png\" alt=\"\">\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/pages/getstart/getstart.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/getstart/getstart.component.ts ***!
  \******************************************************/
/*! exports provided: GetstartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetstartComponent", function() { return GetstartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GetstartComponent = /** @class */ (function () {
    function GetstartComponent() {
    }
    GetstartComponent.prototype.ngOnInit = function () {
    };
    GetstartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-getstart',
            template: __webpack_require__(/*! ./getstart.component.html */ "./src/app/pages/getstart/getstart.component.html"),
            styles: [__webpack_require__(/*! ./getstart.component.css */ "./src/app/pages/getstart/getstart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GetstartComponent);
    return GetstartComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index1_index1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index1/index1.component */ "./src/app/pages/home/index1/index1.component.ts");
/* harmony import */ var _index2_index2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index2/index2.component */ "./src/app/pages/home/index2/index2.component.ts");
/* harmony import */ var _index3_index3_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index3/index3.component */ "./src/app/pages/home/index3/index3.component.ts");
/* harmony import */ var _index4_index4_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index4/index4.component */ "./src/app/pages/home/index4/index4.component.ts");
/* harmony import */ var _index5_index5_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index5/index5.component */ "./src/app/pages/home/index5/index5.component.ts");
/* harmony import */ var _index6_index6_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index6/index6.component */ "./src/app/pages/home/index6/index6.component.ts");
/* harmony import */ var _index7_index7_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index7/index7.component */ "./src/app/pages/home/index7/index7.component.ts");
/* harmony import */ var _index8_index8_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index8/index8.component */ "./src/app/pages/home/index8/index8.component.ts");
/* harmony import */ var _index9_index9_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index9/index9.component */ "./src/app/pages/home/index9/index9.component.ts");












var routes = [
    { path: '', component: _index9_index9_component__WEBPACK_IMPORTED_MODULE_11__["Index9Component"] },
    { path: 'index1', component: _index1_index1_component__WEBPACK_IMPORTED_MODULE_3__["Index1Component"] },
    { path: 'index2', component: _index2_index2_component__WEBPACK_IMPORTED_MODULE_4__["Index2Component"] },
    { path: 'index3', component: _index3_index3_component__WEBPACK_IMPORTED_MODULE_5__["Index3Component"] },
    { path: 'index4', component: _index4_index4_component__WEBPACK_IMPORTED_MODULE_6__["Index4Component"] },
    { path: 'index5', component: _index5_index5_component__WEBPACK_IMPORTED_MODULE_7__["Index5Component"] },
    { path: 'index6', component: _index6_index6_component__WEBPACK_IMPORTED_MODULE_8__["Index6Component"] },
    { path: 'index7', component: _index7_index7_component__WEBPACK_IMPORTED_MODULE_9__["Index7Component"] },
    { path: 'index8', component: _index8_index8_component__WEBPACK_IMPORTED_MODULE_10__["Index8Component"] },
    { path: 'index9', component: _index9_index9_component__WEBPACK_IMPORTED_MODULE_11__["Index9Component"] },
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/services.component */ "./src/app/pages/services/services.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _description_description_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../description/description.component */ "./src/app/pages/description/description.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pricing/pricing.component */ "./src/app/pages/pricing/pricing.component.ts");
/* harmony import */ var _getstart_getstart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../getstart/getstart.component */ "./src/app/pages/getstart/getstart.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../blog/blog.component */ "./src/app/pages/blog/blog.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../social/social.component */ "./src/app/pages/social/social.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../team/team.component */ "./src/app/pages/team/team.component.ts");
/* harmony import */ var _testi_testi_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../testi/testi.component */ "./src/app/pages/testi/testi.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../work/work.component */ "./src/app/pages/work/work.component.ts");
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/fesm5/ngx-youtube-player.js");
/* harmony import */ var angular_particle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-particle */ "./node_modules/angular-particle/index.js");
/* harmony import */ var _index1_index1_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./index1/index1.component */ "./src/app/pages/home/index1/index1.component.ts");
/* harmony import */ var _index2_index2_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./index2/index2.component */ "./src/app/pages/home/index2/index2.component.ts");
/* harmony import */ var _index3_index3_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./index3/index3.component */ "./src/app/pages/home/index3/index3.component.ts");
/* harmony import */ var _index4_index4_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./index4/index4.component */ "./src/app/pages/home/index4/index4.component.ts");
/* harmony import */ var _index5_index5_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./index5/index5.component */ "./src/app/pages/home/index5/index5.component.ts");
/* harmony import */ var _index6_index6_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./index6/index6.component */ "./src/app/pages/home/index6/index6.component.ts");
/* harmony import */ var _index7_index7_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./index7/index7.component */ "./src/app/pages/home/index7/index7.component.ts");
/* harmony import */ var _index8_index8_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./index8/index8.component */ "./src/app/pages/home/index8/index8.component.ts");
/* harmony import */ var _index9_index9_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./index9/index9.component */ "./src/app/pages/home/index9/index9.component.ts");


























var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_index1_index1_component__WEBPACK_IMPORTED_MODULE_17__["Index1Component"], _services_services_component__WEBPACK_IMPORTED_MODULE_4__["ServicesComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], _description_description_component__WEBPACK_IMPORTED_MODULE_6__["DescriptionComponent"], _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_7__["PricingComponent"],
                _getstart_getstart_component__WEBPACK_IMPORTED_MODULE_8__["GetstartComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_9__["BlogComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"], _social_social_component__WEBPACK_IMPORTED_MODULE_11__["SocialComponent"], _team_team_component__WEBPACK_IMPORTED_MODULE_12__["TeamComponent"], _testi_testi_component__WEBPACK_IMPORTED_MODULE_13__["TestiComponent"],
                _work_work_component__WEBPACK_IMPORTED_MODULE_14__["WorkComponent"], _index2_index2_component__WEBPACK_IMPORTED_MODULE_18__["Index2Component"], _index3_index3_component__WEBPACK_IMPORTED_MODULE_19__["Index3Component"], _index4_index4_component__WEBPACK_IMPORTED_MODULE_20__["Index4Component"], _index5_index5_component__WEBPACK_IMPORTED_MODULE_21__["Index5Component"], _index6_index6_component__WEBPACK_IMPORTED_MODULE_22__["Index6Component"],
                _index7_index7_component__WEBPACK_IMPORTED_MODULE_23__["Index7Component"], _index8_index8_component__WEBPACK_IMPORTED_MODULE_24__["Index8Component"], _index9_index9_component__WEBPACK_IMPORTED_MODULE_25__["Index9Component"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_youtube_player__WEBPACK_IMPORTED_MODULE_15__["NgxYoutubePlayerModule"].forRoot(),
                _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
                angular_particle__WEBPACK_IMPORTED_MODULE_16__["ParticlesModule"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/pages/home/index1/index1.component.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/home/index1/index1.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section bg-home home-half\" id=\"home\" data-image-src=\"assets/images/bg-home.jpg\">\r\n    <div class=\"bg-overlay\"></div>\r\n    <div class=\"display-table\">\r\n        <div class=\"display-table-cell\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-8 offset-lg-2 text-white text-center\">\r\n                        <h1 class=\"home-title\"></h1>\r\n                        <p class=\"padding-t-15 home-desc\">Etiam sed.Interdum consequat proin vestibulum class at.</p>\r\n\r\n                      \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"bg-pattern-effect\">\r\n        <img src=\"\" alt=\"\">\r\n    </div>\r\n</section>\r\n\r\n\r\n<ng-template #content let-modal>\r\n    <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <youtube-player [videoId]=\"id\" (ready)=\"savePlayer($event)\" height=\"450\" width=\"780\" (change)=\"onStateChange($event)\"\r\n            [playerVars]=\"playerVars\">\r\n        </youtube-player>\r\n    </div>\r\n</ng-template>\r\n\r\n<app-services></app-services>\r\n<app-about></app-about>\r\n<app-description></app-description>\r\n<app-pricing></app-pricing>\r\n<app-team></app-team>\r\n<app-work></app-work>\r\n<app-testi></app-testi>\r\n<app-getstart></app-getstart>\r\n<app-blog></app-blog>\r\n<app-contact></app-contact>\r\n<app-social></app-social>"

/***/ }),

/***/ "./src/app/pages/home/index1/index1.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/home/index1/index1.component.ts ***!
  \*******************************************************/
/*! exports provided: Index1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index1Component", function() { return Index1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var Index1Component = /** @class */ (function () {
    function Index1Component(modalService) {
        this.modalService = modalService;
        this.id = 'JlvxDa7Sges';
        this.playerVars = {
            cc_lang_pref: 'en'
        };
    }
    Index1Component.prototype.onStateChange = function (event) {
        this.ytEvent = event.data;
    };
    Index1Component.prototype.savePlayer = function (player) {
        this.player = player;
    };
    Index1Component.prototype.playVideo = function () {
        this.player.playVideo();
    };
    Index1Component.prototype.pauseVideo = function () {
        this.player.pauseVideo();
    };
    Index1Component.prototype.ngOnInit = function () {
    };
    Index1Component.prototype.openWindowCustomClass = function (content) {
        this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg' });
    };
    Index1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index1',
            template: __webpack_require__(/*! ./index1.component.html */ "./src/app/pages/home/index1/index1.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: ["\n    .dark-modal .modal-content {\n      background-color: #000000;\n      color: white;\n      border-radius : 10px;\n    }\n    .dark-modal .modal-header {\n      border : none\n    }\n    .dark-modal .close {\n      color: white;\n    }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], Index1Component);
    return Index1Component;
}());



/***/ }),

/***/ "./src/app/pages/home/index2/index2.component.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/home/index2/index2.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section bg-home home-half\" id=\"home\" data-image-src=\"assets/images/bg-home.jpg\">\r\n    <div class=\"bg-overlay\"></div>\r\n    <div class=\"display-table\">\r\n        <div class=\"display-table-cell\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-8 offset-lg-2 text-white text-center\">\r\n                        <h1 class=\"home-title\">We help startups launch their products</h1>\r\n                        <p class=\"padding-t-15 home-desc\">Etiam sed.Interdum consequat proin vestibulum class at.</p>\r\n                        <p class=\"play-shadow margin-t-30 margin-l-r-auto\"><a (click)=\"openWindowCustomClass(content)\"\r\n                                class=\"play-btn video-play-icon\"><i class=\"mdi mdi-play text-center\"></i></a></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n</div>\r\n\r\n    <div class=\"wave-effect wave-anim\">\r\n        <div class=\"waves-shape shape-one\">\r\n            <div class=\"wave wave-one\" style=\"background-image: url('assets/images/wave-shape/wave1.png')\"></div>\r\n        </div>\r\n        <div class=\"waves-shape shape-two\">\r\n            <div class=\"wave wave-two\" style=\"background-image: url('assets/images/wave-shape/wave2.png')\"></div>\r\n        </div>\r\n        <div class=\"waves-shape shape-three\">\r\n            <div class=\"wave wave-three\" style=\"background-image: url('assets/images/wave-shape/wave3.png')\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n</section>\r\n\r\n<ng-template #content let-modal>\r\n        <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <youtube-player [videoId]=\"id\" (ready)=\"savePlayer($event)\" height=\"450\" width=\"780\" (change)=\"onStateChange($event)\"\r\n                [playerVars]=\"playerVars\">\r\n            </youtube-player>\r\n        </div>\r\n    </ng-template>\r\n\r\n<app-services></app-services>\r\n<app-about></app-about>\r\n<app-description></app-description>\r\n<app-pricing></app-pricing>\r\n<app-team></app-team>\r\n<app-work></app-work>\r\n<app-testi></app-testi>\r\n<app-getstart></app-getstart>\r\n<app-blog></app-blog>\r\n<app-contact></app-contact>\r\n<app-social></app-social>"

/***/ }),

/***/ "./src/app/pages/home/index2/index2.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/home/index2/index2.component.ts ***!
  \*******************************************************/
/*! exports provided: Index2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index2Component", function() { return Index2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var Index2Component = /** @class */ (function () {
    function Index2Component(modalService) {
        this.modalService = modalService;
        this.id = 'JlvxDa7Sges';
        this.playerVars = {
            cc_lang_pref: 'en'
        };
    }
    Index2Component.prototype.onStateChange = function (event) {
        this.ytEvent = event.data;
    };
    Index2Component.prototype.savePlayer = function (player) {
        this.player = player;
    };
    Index2Component.prototype.playVideo = function () {
        this.player.playVideo();
    };
    Index2Component.prototype.pauseVideo = function () {
        this.player.pauseVideo();
    };
    Index2Component.prototype.ngOnInit = function () {
    };
    Index2Component.prototype.openWindowCustomClass = function (content) {
        this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg' });
    };
    Index2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index2',
            template: __webpack_require__(/*! ./index2.component.html */ "./src/app/pages/home/index2/index2.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: ["\n    .dark-modal .modal-content {\n      background-color: #000000;\n      color: white;\n      border-radius : 10px;\n    }\n    .dark-modal .modal-header {\n      border : none\n    }\n    .dark-modal .close {\n      color: white;\n    }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], Index2Component);
    return Index2Component;
}());



/***/ }),

/***/ "./src/app/pages/home/index3/index3.component.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/home/index3/index3.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section bg-home height-100vh\" id=\"home\">\r\n  <div class=\"bg-overlay\"></div>\r\n  <div class=\"display-table\">\r\n      <div class=\"display-table-cell\">\r\n          <div class=\"container\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-lg-8 offset-lg-2 text-white text-center\">\r\n                      <h1 class=\"home-title\">We help startups launch their products</h1>\r\n                      <p class=\"padding-t-15 home-desc\">Etiam sed.Interdum consequat proin vestibulum class at a euismod mus luctus quam.Lorem ipsum dolor sit amet, consectetur adipisicing eli.</p>\r\n                      <p class=\"play-shadow margin-t-30 margin-l-r-auto\"><a (click)=\"openWindowCustomClass(content)\" class=\"play-btn video-play-icon\"><i class=\"mdi mdi-play text-center\"></i></a></p>  \r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"bg-pattern-effect\">\r\n      <img src=\"assets/images/bg-pattern.png\" alt=\"\">\r\n  </div>\r\n</section>\r\n\r\n<ng-template #content let-modal>\r\n        <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <youtube-player [videoId]=\"id\" (ready)=\"savePlayer($event)\" height=\"450\" width=\"780\" (change)=\"onStateChange($event)\"\r\n                [playerVars]=\"playerVars\">\r\n            </youtube-player>\r\n        </div>\r\n    </ng-template>\r\n\r\n\r\n<app-services></app-services>\r\n<app-about></app-about>\r\n<app-description></app-description>\r\n<app-pricing></app-pricing>\r\n<app-team></app-team>\r\n<app-work></app-work>\r\n<app-testi></app-testi>\r\n<app-getstart></app-getstart>\r\n<app-blog></app-blog>\r\n<app-contact></app-contact>\r\n<app-social></app-social>"

/***/ }),

/***/ "./src/app/pages/home/index3/index3.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/home/index3/index3.component.ts ***!
  \*******************************************************/
/*! exports provided: Index3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index3Component", function() { return Index3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var Index3Component = /** @class */ (function () {
    function Index3Component(modalService) {
        this.modalService = modalService;
        this.id = 'JlvxDa7Sges';
        this.playerVars = {
            cc_lang_pref: 'en'
        };
    }
    Index3Component.prototype.onStateChange = function (event) {
        this.ytEvent = event.data;
    };
    Index3Component.prototype.savePlayer = function (player) {
        this.player = player;
    };
    Index3Component.prototype.playVideo = function () {
        this.player.playVideo();
    };
    Index3Component.prototype.pauseVideo = function () {
        this.player.pauseVideo();
    };
    Index3Component.prototype.ngOnInit = function () {
    };
    Index3Component.prototype.openWindowCustomClass = function (content) {
        this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg' });
    };
    Index3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index3',
            template: __webpack_require__(/*! ./index3.component.html */ "./src/app/pages/home/index3/index3.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: ["\n    .dark-modal .modal-content {\n      background-color: #000000;\n      color: white;\n      border-radius : 10px;\n    }\n    .dark-modal .modal-header {\n      border : none\n    }\n    .dark-modal .close {\n      color: white;\n    }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], Index3Component);
    return Index3Component;
}());



/***/ }),

/***/ "./src/app/pages/home/index4/index4.component.css":
/*!********************************************************!*\
  !*** ./src/app/pages/home/index4/index4.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaW5kZXg0L2luZGV4NC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/home/index4/index4.component.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/home/index4/index4.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section bg-home home-half\" id=\"home\">\r\n  <div class=\"bg-overlay\"></div>\r\n  <div class=\"display-table\">\r\n      <div class=\"display-table-cell\">\r\n          <div class=\"container\">\r\n              <div class=\"row vertical-content\">\r\n                  <div class=\"col-lg-7 text-white text-left margin-t-30\">\r\n                      <h1 class=\"home-title\">We help startups launch their products</h1>\r\n                      <p class=\"padding-t-15 home-desc home-subtitle-width-100\">Etiam sed.Interdum consequat proin vestibulum class at a euismod mus luctus quam.Lorem ipsum dolor sit amet, consectetur adipisicing eli.</p>\r\n                      <a href=\"#\" class=\"btn btn-custom margin-t-30 waves-effect waves-light\">Get Started <i class=\"mdi mdi-arrow-right\"></i></a>\r\n                  </div>\r\n                  <div class=\"col-lg-4 offset-lg-1 margin-t-30\">\r\n                      <div class=\"home-registration-form bg-white\">\r\n                          <h4 class=\"form-heading text-center mt-2\">Get 30 day FREE Trial</h4>\r\n                          <form class=\"registration-form\" id=\"registration-form\">\r\n                              <input type=\"text\" id=\"exampleInputName1\" class=\"form-control registration-input-box\" placeholder=\"Name\">\r\n                              <input type=\"email\" id=\"exampleInputEmail1\" class=\"form-control registration-input-box\" placeholder=\"Email\">\r\n                              <textarea class=\"form-control registration-textarea-box\" rows=\"4\" placeholder=\"Message\"></textarea>\r\n                              <button class=\"btn btn-custom home-btn-width waves-effect waves-light\">Send Detail</button>\r\n                          </form>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n\r\n<app-services></app-services>\r\n<app-about></app-about>\r\n<app-description></app-description>\r\n<app-pricing></app-pricing>\r\n<app-team></app-team>\r\n<app-work></app-work>\r\n<app-testi></app-testi>\r\n<app-getstart></app-getstart>\r\n<app-blog></app-blog>\r\n<app-contact></app-contact>\r\n<app-social></app-social>"

/***/ }),

/***/ "./src/app/pages/home/index4/index4.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/home/index4/index4.component.ts ***!
  \*******************************************************/
/*! exports provided: Index4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index4Component", function() { return Index4Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Index4Component = /** @class */ (function () {
    function Index4Component() {
    }
    Index4Component.prototype.ngOnInit = function () {
        // document.querySelector('a[data="id_home"]').setAttribute('style', 'color:#f85f89!important');
        document.getElementById('navbar1').classList.add('navbar-white');
        window.onscroll = function () { myFunction(); };
        var navbar1 = document.getElementById("navbar1");
        function myFunction() {
            if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
                navbar1.style.backgroundColor = "#ffffff";
                navbar1.style.padding = "10px";
            }
            else {
                navbar1.style.backgroundColor = "";
            }
        }
    };
    Index4Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index4',
            template: __webpack_require__(/*! ./index4.component.html */ "./src/app/pages/home/index4/index4.component.html"),
            styles: [__webpack_require__(/*! ./index4.component.css */ "./src/app/pages/home/index4/index4.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Index4Component);
    return Index4Component;
}());



/***/ }),

/***/ "./src/app/pages/home/index5/index5.component.css":
/*!********************************************************!*\
  !*** ./src/app/pages/home/index5/index5.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaW5kZXg1L2luZGV4NS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/home/index5/index5.component.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/home/index5/index5.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"home-padding-t-150 position-relative\" id=\"home\" style=\"background-image: url('assets/images/img-2.jpg'); background-size: cover; background-position: center;\">\r\n  <div class=\"bg-overlay\"></div>\r\n  <div class=\"display-table\">\r\n      <div class=\"home-cell-bottom\">\r\n          <div class=\"container\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-lg-8 offset-lg-2 text-white text-center\">\r\n                      <h1 class=\"home-title\">We help startups launch their products</h1>\r\n                      <p class=\"padding-t-15 home-desc\">Etiam sed.Interdum consequat proin vestibulum class at a euismod mus luctus quam.Lorem ipsum dolor sit amet, consectetur adipisicing eli.</p>\r\n                      <a href=\"#\" class=\"btn btn-custom margin-t-20\">Get Started</a>\r\n                      <img src=\"assets/images/home-dashboard.png\" alt=\"\" class=\"img-fluid center-block margin-t-20\">  \r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</section>\r\n\r\n<app-services></app-services>\r\n<app-about></app-about>\r\n<app-description></app-description>\r\n<app-pricing></app-pricing>\r\n<app-team></app-team>\r\n<app-work></app-work>\r\n<app-testi></app-testi>\r\n<app-getstart></app-getstart>\r\n<app-blog></app-blog>\r\n<app-contact></app-contact>\r\n<app-social></app-social>"

/***/ }),

/***/ "./src/app/pages/home/index5/index5.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/home/index5/index5.component.ts ***!
  \*******************************************************/
/*! exports provided: Index5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index5Component", function() { return Index5Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Index5Component = /** @class */ (function () {
    function Index5Component() {
    }
    Index5Component.prototype.ngOnInit = function () {
    };
    Index5Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index5',
            template: __webpack_require__(/*! ./index5.component.html */ "./src/app/pages/home/index5/index5.component.html"),
            styles: [__webpack_require__(/*! ./index5.component.css */ "./src/app/pages/home/index5/index5.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Index5Component);
    return Index5Component;
}());



/***/ }),

/***/ "./src/app/pages/home/index6/index6.component.css":
/*!********************************************************!*\
  !*** ./src/app/pages/home/index6/index6.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaW5kZXg2L2luZGV4Ni5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/home/index6/index6.component.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/home/index6/index6.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section bg-home home-half\" id=\"home\">\r\n  <div class=\"bg-overlay\"></div>\r\n  <div class=\"display-table\">\r\n      <div class=\"home-cell-bottom\">\r\n          <div class=\"container\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-lg-8 offset-lg-2 text-white text-center\">\r\n                      <h1 class=\"home-title\">We help startups launch their products</h1>\r\n                      <p class=\"padding-t-15 home-desc\">Etiam sed.Interdum consequat proin vestibulum class at a euismod mus luctus quam.Lorem ipsum dolor sit amet, consectetur adipisicing eli.</p>\r\n                      <div class=\"text-center subscribe-form margin-t-30\">\r\n                          <form action=\"#\">\r\n                              <input type=\"text\" placeholder=\"Email\">\r\n                              <button type=\"submit\" class=\"btn btn-custom\">Subscribe</button>\r\n                          </form>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n<app-services></app-services>\r\n<app-about></app-about>\r\n<app-description></app-description>\r\n<app-pricing></app-pricing>\r\n<app-team></app-team>\r\n<app-work></app-work>\r\n<app-testi></app-testi>\r\n<app-getstart></app-getstart>\r\n<app-blog></app-blog>\r\n<app-contact></app-contact>\r\n<app-social></app-social>"

/***/ }),

/***/ "./src/app/pages/home/index6/index6.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/home/index6/index6.component.ts ***!
  \*******************************************************/
/*! exports provided: Index6Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index6Component", function() { return Index6Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Index6Component = /** @class */ (function () {
    function Index6Component() {
    }
    Index6Component.prototype.ngOnInit = function () {
    };
    Index6Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index6',
            template: __webpack_require__(/*! ./index6.component.html */ "./src/app/pages/home/index6/index6.component.html"),
            styles: [__webpack_require__(/*! ./index6.component.css */ "./src/app/pages/home/index6/index6.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Index6Component);
    return Index6Component;
}());



/***/ }),

/***/ "./src/app/pages/home/index7/index7.component.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/home/index7/index7.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section section-lg height-100vh\" id=\"home\"\r\n    style=\"background-image: url('assets/images/img-1.jpg'); background-size: cover; background-position: center;\">\r\n    <div class=\"bg-overlay\"></div>\r\n    <div class=\"display-table\">\r\n        <div class=\"display-table-cell\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-8 offset-lg-2 text-white text-center\">\r\n                        <h1 id=\"foo\" clas=\"home-title text-rotate\">A Clean & Minimal Landing Template</h1>\r\n                \r\n                        <p class=\"padding-t-15 home-desc\">Etiam sed.Interdum consequat proin vestibulum class at a\r\n                            euismod mus luctus quam.Lorem ipsum dolor sit amet, consectetur adipisicing eli.</p>\r\n                        <p class=\"play-shadow margin-t-30 margin-l-r-auto\"><a (click)=\"openWindowCustomClass(content)\"\r\n                                class=\"play-btn video-play-icon\"><i class=\"mdi mdi-play text-center\"></i></a></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<ng-template #content let-modal>\r\n        <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <youtube-player [videoId]=\"id\" (ready)=\"savePlayer($event)\" height=\"450\" width=\"780\" (change)=\"onStateChange($event)\"\r\n                [playerVars]=\"playerVars\">\r\n            </youtube-player>\r\n        </div>\r\n    </ng-template>\r\n\r\n\r\n\r\n<app-services></app-services>\r\n<app-about></app-about>\r\n<app-description></app-description>\r\n<app-pricing></app-pricing>\r\n<app-team></app-team>\r\n<app-work></app-work>\r\n<app-testi></app-testi>\r\n<app-getstart></app-getstart>\r\n<app-blog></app-blog>\r\n<app-contact></app-contact>\r\n<app-social></app-social>"

/***/ }),

/***/ "./src/app/pages/home/index7/index7.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/home/index7/index7.component.ts ***!
  \*******************************************************/
/*! exports provided: Index7Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index7Component", function() { return Index7Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var Index7Component = /** @class */ (function () {
    function Index7Component(modalService) {
        this.modalService = modalService;
        this.id = 'JlvxDa7Sges';
        this.playerVars = {
            cc_lang_pref: 'en'
        };
    }
    Index7Component.prototype.onStateChange = function (event) {
        this.ytEvent = event.data;
    };
    Index7Component.prototype.savePlayer = function (player) {
        this.player = player;
    };
    Index7Component.prototype.playVideo = function () {
        this.player.playVideo();
    };
    Index7Component.prototype.pauseVideo = function () {
        this.player.pauseVideo();
    };
    Index7Component.prototype.openWindowCustomClass = function (content) {
        this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg' });
    };
    Index7Component.prototype.ngOnInit = function () {
        var i = 1;
        setInterval(function () {
            if (i == 1) {
                document.getElementById('foo').innerHTML = "Professional Landing Page Template";
            }
            else if (i == 2) {
                document.getElementById('foo').innerHTML = "We help startups launch their products";
            }
            else {
                document.getElementById('foo').innerHTML = "Perfect solution for small businesses";
            }
            if (i >= 3) {
                i = 0;
            }
            i++;
        }, 2500);
    };
    Index7Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index7',
            template: __webpack_require__(/*! ./index7.component.html */ "./src/app/pages/home/index7/index7.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: ["\n    .dark-modal .modal-content {\n      background-color: #000000;\n      color: white;\n      border-radius : 10px;\n    }\n    .dark-modal .modal-header {\n      border : none\n    }\n    .dark-modal .close {\n      color: white;\n    }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], Index7Component);
    return Index7Component;
}());



/***/ }),

/***/ "./src/app/pages/home/index8/index8.component.css":
/*!********************************************************!*\
  !*** ./src/app/pages/home/index8/index8.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaW5kZXg4L2luZGV4OC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/home/index8/index8.component.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/home/index8/index8.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<section class=\"section section-lg home-half\" id=\"home\"\r\n    style=\"background-image: url('assets/images/img-2.jpg'); background-size: cover; background-position: center;\">\r\n    <div class=\"bg-overlay\"></div>\r\n    <div class=\"display-table\">\r\n        <div class=\"home-cell-bottom\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-8 offset-lg-2 text-white text-center\">\r\n                        <h1 class=\"home-title\">We help startups launch their products</h1>\r\n                        <p class=\"padding-t-15 home-desc\">Etiam sed.Interdum consequat proin vestibulum class at a\r\n                            euismod mus luctus quam.Lorem ipsum dolor sit amet, consectetur adipisicing eli.</p>\r\n                        <div class=\"margin-t-30\">\r\n                            <iframe\r\n                                src=\"http://player.vimeo.com/video/69988283?color=f15b72&amp;title=0&amp;byline=0&amp;portrait=0\"\r\n                                width=\"555\" height=\"321\" class=\"frame-border\"></iframe>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<app-services></app-services>\r\n<app-about></app-about>\r\n<app-description></app-description>\r\n<app-pricing></app-pricing>\r\n<app-team></app-team>\r\n<app-work></app-work>\r\n<app-testi></app-testi>\r\n<app-getstart></app-getstart>\r\n<app-blog></app-blog>\r\n<app-contact></app-contact>\r\n<app-social></app-social>"

/***/ }),

/***/ "./src/app/pages/home/index8/index8.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/home/index8/index8.component.ts ***!
  \*******************************************************/
/*! exports provided: Index8Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index8Component", function() { return Index8Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Index8Component = /** @class */ (function () {
    function Index8Component() {
    }
    Index8Component.prototype.ngOnInit = function () {
    };
    Index8Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index8',
            template: __webpack_require__(/*! ./index8.component.html */ "./src/app/pages/home/index8/index8.component.html"),
            styles: [__webpack_require__(/*! ./index8.component.css */ "./src/app/pages/home/index8/index8.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Index8Component);
    return Index8Component;
}());



/***/ }),

/***/ "./src/app/pages/home/index9/index9.component.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/home/index9/index9.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<section class=\"section bg-home height-100vh\" id=\"home\">\r\n <particles [style]=\"myStyle\" [width]=\"width\" [height]=\"height\" [params]=\"myParams\"></particles>\r\n  <div class=\"bg-overlay\"></div>\r\n  <div class=\"\">\r\n      <div class=\"\">\r\n          <div class=\"container slidero\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-lg-8 offset-lg-2 text-white text-center\">\r\n                      <h1 class=\"home-title\"></h1>\r\n                    \r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</section>\r\n\r\n<ng-template #content let-modal>\r\n        <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <youtube-player [videoId]=\"id\" (ready)=\"savePlayer($event)\" height=\"450\" width=\"780\" (change)=\"onStateChange($event)\"\r\n                [playerVars]=\"playerVars\">\r\n            </youtube-player>\r\n        </div>\r\n    </ng-template>\r\n\r\n<app-services></app-services>\r\n<app-work></app-work>\r\n<app-getstart></app-getstart>\r\n"

/***/ }),

/***/ "./src/app/pages/home/index9/index9.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/home/index9/index9.component.ts ***!
  \*******************************************************/
/*! exports provided: Index9Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index9Component", function() { return Index9Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var Index9Component = /** @class */ (function () {
    function Index9Component(modalService) {
        this.modalService = modalService;
        this.myStyle = {};
        this.myParams = {};
        this.width = 100;
        this.height = 100;
        this.id = 'JlvxDa7Sges';
        this.playerVars = {
            cc_lang_pref: 'en'
        };
    }
    Index9Component.prototype.onStateChange = function (event) {
        this.ytEvent = event.data;
    };
    Index9Component.prototype.savePlayer = function (player) {
        this.player = player;
    };
    Index9Component.prototype.playVideo = function () {
        this.player.playVideo();
    };
    Index9Component.prototype.pauseVideo = function () {
        this.player.pauseVideo();
    };
    Index9Component.prototype.openWindowCustomClass = function (content) {
        this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg' });
    };
    Index9Component.prototype.ngOnInit = function () {
        this.myStyle = {
            'position': 'absolute',
            'width': '100%',
            'height': '100%',
            'z-index': 11,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };
        this.myParams = {
            particles: {
                number: {
                    value: 100,
                },
                color: {
                    value: '#ffffff'
                },
                shape: {
                    type: 'triangle',
                },
            }
        };
    };
    Index9Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index9',
            template: __webpack_require__(/*! ./index9.component.html */ "./src/app/pages/home/index9/index9.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: ["\n    .dark-modal .modal-content {\n      background-color: #000000;\n      color: white;\n      border-radius : 10px;\n    }\n    .dark-modal .modal-header {\n      border : none\n    }\n    .dark-modal .close {\n      color: white;\n    }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], Index9Component);
    return Index9Component;
}());



/***/ }),

/***/ "./src/app/pages/pricing/pricing.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/pricing/pricing.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaWNpbmcvcHJpY2luZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/pricing/pricing.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/pricing/pricing.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section pt-5\" id=\"pricing\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-lg-8 offset-lg-2\">\r\n              <h1 class=\"section-title text-center\">Our Pricing</h1>\r\n              <div class=\"section-title-border margin-t-20\"></div>\r\n              <p class=\"section-subtitle font-secondary text-muted text-center padding-t-30\">Call to action pricing table is really crucial to your for your business website. Make your bids stand-out with amazing options.</p>\r\n          </div>\r\n      </div>\r\n      <div class=\"row margin-t-50\">\r\n          <div class=\"col-lg-4\">\r\n              <div class=\"text-center pricing-box hover-effect\">\r\n                  <h4 class=\"text-uppercase\">Economy</h4>\r\n                  <h1>$9.90</h1>\r\n                  <h6 class=\"text-uppercase text-muted\">Billing Per Month</h6>\r\n                  <div class=\"pricing-border\"></div>\r\n                  <div class=\"plan-features margin-t-30\">\r\n                      <p>Bandwidth: <b class=\"text-custom\">1GB</b></p>\r\n                      <p>Onlinespace: <b class=\"text-custom\">50MB</b></p>\r\n                      <p>Support: <b class=\"text-custom\">No</b></p>\r\n                      <p><b class=\"text-custom\">1</b> Domain</p>\r\n                      <p><b class=\"text-custom\">No</b> Hidden Fees</p>\r\n                  </div>\r\n                  <a href=\"#\" class=\"btn btn-custom waves-effect waves-light margin-t-30\">Join Now</a>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n              <div class=\"text-center pricing-box bg-white hover-effect price-active\">\r\n                  <h4 class=\"text-uppercase\">Deluxe</h4>\r\n                  <h1>$19.90</h1>\r\n                  <h6 class=\"text-uppercase text-muted\">Billing Per Month</h6>\r\n                  <div class=\"pricing-border\"></div>\r\n                  <div class=\"plan-features margin-t-30\">\r\n                      <p>Bandwidth: <b class=\"text-custom\">10GB</b></p>\r\n                      <p>Onlinespace: <b class=\"text-custom\">500MB</b></p>\r\n                      <p>Support: <b class=\"text-custom\">Yes</b></p>\r\n                      <p><b class=\"text-custom\">10</b> Domain</p>\r\n                      <p><b class=\"text-custom\">No</b> Hidden Fees</p>\r\n                  </div>\r\n                  <a href=\"#\" class=\"btn btn-custom waves-effect waves-light margin-t-30\">Join Now</a>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n              <div class=\"text-center pricing-box hover-effect\">\r\n                  <h4 class=\"text-uppercase\">Ultimate</h4>\r\n                  <h1>$29.90</h1>\r\n                  <h6 class=\"text-uppercase text-muted\">Billing Per Month</h6>\r\n                  <div class=\"pricing-border\"></div>\r\n                  <div class=\"plan-features margin-t-30\">\r\n                      <p>Bandwidth: <b class=\"text-custom\">100GB</b></p>\r\n                      <p>Onlinespace: <b class=\"text-custom\">2 GB</b></p>\r\n                      <p>Support: <b class=\"text-custom\">Yes</b></p>\r\n                      <p><b class=\"text-custom\">Unlimited</b> Domain</p>\r\n                      <p><b class=\"text-custom\">No</b> Hidden Fees</p>\r\n                  </div>\r\n                  <a href=\"#\" class=\"btn btn-custom waves-effect waves-light margin-t-30\">Join Now</a>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/pages/pricing/pricing.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/pricing/pricing.component.ts ***!
  \****************************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PricingComponent = /** @class */ (function () {
    function PricingComponent() {
    }
    PricingComponent.prototype.ngOnInit = function () {
    };
    PricingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pricing',
            template: __webpack_require__(/*! ./pricing.component.html */ "./src/app/pages/pricing/pricing.component.html"),
            styles: [__webpack_require__(/*! ./pricing.component.css */ "./src/app/pages/pricing/pricing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/app/pages/services/services.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/services/services.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/services/services.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/services/services.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<section class=\"section pt-5\"  id=\"services\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-lg-8 offset-lg-2\">\r\n              <h1 class=\"section-title text-center\">Our Services</h1>\r\n              <div class=\"section-title-border margin-t-20\"></div>\r\n              <p class=\"section-subtitle text-muted text-center padding-t-30 font-secondary\">we will help you retire and get money or if you are retired we will help you do stuff with your money. </p>\r\n          </div>\r\n      </div>\r\n      <div class=\"row margin-t-30\">\r\n          <div class=\"col-lg-4 margin-t-20\">\r\n              <div class=\"services-box text-center hover-effect\">\r\n                  <i class=\"pe-7s-diamond text-custom\"></i>\r\n                  <h4 class=\"padding-t-15\"></h4>\r\n                  <p class=\"padding-t-15 text-muted\"></p>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-lg-4 margin-t-20\">\r\n              <div class=\"services-box text-center hover-effect\">\r\n                  <i class=\"pe-7s-display2 text-custom\"></i>\r\n                  <h4 class=\"padding-t-15\">Unlimited Colors</h4>\r\n                  <p class=\"padding-t-15 text-muted\">Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet.</p>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-lg-4 margin-t-20\">\r\n              <div class=\"services-box text-center hover-effect\">\r\n                  <i class=\"pe-7s-piggy text-custom\"></i>\r\n                  <h4 class=\"padding-t-15\">Strategy Solutions</h4>\r\n                  <p class=\"padding-t-15 text-muted\">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia.</p>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"row margin-t-30\">\r\n          <div class=\"col-lg-4 margin-t-20\">\r\n              <div class=\"services-box text-center hover-effect\">\r\n                  <i class=\"pe-7s-science text-custom\"></i>\r\n                  <h4 class=\"padding-t-15\">Awesome Support</h4>\r\n                  <p class=\"padding-t-15 text-muted\">It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World.</p>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-lg-4 margin-t-20\">\r\n              <div class=\"services-box text-center hover-effect\">\r\n                  <i class=\"pe-7s-news-paper text-custom\"></i>\r\n                  <h4 class=\"padding-t-15\">Truly Multipurpose</h4>\r\n                  <p class=\"padding-t-15 text-muted\">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-lg-4 margin-t-20\">\r\n              <div class=\"services-box text-center hover-effect\">\r\n                  <i class=\"pe-7s-plane text-custom\"></i>\r\n                  <h4 class=\"padding-t-15\">Easy to customize</h4>\r\n                  <p class=\"padding-t-15 text-muted\">Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia.</p>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/pages/services/services.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/services/services.component.ts ***!
  \******************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/pages/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/pages/services/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/pages/social/social.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/social/social.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NvY2lhbC9zb2NpYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/social/social.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/social/social.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"cta bg-light\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-lg-6\">\r\n              <ul class=\"list-inline social margin-t-20\">\r\n                  <li class=\"list-inline-item mr-2\"><a routerLink=\"#\" class=\"social-icon\"><i  class=\"mdi mdi-facebook\"></i></a></li>\r\n                  <li class=\"list-inline-item mr-2 ml-1\"><a routerLink=\"#\" class=\"social-icon\"><i  class=\"mdi mdi-twitter\"></i></a></li>\r\n                  <li class=\"list-inline-item mr-2 ml-1\"><a routerLink=\"#\" class=\"social-icon\"><i  class=\"mdi mdi-linkedin\"></i></a></li>\r\n                  <li class=\"list-inline-item mr-2 ml-1\"><a routerLink=\"#\" class=\"social-icon\"><i  class=\"mdi mdi-google-plus\"></i></a></li>\r\n                  <li class=\"list-inline-item mr-2 ml-1\"><a routerLink=\"#\" class=\"social-icon\"><i  class=\"mdi mdi-dribbble\"></i></a></li>\r\n              </ul>\r\n          </div>\r\n          <div class=\"col-lg-3 margin-t-30\">\r\n              <p class=\"margin-b-0 contact-title\"><i class=\"pe-7s-call\"></i> &nbsp;+91 123 4556 789</p>\r\n          </div>\r\n          <div class=\"col-lg-3 margin-t-30 text-right\">\r\n              <p class=\"contact-title\"><i class=\"pe-7s-mail-open\"></i>&nbsp; Support@info.com</p>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/pages/social/social.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/social/social.component.ts ***!
  \**************************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SocialComponent = /** @class */ (function () {
    function SocialComponent() {
    }
    SocialComponent.prototype.ngOnInit = function () {
    };
    SocialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-social',
            template: __webpack_require__(/*! ./social.component.html */ "./src/app/pages/social/social.component.html"),
            styles: [__webpack_require__(/*! ./social.component.css */ "./src/app/pages/social/social.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SocialComponent);
    return SocialComponent;
}());



/***/ }),

/***/ "./src/app/pages/team/team.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/team/team.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYW0vdGVhbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/team/team.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/team/team.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section pt-4\" id=\"team\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-lg-8 offset-lg-2\">\r\n              <h1 class=\"section-title text-center\">Behind The People</h1>\r\n              <div class=\"section-title-border margin-t-20\"></div>\r\n              <p class=\"section-subtitle text-muted text-center font-secondary padding-t-30\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>\r\n          </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row margin-t-50\">\r\n          <div class=\"col-lg-3 col-sm-6\">\r\n              <div class=\"team-box text-center hover-effect\">\r\n                  <div class=\"team-wrapper\">\r\n                      <div class=\"team-member\">\r\n                          <img alt=\"\" src=\"assets/images/team/img-1.jpg\" class=\"img-fluid rounded\">\r\n                      </div>\r\n                  </div>\r\n                  <h4 class=\"team-name\">Frank Johnson</h4>\r\n                  <p class=\"text-uppercase team-designation\">CEO</p>\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-3 col-sm-6\">\r\n              <div class=\"team-box text-center hover-effect\">\r\n                  <div class=\"team-wrapper\">\r\n                      <div class=\"team-member\">\r\n                          <img alt=\"\" src=\"assets/images/team/img-2.jpg\" class=\"img-fluid rounded\">\r\n                      </div>\r\n                  </div>\r\n                  <h4 class=\"team-name\">Elaine Stclair</h4>\r\n                  <p class=\"text-uppercase team-designation\">Designer</p>\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-3 col-sm-6\">\r\n              <div class=\"team-box text-center hover-effect\">\r\n                  <div class=\"team-wrapper\">\r\n                      <div class=\"team-member\">\r\n                          <img alt=\"\" src=\"assets/images/team/img-3.jpg\" class=\"img-fluid rounded\">\r\n                      </div>\r\n                  </div>\r\n                  <h4 class=\"team-name\">Wanda Arthur</h4>\r\n                  <p class=\"text-uppercase team-designation\">Developer</p>\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-3 col-sm-6\">\r\n              <div class=\"team-box text-center hover-effect\">\r\n                  <div class=\"team-wrapper\">\r\n                      <div class=\"team-member\">\r\n                          <img alt=\"\" src=\"assets/images/team/img-4.jpg\" class=\"img-fluid rounded\">\r\n                      </div>\r\n                  </div>\r\n                  <h4 class=\"team-name\">Joshua Stemple</h4>\r\n                  <p class=\"text-uppercase team-designation\">Manager</p>\r\n              </div>\r\n          </div>\r\n\r\n      </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/pages/team/team.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/team/team.component.ts ***!
  \**********************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/pages/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.css */ "./src/app/pages/team/team.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/pages/testi/testi.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/testi/testi.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlc3RpL3Rlc3RpLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/testi/testi.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/testi/testi.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section\" id=\"testi\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-lg-8 offset-lg-2\">\r\n              <h1 class=\"section-title text-center\">What they've said</h1>\r\n              <div class=\"section-title-border margin-t-20\"></div>\r\n              <p class=\"section-subtitle text-muted text-center font-secondary padding-t-30\">The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.</p>\r\n          </div>\r\n      </div>\r\n      <div class=\"row margin-t-50\">\r\n          <div class=\"col-lg-4\">\r\n              <div class=\"testimonial-box hover-effect margin-t-30\">\r\n                  <img src=\"assets/images/testimonials/user-2.jpg\" alt=\"\" class=\"img-fluid d-block img-thumbnail rounded-circle\">\r\n                  <div class=\"testimonial-decs\">\r\n                      <p class=\"text-muted text-center mb-0\">“I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why I need to throw curve balls.” </p>\r\n                  </div>\r\n                  <h5 class=\"text-center text-uppercase padding-t-15\">Ruben Reed - <span class=\"text-muted text-capitalize\">Charleston</span></h5>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n              <div class=\"testimonial-box hover-effect margin-t-30\">\r\n                  <img src=\"assets/images/testimonials/user-1.jpg\" alt=\"\" class=\"img-fluid d-block img-thumbnail rounded-circle\">\r\n                  <div class=\"testimonial-decs\">\r\n                      <p class=\"text-muted text-center mb-0\">“Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.” </p>\r\n                  </div>\r\n                  <h5 class=\"text-center text-uppercase padding-t-15\">Michael P. Howlett - <span class=\"text-muted text-capitalize\">Worcester</span></h5>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n              <div class=\"testimonial-box hover-effect margin-t-30\">\r\n                  <img src=\"assets/images/testimonials/user-3.jpg\" alt=\"\" class=\"img-fluid d-block img-thumbnail rounded-circle\">\r\n                  <div class=\"testimonial-decs\">\r\n                      <p class=\"text-muted text-center mb-0\">“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” </p>\r\n                  </div>\r\n                  <h5 class=\"text-center text-uppercase padding-t-15\">Theresa D. Sinclair - <span class=\"text-muted text-capitalize\">Lynchburg</span></h5>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/pages/testi/testi.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/testi/testi.component.ts ***!
  \************************************************/
/*! exports provided: TestiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestiComponent", function() { return TestiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestiComponent = /** @class */ (function () {
    function TestiComponent() {
    }
    TestiComponent.prototype.ngOnInit = function () {
    };
    TestiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-testi',
            template: __webpack_require__(/*! ./testi.component.html */ "./src/app/pages/testi/testi.component.html"),
            styles: [__webpack_require__(/*! ./testi.component.css */ "./src/app/pages/testi/testi.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestiComponent);
    return TestiComponent;
}());



/***/ }),

/***/ "./src/app/pages/work/work.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/work/work.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dvcmsvd29yay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/work/work.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/work/work.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section bg-light\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-lg-8 offset-lg-2\">\r\n              <h1 class=\"section-title text-center\">Work Process</h1>\r\n              <div class=\"section-title-border margin-t-20\"></div>\r\n              <p class=\"section-subtitle text-muted text-center font-secondary padding-t-30\">In an ideal world this website wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts.</p>\r\n          </div>\r\n      </div>\r\n      <div class=\"row\">\r\n          <div class=\"col-lg-6 text-center process-left-icon-1\">\r\n              <i class=\"pe-7s-angle-right\"></i>\r\n          </div>\r\n          <div class=\"col-lg-6 text-center process-left-icon-2\">\r\n              <i class=\"pe-7s-angle-right\"></i>\r\n          </div>\r\n      </div>\r\n      <div class=\"row margin-t-50\">\r\n          <div class=\"col-lg-4 plan-line\">\r\n              <div class=\"text-center process-box\">\r\n                  <i class=\"pe-7s-pen text-custom\"></i>\r\n                  <h4 class=\"padding-t-15\">Tell us what you need</h4>\r\n                  <p class=\"text-muted\">The Big Oxmox advised her not to do so.</p>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-lg-4 plan-line\">\r\n              <div class=\"text-center process-box\">\r\n                  <i class=\"pe-7s-id text-custom\"></i>\r\n                  <h4 class=\"padding-t-15\">Get free quotes</h4>\r\n                  <p class=\"text-muted\">Little Blind Text didn’t listen.</p>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n              <div class=\"text-center process-box\">\r\n                  <i class=\"pe-7s-target text-custom\"></i>\r\n                  <h4 class=\"padding-t-15\">Deliver high quality product</h4>\r\n                  <p class=\"text-muted\">When she reached the first hills.</p>\r\n              </div>\r\n          </div>\r\n          <div class=\"text-center mx-auto\">\r\n              <a routerLink=\"#\" class=\"btn btn-custom waves-light waves-effect margin-t-50\">Get Started <i class=\"mdi mdi-arrow-right\"></i></a>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/pages/work/work.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/work/work.component.ts ***!
  \**********************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WorkComponent = /** @class */ (function () {
    function WorkComponent() {
    }
    WorkComponent.prototype.ngOnInit = function () {
    };
    WorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-work',
            template: __webpack_require__(/*! ./work.component.html */ "./src/app/pages/work/work.component.html"),
            styles: [__webpack_require__(/*! ./work.component.css */ "./src/app/pages/work/work.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~home-home-module~pages-pages-module.js.map
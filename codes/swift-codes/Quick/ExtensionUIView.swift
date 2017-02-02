//
//  ExtensionUIView.swift
//  LearnSwift
//
//  Created by ym on 2016/12/12.
//  Copyright © 2016年 ym. All rights reserved.
//

import UIKit

let winBounds:CGRect = UIScreen.main.bounds
let iw = UIScreen.main.bounds.width
let ih = UIScreen.main.bounds.height


extension UIView {
    var x:CGFloat {
        get {
            return self.frame.origin.x
        }
        set(value) {
            self.frame = CGRect(x: value, y: y, width: w, height: h)
        }
    }
    var y:CGFloat {
        get {
            return self.frame.origin.y
        }
        set(value) {
            self.frame = CGRect(x: x, y: value, width: w, height: h)
        }
    }
    var w:CGFloat {
        get {
            return self.frame.width
        }
        set(value) {
            self.frame = CGRect(x: x, y: y, width: value, height: h)
        }
    }
    var h:CGFloat {
        get {
            return self.frame.height
        }
        set(value) {
            self.frame = CGRect(x: x, y: y, width: x, height: value)
        }
    }
    func sitPosition(x:CGFloat, y:CGFloat) {
        self.frame = CGRect(x: x, y: y, width: w, height: h)
    }
    func sitFrame(x:CGFloat, y:CGFloat, w:CGFloat, h:CGFloat) {
        self.frame = CGRect(x: x, y: y, width: w, height: h)
    }
    func sitForView(left:CGFloat, top:CGFloat, right:CGFloat, bottom:CGFloat) {
        self.frame = CGRect(x: left, y: top, width: superview!.w - right - left, height: superview!.h - bottom - top)
    }
    func sitForCenterView(w: CGFloat, h: CGFloat, shiftX: CGFloat, shiftY: CGFloat){
        self.frame = CGRect(x: superview!.w/2.0 - w/2.0 + shiftX, y: superview!.h/2.0 - h/2.0 + shiftY, width: w, height: h)
    }
    func sitForOtherView(view: UIView, left:CGFloat, top:CGFloat, right:CGFloat, bottom:CGFloat) {
        self.frame = CGRect(x: left, y: top, width: view.w - right - left, height: view.h - bottom - top)
    }
}

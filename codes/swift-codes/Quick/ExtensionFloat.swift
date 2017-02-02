//
//  ExtensionFloat.swift
//  LearnSnapKit2
//
//  Created by ym on 2016/12/12.
//  Copyright © 2016年 ym. All rights reserved.
//

import Foundation
import UIKit

let pxFloat = UIScreen.main.bounds.width / 1080.0

extension Int {
    var px:CGFloat {
        get{
            return CGFloat(self) * pxFloat
        }
    }
}

extension Float {
    var px:CGFloat {
        get{
            return CGFloat(self) * pxFloat
        }
    }
}

extension Double {
    var px:CGFloat {
        get{
            return CGFloat(self) * pxFloat
        }
    }
}

extension CGFloat {
    var px:CGFloat {
        get{
            return self * pxFloat
        }
    }
}

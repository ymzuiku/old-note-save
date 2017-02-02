//
//  CreateUIKit.swift
//  LearnSwift
//
//  Created by ym on 2016/12/11.
//  Copyright © 2016年 ym. All rights reserved.
//

import Foundation
import UIKit


//FIXME: - 写在方法块外头,区分代码块.需要加前面的-线, 会在上头增加一个分割线
//TODO: 写在方法里头,标记要做的事情

//FIXME: - create 16进制颜色
func createColor(hex: Int, a:CGFloat) -> UIColor {
    let r = CGFloat(((hex & 0xFF0000) >> 16)) / 255.0
    let g = CGFloat(((hex & 0x00FF00) >> 8)) / 255.0
    let b = CGFloat((hex & 0x0000FF)) / 255.0
    let color = UIColor(red: r, green: g, blue: b, alpha: a)
    return color
}

//FIXME: - create view

//FIXME: - create 单个ImageView
func createImageViewForPath(name: String) -> UIImageView{
    let path = Bundle.main.path(forResource: name, ofType: "png")
    let newImage = UIImage(contentsOfFile: path!)
    let imageView = UIImageView(image:newImage)
    imageView.contentMode = .scaleAspectFit
    return imageView
}

func createImageViewForAssets(name:String) -> UIImageView {
    let imageView = UIImageView(image:UIImage(named: name))
    imageView.contentMode = .scaleAspectFit
    return imageView
}

func createImageViewForUrl(url: String) -> UIImageView {
    let url = URL(string: url)
    let data = try!Data(contentsOf: url!)
    let newImage = UIImage(data: data)
    let imageView = UIImageView(image: newImage)
    imageView.contentMode = .scaleAspectFit
    return imageView
}
//FIXME: - create 多图动画的ImageView
func createImageViewForPathAnimationImages(names: [String], duration: Float) -> UIImageView {
    var images = [UIImage]()
    let count = names.count-1
    for index in 0...count {
        let path = Bundle.main.path(forResource: names[index], ofType: "png")
        let newImage = UIImage(contentsOfFile: path!)
        images.append(newImage!)
    }
    let imageView = UIImageView()
    imageView.animationImages = images
    imageView.animationDuration = TimeInterval(duration)
    imageView.contentMode = .scaleAspectFit
    return imageView
}

func createImageViewForAssetsAnimationImages(names: [String], duration: Float) -> UIImageView {
    var images = [UIImage]()
    let count = names.count-1
    for index in 0...count {
        let newImage = UIImage(named: names[index])
        images.append(newImage!)
    }
    let imageView = UIImageView()
    imageView.animationImages = images
    imageView.animationDuration = TimeInterval(duration)
    imageView.contentMode = .scaleAspectFit
    return imageView
}

func createImageViewForUrlAnimationImages(urls: [String], duration: Float) -> UIImageView {
    var images = [UIImage]()
    let count = urls.count-1
    for index in 0...count {
        let url = URL(string: urls[index])
        let data = try!Data(contentsOf: url!)
        let newImage = UIImage(data: data)
        images.append(newImage!)
    }
    let imageView = UIImageView()
    imageView.animationImages = images
    imageView.animationDuration = TimeInterval(duration)
    imageView.contentMode = .scaleAspectFit
    return imageView
}

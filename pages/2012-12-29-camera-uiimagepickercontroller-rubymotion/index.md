---
title: "Using camera with Rubymotion"
date: "2012-12-29T22:12:03.284Z"
readNext: "/javascript/2016/05/02/react-js-best-practices.html"
path: "rubymotion/2012/12/29/camera-uiimagepickercontroller-rubymotion.html"
desc: "The `UIImagePickerController` class provides basic, customizable user interfaces for taking pictures and movie"
---
The `UIImagePickerController` class provides basic, customizable user interfaces for taking pictures and movie. It also provide user some simple editing capability for newly-captured media.

#### Source type imagePicker
The role and appearance of an image picker controller depend on the source type you assign to it before you present it.There are there way to choose image:

1) Choose from Camera

```
imagePicker.sourceType = UIImagePickerControllerSourceTypeCamera;
```

2) Choose from all folders in the gallery

```
imagePicker.sourceType = UIImagePickerControllerSourceTypePhotoLibrary;
```
3) Choose from PhotosAlbum(camera roll)

```
imagePicker.sourceType = UIImagePickerControllerSourceTypeSavedPhotosAlbum;
```
####Delegate

There are two delegate available:

-Tells the delegate that the user picked a still image or movie.

	imagePickerController:didFinishPickingMediaWithInfo:

-Tells the delegate that the user cancelled the pick operation.


imagePickerControllerDidCancel:

#### Some code 	
Create a file `camera_controller.rb` in app folder
```
class CameraController < UIViewController

  def viewDidLoad
    view.backgroundColor = UIColor.underPageBackgroundColor
    loadButtons
  end

  def loadButtons
    @camera_button = UIButton.buttonWithType(UIButtonTypeRoundedRect)
    @camera_button.frame  = [[50, 20], [200, 50]]
    @camera_button.setTitle("Click from camera", forState:UIControlStateNormal)
    @camera_button.addTarget(self, action: :start_camera, forControlEvents:UIControlEventTouchUpInside)
    view.addSubview(@camera_button)

    @gallery_button = UIButton.buttonWithType(UIButtonTypeRoundedRect)
    @gallery_button.frame  = [[50, 100], [200, 50]]
    @gallery_button.setTitle("Chose from Gallery", forState:UIControlStateNormal)
    @gallery_button.addTarget(self, action: :open_gallery, forControlEvents:UIControlEventTouchUpInside)
    view.addSubview(@gallery_button)

    @image_picker = UIImagePickerController.alloc.init
    @image_picker.delegate = self
  end

  #Tells the delegate that the user picked a still image or movie.
  def imagePickerController(picker, didFinishPickingImage:image, editingInfo:info)
    self.dismissModalViewControllerAnimated(true)
    @image_view.removeFromSuperview if @image_view
    @image_view = UIImageView.alloc.initWithImage(image)
    @image_view.frame = [[50, 200], [200, 180]]
    view.addSubview(@image_view)
  end

  def start_camera
    if camera_present
      @image_picker.sourceType = UIImagePickerControllerSourceTypeCamera
      presentModalViewController(@image_picker, animated:true)
    else
      show_alert
    end
  end

  def open_gallery
    @image_picker.sourceType = UIImagePickerControllerSourceTypePhotoLibrary
    presentModalViewController(@image_picker, animated:true)
  end

  def show_alert
    alert = UIAlertView.new  
    alert.message = 'No Camera in device'
    alert.show
  end

  #Check Camera available or not
  def camera_present
    UIImagePickerController.isSourceTypeAvailable(UIImagePickerControllerSourceTypeCamera)
  end
end
```

You can browse more information at [Apple Docs](http://developer.apple.com/library/ios/#documentation/uikit/reference/UIImagePickerController_Class/UIImagePickerController/UIImagePickerController.html)

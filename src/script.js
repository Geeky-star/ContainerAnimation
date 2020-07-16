import 'package:flutter/material.dart';
import 'dart:math';

void main() {
  runApp(AnimatePage());
}

class AnimatePage extends StatefulWidget{
  @override
  _AnimatePageState createState() => _AnimatePageState();
}

class _AnimatePageState extends State<AnimatePage>{
  
  double _width = 50;
  double _height = 50;
  Color _color = Colors.purple;
  
  @override
  Widget build(BuildContext context){
    return MaterialApp(
      debugShowCheckedModeBanner: false,
    home: Scaffold(
      appBar: AppBar(
      title: Text("Lets Do Animation")
      ),
      body: Center(
        child: AnimatedContainer(
          
         height: _height,
        width: _width,
          decoration: BoxDecoration(
             color: _color,
            borderRadius: BorderRadius.circular(10)
          ),
        
          duration: Duration(seconds: 1),
          curve: Curves.bounceIn,
      ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: (){
         setState((){
            final random = Random();
          _width = random.nextInt(300).toDouble();
          _height = random.nextInt(300).toDouble();
           _color = Color.fromRGBO(random.nextInt(256),
                       random.nextInt(256), random.nextInt(256), 1);
         });
        },
        child: Icon(Icons.play_arrow)
      ),
    ),
    );
  }
}
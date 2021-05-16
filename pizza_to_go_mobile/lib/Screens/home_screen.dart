import 'package:flutter/material.dart';

class HomeScreen extends StatefulWidget {
  static const routeName = "/homeScreen";

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  Widget build(BuildContext context) {
    return Container(


      color: Colors.white,
      child: CustomScrollView(
        slivers: <Widget>[
          SliverAppBar(
            expandedHeight: 200.0,
            pinned: false,
            floating: false,
            snap: false,
            flexibleSpace: Stack(
              children: <Widget>[
                Positioned.fill(child: Image.network("https://static.essen-und-trinken.de/bilder/6b/3f/58617/facebook_image/klassischer-burger.jpg",
                fit: BoxFit.cover,
               
                
                ))
              ],
              
            ),
          ),



          SliverFixedExtentList(
            itemExtent: 50,
            delegate: SliverChildListDelegate([
              Container(color: Colors.red),
              Container(color: Colors.green),
              Container(color: Colors.blue),
            ]),
          ),
          SliverList(
            delegate: SliverChildBuilderDelegate(
              (context, index) {
                return Container(
                  height: 100,
                  alignment: Alignment.center,
                  color: Colors.teal[100 * (index % 9)],
                  // child: Text('orange $index'),
                );
              },
              childCount: 9,
            ),
          ),
          SliverGrid(
            delegate: SliverChildBuilderDelegate(
              (context, index) {
                return Container(
                  height: 100,
                  alignment: Alignment.center,
                  color: Colors.teal[100 * (index % 9)],
                  //  child: Text('grid item $index'),
                );
              },
              childCount: 30,
            ),
            gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(
                maxCrossAxisExtent: 200.0,
                mainAxisSpacing: 5.0,
                crossAxisSpacing: 5.0,
                childAspectRatio: 4.0),
          ),
        ],
      ),
    );
  }
}

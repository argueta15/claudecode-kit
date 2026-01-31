---
name: flutter-expert
description: Expert in Flutter and Dart for cross-platform mobile development. Covers widgets, state management (Provider, Riverpod, Bloc), navigation, testing, and best practices.
allowed-tools: Read, Write, Edit, Bash, Grep, Glob
version: 1.0
priority: HIGH
---

# Flutter Expert

Complete guide for Flutter development with Dart, covering widgets, state management, navigation, testing, and production-ready patterns.

---

## 🎯 Quick Reference

### When to Use Flutter

**Perfect for:**
- Cross-platform mobile apps (iOS + Android from single codebase)
- Apps with custom UI/UX (not just native components)
- High-performance apps (60fps animations)
- Apps that need platform-specific features
- MVPs that need both iOS and Android

**Maybe not for:**
- Simple web-only apps (use React/Vue instead)
- Apps requiring very specific native SDKs
- Games (use Unity/Unreal Engine instead)

---

## 📦 Dart Language Essentials

### Variables & Types

```dart
// Type inference
var name = 'John';  // String
var age = 30;       // int
var height = 1.75;  // double

// Explicit types
String email = 'john@example.com';
int count = 0;
double price = 9.99;
bool isActive = true;

// Nullable types (Dart null safety)
String? maybeNull;  // Can be null
String notNull = 'value';  // Cannot be null

// Late initialization
late String apiKey;  // Will be initialized before use

// Final & const
final userId = '123';  // Runtime constant
const pi = 3.14159;    // Compile-time constant
```

### Collections

```dart
// Lists
List<String> names = ['Alice', 'Bob', 'Charlie'];
var numbers = [1, 2, 3, 4, 5];  // List<int>

// Maps
Map<String, int> scores = {
  'Alice': 100,
  'Bob': 95,
};

// Sets
Set<int> uniqueNumbers = {1, 2, 3, 2};  // {1, 2, 3}

// Spread operator
var allNumbers = [...numbers, 6, 7, 8];

// Collection if
var nav = [
  'Home',
  if (isLoggedIn) 'Profile',
  'Settings',
];
```

### Functions

```dart
// Named parameters
void greet({required String name, String? title}) {
  print('Hello, ${title ?? ''} $name');
}

greet(name: 'Alice', title: 'Dr.');

// Arrow functions
int add(int a, int b) => a + b;

// Async/await
Future<String> fetchData() async {
  final response = await http.get(Uri.parse('https://api.example.com'));
  return response.body;
}

// Streams
Stream<int> countStream() async* {
  for (int i = 1; i <= 5; i++) {
    await Future.delayed(Duration(seconds: 1));
    yield i;
  }
}
```

### Classes

```dart
// Class with constructor
class User {
  final String id;
  final String name;
  final String email;

  User({
    required this.id,
    required this.name,
    required this.email,
  });

  // Named constructor
  User.guest() : this(
    id: 'guest',
    name: 'Guest',
    email: 'guest@example.com',
  );

  // Factory constructor
  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      id: json['id'],
      name: json['name'],
      email: json['email'],
    );
  }

  // Methods
  Map<String, dynamic> toJson() => {
    'id': id,
    'name': name,
    'email': email,
  };

  // copyWith pattern
  User copyWith({String? name, String? email}) {
    return User(
      id: id,
      name: name ?? this.name,
      email: email ?? this.email,
    );
  }
}
```

---

## 🎨 Widget Fundamentals

### Stateless vs Stateful

```dart
// Stateless Widget (immutable)
class Greeting extends StatelessWidget {
  final String name;

  const Greeting({Key? key, required this.name}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Text('Hello, $name!');
  }
}

// Stateful Widget (mutable state)
class Counter extends StatefulWidget {
  const Counter({Key? key}) : super(key: key);

  @override
  State<Counter> createState() => _CounterState();
}

class _CounterState extends State<Counter> {
  int _count = 0;

  void _increment() {
    setState(() {
      _count++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Count: $_count'),
        ElevatedButton(
          onPressed: _increment,
          child: Text('Increment'),
        ),
      ],
    );
  }
}
```

### Common Widgets

```dart
// Layout Widgets
Container(
  padding: EdgeInsets.all(16),
  margin: EdgeInsets.symmetric(horizontal: 8),
  decoration: BoxDecoration(
    color: Colors.white,
    borderRadius: BorderRadius.circular(8),
    boxShadow: [
      BoxShadow(
        color: Colors.black26,
        blurRadius: 4,
        offset: Offset(0, 2),
      ),
    ],
  ),
  child: Text('Hello'),
)

// Column & Row
Column(
  crossAxisAlignment: CrossAxisAlignment.start,
  children: [
    Text('Title'),
    SizedBox(height: 8),
    Text('Subtitle'),
  ],
)

Row(
  mainAxisAlignment: MainAxisAlignment.spaceBetween,
  children: [
    Icon(Icons.home),
    Text('Home'),
    Icon(Icons.arrow_forward),
  ],
)

// Stack (overlay widgets)
Stack(
  children: [
    Image.network('https://example.com/image.jpg'),
    Positioned(
      bottom: 16,
      right: 16,
      child: FloatingActionButton(
        onPressed: () {},
        child: Icon(Icons.add),
      ),
    ),
  ],
)

// ListView (scrollable list)
ListView.builder(
  itemCount: items.length,
  itemBuilder: (context, index) {
    return ListTile(
      title: Text(items[index].name),
      subtitle: Text(items[index].description),
      onTap: () => _handleTap(items[index]),
    );
  },
)

// GridView
GridView.builder(
  gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
    crossAxisCount: 2,
    crossAxisSpacing: 8,
    mainAxisSpacing: 8,
  ),
  itemCount: products.length,
  itemBuilder: (context, index) {
    return ProductCard(product: products[index]);
  },
)
```

---

## 🔄 State Management

### 1. Provider (Recommended for Most Apps)

```dart
// Install: flutter pub add provider

// 1. Define state class
class CounterProvider extends ChangeNotifier {
  int _count = 0;
  int get count => _count;

  void increment() {
    _count++;
    notifyListeners();
  }

  void decrement() {
    _count--;
    notifyListeners();
  }
}

// 2. Provide at app root
void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => CounterProvider(),
      child: MyApp(),
    ),
  );
}

// 3. Consume in widgets
class CounterDisplay extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // Watch for changes
    final counter = context.watch<CounterProvider>();

    return Column(
      children: [
        Text('Count: ${counter.count}'),
        ElevatedButton(
          // Read once (doesn't rebuild on change)
          onPressed: () => context.read<CounterProvider>().increment(),
          child: Text('Increment'),
        ),
      ],
    );
  }
}

// Multiple providers
MultiProvider(
  providers: [
    ChangeNotifierProvider(create: (_) => AuthProvider()),
    ChangeNotifierProvider(create: (_) => ThemeProvider()),
    ChangeNotifierProvider(create: (_) => CartProvider()),
  ],
  child: MyApp(),
)

// Consumer (alternative to context.watch)
Consumer<CounterProvider>(
  builder: (context, counter, child) {
    return Text('Count: ${counter.count}');
  },
)
```

### 2. Riverpod (Modern Alternative)

```dart
// Install: flutter pub add flutter_riverpod

// 1. Define providers
final counterProvider = StateNotifierProvider<CounterNotifier, int>((ref) {
  return CounterNotifier();
});

class CounterNotifier extends StateNotifier<int> {
  CounterNotifier() : super(0);

  void increment() => state++;
  void decrement() => state--;
}

// 2. Wrap app with ProviderScope
void main() {
  runApp(
    ProviderScope(
      child: MyApp(),
    ),
  );
}

// 3. Consume in widgets
class CounterDisplay extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final count = ref.watch(counterProvider);

    return Column(
      children: [
        Text('Count: $count'),
        ElevatedButton(
          onPressed: () => ref.read(counterProvider.notifier).increment(),
          child: Text('Increment'),
        ),
      ],
    );
  }
}

// Async provider
final userProvider = FutureProvider<User>((ref) async {
  final response = await http.get(Uri.parse('https://api.example.com/user'));
  return User.fromJson(jsonDecode(response.body));
});

// Consume async provider
Consumer(
  builder: (context, ref, child) {
    final asyncUser = ref.watch(userProvider);

    return asyncUser.when(
      data: (user) => Text('Welcome, ${user.name}'),
      loading: () => CircularProgressIndicator(),
      error: (error, stack) => Text('Error: $error'),
    );
  },
)
```

### 3. Bloc Pattern (Complex Apps)

```dart
// Install: flutter pub add flutter_bloc

// 1. Define events
abstract class CounterEvent {}
class CounterIncremented extends CounterEvent {}
class CounterDecremented extends CounterEvent {}

// 2. Define states
class CounterState {
  final int count;
  CounterState(this.count);
}

// 3. Define bloc
class CounterBloc extends Bloc<CounterEvent, CounterState> {
  CounterBloc() : super(CounterState(0)) {
    on<CounterIncremented>((event, emit) {
      emit(CounterState(state.count + 1));
    });

    on<CounterDecremented>((event, emit) {
      emit(CounterState(state.count - 1));
    });
  }
}

// 4. Provide bloc
BlocProvider(
  create: (context) => CounterBloc(),
  child: CounterPage(),
)

// 5. Consume with BlocBuilder
BlocBuilder<CounterBloc, CounterState>(
  builder: (context, state) {
    return Column(
      children: [
        Text('Count: ${state.count}'),
        ElevatedButton(
          onPressed: () {
            context.read<CounterBloc>().add(CounterIncremented());
          },
          child: Text('Increment'),
        ),
      ],
    );
  },
)
```

---

## 🧭 Navigation

### Basic Navigation

```dart
// Push new route
Navigator.push(
  context,
  MaterialPageRoute(
    builder: (context) => DetailPage(id: '123'),
  ),
);

// Pop (go back)
Navigator.pop(context);

// Pop with result
Navigator.pop(context, result);

// Push and remove all previous routes
Navigator.pushAndRemoveUntil(
  context,
  MaterialPageRoute(builder: (context) => HomePage()),
  (route) => false,
);
```

### Named Routes

```dart
// Define routes
MaterialApp(
  initialRoute: '/',
  routes: {
    '/': (context) => HomePage(),
    '/profile': (context) => ProfilePage(),
    '/settings': (context) => SettingsPage(),
  },
)

// Navigate with named route
Navigator.pushNamed(context, '/profile');

// Pass arguments
Navigator.pushNamed(
  context,
  '/detail',
  arguments: {'id': '123'},
);

// Receive arguments
class DetailPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final args = ModalRoute.of(context)!.settings.arguments as Map;
    final id = args['id'];

    return Scaffold(
      appBar: AppBar(title: Text('Detail: $id')),
      body: Center(child: Text('ID: $id')),
    );
  }
}
```

### go_router (Recommended)

```dart
// Install: flutter pub add go_router

final router = GoRouter(
  routes: [
    GoRoute(
      path: '/',
      builder: (context, state) => HomePage(),
    ),
    GoRoute(
      path: '/user/:id',
      builder: (context, state) {
        final id = state.pathParameters['id']!;
        return UserPage(id: id);
      },
    ),
    GoRoute(
      path: '/settings',
      builder: (context, state) => SettingsPage(),
      routes: [
        GoRoute(
          path: 'profile',
          builder: (context, state) => ProfileSettingsPage(),
        ),
      ],
    ),
  ],
);

// Use in MaterialApp
MaterialApp.router(
  routerConfig: router,
)

// Navigate
context.go('/user/123');
context.push('/settings/profile');
context.pop();
```

---

## 📝 Forms & Validation

```dart
class LoginForm extends StatefulWidget {
  @override
  State<LoginForm> createState() => _LoginFormState();
}

class _LoginFormState extends State<LoginForm> {
  final _formKey = GlobalKey<FormState>();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  void _submit() {
    if (_formKey.currentState!.validate()) {
      // Form is valid, proceed
      final email = _emailController.text;
      final password = _passwordController.text;
      // ... handle login
    }
  }

  @override
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,
      child: Column(
        children: [
          TextFormField(
            controller: _emailController,
            decoration: InputDecoration(
              labelText: 'Email',
              prefixIcon: Icon(Icons.email),
            ),
            keyboardType: TextInputType.emailAddress,
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Please enter your email';
              }
              if (!value.contains('@')) {
                return 'Please enter a valid email';
              }
              return null;
            },
          ),
          SizedBox(height: 16),
          TextFormField(
            controller: _passwordController,
            decoration: InputDecoration(
              labelText: 'Password',
              prefixIcon: Icon(Icons.lock),
            ),
            obscureText: true,
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Please enter your password';
              }
              if (value.length < 6) {
                return 'Password must be at least 6 characters';
              }
              return null;
            },
          ),
          SizedBox(height: 24),
          ElevatedButton(
            onPressed: _submit,
            child: Text('Login'),
          ),
        ],
      ),
    );
  }
}
```

---

## 🌐 Networking

```dart
// Install: flutter pub add http

import 'package:http/http.dart' as http;
import 'dart:convert';

// GET request
Future<List<User>> fetchUsers() async {
  final response = await http.get(
    Uri.parse('https://api.example.com/users'),
  );

  if (response.statusCode == 200) {
    final List<dynamic> data = jsonDecode(response.body);
    return data.map((json) => User.fromJson(json)).toList();
  } else {
    throw Exception('Failed to load users');
  }
}

// POST request
Future<User> createUser(String name, String email) async {
  final response = await http.post(
    Uri.parse('https://api.example.com/users'),
    headers: {'Content-Type': 'application/json'},
    body: jsonEncode({
      'name': name,
      'email': email,
    }),
  );

  if (response.statusCode == 201) {
    return User.fromJson(jsonDecode(response.body));
  } else {
    throw Exception('Failed to create user');
  }
}

// Using in widget with FutureBuilder
FutureBuilder<List<User>>(
  future: fetchUsers(),
  builder: (context, snapshot) {
    if (snapshot.connectionState == ConnectionState.waiting) {
      return Center(child: CircularProgressIndicator());
    }

    if (snapshot.hasError) {
      return Center(child: Text('Error: ${snapshot.error}'));
    }

    if (!snapshot.hasData || snapshot.data!.isEmpty) {
      return Center(child: Text('No users found'));
    }

    return ListView.builder(
      itemCount: snapshot.data!.length,
      itemBuilder: (context, index) {
        final user = snapshot.data![index];
        return ListTile(
          title: Text(user.name),
          subtitle: Text(user.email),
        );
      },
    );
  },
)
```

---

## 🧪 Testing

### Unit Tests

```dart
// test/models/user_test.dart
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('User', () {
    test('fromJson creates User correctly', () {
      final json = {'id': '1', 'name': 'John', 'email': 'john@example.com'};
      final user = User.fromJson(json);

      expect(user.id, '1');
      expect(user.name, 'John');
      expect(user.email, 'john@example.com');
    });

    test('copyWith creates new instance with changes', () {
      final user = User(id: '1', name: 'John', email: 'john@example.com');
      final updated = user.copyWith(name: 'Jane');

      expect(updated.name, 'Jane');
      expect(updated.id, '1');  // unchanged
      expect(updated.email, 'john@example.com');  // unchanged
    });
  });
}
```

### Widget Tests

```dart
// test/widgets/counter_test.dart
import 'package:flutter_test/flutter_test.dart';
import 'package:flutter/material.dart';

void main() {
  testWidgets('Counter increments', (WidgetTester tester) async {
    await tester.pumpWidget(MaterialApp(home: Counter()));

    // Verify initial state
    expect(find.text('Count: 0'), findsOneWidget);
    expect(find.text('Count: 1'), findsNothing);

    // Tap increment button
    await tester.tap(find.byType(ElevatedButton));
    await tester.pump();

    // Verify counter incremented
    expect(find.text('Count: 0'), findsNothing);
    expect(find.text('Count: 1'), findsOneWidget);
  });
}
```

### Integration Tests

```dart
// integration_test/app_test.dart
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();

  testWidgets('Complete login flow', (WidgetTester tester) async {
    await tester.pumpWidget(MyApp());

    // Find and tap login button
    await tester.tap(find.text('Login'));
    await tester.pumpAndSettle();

    // Enter credentials
    await tester.enterText(find.byType(TextField).first, 'user@example.com');
    await tester.enterText(find.byType(TextField).last, 'password123');

    // Submit
    await tester.tap(find.text('Submit'));
    await tester.pumpAndSettle();

    // Verify navigation to home
    expect(find.text('Welcome'), findsOneWidget);
  });
}
```

---

## ⚡ Performance Best Practices

### 1. Use const Constructors

```dart
// ✅ Good - const widget reused
const Text('Hello')
const Icon(Icons.home)
const SizedBox(height: 16)

// ❌ Bad - new widget every rebuild
Text('Hello')
Icon(Icons.home)
SizedBox(height: 16)
```

### 2. Avoid Rebuilding Entire Trees

```dart
// ❌ Bad - entire widget rebuilds
class MyWidget extends StatefulWidget {
  @override
  _MyWidgetState createState() => _MyWidgetState();
}

class _MyWidgetState extends State<MyWidget> {
  int _counter = 0;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        ExpensiveWidget(),  // Rebuilds unnecessarily
        Text('$_counter'),
        ElevatedButton(
          onPressed: () => setState(() => _counter++),
          child: Text('Increment'),
        ),
      ],
    );
  }
}

// ✅ Good - only counter rebuilds
class MyWidget extends StatefulWidget {
  @override
  _MyWidgetState createState() => _MyWidgetState();
}

class _MyWidgetState extends State<MyWidget> {
  int _counter = 0;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        const ExpensiveWidget(),  // const, won't rebuild
        CounterDisplay(counter: _counter),  // Only this rebuilds
        ElevatedButton(
          onPressed: () => setState(() => _counter++),
          child: const Text('Increment'),
        ),
      ],
    );
  }
}
```

### 3. ListView.builder for Long Lists

```dart
// ❌ Bad - creates all items at once
ListView(
  children: items.map((item) => ItemWidget(item)).toList(),
)

// ✅ Good - lazy loading
ListView.builder(
  itemCount: items.length,
  itemBuilder: (context, index) => ItemWidget(items[index]),
)
```

---

## 🔧 Platform Channels (Native Code)

```dart
// Method channel for iOS/Android
import 'package:flutter/services.dart';

class BatteryLevel {
  static const platform = MethodChannel('samples.flutter.dev/battery');

  Future<int> getBatteryLevel() async {
    try {
      final int result = await platform.invokeMethod('getBatteryLevel');
      return result;
    } on PlatformException catch (e) {
      print('Failed to get battery level: ${e.message}');
      return -1;
    }
  }
}

// Usage
final battery = BatteryLevel();
final level = await battery.getBatteryLevel();
```

---

## 📱 Common Patterns

### Responsive Design

```dart
// MediaQuery for screen info
final screenWidth = MediaQuery.of(context).size.width;
final isPhone = screenWidth < 600;
final isTablet = screenWidth >= 600 && screenWidth < 1200;

// LayoutBuilder for constraints
LayoutBuilder(
  builder: (context, constraints) {
    if (constraints.maxWidth < 600) {
      return PhoneLayout();
    } else {
      return TabletLayout();
    }
  },
)

// OrientationBuilder
OrientationBuilder(
  builder: (context, orientation) {
    return orientation == Orientation.portrait
        ? PortraitLayout()
        : LandscapeLayout();
  },
)
```

### Theme & Dark Mode

```dart
MaterialApp(
  theme: ThemeData(
    primarySwatch: Colors.blue,
    brightness: Brightness.light,
  ),
  darkTheme: ThemeData(
    primarySwatch: Colors.blue,
    brightness: Brightness.dark,
  ),
  themeMode: ThemeMode.system,  // or .light, .dark
)

// Use theme colors
Container(
  color: Theme.of(context).primaryColor,
  child: Text(
    'Hello',
    style: Theme.of(context).textTheme.headline6,
  ),
)
```

---

## 🚀 Production Checklist

- [ ] Remove debug prints
- [ ] Add error handling for all async operations
- [ ] Test on multiple device sizes
- [ ] Test on both iOS and Android
- [ ] Optimize images (use appropriate formats and sizes)
- [ ] Use const constructors where possible
- [ ] Profile performance (DevTools)
- [ ] Add loading states for async operations
- [ ] Add proper error states
- [ ] Test offline behavior
- [ ] Add analytics/crash reporting
- [ ] Configure app icons and splash screen
- [ ] Test deep linking (if applicable)
- [ ] Review permissions (iOS Info.plist, Android Manifest)

---

## 📚 Essential Packages

```yaml
dependencies:
  # State Management
  provider: ^6.0.5        # Simple state management
  flutter_riverpod: ^2.4.0  # Modern alternative

  # Navigation
  go_router: ^12.0.0     # Declarative routing

  # Networking
  http: ^1.1.0           # Basic HTTP client
  dio: ^5.3.3            # Advanced HTTP with interceptors

  # Storage
  shared_preferences: ^2.2.2  # Key-value storage
  hive: ^2.2.3           # NoSQL database
  sqflite: ^2.3.0        # SQLite

  # UI/UX
  cached_network_image: ^3.3.0  # Image caching
  flutter_svg: ^2.0.9    # SVG support

  # Utils
  intl: ^0.18.1          # Internationalization
  uuid: ^4.1.0           # UUID generation

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^3.0.0  # Linting
  mockito: ^5.4.2        # Mocking for tests
```

---

## 🎬 Animations

### Implicit Animations (Easiest)

```dart
// AnimatedContainer - Animate any container property
AnimatedContainer(
  duration: Duration(milliseconds: 300),
  curve: Curves.easeInOut,
  width: isExpanded ? 200 : 100,
  height: isExpanded ? 200 : 100,
  color: isSelected ? Colors.blue : Colors.grey,
  child: child,
)

// AnimatedOpacity
AnimatedOpacity(
  opacity: isVisible ? 1.0 : 0.0,
  duration: Duration(milliseconds: 500),
  child: child,
)

// AnimatedPositioned (inside Stack)
Stack(
  children: [
    AnimatedPositioned(
      duration: Duration(milliseconds: 300),
      top: isOpen ? 100 : 0,
      left: isOpen ? 50 : 0,
      child: child,
    ),
  ],
)

// AnimatedCrossFade
AnimatedCrossFade(
  firstChild: Icon(Icons.play_arrow),
  secondChild: Icon(Icons.pause),
  crossFadeState: isPlaying
      ? CrossFadeState.showSecond
      : CrossFadeState.showFirst,
  duration: Duration(milliseconds: 200),
)
```

### Explicit Animations (Full Control)

```dart
class AnimatedWidget extends StatefulWidget {
  @override
  _AnimatedWidgetState createState() => _AnimatedWidgetState();
}

class _AnimatedWidgetState extends State<AnimatedWidget>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: Duration(seconds: 2),
      vsync: this,
    );

    _animation = Tween<double>(begin: 0, end: 300).animate(
      CurvedAnimation(
        parent: _controller,
        curve: Curves.easeInOut,
      ),
    );

    _controller.forward();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _animation,
      builder: (context, child) {
        return Container(
          width: _animation.value,
          height: _animation.value,
          child: child,
        );
      },
      child: Icon(Icons.star),  // Built only once
    );
  }
}
```

### Hero Animations (Shared Element Transitions)

```dart
// Screen 1 (list)
Hero(
  tag: 'product-${product.id}',
  child: Image.network(product.imageUrl),
)

// Screen 2 (detail)
Hero(
  tag: 'product-${product.id}',
  child: Image.network(product.imageUrl),
)

// Automatically animates between screens!
```

### Common Animation Patterns

```dart
// Slide in from bottom
SlideTransition(
  position: Tween<Offset>(
    begin: Offset(0, 1),
    end: Offset.zero,
  ).animate(_controller),
  child: child,
)

// Rotate
RotationTransition(
  turns: _controller,
  child: child,
)

// Scale
ScaleTransition(
  scale: _animation,
  child: child,
)

// Fade + Slide combo
FadeTransition(
  opacity: _fadeAnimation,
  child: SlideTransition(
    position: _slideAnimation,
    child: child,
  ),
)
```

---

## 🔥 Flutter + Supabase

### Setup

```yaml
# pubspec.yaml
dependencies:
  supabase_flutter: ^2.0.0
```

```dart
// main.dart
import 'package:supabase_flutter/supabase_flutter.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await Supabase.initialize(
    url: 'https://your-project.supabase.co',
    anonKey: 'your-anon-key',
  );

  runApp(MyApp());
}

// Access client anywhere
final supabase = Supabase.instance.client;
```

### Authentication

```dart
// Sign up
Future<void> signUp(String email, String password) async {
  final response = await supabase.auth.signUp(
    email: email,
    password: password,
  );

  if (response.user == null) {
    throw Exception('Sign up failed');
  }
}

// Sign in
Future<void> signIn(String email, String password) async {
  final response = await supabase.auth.signInWithPassword(
    email: email,
    password: password,
  );

  if (response.session == null) {
    throw Exception('Sign in failed');
  }
}

// Sign out
Future<void> signOut() async {
  await supabase.auth.signOut();
}

// Listen to auth state
supabase.auth.onAuthStateChange.listen((data) {
  final session = data.session;
  if (session != null) {
    // User signed in
    final user = session.user;
  } else {
    // User signed out
  }
});

// Get current user
final user = supabase.auth.currentUser;

// OAuth (Google, GitHub, etc.)
await supabase.auth.signInWithOAuth(
  OAuthProvider.google,
  redirectTo: 'io.supabase.app://callback',
);
```

### Database Operations

```dart
// Fetch data
Future<List<Product>> fetchProducts() async {
  final response = await supabase
      .from('products')
      .select()
      .order('created_at', ascending: false);

  return (response as List)
      .map((json) => Product.fromJson(json))
      .toList();
}

// Insert
Future<void> createProduct(Product product) async {
  await supabase.from('products').insert(product.toJson());
}

// Update
Future<void> updateProduct(String id, Map<String, dynamic> updates) async {
  await supabase
      .from('products')
      .update(updates)
      .eq('id', id);
}

// Delete
Future<void> deleteProduct(String id) async {
  await supabase
      .from('products')
      .delete()
      .eq('id', id);
}

// Filtering
final activeProducts = await supabase
    .from('products')
    .select()
    .eq('status', 'active')
    .gte('price', 10)
    .lte('price', 100);

// Realtime subscriptions
final subscription = supabase
    .from('products')
    .stream(primaryKey: ['id'])
    .listen((List<Map<String, dynamic>> data) {
      // Handle realtime updates
      final products = data.map((e) => Product.fromJson(e)).toList();
    });

// Cancel subscription
subscription.cancel();
```

### Storage (Files)

```dart
// Upload file
Future<String> uploadImage(File file, String userId) async {
  final fileName = '${userId}/${DateTime.now().millisecondsSinceEpoch}.jpg';

  await supabase.storage
      .from('avatars')
      .upload(fileName, file);

  // Get public URL
  final url = supabase.storage
      .from('avatars')
      .getPublicUrl(fileName);

  return url;
}

// Download file
Future<Uint8List> downloadImage(String path) async {
  final data = await supabase.storage
      .from('avatars')
      .download(path);

  return data;
}

// Delete file
Future<void> deleteImage(String path) async {
  await supabase.storage
      .from('avatars')
      .remove([path]);
}
```

### RLS (Row Level Security) Best Practices

```dart
// Always sign in before accessing protected data
if (supabase.auth.currentUser == null) {
  throw Exception('User must be authenticated');
}

// Use .select() with filters matching RLS policies
final userProducts = await supabase
    .from('products')
    .select()
    .eq('user_id', supabase.auth.currentUser!.id);
```

### Error Handling

```dart
try {
  final response = await supabase.from('products').select();
  // Handle success
} on PostgrestException catch (error) {
  // Database error
  print('Database error: ${error.message}');
} on AuthException catch (error) {
  // Auth error
  print('Auth error: ${error.message}');
} catch (error) {
  // Other errors
  print('Error: $error');
}
```

---

## 🚀 Flutter CI/CD

### GitHub Actions for Flutter

```yaml
# .github/workflows/flutter.yml
name: Flutter CI

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Flutter
        uses: subosito/flutter-action@v2
        with:
          flutter-version: '3.16.0'
          channel: 'stable'

      - name: Install dependencies
        run: flutter pub get

      - name: Analyze code
        run: flutter analyze

      - name: Run tests
        run: flutter test

      - name: Build APK
        run: flutter build apk --release

      - name: Upload APK
        uses: actions/upload-artifact@v3
        with:
          name: app-release.apk
          path: build/app/outputs/flutter-apk/app-release.apk
```

### Build Android AAB for Play Store

```bash
# Generate upload key (first time only)
keytool -genkey -v -keystore upload-keystore.jks -keyalg RSA \
  -keysize 2048 -validity 10000 -alias upload

# Create key.properties
# android/key.properties
storePassword=your-password
keyPassword=your-password
keyAlias=upload
storeFile=/path/to/upload-keystore.jks
```

```yaml
# android/app/build.gradle
def keystoreProperties = new Properties()
def keystorePropertiesFile = rootProject.file('key.properties')
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}

android {
    signingConfigs {
        release {
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storeFile keystoreProperties['storeFile'] ? file(keystoreProperties['storeFile']) : null
            storePassword keystoreProperties['storePassword']
        }
    }

    buildTypes {
        release {
            signingConfig signingConfigs.release
        }
    }
}
```

```bash
# Build AAB
flutter build appbundle --release
```

### Build iOS IPA for App Store

```bash
# Archive and export
cd ios
xcodebuild clean archive \
  -workspace Runner.xcworkspace \
  -scheme Runner \
  -archivePath build/Runner.xcarchive

xcodebuild -exportArchive \
  -archivePath build/Runner.xcarchive \
  -exportPath build \
  -exportOptionsPlist ExportOptions.plist
```

### Fastlane Integration

```ruby
# Fastfile (android/fastlane/Fastfile)
default_platform(:android)

platform :android do
  desc "Deploy to Play Store (Internal Testing)"
  lane :internal do
    gradle(task: "clean bundleRelease")
    upload_to_play_store(
      track: 'internal',
      aab: '../build/app/outputs/bundle/release/app-release.aab'
    )
  end
end
```

### Environment Variables

```dart
// Use flutter_dotenv
// pubspec.yaml
dependencies:
  flutter_dotenv: ^5.1.0

// Load in main.dart
await dotenv.load(fileName: ".env");

// Access
final apiUrl = dotenv.env['API_URL'];

// .env (never commit!)
API_URL=https://api.example.com
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_ANON_KEY=xxx
```

### Build Flavors (Dev/Staging/Prod)

```bash
# Create flavors
flutter run --flavor dev
flutter run --flavor staging
flutter run --flavor prod

# Build specific flavor
flutter build apk --flavor prod --release
```

```dart
// main_dev.dart
void main() {
  runApp(MyApp(env: Environment.dev));
}

// main_prod.dart
void main() {
  runApp(MyApp(env: Environment.prod));
}

// environment.dart
enum Environment { dev, staging, prod }

class Config {
  static late Environment env;

  static String get apiUrl {
    switch (env) {
      case Environment.dev:
        return 'https://dev.api.example.com';
      case Environment.staging:
        return 'https://staging.api.example.com';
      case Environment.prod:
        return 'https://api.example.com';
    }
  }
}
```

---

## 📱 Advanced Flutter Patterns

### Dependency Injection

```dart
// Using get_it
final getIt = GetIt.instance;

// Register services
void setupDependencies() {
  getIt.registerSingleton<ApiService>(ApiService());
  getIt.registerFactory<UserRepository>(() => UserRepository());
}

// Use anywhere
final api = getIt<ApiService>();
```

### Repository Pattern

```dart
abstract class UserRepository {
  Future<User> getUser(String id);
  Future<void> updateUser(User user);
}

class SupabaseUserRepository implements UserRepository {
  final supabase = Supabase.instance.client;

  @override
  Future<User> getUser(String id) async {
    final response = await supabase
        .from('users')
        .select()
        .eq('id', id)
        .single();

    return User.fromJson(response);
  }

  @override
  Future<void> updateUser(User user) async {
    await supabase
        .from('users')
        .update(user.toJson())
        .eq('id', user.id);
  }
}
```

### Result Type (Error Handling)

```dart
// Define Result type
sealed class Result<T> {}

class Success<T> extends Result<T> {
  final T data;
  Success(this.data);
}

class Failure<T> extends Result<T> {
  final String message;
  Failure(this.message);
}

// Use in repository
Future<Result<User>> getUser(String id) async {
  try {
    final user = await _fetchUser(id);
    return Success(user);
  } catch (e) {
    return Failure(e.toString());
  }
}

// Handle in UI
final result = await userRepository.getUser('123');

switch (result) {
  case Success(:final data):
    setState(() => user = data);
  case Failure(:final message):
    showError(message);
}
```

---

**Remember:** Flutter uses declarative UI - describe what the UI should look like for any given state, and Flutter handles the rest. Keep widgets small, use const where possible, and leverage state management for complex apps.

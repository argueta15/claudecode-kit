# Flutter Quick Start

Fast reference for common Flutter patterns and widgets. Use this when you need quick examples.

---

## 🚀 New Project Setup

```bash
# Create new Flutter app
flutter create my_app
cd my_app

# Run on device/emulator
flutter run

# Run with hot reload
# (Press 'r' to hot reload, 'R' to hot restart, 'q' to quit)
```

### Recommended Initial Dependencies

```yaml
# pubspec.yaml
dependencies:
  flutter:
    sdk: flutter

  # State Management
  provider: ^6.1.1              # Simple and recommended
  # flutter_riverpod: ^2.4.9    # OR use Riverpod (more powerful)

  # Navigation
  go_router: ^13.0.0            # Declarative routing

  # Backend
  supabase_flutter: ^2.3.0      # If using Supabase
  # firebase_core: ^2.24.0      # OR Firebase

  # Networking
  http: ^1.2.0                  # Simple HTTP
  # dio: ^5.4.0                 # OR Dio (more features)

  # Storage
  shared_preferences: ^2.2.2    # Simple key-value
  flutter_secure_storage: ^9.0.0  # Secure token storage

  # UI/UX
  cached_network_image: ^3.3.1  # Image caching
  flutter_svg: ^2.0.9           # SVG support

  # Utils
  intl: ^0.18.1                 # Date formatting, i18n
  uuid: ^4.3.3                  # Generate UUIDs

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^3.0.1         # Code quality
  mockito: ^5.4.4               # Testing mocks
```

---

## 📂 Recommended Project Structure

```
lib/
├── main.dart
├── app.dart                    # Main app widget
│
├── core/
│   ├── constants/              # App constants
│   ├── theme/                  # Theme configuration
│   ├── utils/                  # Helper functions
│   └── router/                 # Navigation routes
│
├── features/
│   ├── auth/
│   │   ├── models/
│   │   ├── providers/          # State management
│   │   ├── repositories/       # Data layer
│   │   ├── screens/            # UI screens
│   │   └── widgets/            # Reusable widgets
│   │
│   ├── home/
│   │   ├── models/
│   │   ├── providers/
│   │   ├── repositories/
│   │   ├── screens/
│   │   └── widgets/
│   │
│   └── profile/
│       └── ...
│
└── shared/
    ├── models/                 # Shared models
    ├── widgets/                # Shared widgets
    └── services/               # Shared services (API, storage)
```

---

## 🎯 Quick Widget Examples

### Scaffold Template

```dart
import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Home'),
        actions: [
          IconButton(
            icon: const Icon(Icons.settings),
            onPressed: () {},
          ),
        ],
      ),
      body: const Center(
        child: Text('Content here'),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: const Icon(Icons.add),
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: 'Profile',
          ),
        ],
        onTap: (index) {},
      ),
    );
  }
}
```

### List with Pull-to-Refresh

```dart
class ProductList extends StatefulWidget {
  const ProductList({Key? key}) : super(key: key);

  @override
  State<ProductList> createState() => _ProductListState();
}

class _ProductListState extends State<ProductList> {
  final List<Product> _products = [];
  bool _isLoading = false;

  @override
  void initState() {
    super.initState();
    _loadProducts();
  }

  Future<void> _loadProducts() async {
    setState(() => _isLoading = true);
    try {
      final products = await fetchProducts();
      setState(() {
        _products = products;
        _isLoading = false;
      });
    } catch (e) {
      setState(() => _isLoading = false);
      _showError(e.toString());
    }
  }

  void _showError(String message) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text(message)),
    );
  }

  @override
  Widget build(BuildContext context) {
    if (_isLoading && _products.isEmpty) {
      return const Center(child: CircularProgressIndicator());
    }

    return RefreshIndicator(
      onRefresh: _loadProducts,
      child: ListView.builder(
        itemCount: _products.length,
        itemBuilder: (context, index) {
          final product = _products[index];
          return ListTile(
            leading: CircleAvatar(
              backgroundImage: NetworkImage(product.imageUrl),
            ),
            title: Text(product.name),
            subtitle: Text('\$${product.price}'),
            trailing: const Icon(Icons.chevron_right),
            onTap: () {
              // Navigate to detail
            },
          );
        },
      ),
    );
  }
}
```

### Form with Validation

```dart
class SignUpForm extends StatefulWidget {
  const SignUpForm({Key? key}) : super(key: key);

  @override
  State<SignUpForm> createState() => _SignUpFormState();
}

class _SignUpFormState extends State<SignUpForm> {
  final _formKey = GlobalKey<FormState>();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  bool _isLoading = false;

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  Future<void> _submit() async {
    if (!_formKey.currentState!.validate()) return;

    setState(() => _isLoading = true);

    try {
      await signUp(
        email: _emailController.text,
        password: _passwordController.text,
      );
      // Navigate to home
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(e.toString())),
      );
    } finally {
      setState(() => _isLoading = false);
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
            decoration: const InputDecoration(
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
          const SizedBox(height: 16),
          TextFormField(
            controller: _passwordController,
            decoration: const InputDecoration(
              labelText: 'Password',
              prefixIcon: Icon(Icons.lock),
            ),
            obscureText: true,
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Please enter your password';
              }
              if (value.length < 8) {
                return 'Password must be at least 8 characters';
              }
              return null;
            },
          ),
          const SizedBox(height: 24),
          SizedBox(
            width: double.infinity,
            child: ElevatedButton(
              onPressed: _isLoading ? null : _submit,
              child: _isLoading
                  ? const SizedBox(
                      height: 20,
                      width: 20,
                      child: CircularProgressIndicator(strokeWidth: 2),
                    )
                  : const Text('Sign Up'),
            ),
          ),
        ],
      ),
    );
  }
}
```

### Bottom Sheet

```dart
void showOptions(BuildContext context) {
  showModalBottomSheet(
    context: context,
    builder: (context) {
      return SafeArea(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            ListTile(
              leading: const Icon(Icons.camera),
              title: const Text('Take Photo'),
              onTap: () {
                Navigator.pop(context);
                // Handle camera
              },
            ),
            ListTile(
              leading: const Icon(Icons.photo_library),
              title: const Text('Choose from Gallery'),
              onTap: () {
                Navigator.pop(context);
                // Handle gallery
              },
            ),
            ListTile(
              leading: const Icon(Icons.cancel),
              title: const Text('Cancel'),
              onTap: () => Navigator.pop(context),
            ),
          ],
        ),
      );
    },
  );
}
```

### Dialog

```dart
Future<bool> showConfirmDialog(BuildContext context) async {
  final result = await showDialog<bool>(
    context: context,
    builder: (context) {
      return AlertDialog(
        title: const Text('Confirm'),
        content: const Text('Are you sure you want to delete this item?'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context, false),
            child: const Text('Cancel'),
          ),
          TextButton(
            onPressed: () => Navigator.pop(context, true),
            style: TextButton.styleFrom(foregroundColor: Colors.red),
            child: const Text('Delete'),
          ),
        ],
      );
    },
  );

  return result ?? false;
}
```

### Async Data with FutureBuilder

```dart
class UserProfile extends StatelessWidget {
  final String userId;

  const UserProfile({Key? key, required this.userId}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<User>(
      future: fetchUser(userId),
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return const Center(child: CircularProgressIndicator());
        }

        if (snapshot.hasError) {
          return Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const Icon(Icons.error, color: Colors.red, size: 48),
                const SizedBox(height: 16),
                Text('Error: ${snapshot.error}'),
                const SizedBox(height: 16),
                ElevatedButton(
                  onPressed: () {
                    // Rebuild to retry
                    (context as Element).markNeedsBuild();
                  },
                  child: const Text('Retry'),
                ),
              ],
            ),
          );
        }

        if (!snapshot.hasData) {
          return const Center(child: Text('User not found'));
        }

        final user = snapshot.data!;
        return Column(
          children: [
            CircleAvatar(
              radius: 50,
              backgroundImage: NetworkImage(user.avatarUrl),
            ),
            const SizedBox(height: 16),
            Text(
              user.name,
              style: Theme.of(context).textTheme.headlineSmall,
            ),
            Text(user.email),
          ],
        );
      },
    );
  }
}
```

---

## 🎨 Common UI Patterns

### Card with Image

```dart
Card(
  clipBehavior: Clip.antiAlias,
  child: Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      Image.network(
        product.imageUrl,
        height: 200,
        width: double.infinity,
        fit: BoxFit.cover,
      ),
      Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              product.name,
              style: const TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 8),
            Text(
              product.description,
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
            ),
            const SizedBox(height: 8),
            Text(
              '\$${product.price}',
              style: const TextStyle(
                fontSize: 16,
                color: Colors.green,
                fontWeight: FontWeight.bold,
              ),
            ),
          ],
        ),
      ),
    ],
  ),
)
```

### Shimmer Loading

```dart
// Add package: shimmer: ^3.0.0

Shimmer.fromColors(
  baseColor: Colors.grey[300]!,
  highlightColor: Colors.grey[100]!,
  child: Column(
    children: List.generate(
      5,
      (index) => Padding(
        padding: const EdgeInsets.all(8),
        child: Row(
          children: [
            Container(
              width: 50,
              height: 50,
              color: Colors.white,
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(
                    width: double.infinity,
                    height: 12,
                    color: Colors.white,
                  ),
                  const SizedBox(height: 8),
                  Container(
                    width: 150,
                    height: 12,
                    color: Colors.white,
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    ),
  ),
)
```

### Empty State

```dart
Center(
  child: Column(
    mainAxisAlignment: MainAxisAlignment.center,
    children: [
      Icon(
        Icons.inbox,
        size: 80,
        color: Colors.grey[400],
      ),
      const SizedBox(height: 16),
      Text(
        'No items yet',
        style: TextStyle(
          fontSize: 18,
          color: Colors.grey[600],
        ),
      ),
      const SizedBox(height: 8),
      Text(
        'Add your first item to get started',
        style: TextStyle(color: Colors.grey[500]),
      ),
      const SizedBox(height: 24),
      ElevatedButton.icon(
        onPressed: () {},
        icon: const Icon(Icons.add),
        label: const Text('Add Item'),
      ),
    ],
  ),
)
```

---

## 🛠 Common Utils

### Date Formatting

```dart
import 'package:intl/intl.dart';

// Format date
final formatted = DateFormat('MMM dd, yyyy').format(DateTime.now());
// Output: "Jan 31, 2026"

// Relative time
String getRelativeTime(DateTime date) {
  final now = DateTime.now();
  final difference = now.difference(date);

  if (difference.inDays > 7) {
    return DateFormat('MMM dd').format(date);
  } else if (difference.inDays > 0) {
    return '${difference.inDays}d ago';
  } else if (difference.inHours > 0) {
    return '${difference.inHours}h ago';
  } else if (difference.inMinutes > 0) {
    return '${difference.inMinutes}m ago';
  } else {
    return 'Just now';
  }
}
```

### Extension Methods

```dart
// String extensions
extension StringX on String {
  String capitalize() {
    if (isEmpty) return this;
    return '${this[0].toUpperCase()}${substring(1)}';
  }

  bool get isValidEmail {
    return RegExp(r'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$').hasMatch(this);
  }
}

// Usage
'hello'.capitalize(); // 'Hello'
'test@example.com'.isValidEmail; // true

// BuildContext extensions
extension ContextX on BuildContext {
  void showSnackBar(String message) {
    ScaffoldMessenger.of(this).showSnackBar(
      SnackBar(content: Text(message)),
    );
  }

  void pop<T>([T? result]) => Navigator.of(this).pop(result);

  Future<T?> push<T>(Widget page) {
    return Navigator.of(this).push<T>(
      MaterialPageRoute(builder: (_) => page),
    );
  }
}

// Usage
context.showSnackBar('Success!');
context.push(DetailPage());
```

---

## 🚦 Quick Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| **"The getter was called on null"** | Check null safety, use `?` and `!` correctly |
| **"setState called during build"** | Move setState to post-frame callback: `WidgetsBinding.instance.addPostFrameCallback((_) => setState(...))` |
| **"RenderBox was not laid out"** | Wrap ListView in Expanded or set shrinkWrap: true |
| **"Vertical viewport was given unbounded height"** | Wrap in Expanded or Container with height |
| **Hot reload not working** | Hot restart (R) or rebuild |
| **Package version conflict** | `flutter pub upgrade` or manually resolve versions |

### Performance Debugging

```bash
# Profile mode (necessary for performance analysis)
flutter run --profile

# Check performance overlay
# Press 'P' in terminal to toggle performance overlay

# Analyze build performance
flutter run --trace-startup --profile

# Check app size
flutter build apk --analyze-size
```

---

**Quick Tip:** Keep this file open while developing for fast copy-paste of common patterns!

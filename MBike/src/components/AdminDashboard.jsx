import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addProduct, updateProduct, deleteProduct } from '../features/productsSlice';
import { fetchCategories, addCategory, deleteCategory } from '../features/categoriesSlice';
import { fetchUsers, addUser, updateUser, deleteUser } from '../features/usersSlice';
import { backendBaseUrl } from '../api/axios';

const AdminDashboard = () => {
    const dispatch = useDispatch();
    const { products, status: productsStatus } = useSelector((state) => state.products);
    const { categories, status: categoriesStatus } = useSelector((state) => state.categories);
    const { users, status: usersStatus } = useSelector((state) => state.users);

    const [activeTab, setActiveTab] = useState('products');
    const [newProduct, setNewProduct] = useState({
        nom: '',
        description: '',
        prix: '',
        stock: '',
        categoryId: '',
        type: '',
        // size: '',
        // brand: '',
        // color: '',
        image: null,
    });
    const [newUser, setNewUser] = useState({
        username: '',
        email: '',
        password: '',
        adresse: '',
        role: 'user',
    });
    const [newCategory, setNewCategory] = useState('');
    const [editingProduct, setEditingProduct] = useState(null);
    const [editingUser, setEditingUser] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (productsStatus === 'idle') {
            dispatch(fetchProducts());
        }
        if (categoriesStatus === 'idle') {
            dispatch(fetchCategories());
        }
        if (usersStatus === 'idle') {
            dispatch(fetchUsers());
        }
    }, [productsStatus, categoriesStatus, usersStatus, dispatch]);

    // Product Handlers
    const handleAddProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('nom', newProduct.nom);
        formData.append('description', newProduct.description);
        formData.append('prix', newProduct.prix);
        formData.append('stock', newProduct.stock);
        formData.append('categoryId', newProduct.categoryId);
        if (newProduct.type) formData.append('type', newProduct.type);
        if (newProduct.size) formData.append('size', newProduct.size);
        if (newProduct.brand) formData.append('brand', newProduct.brand);
        if (newProduct.color) formData.append('color', newProduct.color);
        if (newProduct.image) formData.append('image', newProduct.image);

        try {
            await dispatch(addProduct(formData));
            setNewProduct({ nom: '', description: '', prix: '', stock: '', categoryId: '', type: '', size: '', brand: '', color: '', image: null });
            setMessage('Product added successfully!');
        } catch (error) {
            setMessage('Error adding product: ' + (error.response?.data?.message || error.message));
        }
    };

    const handleUpdateProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('nom', newProduct.nom);
        formData.append('description', newProduct.description);
        formData.append('prix', newProduct.prix);
        formData.append('stock', newProduct.stock);
        formData.append('categoryId', newProduct.categoryId);
        if (newProduct.type) formData.append('type', newProduct.type);
        if (newProduct.size) formData.append('size', newProduct.size);
        if (newProduct.brand) formData.append('brand', newProduct.brand);
        if (newProduct.color) formData.append('color', newProduct.color);
        if (newProduct.image) formData.append('image', newProduct.image);
        formData.append('_method', 'PUT');

        try {
            await dispatch(updateProduct({ produitId: editingProduct.produitId, data: formData }));
            setEditingProduct(null);
            setNewProduct({ nom: '', description: '', prix: '', stock: '', categoryId: '', type: '', size: '', brand: '', color: '', image: null });
            setMessage('Product updated successfully!');
        } catch (error) {
            setMessage('Error updating product: ' + (error.response?.data?.message || error.message));
        }
    };

    const handleDeleteProduct = (produitId) => {
        dispatch(deleteProduct(produitId));
        setMessage('Product deleted successfully!');
    };

    // Utilisateur Handlers
    const handleAddUser = async (e) => {
        e.preventDefault();
        const userData = {
            username: newUser.username,
            email: newUser.email,
            password: newUser.password,
            adresse: newUser.adresse,
            role: newUser.role,
        };

        try {
            await dispatch(addUser(userData));
            setNewUser({ username: '', email: '', password: '', adresse: '', role: 'user' });
            setMessage('Utilisateur added successfully!');
        } catch (error) {
            setMessage('Error adding utilisateur: ' + (error.response?.data?.message || error.message));
        }
    };

    const handleUpdateUser = async (e) => {
        e.preventDefault();
        const userData = {
            username: newUser.username,
            email: newUser.email,
            adresse: newUser.adresse,
            role: newUser.role,
            ...(newUser.password && { password: newUser.password }),
        };

        try {
            await dispatch(updateUser({ userId: editingUser.userId, data: userData }));
            setEditingUser(null);
            setNewUser({ username: '', email: '', password: '', adresse: '', role: 'user' });
            setMessage('Utilisateur updated successfully!');
        } catch (error) {
            setMessage('Error updating utilisateur: ' + (error.response?.data?.message || error.message));
        }
    };

    const handleDeleteUser = (userId) => {
        dispatch(deleteUser(userId));
        setMessage('Utilisateur deleted successfully!');
    };

    // Category Handlers
    const handleAddCategory = async (e) => {
        e.preventDefault();
        try {
            dispatch(addCategory({ name: newCategory }));
            setNewCategory('');
            setMessage('Category added successfully!');
        } catch (error) {
            setMessage('Error adding category: ' + (error.response?.data?.message || error.message));
        }
    };

    const handleDeleteCategory = (categoryId) => {
        dispatch(deleteCategory(categoryId));
        setMessage('Category deleted successfully!');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex">
            {/* Sidebar */}
            <div className="w-64 bg-gray-900 text-white p-6 flex-shrink-0">
                <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>
                <nav>
                    <ul>
                        <li>
                            <button
                                onClick={() => setActiveTab('products')}
                                className={`w-full text-left py-2 px-4 rounded-lg mb-2 ${
                                    activeTab === 'products' ? 'bg-primary-700' : 'hover:bg-gray-700'
                                }`}
                            >
                                Products
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setActiveTab('users')}
                                className={`w-full text-left py-2 px-4 rounded-lg mb-2 ${
                                    activeTab === 'users' ? 'bg-primary-700' : 'hover:bg-gray-700'
                                }`}
                            >
                                Utilisateurs
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Message */}
                    {message && (
                        <div
                            className={`p-4 rounded-lg mb-6 text-center animate-fade-in ${
                                message.includes('Error') ? 'bg-red-600' : 'bg-green-600'
                            }`}
                        >
                            <p className="text-white">{message}</p>
                        </div>
                    )}

                    {/* Products Tab */}
                    {activeTab === 'products' && (
                        <>
                            {/* Add Category Section */}
                            <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8 animate-fade-in">
                                <h3 className="text-2xl font-semibold text-white mb-4">Add Category</h3>
                                <form onSubmit={handleAddCategory} className="flex flex-col sm:flex-row gap-4">
                                    <input
                                        type="text"
                                        value={newCategory}
                                        onChange={(e) => setNewCategory(e.target.value)}
                                        placeholder="Category Name"
                                        required
                                        className="flex-1 p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-700 transition-all"
                                    />
                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-primary-700 text-white rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 transition-all"
                                    >
                                        Add Category
                                    </button>
                                </form>
                            </div>

                            {/* Categories List */}
                            <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8 animate-fade-in">
                                <h3 className="text-2xl font-semibold text-white mb-4">Categories</h3>
                                {categories.length === 0 ? (
                                    <p className="text-gray-400">No categories available.</p>
                                ) : (
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {categories.map((category) => (
                                            <li
                                                key={category.categoryId}
                                                className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all"
                                            >
                                                <span className="text-white">{category.name}</span>
                                                <button
                                                    onClick={() => handleDeleteCategory(category.categoryId)}
                                                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all"
                                                >
                                                    Delete
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {/* Add/Edit Product Section */}
                            <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8 animate-fade-in">
                                <h3 className="text-2xl font-semibold text-white mb-4">
                                    {editingProduct ? 'Edit Product' : 'Add Product'}
                                </h3>
                                <form
                                    onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                >
                                    <div>
                                        <label className="block text-sm font-medium text-gray-200 mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            value={newProduct.nom}
                                            onChange={(e) => setNewProduct({ ...newProduct, nom: e.target.value })}
                                            required
                                            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-700 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-200 mb-2">
                                            Price
                                        </label>
                                        <input
                                            type="number"
                                            value={newProduct.prix}
                                            onChange={(e) => setNewProduct({ ...newProduct, prix: e.target.value })}
                                            required
                                            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-700 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-200 mb-2">
                                            Stock
                                        </label>
                                        <input
                                            type="number"
                                            value={newProduct.stock}
                                            onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                                            required
                                            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-700 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-200 mb-2">
                                            Category
                                        </label>
                                        <select
                                            value={newProduct.categoryId}
                                            onChange={(e) => setNewProduct({ ...newProduct, categoryId: e.target.value })}
                                            required
                                            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-700 transition-all"
                                        >
                                            <option value="" disabled>
                                                Select Category
                                            </option>
                                            {categories.map((category) => (
                                                <option key={category.categoryId} value={category.categoryId}>
                                                    {category.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-200 mb-2">
                                            Description
                                        </label>
                                        <textarea
                                            value={newProduct.description}
                                            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                                            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-700 transition-all"
                                            rows="4"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-200 mb-2">
                                            Type (Optional)
                                        </label>
                                        <input
                                            type="text"
                                            value={newProduct.type}
                                            onChange={(e) => setNewProduct({ ...newProduct, type: e.target.value })}
                                            placeholder="Zelige type"
                                            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-700 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-200 mb-2">
                                            Size
                                        </label>
                                        <input
                                            type="text"
                                            value={newProduct.size}
                                            onChange={(e) => setNewProduct({ ...newProduct, size: e.target.value })}
                                            placeholder="S,M,L,XL"
                                            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-700 transition-all"
                                        />
                                    </div>
                                    {/* <div>
                                        <label className="block text-sm font-medium text-gray-200 mb-2">
                                            Brand
                                        </label>
                                        <input
                                            type="text"
                                            value={newProduct.brand}
                                            onChange={(e) => setNewProduct({ ...newProduct, brand: e.target.value })}
                                            placeholder="Yamaha..."
                                            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-700 transition-all"
                                        />
                                    </div> */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-200 mb-2">
                                            Color
                                        </label>
                                        <input
                                            type="text"
                                            value={newProduct.color}
                                            onChange={(e) => setNewProduct({ ...newProduct, color: e.target.value })}
                                            placeholder="black,blue,white..."
                                            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-700 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-200 mb-2">
                                            Image
                                        </label>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.files[0] })}
                                            className="w-full p-3 rounded-lg bg-gray-700 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-primary-700 file:text-white hover:file:bg-primary-800 transition-all"
                                        />
                                    </div>
                                    <div className="md:col-span-2 flex gap-4">
                                        <button
                                            type="submit"
                                            className="px-6 py-3 bg-primary-700 text-white rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 transition-all"
                                        >
                                            {editingProduct ? 'Update Product' : 'Add Product'}
                                        </button>
                                        {editingProduct && (
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setEditingProduct(null);
                                                    setNewProduct({ nom: '', description: '', prix: '', stock: '', categoryId: '', type: '', size: '', brand: '', color: '', image: null });
                                                }}
                                                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all"
                                            >
                                                Cancel
                                            </button>
                                        )}
                                    </div>
                                </form>
                            </div>

                            {/* Products List */}
                            <div className="bg-gray-800 rounded-lg shadow-lg p-6 animate-fade-in">
                                <h3 className="text-2xl font-semibold text-white mb-4">Products</h3>
                                {products.length === 0 ? (
                                    <p className="text-gray-400">No products available.</p>
                                ) : (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {products.map((product) => (
                                            <div
                                                key={product.produitId}
                                                className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all"
                                            >
                                                <div className="flex items-center gap-4">
                                                    {product.imageUrl && (
                                                        <img
                                                            src={backendBaseUrl + product.imageUrl}
                                                            alt={product.nom}
                                                            className="w-16 h-16 object-cover rounded-lg"
                                                        />
                                                    )}
                                                    <div className="flex-1">
                                                        <h4 className="text-lg font-medium text-white">
                                                            {product.nom}
                                                        </h4>
                                                        <p className="text-gray-400">
                                                            ${product.prix} | Type: {product.type || 'N/A'}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="mt-4 flex gap-3">
                                                    <button
                                                        onClick={() => {
                                                            setEditingProduct(product);
                                                            setNewProduct({
                                                                nom: product.nom,
                                                                description: product.description || '',
                                                                prix: product.prix,
                                                                stock: product.stock,
                                                                categoryId: product.categoryId,
                                                                type: product.type || '',
                                                                size: product.size || '',
                                                                brand: product.brand || '',
                                                                color: product.color || '',
                                                                image: null,
                                                            });
                                                        }}
                                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteProduct(product.produitId)}
                                                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </>
                    )}

                    {/* Utilisateurs Tab */}
                    {activeTab === 'users' && (
                        <>
                            {/* Add/Edit Utilisateur Section */}
                            <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8 animate-fade-in">
                                <h3 className="text-2xl font-semibold text-white mb-4">
                                    {editingUser ? 'Edit Utilisateur' : 'Add Utilisateur'}
                                </h3>
                                <form
                                    onSubmit={editingUser ? handleUpdateUser : handleAddUser}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                >
                                    <div>
                                        <label className="block text-sm font-medium text-gray-200 mb-2">
                                            Username
                                        </label>
                                        <input
                                            type="text"
                                            value={newUser.username}
                                            onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                                            required
                                            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-700 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-200 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            value={newUser.email}
                                            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                                            required
                                            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-700 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-200 mb-2">
                                            Password {editingUser && '(Leave blank to keep unchanged)'}
                                        </label>
                                        <input
                                            type="password"
                                            value={newUser.password}
                                            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                                            required={!editingUser}
                                            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-700 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-200 mb-2">
                                            Adresse
                                        </label>
                                        <input
                                            type="text"
                                            value={newUser.adresse}
                                            onChange={(e) => setNewUser({ ...newUser, adresse: e.target.value })}
                                            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-700 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-200 mb-2">
                                            Role
                                        </label>
                                        <select
                                            value={newUser.role}
                                            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                                            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-700 transition-all"
                                        >
                                            <option value="user">User</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-2 flex gap-4">
                                        <button
                                            type="submit"
                                            className="px-6 py-3 bg-primary-700 text-white rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 transition-all"
                                        >
                                            {editingUser ? 'Update Utilisateur' : 'Add Utilisateur'}
                                        </button>
                                        {editingUser && (
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setEditingUser(null);
                                                    setNewUser({ username: '', email: '', password: '', adresse: '', role: 'user' });
                                                }}
                                                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all"
                                            >
                                                Cancel
                                            </button>
                                        )}
                                    </div>
                                </form>
                            </div>

                            {/* Utilisateurs List */}
                            <div className="bg-gray-800 rounded-lg shadow-lg p-6 animate-fade-in">
                                <h3 className="text-2xl font-semibold text-white mb-4">Utilisateurs</h3>
                                {users.length === 0 ? (
                                    <p className="text-gray-400">No utilisateurs available.</p>
                                ) : (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {users.map((user) => (
                                            <div
                                                key={user.userId}
                                                className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all"
                                            >
                                                <div className="flex-1">
                                                    <h4 className="text-lg font-medium text-white">
                                                        {user.username}
                                                    </h4>
                                                    <p className="text-gray-400">
                                                        {user.email} | Role: {user.role}
                                                    </p>
                                                    <p className="text-gray-400">
                                                        Adresse: {user.adresse || 'N/A'}
                                                    </p>
                                                </div>
                                                <div className="mt-4 flex gap-3">
                                                    <button
                                                        onClick={() => {
                                                            setEditingUser(user);
                                                            setNewUser({
                                                                username: user.username,
                                                                email: user.email,
                                                                password: '',
                                                                adresse: user.adresse || '',
                                                                role: user.role,
                                                            });
                                                        }}
                                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteUser(user.userId)}
                                                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;

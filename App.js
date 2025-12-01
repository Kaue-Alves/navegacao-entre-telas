import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet } from "react-native";
import CadastroScreen from "./screens/CadastroScreen";
import ProdutosScreen from "./screens/ProdutosScreen";
import { Plus, List, ListCheck, X, Package, PackageOpen, CirclePlus } from "lucide-react-native";

export default function App() {

    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {

                        color = "#F06543"

                        if (route.name === "Cadastro de Produtos") {

                            if (focused) {
                                return <CirclePlus size={size} color={color} />
                            } else {
                                return <Plus size={size} color={color} />
                            }

                        } else if (route.name === "Ver Lista de Produtos") {

                            if (focused) {
                                return <PackageOpen size={size} color={color} />
                            } else {
                                return <Package size={size} color={color} />
                            }
                        }
                    },
                })}
            >
                <Tab.Screen
                    name="Cadastro de Produtos"
                    component={CadastroScreen}
                    options={{ title: "Cadastrar Produto" }}
                />
                <Tab.Screen
                    name="Ver Lista de Produtos"
                    component={ProdutosScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

//cores: "#F06543", "#E8E9EB", "#E0DFD5"
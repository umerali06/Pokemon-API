# Pokémon App

This is a React application that displays Pokémon data fetched from the [PokeAPI](https://pokeapi.co/). The app allows users to search for Pokémon and view detailed information about each Pokémon.

## Components

### 1. `Pokemon`

The `Pokemon` component is responsible for fetching Pokémon data from the PokeAPI and managing the state of the application. It includes:

- **State Management**:

  - `pokemonAll`: Stores the list of all Pokémon.
  - `loading`: Indicates whether data is still being fetched.
  - `error`: Holds any error that occurs during the fetch.
  - `search`: Manages the search input value.

- **Data Fetching**:

  - Fetches a list of Pokémon and their details from the PokeAPI.
  - Uses `useEffect` to call the API on component mount.
  - Handles loading and error states.

- **Search Functionality**:
  - Provides a search bar for filtering Pokémon by name.
  - Displays Pokémon cards filtered based on the search input.

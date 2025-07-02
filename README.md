

# Blockchain-Based Contract Farming Marketplace

## Overview

This project is a blockchain-based online marketplace designed to connect farmers and buyers through transparent contract farming agreements. It ensures trust and transparency by utilizing smart contracts, making the process of buying and selling agricultural produce secure and efficient.

## Problem Statement

Farmers face uncertainties due to fluctuating market prices, buyer demand, and limited market access, leading to unstable incomes. Contract farming offers a solution by connecting farmers directly with buyers through pre-arranged agreements, ensuring stable incomes.

## Solution

The platform connects farmers with buyers via smart contracts, enabling secure, transparent agreements. Smart contracts automatically enforce the terms, ensuring that both farmers and buyers meet their obligations.

## Features

- **User Registration/Login**: Farmers and buyers can register, log in, and create their profiles.
- **Contract Management**: Farmers can create new contracts, and buyers can browse available contracts, negotiate terms, and manage active contracts.
- **Escrow Payment System**: All payments are held in escrow and are only released when the contract terms are fulfilled.
- **Dispute Resolution System**: In case of disputes, third-party verifiers can resolve the issue and ensure proper contract enforcement.
- **Crop Verification System (Optional)**: An optional system for verifying crop quality through third-party oracles.

## Technology Stack

- **Frontend**: Next.js (React.js) for a dynamic, responsive user interface.
- **Backend**: Node.js with Express.js for API and contract management.
- **Blockchain Layer**: Ethereum/Polygon for deploying and executing smart contracts, utilizing Ethers.js or Web3.js for blockchain communication.
- **Database**: MongoDB for storing user profiles, contracts, and transaction history.
- **Oracles (Optional)**: Chainlink for fetching off-chain data like crop verification and dispute resolution.

## Smart Contract Functions

- **Contract Creation**: Farmers can create contracts with details such as crop type, quantity, and price. 
- **Payment Management**: Payments are held in escrow until the buyer confirms the receipt of the goods, at which point the payment is released.
- **Dispute Resolution**: In case of a conflict, the platform allows for third-party verification and arbitration through smart contracts.

## User Roles

1. **Farmers**:
   - Create contracts by specifying crop details, quantity, price, and delivery deadlines.
   - View active contracts, request payments, and track contract status.
   
2. **Buyers**:
   - Browse available contracts, negotiate prices, and agree on delivery deadlines.
   - Manage contract statuses and release payments once satisfied.

3. **Admins**:
   - Manage the platform, user registrations, contracts, and disputes.
   - Monitor the system for any issues and ensure smooth operations.

## How It Works

1. **Sign Up/Login**: Users register as either a farmer or buyer and access their dashboards.
2. **Contract Creation**: Farmers create contracts, and buyers can view and accept them.
3. **Escrow Payments**: Payments are held in escrow until successful delivery is confirmed by the buyer.
4. **Dispute Resolution**: If disputes arise, they can be resolved through third-party verifiers or oracles.

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repository/blockchain-contract-farming.git
   ```
   
2. **Install dependencies**:
   ```bash
   cd blockchain-contract-farming
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file with your MongoDB URI, Ethereum/Polygon network details, and Chainlink credentials.

4. **Run the project**:
   ```bash
   npm run dev
   ```

5. **Deploy Smart Contracts**:
   Follow the instructions in the `contracts` folder to deploy your smart contracts on Ethereum/Polygon.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.


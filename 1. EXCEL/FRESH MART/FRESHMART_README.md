# FreshMart Sales & Business Performance Dashboard

## 📊 Project Overview

The **FreshMart Sales & Business Performance Dashboard** is an interactive **Microsoft Excel dashboard** designed to help management understand sales, profitability, customer behavior, product performance, store/region performance, and sales-channel performance.

The project follows the requirements defined in the **FreshMart Business Requirements Document (BRD)** and demonstrates an end-to-end data analytics workflow:

**Data Understanding → Data Preparation → KPI Development → Analysis → Dashboard Design → Business Insights**

According to the BRD, the objective is to provide management with a consolidated view of business performance and help identify strong and weak performance areas. 

## 🎯 Business Objective

The dashboard is designed to help FreshMart management:

- Monitor overall sales and profit performance
- Compare sales and profitability across business dimensions
- Analyze store and regional performance
- Identify high-performing products and categories
- Understand customer and membership contribution
- Compare sales channels
- Analyze discount and return patterns
- Identify areas that require management attention
- Support data-driven business decisions

## 🛠️ Tools & Technologies

- **Microsoft Excel**
- Excel PivotTables
- PivotCharts
- Slicers / Filters
- Excel formulas and calculated fields
- Data cleaning and preparation
- Business KPI analysis
- Interactive dashboard design

## 📁 Workbook Structure

The Excel workbook contains the following major sheets:

| Sheet | Purpose |
|---|---|
| `Dashboard` | Final interactive management dashboard |
| `Pivot` | PivotTable-based analysis supporting the dashboard |
| `Sales` | Prepared/combined sales analysis data |
| `Sales_Transactions` | Core transaction-level sales data |
| `Customers` | Customer information and membership details |
| `Products` | Product, category, brand, pricing, and supplier information |
| `Stores` | Store, region, city, type, and target information |
| `Employees` | Employee and store assignment information |
| `Suppliers` | Supplier information |
| `Practice` | Supporting analysis/practice calculations |

## 🗂️ Data Scope

The FreshMart BRD defines the following core datasets:

- **Customers** – customer demographics, geography, membership, and registration information
- **Products** – product hierarchy, brands, pricing, suppliers, seasons, and status
- **Sales Transactions** – transaction-level sales, cost, profit, discount, return, and channel information
- **Stores** – store location, region, type, manager, monthly target, opening date, and status
- **Employees** – employee and store assignment information
- **Suppliers** – supplier location, lead time, rating, and status

The BRD specifies 700 customers, 150 products, 2,500 sales transactions, 180 stores, 350 employees, and 85 suppliers in the supplied dataset scope.

## 📌 Key KPIs

The dashboard analysis follows the KPI framework specified in the BRD:

- **Total Sales**
- **Total Cost**
- **Total Profit**
- **Profit Margin %**
- **Total Transactions**
- **Total Units Sold**
- **Average Transaction Value**
- **Total Discount**
- **Return Rate**
- **Store Performance**
- **Product Performance**
- **Customer Contribution**
- **Channel Performance**

KPI calculations should be validated against the source-data definitions before being used for formal business decisions.

## 📈 Dashboard Analysis

The dashboard provides management-focused views including:

### 1. Sales & Profit Trend
Tracks sales and profit over time using transaction dates.

### 2. Discount vs Sales & Profit
Compares different discount levels with sales and profitability.

### 3. Order Return Analysis
Shows returned and non-returned transaction performance.

### 4. Online vs Offline Performance
Compares sales and profit across sales channels.

### 5. City Performance Analysis
Compares sales and profit across cities/regions.

### 6. Category Performance Analysis
Analyzes sales, cost, and profit contribution across product categories.

Additional analysis includes membership performance, weekday vs weekend performance, regional performance, and customer/channel-related patterns.

## 🔍 Business Questions Addressed

The dashboard is designed around the key questions defined in the FreshMart BRD:

1. How is FreshMart performing in terms of sales, cost, profit, transactions, and units sold?
2. Which stores and regions contribute most to sales and profit?
3. Which stores require management attention?
4. Which products, categories, subcategories, and brands drive revenue and profitability?
5. Are the highest-selling products also the most profitable?
6. How are discounts associated with sales and profitability?
7. What patterns exist in returned versus non-returned transactions?
8. Which customers and membership segments contribute most to business value?
9. How does performance differ across sales channels, payment modes, day types, and order times?
10. Which employees contribute most to transactions or sales?
11. What trends or problem areas require further investigation?

## 🔗 Data Relationships

The main relationships used in the analysis include:

```text
Sales Transactions
│
├── Customer_ID ──────> Customers
├── Product_ID ───────> Products
├── Store_ID ──────────> Stores
└── Employee_ID ───────> Employees

Products
└── Supplier_ID ───────> Suppliers

Employees
└── Store_ID ──────────> Stores
```

These relationships allow transaction-level information to be analyzed together with customer, product, store, employee, and supplier context.

## 🧹 Data Preparation

The project follows the BRD data-preparation requirements:

- Review and standardize column names
- Validate date, numeric, text, and percentage data types
- Check duplicate records
- Review missing values
- Standardize inconsistent text values
- Validate key fields used for relationships
- Check the logical validity of quantity, sales, cost, profit, discount, and return fields
- Document important cleaning and transformation decisions

## 🎨 Dashboard Design

The dashboard follows a management-friendly visual hierarchy:

- Clear dashboard title
- KPI-focused analysis
- Interactive filters/slicers
- Consistent chart formatting
- Comparative visualizations
- Trend analysis
- Business-focused chart titles
- Reduced visual clutter
- Insights that support management decisions

The dashboard titles use descriptive business terminology such as:

- **Sales Trend Analysis**
- **Sales by Membership Type**
- **Weekday vs Weekend Performance**
- **Sales by Channel**
- **Category Sales Performance**
- **Regional Sales Performance**

## 🔄 Project Workflow

```text
1. Understand Business Requirements
              ↓
2. Inspect FreshMart Datasets
              ↓
3. Clean & Prepare Data
              ↓
4. Establish Data Relationships
              ↓
5. Create KPIs & Calculations
              ↓
6. Build PivotTables / PivotCharts
              ↓
7. Design Interactive Dashboard
              ↓
8. Validate Calculations
              ↓
9. Identify Business Insights
              ↓
10. Prepare Recommendations
```

## 📦 Project Deliverables

The BRD identifies the following expected deliverables:

- Cleaned / prepared Excel workbook
- Supporting analysis and PivotTables
- Interactive management dashboard
- KPI definitions
- Business insights
- Recommendations
- Project documentation

## ⚠️ Important Assumptions & Limitations

- Monthly targets should be validated for correct period alignment before formal target-achievement conclusions are made.
- Return-status definitions should be reviewed before calculating return-related KPIs.
- Invoice-number uniqueness should be validated before using it as the transaction-count basis.
- Supplier information provides descriptive context; direct supplier-to-sales conclusions should not be made without supporting data.
- The analysis identifies patterns and associations and should not claim causation without supporting evidence.
- Predictive forecasting and machine learning are outside the current project scope.

## 👨‍💻 Project Type

**Business Intelligence / Data Analytics Project**

**Domain:** Retail  
**Platform:** Microsoft Excel  
**Focus:** Sales Analytics, Profitability Analysis, KPI Reporting, Business Intelligence, and Interactive Dashboarding

## 📚 Documentation

The dashboard requirements, KPI framework, analytical requirements, data relationships, expected deliverables, assumptions, and success criteria are based on the **FreshMart Business Requirements Document (BRD), Version 1.0**.

## ⭐ Project Outcome

This project demonstrates the ability to transform raw retail transaction data into a structured analytical solution that enables business stakeholders to monitor performance, compare key business dimensions, identify performance drivers, and investigate areas requiring attention.

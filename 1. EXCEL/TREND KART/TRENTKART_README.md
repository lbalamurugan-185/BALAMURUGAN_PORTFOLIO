# TrendMart Fashion – Profitability Leakage Analysis Dashboard

## 📊 Project Overview

**TrendMart Fashion** is a retail analytics project built in **Microsoft Excel** to investigate where strong sales are not translating into proportionate profitability.

The project focuses on **profitability leakage** across products, categories, stores, regions, sales channels, discounts, returns, and customer segments. The objective is to provide management with an interactive dashboard that highlights profitable growth and areas requiring further investigation.

The project is based on the TrendMart Business Requirements Document (BRD), Version 1.0, which defines the project as a **Profitability Leakage Analysis | Excel Dashboard Project** for the fashion retail industry. fileciteturn1file0L2-L12

---

## 🎯 Business Problem

TrendMart generates sales across multiple products, stores, and channels, but revenue alone does not show whether the business is performing profitably.

Potential profitability pressure may be associated with:

- Product costs
- Discounting
- Returns
- Product mix
- Store performance
- Sales channels
- High-sales / low-profit products or segments

The core business question is:

> **Where is TrendMart losing potential profitability despite generating sales, and which business areas require management attention?**

This problem statement and the related business context are defined in the BRD. fileciteturn1file0L25-L48

---

## 🎯 Business Objectives

The dashboard is designed to:

- Monitor overall sales, cost, profit, and profit margin
- Identify products and categories with high sales but comparatively weak profitability
- Investigate the relationship between discounts and profitability
- Identify return patterns affecting commercial performance
- Compare store and regional performance
- Compare Online and Offline sales performance
- Identify high-performing and underperforming business segments
- Provide evidence-based insights and recommendations

These objectives are directly aligned with the TrendMart BRD. fileciteturn1file0L40-L48

---

## 🛠️ Tools & Technologies

- **Microsoft Excel**
- Excel PivotTables
- PivotCharts
- Slicers / Filters
- Excel formulas
- Calculated fields
- Data cleaning and preparation
- KPI analysis
- Business Intelligence dashboarding

---

## 📁 Project Files

### Main Dashboard

`TRENDKART FASHION DASHBOARD.xlsx`

### Business Requirements

`TrendMart_BRD(1).docx`

### Workbook Sheets

The uploaded Excel workbook currently contains these sheets:

- `Sales_Transactions`
- `Sheet3`
- `DASHBOARD`
- `Sales`
- `Customer`
- `Customers`
- `Product`
- `Products`
- `Store`
- `Stores`
- `Employee`
- `Employees`
- `Supplier`
- `Suppliers`
- `Data_Quality_Log`

---

## 📂 Data Scope

The TrendMart BRD defines the following business domains:

| Dataset / Domain | Approx. Records | Business Use |
|---|---:|---|
| Sales Transactions | 3,000 | Sales, cost, profit, discount, tax/GST, returns, payment, channel, quantity |
| Customers | 850 | Customer profile, demographics, location, membership |
| Products | 250 | Category, subcategory, brand, size, color, material, pricing, launch information |
| Stores | 120 | Store location, region, type, target, manager, status |
| Employees | 300 | Employee and store association |
| Suppliers | 90 | Supplier rating, lead time, and status |
| Data Quality Log | Documented issues | Data validation and cleaning guidance |

These data domains and approximate record counts are defined in the BRD. fileciteturn1file0L82-L105

---

## 📌 Key KPIs

The dashboard follows the KPI framework defined in the BRD:

- **Total Sales**
- **Total Cost**
- **Total Profit**
- **Profit Margin %**
- **Total Transactions**
- **Total Quantity Sold**
- **Average Transaction Value**
- **Total Discount**
- **Average Discount %**
- **Return Rate**
- **Store Performance**
- **Product Profitability**
- **Channel Performance**

The BRD defines these KPIs as the core measures for evaluating commercial performance and profitability. fileciteturn1file0L154-L171

---

## 📈 Dashboard Analysis

The dashboard is designed around management decisions rather than unrelated visuals, as required by the BRD. fileciteturn1file0L205-L218

### 1. Sales & Profit Trend Analysis

Tracks sales and profitability over time to identify major positive and negative performance patterns.

### 2. Discount vs Sales & Profit

Analyzes discount levels alongside sales and profitability to identify potential discount-related leakage.

### 3. Order Return Analysis

Reviews returned versus non-returned transactions and their potential impact on commercial performance.

### 4. Online vs Offline Performance

Compares sales and profitability across Online and Offline channels.

### 5. City / Regional Performance

Compares business performance across locations and regions to identify stronger and weaker areas.

### 6. Category Performance

Analyzes category-level sales, cost, and profitability to identify commercially strong and weak product groups.

### 7. Membership Performance

Compares customer membership segments and their contribution to sales.

### 8. Weekday vs Weekend Performance

Examines differences in performance between weekday and weekend activity.

---

## 🔍 Profitability Leakage Analysis

The central focus of this project is to identify situations where **high sales do not result in strong profitability**.

The analysis investigates:

```text
High Sales
    ↓
Compare Cost
    ↓
Compare Profit
    ↓
Check Profit Margin
    ↓
Investigate Discounts
    ↓
Review Returns
    ↓
Compare Product / Store / Channel
    ↓
Identify Potential Profitability Leakage
```

The BRD specifically requires investigation of high-sales/low-profit products or segments, sales versus cost/profit, discount levels, return patterns, and combinations of business characteristics associated with weak profitability. fileciteturn1file0L172-L182

---

## 🧹 Data Cleaning & Quality

Data preparation is a mandatory part of the project because the supplied dataset includes a Data Quality Log. fileciteturn1file0L106-L118

The project considers:

- Duplicate invoice or transaction identifiers
- Blank customer, product, or employee identifiers
- Mixed date formats
- Numeric values stored as text
- Leading/trailing spaces
- Inconsistent casing and status values
- Invalid customer attributes
- Duplicate product/customer attributes
- Negative profit records
- Zero-quantity records

### Important Principle

Valid business events should **not** be removed automatically. Negative-profit and zero-quantity records must be investigated in business context before any treatment is applied. fileciteturn1file0L109-L118

---

## 🔗 Business Analysis Areas

The dashboard supports analysis across:

### Product
- Category
- Subcategory
- Brand
- Size
- Color
- Material
- Product

### Store
- Store
- Region
- Store Type
- Target
- Store Status

### Customer
- Customer contribution
- Membership
- Customer segment
- Geographic contribution

### Sales Channel
- Online
- Offline

### Commercial Factors
- Sales
- Cost
- Profit
- Profit Margin
- Discounts
- Returns
- Quantity
- Payment

---

## 📊 Required Analysis

The project covers the major analytical areas specified in the BRD:

### Executive Commercial Performance
- Overall Sales
- Cost
- Profit
- Profit Margin
- Transactions
- Quantity
- Time-based sales and profit trends

### Profitability Leakage Investigation
- High-sales / low-profit products
- Sales versus cost and profit
- Discount levels versus profitability
- Return patterns
- Weak profitability by product, store, or channel

### Fashion Product Analysis
- Category
- Subcategory
- Brand
- Product
- Size
- Color
- Material
- Selling price
- MRP
- Cost

### Store & Channel Analysis
- Store comparison
- Regional comparison
- Store type comparison
- Online versus Offline performance

### Customer Analysis
- High-value customers
- Membership segments
- Geographic contribution
- Repeat purchase patterns where supported

---

## 🔄 Project Workflow

```text
1. Understand TrendMart Business Problem
              ↓
2. Review Datasets & Data Quality Log
              ↓
3. Profile & Clean Data
              ↓
4. Validate Keys & Relationships
              ↓
5. Create Calculated Fields & KPIs
              ↓
6. Perform Exploratory Analysis
              ↓
7. Investigate Profitability Leakage
              ↓
8. Build Interactive Excel Dashboard
              ↓
9. Validate Calculations & Findings
              ↓
10. Document Insights & Recommendations
```

This workflow follows the recommended project workflow in the TrendMart BRD. fileciteturn1file0L252-L262

---

## 🎨 Dashboard Design

The dashboard follows a professional management-oriented structure:

- Clear dashboard title
- KPI section
- Interactive filters
- Sales and profitability comparison
- Product/category analysis
- Profitability leakage analysis
- Store/region analysis
- Online/Offline comparison
- Management insights

The BRD requires a clear visual hierarchy and specifically states that visuals should support business questions rather than add decorative or redundant content. fileciteturn1file0L205-L218

---

## 📦 Expected Deliverables

The project is expected to provide:

- Prepared and cleaned data
- Excel analysis
- Supporting PivotTables and formulas
- Interactive management dashboard
- KPI definitions
- Data Quality Summary
- Business Insights
- Recommendations
- Project Documentation

These deliverables are defined in the TrendMart BRD. fileciteturn1file0L219-L231

---

## ⚠️ Assumptions & Limitations

- Analysis is limited to information available in the supplied dataset.
- Observed relationships should be described as associations unless causality is demonstrated.
- Negative-profit records may represent genuine loss-making transactions and should not automatically be deleted.
- Store Monthly Target values require period-alignment validation before target-achievement conclusions.
- Return Rate depends on the precise definition available in Return Status.
- Data-quality corrections should be documented for analytical traceability.
- Predictive forecasting is outside the current project scope.

These assumptions and constraints are specified in the BRD. fileciteturn1file0L245-L251

---

## 📈 Success Criteria

The project is successful when:

- Data-quality issues are investigated appropriately
- Valid business events are not removed without justification
- KPIs are logically calculated and validated
- The dashboard directly addresses the profitability problem
- High revenue can be distinguished from high profitability
- Potential profitability leakage areas can be identified
- Major findings are supported by data
- Recommendations are relevant to identified business patterns
- The final dashboard is understandable to management stakeholders

These success criteria are defined in the BRD. fileciteturn1file0L237-L244

---

## 👨‍💻 Project Information

**Project:** TrendMart Fashion – Profitability Leakage Analysis  
**Industry:** Fashion Retail  
**Platform:** Microsoft Excel  
**Project Type:** Data Analytics / Business Intelligence  
**Output:** Interactive Business Dashboard

---

## ⭐ Project Outcome

This project demonstrates an end-to-end **Data Analytics and Business Intelligence workflow** using Excel.

It transforms fashion retail transaction data into an interactive management dashboard that helps stakeholders understand:

**Where sales are generated → Where profit is generated → Where profitability is reduced → Which areas require management attention.**

The final project task is to investigate profitable growth and potential profitability leakage using validated data, relevant KPIs, comparisons, and business insights. fileciteturn1file0L263-L267

---

## 📚 Documentation

For complete business requirements, KPI definitions, data-quality requirements, analytical requirements, dashboard requirements, assumptions, and success criteria, refer to:

**`TrendMart_BRD(1).docx`**
